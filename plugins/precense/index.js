/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const {Client} = require('../../src')

let activities = ["Base Bot", "Made by Craftions.net", process.env.COMMAND_PREFIX + "help"]

let index = 0;

setInterval(() => {

    Client.client.user.setActivity({
        type: "PLAYING",
        name: activities[index]
    })
    index++;
    if(index === activities.length)
        index = 0;
}, 2500)