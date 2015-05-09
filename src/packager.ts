// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>

/// <reference path="../typings/node/node.d.ts" />

import os   = require('os');
import fs   = require('fs');
import path = require('path');

export class Packager {

  constructor(public funct:string) {
  }

  execute() : void {
    switch (this.funct) {
      case 'js':
        this.package_js();
        break;
      case 'dts':
        this.package_dts();
        break;
    }
  }

  package_js() : void {
    console.log('Packager.package_js');
    var all_lines = [];
    all_lines.push('// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>');
    all_lines.push('/// <reference path="../typings/node/node.d.ts" />');
    all_lines.push('');

    var js_files = this.js_files();
    for (var i = 0; i < js_files.length; i++) {
      var infile = js_files[i];
      console.log('processing file: ' + infile);
      var lines = this.read_lines(infile);
      for (var l=0;l < lines.length; l++) {
        var line = lines[l];
        var keep = true;
        if (this.omit_js_line(line)) {
          //console.log('dropping line: ' + line);
        }
        else {
          all_lines.push(line);
        }
      }
    }
    this.write_file('lib/m26.js', all_lines);
  }

  package_dts() : void {
    console.log('Packager.package_dts');
    var all_lines = [];
    all_lines.push('/// <reference path="../typings/node/node.d.ts" />');
    all_lines.push('');

    var dts_files = this.dts_files();
    for (var i = 0; i < dts_files.length; i++) {
      var infile = dts_files[i];
      console.log('processing file: ' + infile);
      var lines = this.read_lines(infile);
      for (var l=0;l < lines.length; l++) {
        var line = lines[l];
        var keep = true;
        if (this.omit_dts_line(line)) {
          //console.log('dropping line: ' + line);
        }
        else {
          all_lines.push(line);
        }
      }
    }
    this.write_file('lib/m26.d.ts.pkg', all_lines);
  }

  js_files() : string[] {
    var list = [];
    var mods = this.sub_modules();
    for (var i = 0; i < mods.length; i++) {
      list.push('src/' + mods[i] + '.js');
    }
    return list;
  }

  dts_files() : string[] {
    var list = [];
    var mods = this.sub_modules();
    for (var i = 0; i < mods.length; i++) {
      list.push('src/' + mods[i] + '.d.ts');
    }
    return list;
  }

  sub_modules() : string[] {
    var list = [];
    list.push('m26_constants');
    list.push('m26_age');
    list.push('m26_distance');
    list.push('m26_elapsed_time');
    list.push('m26_speed');
    return list;
  }

  omit_js_line(line:string) : boolean {
    if (line.indexOf('///') >= 0) {
      return true;
    }
    if (line.indexOf('require(') > 0) {
      return true;
    }
    if (line.indexOf('Copyright') > 0) {
      return true;
    }
    if (line.indexOf(' OMIT') > 0) {
      return true;
    }
    return false;
  }

  omit_dts_line(line:string) : boolean {
    if (line.trim().indexOf('//') == 0) {
      return true;
    }
    if (line.indexOf('require(') > 0) {
      return true;
    }
    return false;
  }

  read_lines(infile:string) : string[] {

    return fs.readFileSync(infile, 'utf-8').toString().split("\n");
  }

  write_file(outfile:string, lines:string[]) {
    var text = lines.join("\n");
    fs.writeFileSync(outfile, text, 'utf8');
    console.log('file written: ' + outfile);
  }
}

var f = process.argv[2];
var p = new Packager(f);
p.execute();

