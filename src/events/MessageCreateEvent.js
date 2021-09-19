/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
const {Client} = require("../client");
const {CommandRegistry} = require("../commands/CommandRegistry");

class MessageCreateEvent {

    constructor() {
        Client.client.on('messageCreate', (msg) => {
            this.run(msg);
        })
    }

    run(msg) {
        if (msg.content.startsWith(process.env.COMMAND_PREFIX)) {
            CommandRegistry.runCommand(msg.content.split(" ")[0].split(process.env.COMMAND_PREFIX)[1])
        }
    }
}

module.exports = {MessageCreateEvent}