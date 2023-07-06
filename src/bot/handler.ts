import {bot} from "../utils/bot";
import {parseMode} from "@grammyjs/parse-mode";
import {BrainText} from "./brain/text";
import {BrainCallback} from "./brain/callback";
import {BrainDocument} from "./brain/document";
import {BrainPhoto} from "./brain/photo";

const messageHandler = () => {
    bot.api.config.use(parseMode("HTML"));
    bot.on("message:text", async (ctx) => {
        const brain = new BrainText(ctx);
        await brain.start();
    });
    bot.on("callback_query:data", async (ctx) => {
        const brain = new BrainCallback(ctx);
        await brain.start();
    });
    bot.on("message:document", async (ctx) => {
        const brain = new BrainDocument(ctx);
        await brain.start();
    });
    bot.on("message:photo", async (ctx) => {
        const brain = new BrainPhoto(ctx);
        await brain.start();
    })
}

export {messageHandler}