/// <reference path="../typings/node/node.d.ts" />
export declare class Packager {
    funct: string;
    constructor(funct: string);
    execute(): void;
    package_js(): void;
    package_dts(): void;
    js_files(): string[];
    dts_files(): string[];
    sub_modules(): string[];
    omit_js_line(line: string): boolean;
    omit_dts_line(line: string): boolean;
    read_lines(infile: string): string[];
    write_file(outfile: string, lines: string[]): void;
}
