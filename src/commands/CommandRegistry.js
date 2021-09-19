/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

class CommandRegistry {

    static commands = [];

    static registerCommand(command) {
        this.commands.push(command);
    }

    static runCommand(command_name, msg) {
        this.commands.forEach(command => {
            if (command.name === command_name || command.aliases.includes(command_name)) {
                command.run(msg);
            }
        })
    }

    static hasCommand(command_name) {
        let r = false;
        this.commands.forEach(command => {
            if (command.name === command_name || command.aliases.includes(command_name)) {
                r = true;
            }
        })
        return r;
    }

    static needsAdmin(command_name) {
        let r = false;
        this.commands.forEach(command => {
            if (command.name === command_name || command.aliases.includes(command_name)) {
                if(command.needsAdmin) {
                    r = true;
                }
            }
        })
        return r;
    }
}

module.exports = {CommandRegistry}