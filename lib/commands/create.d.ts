import { Command } from '@oclif/command';
export default class Create extends Command {
    static description: string;
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
    };
    static args: {
        name: string;
    }[];
    run(): Promise<void>;
}
