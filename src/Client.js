/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const discord = require('discord.js');
const {Intents} = require("discord.js");

class Client {

    static client;

    static create() {
        this.client = new discord.Client({
            partials: [
                "REACTION",
                "USER",
                "GUILD_MEMBER",
                "CHANNEL",
                "MESSAGE"
            ],
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_MEMBERS,
                Intents.FLAGS.GUILD_MESSAGE_REACTIONS
            ]
        })
        this.client.login(process.env.DISCORD_TOKEN)
    }

}

module.exports = {Client};