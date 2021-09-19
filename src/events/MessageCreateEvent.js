/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const {Client} = require("../client");
const {CommandRegistry} = require("../commands/CommandRegistry");
const {MessageEmbed} = require("discord.js");

class MessageCreateEvent {

    constructor() {
        Client.client.on('messageCreate', (msg) => {
            this.run(msg);
        })
    }

    run(msg) {
        if (msg.content.startsWith(process.env.COMMAND_PREFIX)) {
            if (CommandRegistry.hasCommand(msg.content.split(" ")[0].split(process.env.COMMAND_PREFIX)[1])) {
                let canRun = true;
                if (CommandRegistry.needsAdmin(msg.content.split(" ")[0].split(process.env.COMMAND_PREFIX)[1])) {
                    if (!msg.member.permissions.has("ADMINISTRATOR")) {
                        canRun = false;
                    }
                }

                if (canRun) {
                    CommandRegistry.runCommand(msg.content.split(" ")[0].split(process.env.COMMAND_PREFIX)[1], msg)
                } else {
                    msg.reply(process.env.COMMAND_CANT_USE)
                }
            } else {
                msg.reply(process.env.COMMAND_NOT_FOUND)
            }
        }
    }
}

module.exports = {MessageCreateEvent}