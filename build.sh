#!/usr/bin/env bash

echo "cleaning src dir for shell compiles ..."
rm src/*.js
rm src/*.js.map
rm src/*.d.ts
rm src/.baseDir*

echo "shell compiles ..."
tsc -d --module commonjs  src/packager.ts
tsc -d --module commonjs  src/m26_constants.ts
tsc -d --module commonjs  src/m26_age.ts
tsc -d --module commonjs  src/m26_distance.ts
tsc -d --module commonjs  src/m26_elapsed_time.ts
tsc -d --module commonjs  src/m26_speed.ts

node src/packager.js js

node src/packager.js tsd

#echo "executing grunt build"
#grunt build

#echo "executing grunt test"
#grunt test
