/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
const {ICommand} = require("../ICommand");
const {MessageEmbed} = require("discord.js");
const fs = require("fs");
const path = require("path");

class InfoCommand extends ICommand {

    constructor() {
        super({
            name: "info",
            needsAdmin: false,
            aliases: ["i"],
            description: "Shows information of the Bot"
        });
    }

    run(msg) {
        super.run(msg);

        const packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', '..', 'package.json')));

        const config = {
            title: "Information",
            color: 'BLURPLE',
            description: "Information about the Base Bot Instance",
            author: {
                name: process.env.BOT_NAME,
                iconURL: process.env.BOT_ICON
            },
            fields: [
                {
                    name: "Name",
                    value: process.env.BOT_NAME,
                    inline: true
                },
                {
                    name: "License",
                    value: packageJSON.license,
                    inline: true
                },
                {
                    name: "Version",
                    value: packageJSON.version,
                    inline: true
                },
                {
                    name: "Author",
                    value: packageJSON.author,
                    inline: true
                }
            ]
        }

        msg.channel.send({
            embeds: [
                new MessageEmbed(config)
            ]
        })
    }
}

module.exports = {InfoCommand}