// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>
var fs = require('fs');
var Packager = (function () {
    function Packager(funct) {
        this.funct = funct;
    }
    Packager.prototype.execute = function () {
        switch (this.funct) {
            case 'js':
                this.package_js();
                break;
            case 'dts':
                this.package_dts();
                break;
        }
    };
    Packager.prototype.package_js = function () {
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
            for (var l = 0; l < lines.length; l++) {
                var line = lines[l];
                var keep = true;
                if (this.omit_js_line(line)) {
                }
                else {
                    all_lines.push(line);
                }
            }
        }
        this.write_file('lib/m26.js', all_lines);
    };
    Packager.prototype.package_dts = function () {
        console.log('Packager.package_dts');
        var all_lines = [];
        all_lines.push('/// <reference path="../typings/node/node.d.ts" />');
        all_lines.push('');
        var dts_files = this.dts_files();
        for (var i = 0; i < dts_files.length; i++) {
            var infile = dts_files[i];
            console.log('processing file: ' + infile);
            var lines = this.read_lines(infile);
            for (var l = 0; l < lines.length; l++) {
                var line = lines[l];
                var keep = true;
                if (this.omit_dts_line(line)) {
                }
                else {
                    all_lines.push(line);
                }
            }
        }
        this.write_file('lib/m26.d.ts.pkg', all_lines);
    };
    Packager.prototype.js_files = function () {
        var list = [];
        var mods = this.sub_modules();
        for (var i = 0; i < mods.length; i++) {
            list.push('src/' + mods[i] + '.js');
        }
        return list;
    };
    Packager.prototype.dts_files = function () {
        var list = [];
        var mods = this.sub_modules();
        for (var i = 0; i < mods.length; i++) {
            list.push('src/' + mods[i] + '.d.ts');
        }
        return list;
    };
    Packager.prototype.sub_modules = function () {
        var list = [];
        list.push('m26_constants');
        list.push('m26_age');
        list.push('m26_age_calculator');
        list.push('m26_distance');
        list.push('m26_elapsed_time');
        list.push('m26_speed');
        return list;
    };
    Packager.prototype.omit_js_line = function (line) {
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
    };
    Packager.prototype.omit_dts_line = function (line) {
        if (line.trim().indexOf('//') == 0) {
            return true;
        }
        if (line.indexOf('require(') > 0) {
            return true;
        }
        return false;
    };
    Packager.prototype.read_lines = function (infile) {
        return fs.readFileSync(infile, 'utf-8').toString().split("\n");
    };
    Packager.prototype.write_file = function (outfile, lines) {
        var text = lines.join("\n");
        fs.writeFileSync(outfile, text, 'utf8');
        console.log('file written: ' + outfile);
    };
    return Packager;
})();
exports.Packager = Packager;
var f = process.argv[2];
var p = new Packager(f);
p.execute();
