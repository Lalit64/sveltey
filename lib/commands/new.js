"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const execSh = require("exec-sh");
const chalk_1 = require("chalk");
const readline = require("readline");
class New extends command_1.Command {
    async run() {
        const { args, flags } = this.parse(New);
        readline.createInterface({
            input: process.stdin,
            output: process.stdout
        }).question(chalk_1.cyan("❯ ") + chalk_1.underline(chalk_1.cyan('What is the name of you component: ')), (name) => {
            const checkDir = `Directory=\"./src/components\";if [ ! -d \"$Directory\" ];then mkdir ./src/components; cd ./src/components || exit; touch ${name}.svelte || exit; fi; if [ -d \"$Directory\" ];then cd ./src/components || exit;touch ${name}.svelte || exit;fi`;
            execSh(checkDir, (err) => {
                if (err) {
                    console.log(chalk_1.red("Exit code: ", err.code));
                    return;
                }
                console.log(`Created component in ./src/components/${name}.svelte`);
                process.exit();
            });
        });
    }
}
exports.default = New;
New.description = 'describe the command here';
New.flags = {
    help: command_1.flags.help({ char: 'h' }),
};
