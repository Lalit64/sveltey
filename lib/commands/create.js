"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const shell = require('shelljs');
const chalk_1 = require("chalk");
const execSh = require("exec-sh");
class Create extends command_1.Command {
    async run() {
        const { args } = this.parse(Create);
        //Runs the Svelte-Kit cli (because I am too lazy to download the source code and build it)😂
        execSh(`npm init svelte@next ${args.output}`, (err) => {
            if (err) {
                console.log(chalk_1.red("Exit code: ", err.code));
                return;
            }
        });
    }
}
exports.default = Create;
Create.description = 'describe the command here';
Create.flags = {
    help: command_1.flags.help({ char: 'h' }),
};
Create.args = [
    { name: 'output' },
];
