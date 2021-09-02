import {Command, flags} from '@oclif/command'
const execSh = require("exec-sh");
import {blue, red, cyan, underline} from "chalk";
const readline = require("readline")

export default class New extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
  }


  async run() {
    const {args, flags} = this.parse(New)

    readline.createInterface({
      input: process.stdin,
      output: process.stdout
    }).question(cyan("❯ ")+underline(cyan('What is the name of you component: ')) , (name: { code: any; }) => {
      const checkDir = `Directory=\"./src/components\";if [ ! -d \"$Directory\" ];then mkdir ./src/components; cd ./src/components || exit; touch ${name}.svelte || exit; fi; if [ -d \"$Directory\" ];then cd ./src/components || exit;touch ${name}.svelte || exit;fi`

      execSh(checkDir, (err: { code: any; }) => {
        if(err) {
          console.log(red("Exit code: ", err.code));
          return;
        }
        console.log(`Created component in ./src/components/${name}.svelte`)
        process.exit()
      })
    });
  }
}
