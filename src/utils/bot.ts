import {Bot, session} from "grammy";
import context, {sessionData} from "../bot/context";
import {messageHandler} from "../bot/handler";
import {Inline_KYB} from "../bot/inline_kyb";
import {KYB} from "../bot/kyb";
import {I18n} from "@grammyjs/i18n";
import {getAdminUser} from "../controllers/admin.controller";
import {getUserByTID} from "../controllers/user.controller";
import {PrismaAdapter} from "@grammyjs/storage-prisma";
import {prisma} from "./prisma";

const BOT_DEVELOPER = 353575758;
const token = process.env.BOT_TOKEN ?? "";
const bot = new Bot<context>(token);
const i18n = new I18n<context>({
    defaultLocale: "en",
    directory: "locales",
    useSession: true,
});
bot.use(session({
    initial: () => ({
        previous: "",
        current: "",
        waiting: false,

        selected: null,
        data: null,
        list: [],
    }),
    storage: new PrismaAdapter(prisma.session),
}));
bot.use(i18n);
bot.use(async (ctx, next) => {
    const user = await getUserByTID(ctx.from?.id?.toString() ?? '0');
    const admin = user != null ? await getAdminUser(user?.id.toString() ?? '0') : null;
    const kyb = new KYB(ctx);
    const iKYB = new Inline_KYB(ctx);

    ctx.config = {
        botDeveloper: BOT_DEVELOPER,
        isDeveloper: ctx.from?.id === BOT_DEVELOPER,
    };

    ctx.kyb = kyb;
    ctx.ikyb = iKYB;
    ctx.user = user;
    ctx.isAdmin = admin !== null;

    await next();
});
messageHandler();
async function connectBot() {
    try {
        bot.start();
        console.log('✅  Bot connected successfully');
    } catch (error) {
        console.log('❌  Bot connection failed');
        process.exit(1);
    }
}

export {bot};
export default connectBot;