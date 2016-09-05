#!/usr/bin/env node
var program = require('commander');
var $       = require('../lib/litoria.js');
var Log     = require("../lib/log");

var log = new Log();

/*
 * Send Email command
 */
program
    .description('Send html content as body ohe mail to a sender')
    .usage('litoria send')
    .on('--help', function () {
       log.info('  Examples:');
       log.info();
       log.info('    $ litoria send config.yaml');
       log.info();
    })
    .parse(process.argv);

if ($.isEmpty(program.args)) {
    log.error("No arguments have been passed to the command.");
    process.exit(0);
} else {
    $.send(program.args);
}