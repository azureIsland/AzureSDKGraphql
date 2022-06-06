#!/bin/sh
WHICH=`which node`
STR_PATH='$PATH'
echo "PATH=${WHICH}:${STR_PATH}" > .huskyrc