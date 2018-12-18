#!/usr/bin/node

const cp=require('child_process');

var cmd=cp.spawn('./02-child.js');

cmd.stdout.pipe(process.stdout);
cmd.stdout.pipe(process.stderr);
