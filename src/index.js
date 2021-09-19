/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

require('dotenv').config();

const {Client} = require('./client')
const {MessageCreateEvent} = require("./events/MessageCreateEvent");

Client.create();

Client.client.on('ready', () => {
    new MessageCreateEvent();
})