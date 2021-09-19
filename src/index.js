/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

require('dotenv').config();

const {Client} = require('./Client')
const {MessageCreateEvent} = require("./events/MessageCreateEvent");
const {CommandRegistry} = require("./commands/CommandRegistry");
const {ICommand} = require("./commands/ICommand");
const {Logger} = require("./util/Logger");
const {HelpCommand} = require("./commands/default/help");
const {InfoCommand} = require("./commands/default/info");
const {PluginLoader} = require("./plugins/PluginLoader");
const path = require("path");
const fs = require("fs");

if(!fs.existsSync(path.join(__dirname, "..", "plugins"))){
    fs.mkdirSync(path.join(__dirname, "..", "plugins"))
}

const pluginLoader = new PluginLoader(path.join(__dirname, "..", "plugins"));

class BaseBot {

    constructor(readyCallback) {
        Client.create();

        Client.client.on('ready', () => {

            console.log("Powered by BaseBot by Craftions <https://craftions.net>")
            Logger.log("Logged in as " + Client.client.user.tag)

            Logger.log("Loading Plugins...")

            new MessageCreateEvent();

            new HelpCommand();

            new InfoCommand();

            pluginLoader.loadPlugins()

            readyCallback();
        })
    }
}

process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception: ' + err.stack, 2)
})

process.on('exit', exitHandler)
process.on('SIGINT', exitHandler)
process.on('SIGUSR1', exitHandler)
process.on('SIGUSR2', exitHandler)

function exitHandler() {
    console.log("Saving log file...")
    Logger.save();
    process.exit();
}

module.exports = {BaseBot, CommandRegistry, ICommand, Client, Logger, pluginLoader}