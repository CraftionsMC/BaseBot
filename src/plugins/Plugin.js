/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

class Plugin {

    name;
    version;
    main;

    constructor(name, version, main) {
        this.name = name;
        this.version = version;
        this.main = main;
    }
}

module.exports = {Plugin}