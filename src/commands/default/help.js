/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
const {ICommand} = require("../ICommand");
const {MessageEmbed} = require("discord.js");
const {CommandRegistry} = require("../CommandRegistry");

class HelpCommand extends ICommand {

    constructor() {
        super({
            name: "help",
            needsAdmin: false,
            aliases: ["h"],
            description: "Lists all commands and their descriptions"
        });
    }

    run(msg) {
        super.run(msg);

        const config = {
            title: "Help",
            color: 'BLURPLE',
            description: "All available commands",
            author: {
                name: process.env.BOT_NAME,
                iconURL: process.env.BOT_ICON
            },
            fields: []
        }

        CommandRegistry.commands.forEach(c => {

            let canUse = true;

            if (c.needsAdmin) {
                if (!msg.member.permissions.has("ADMINISTRATOR")) {
                    canUse = false;
                }
            }

            if(canUse){
                config.fields.push({
                    name: process.env.COMMAND_PREFIX + c.name,
                    inline: true,
                    value: c.description
                })
            }
        })

        msg.channel.send({
            embeds: [
                new MessageEmbed(config)
            ]
        })
    }
}

module.exports = {HelpCommand}