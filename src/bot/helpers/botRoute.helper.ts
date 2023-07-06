import context from "../context";

const routeTo = async (ctx: context, destination: string) => {
    switch (destination) {
        case 'menu':
            await toMenu(ctx);
            break;
        case 'settings':
            await toSettings(ctx);
            break;
        case 'language':
            await toLanguage(ctx);
            break;
        default:
            console.log('routeTo: ', destination)
            await ctx.reply(ctx.t('routeUnknown'));
            break;
    }
}

const toMenu = async (ctx: context) => {
    if (ctx.session.current !== 'menu')
        ctx.session.previous = ctx.session.current;
    ctx.session.current = 'menu';
    ctx.session.waiting = false;
    ctx.session.list = [];
    ctx.session.selected = "";
    await ctx.reply(ctx.t('menu'), ctx.kyb.menu());
}
const toSettings = async (ctx: context) => {
    ctx.session.previous = ctx.session.current;
    ctx.session.current = 'settings';
    ctx.session.waiting = true;
    await ctx.reply(ctx.t('settings'), ctx.kyb.settings());
}
const toLanguage = async (ctx: context) => {
    ctx.session.previous = ctx.session.current;
    ctx.session.current = 'language';
    ctx.session.waiting = true;
    await ctx.reply(ctx.t('chooseLanguage'), ctx.kyb.language());
}

export default routeTo;