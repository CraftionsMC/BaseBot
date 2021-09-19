/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
const fs = require("fs");
const path = require("path");
const {Plugin} = require("./Plugin");

class PluginLoader {

    plugins = [];

    constructor(p) {
        this.path_ = p;
    }

    loadPlugins() {
        fs.readdirSync(this.path_).forEach(d => {
            if (fs.lstatSync(path.join(this.path_, d)).isDirectory()) {
                if (fs.existsSync(path.join(this.path_, d, "plugin.json"))) {
                    let pluginConfig = JSON.parse(fs.readFileSync(path.join(this.path_, d, "plugin.json")).toString());

                    if (pluginConfig.version && pluginConfig.main) {
                        this.plugins.push(new Plugin(d, pluginConfig.version, pluginConfig.main))
                        this.loadPlugin(this.plugins[this.plugins.length - 1])
                    } else {
                        console.log("Plugin " + d + " does not contain a plugin.json file", 3)
                    }
                } else {
                    console.log("Plugin " + d + " does not contain a plugin.json file", 3)
                }
            } else {
                console.log("Plugin " + d + " is not a directory.", 1)
            }
        })
    }

    loadPlugin(plugin) {
        try {
            require(path.join(this.path_, plugin.name, plugin.main));
            console.log("Loaded plugin " + plugin.name)
        }catch (e) {
            console.log("Could not load plugin " + plugin.name + ":", 2)
            console.log(e, 2)
        }
    }
}

module.exports = {PluginLoader}