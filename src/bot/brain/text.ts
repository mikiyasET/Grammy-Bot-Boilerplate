import getBrain from "../helpers/brain.helper";
import context from "../context";
import {userStatus} from "@prisma/client"
import routeTo from "../helpers/botRoute.helper";
import {brainTextType} from "../types/brain.types";
import {createUser, updateUser} from "../../controllers/user.controller";

export class BrainText {
    private brain: brainTextType;
    private textArray: string[];
    private readonly ctx: context;
    private readonly command: string;
    private readonly isCommand: boolean;

    constructor(ctx: context) {
        this.brain = getBrain(ctx, "text");
        this.ctx = ctx;
        this.textArray = this.brain.text.split(" ");
        this.command = this.textArray[0].replace("/", "").toLowerCase();
        this.isCommand = this.brain.text.startsWith("/");
    }

    async start() {
            if (this.ctx.user == null) {
                await this.register();
            } else {
                if (this.ctx.user.status === userStatus.active) {
                    if (this.brain.text === "/start") {
                        await this.to("menu");
                    } else {
                        if (this.ctx.session.waiting) {
                            await this.listening();
                        } else {
                            await this.main();
                        }
                    }
                } else if (this.ctx.user.status === userStatus.deactivated)
                    await this.ctx.reply(this.ctx.t("deactivated"), this.ctx.ikyb.activate());
                else
                    await this.ctx.reply(this.ctx.t("suspended"))
            }
    }

    async register() {
        this.ctx.i18n.setLocale("en");
        this.ctx.user = (await createUser({
            tg_id: this.ctx.from?.id.toString(),
            fName: this.ctx.from?.first_name,
            lName: this.ctx.from?.last_name,
            username: this.ctx.from?.username,
        })) ?? undefined;
        if (this.ctx.user != undefined) {
            await this.start();
        } else {
            this.ctx.reply(this.ctx.t('Error'))
            throw new Error("User not created");
        }
    }

    async main() {
        if (this.isCommand) {
            if (this.command === "start") {
                await this.to("menu");
            } else {
                await this.ctx.reply(this.ctx.t("botConfused"));
            }
        } else {
            switch (this.ctx.session.current) {
                case "menu":
                    switch (this.brain.text) {
                        case this.ctx.t('settingsBTN'):
                            await this.to("settings");
                            break;
                        default:
                            await this.ctx.reply(this.ctx.t("botConfused"));
                    }
                    break;
                default:
                    await this.ctx.reply(this.ctx.t("botConfused"));
            }
        }
    }

    async listening() {
        switch (this.ctx.session.current) {
            case "settings":
                switch (this.brain.text) {
                    case this.ctx.t('backBTN'):
                        await this.to("menu");
                        break;
                    case this.ctx.t('languageBTN'):
                        await this.to("language");
                        break;
                    default:
                        await this.ctx.reply(this.ctx.t("botConfused"));
                }
                break;
            case "language":
                switch (this.brain.text) {
                    case this.ctx.t('backBTN'):
                        await this.to("settings");
                        break;
                    case "🇬🇧 English":
                        await this.ctx.i18n.setLocale("en");
                        await this.to("menu")
                        break;
                    case "🇪🇹 አማርኛ":
                        await this.ctx.i18n.setLocale("am");
                        await this.to("menu")
                        break;
                }
                break;
            default:
                await this.ctx.reply(this.ctx.t("botConfused"));
        }
    }

    async to(destination: string) {
        return routeTo(this.ctx, destination);
    }
}