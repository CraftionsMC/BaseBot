/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const {Client, ICommand} = require("../../src");

// Log Some info
console.log("")
console.log("---------------")
console.log("Sample Plugin")
console.log("")
console.log("User Tag: " + Client.client.user.tag)
console.log("---------------")
console.log("")

// Register a command

class MyCommand extends ICommand {
    constructor() {
        super({
            name: "sample", // command name
            needsAdmin: false, // true if only admins should execute this
            description: "A sample command", // describes the command
            aliases: ["s"] // list of alternate names
        });
    }

    run(msg) {
        super.run(msg);
        msg.reply("This is a sample command!")
    }
}
new MyCommand();

// Catch Events

// catches the messageCreate event
Client.client.on('messageCreate', (msg) => {
    // your code
})