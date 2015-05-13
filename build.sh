#!/usr/bin/env bash

echo "cleaning lib and src directories ..."
rm lib/*.*
rm src/*.js
rm src/*.js.map
rm src/*.d.ts
rm src/.baseDir*

echo "compiling the packager ..."
tsc -d --module commonjs  src/packager.ts

echo "compiling the individual modules ..."
tsc -d --module commonjs  src/m26_constants.ts
tsc -d --module commonjs  src/m26_age.ts
tsc -d --module commonjs  src/m26_age_calculator.ts
tsc -d --module commonjs  src/m26_distance.ts
tsc -d --module commonjs  src/m26_elapsed_time.ts
tsc -d --module commonjs  src/m26_speed.ts

echo "packaging the *.ts files into one txt file  ..."
node src/packager.js ts

echo "scrubbing the merged txt file with sed ..."
sed -f sed/scrub_ts.sed src/m26-js.ts.txt > src/m26-js.ts

echo "compiling the merged/scrubbed file ..."
tsc -d --module commonjs  src/m26-js.ts

echo "copying the compiled files to the lib/ directory ..."
cp src/m26-js.js   lib/
cp src/m26-js.d.ts lib/

echo "compiling examples.coffee"
grunt coffee

echo "executing grunt test"
grunt test
