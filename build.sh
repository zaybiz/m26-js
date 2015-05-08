#!/usr/bin/env bash

echo "initial tsc compiles ..."
tsc -d --module commonjs  src/m26_constants.ts
tsc -d --module commonjs  src/m26_age.ts
tsc -d --module commonjs  src/m26_distance.ts
tsc -d --module commonjs  src/m26_elapsed_time.ts
tsc -d --module commonjs  src/m26_speed.ts
tsc -d --module commonjs  src/m26_structs.ts
tsc -d --module commonjs  src/m26.ts

echo "ececuting grunt"
grunt
