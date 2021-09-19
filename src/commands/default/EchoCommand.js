/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const {ICommand} = require("../ICommand");

class EchoCommand extends ICommand {

    constructor() {
        super({
            name: "ping",
            needsAdmin: true
        });
    }

    run(msg) {
        msg.reply("Pong!")
    }
}

module.exports = {EchoCommand}