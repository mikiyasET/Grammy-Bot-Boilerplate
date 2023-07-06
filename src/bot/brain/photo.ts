import getBrain from "../helpers/brain.helper";
import context from "../context";
import {userStatus} from "@prisma/client"
import routeTo from "../helpers/botRoute.helper";
import {brainDocumentType, brainPhotoType} from "../types/brain.types";

export class BrainPhoto {
    private brain: brainPhotoType;
    private ctx: context;

    constructor(ctx: context) {
        this.brain = getBrain(ctx, "photo");
        this.ctx = ctx;
    }

    async start() {
        if (this.ctx.user == null) {
            await this.ctx.reply(this.ctx.t("startBot"));
        } else {
            if (this.ctx.user.status === userStatus.active) {
                if (this.ctx.session.waiting) {
                    await this.listening();
                } else {
                    await this.main();
                }
            } else if (this.ctx.user.status === userStatus.deactivated)
                await this.ctx.reply(this.ctx.t("deactivated"), this.ctx.ikyb.activate());
            else
                await this.ctx.reply(this.ctx.t("suspended"))
        }
    }

    async main() {
        switch (this.ctx.session.current) {
            default:
                await this.ctx.reply(this.ctx.t("notExpected"));
        }
    }

    async listening() {
        switch (this.ctx.session.current) {
            default:
                await this.ctx.reply(this.ctx.t("notExpected"));
        }
    }

    async to(destination: string) {
        return routeTo(this.ctx, destination);
    }
}