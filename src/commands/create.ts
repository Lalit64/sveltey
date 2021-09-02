import {Command, flags} from '@oclif/command'
const shell = require('shelljs')
import {red} from "chalk";
const execSh = require("exec-sh");

export default class Create extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {name: 'output'},
  ]

  async run() {
    const {args} = this.parse(Create)

    //Runs the Svelte-Kit cli (because I am too lazy to download the source code and build it)😂
    execSh(`npm init svelte@next ${args.output}`, (err: { code: any; }) => {
      if(err) {
        console.log(red("Exit code: ", err.code));
        return;
      }
    })
  }
}
