#! /bin/bash

DIRWEB=/var/www/ygreens.local

if  [ -d $DIRWEB ]; then
    rm -rf $DIRWEB
fi

mkdir $DIRWEB
cp -r ./dist/microgreen $DIRWEB