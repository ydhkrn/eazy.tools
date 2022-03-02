#!/bin/bash
cd "$(dirname "$0")"
find . | egrep -v "CNAME|\.git|*\.sh|\.*" | xargs rm -rf
cd ../mysite-dev
npm run build
cp -r ./build/* ../mysite
