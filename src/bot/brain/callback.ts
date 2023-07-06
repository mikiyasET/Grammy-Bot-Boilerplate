import getBrain from "../helpers/brain.helper";
import context from "../context";
import {userStatus} from "@prisma/client"
import {activateUser} from "../../controllers/user.controller";
import {brainCallbackType} from "../types/brain.types";

export class BrainCallback {
    private brain: brainCallbackType;
    private ctx: context;

    constructor(ctx: context) {
        this.brain = getBrain(ctx, "callback");
        this.ctx = ctx;
    }

    async start() {
        if (this.ctx.user == null) {
            await this.ctx.answerCallbackQuery({
                text: this.ctx.t("startBot"),
                show_alert: true,
            });
        } else {
            if (this.ctx.user.status === userStatus.active)
                await this.main();
            else if (this.ctx.user.status === userStatus.deactivated) {
                if (this.brain.data == 'activate_user') {
                    await activateUser(this.ctx.user.id)
                    await this.ctx.deleteMessage();
                    await this.ctx.answerCallbackQuery({
                        text: this.ctx.t("account_activated_callback"),
                    });
                    await this.ctx.reply(this.ctx.t("menu"), this.ctx.kyb.menu());
                }else {
                    await this.ctx.answerCallbackQuery({
                        text: this.ctx.t("deactivated_callback"),
                    });
                    await this.ctx.reply(this.ctx.t("deactivated"), this.ctx.ikyb.activate());
                }
            } else
                await this.ctx.answerCallbackQuery({
                    text: this.ctx.t("suspended_callback"),
                    show_alert: true,
                });
        }
    }
    async main() {
        const data = this.brain.data.toLowerCase();
        const dataArr = data.split(":");
        switch (this.brain.data) {
            default:
                await this.ctx.answerCallbackQuery({
                    text: this.ctx.t("botConfused"),
                }); // Do nothing
        }
    }
}