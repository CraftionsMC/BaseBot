/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */


const {CommandRegistry} = require("./CommandRegistry");

class ICommand {

    constructor(props) {
        this.name = props.name;
        this.needsAdmin = props.needsAdmin || false;
        this.description = props.description || "No description provided";
        this.aliases = props.aliases || [];
        CommandRegistry.registerCommand(this)
    }

    run(msg) {

    }

}

module.exports = {ICommand}