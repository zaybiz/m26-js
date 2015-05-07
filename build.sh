#!/usr/bin/env bash

echo 'removing src/*.js ...'
rm src/*.js

echo 'removing lib/*.* files ...'
rm lib/*.*

grunt ts

#echo 'compiling *.ts files ...'
#tsc -d --module commonjs  src/m26_age.ts
#tsc -d --module commonjs  src/m26_enums.ts
#tsc -d --module commonjs  src/m26_structs.ts
#tsc -d --module commonjs  src/m26_constants.ts
#tsc -d --module commonjs  src/m26_distance.ts
#tsc -d --module commonjs  src/m26_elapsed_time.ts
#tsc -d --module commonjs  src/m26_speed.ts

echo 'list of src/*.d.ts files:'
ls -al src/*.d.ts

echo 'list of src/*.js files:'
ls -al src/*.js

echo 'list of lib/*.* files:'
ls -al lib/*.*

date

echo 'done'
