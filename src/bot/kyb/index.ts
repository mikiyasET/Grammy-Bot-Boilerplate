import {ReplyKeyboardMarkup} from "@grammyjs/types";
import context from "../context";

export class KYB {
    private ctx: context;
    private readonly backObj: any;
    private readonly skipObj: any;
    private readonly cancelObj: any;
    private readonly backCancelObj: any;

    constructor(ctx:context) {
        this.ctx = ctx;
        this.backObj = {
            text: this.ctx.t('backBTN')
        };
        this.skipObj = {
            text: this.ctx.t('skipBTN')
        };
        this.cancelObj = {
            text: this.ctx.t('cancelBTN')
        };
        this.backCancelObj = [
            {text: this.ctx.t('backBTN')}, {text: this.ctx.t('cancelBTN')}
        ];
    }
    userMenu = () => {
        return {
            reply_markup: {
                keyboard: [
                    [{text: this.ctx.t("settingsBTN")}],
                ],
                resize_keyboard: true
            }
        }
    }
    adminMenu = () => {
        return {
            reply_markup: {
                keyboard: [
                    [{text: this.ctx.t("settingsBTN")}],
                ],
                resize_keyboard: true
            }
        }
    }
    menu = () => {
        if (this.ctx.isAdmin) {
            return this.adminMenu();
        }else {
            return this.userMenu();
        }
    }
    back = () => {
        return {
            reply_markup: {
                keyboard: [
                    [this.backObj]
                ],
                resize_keyboard: true
            }
        };
    }
    list = (list:any) => {
        return {
            reply_markup: {
                keyboard: [
                    ...list,
                    this.backObj
                ],
                resize_keyboard: true,
            }
        };
    }
    cancel = () => {
        return {
            reply_markup: {
                keyboard: [
                    [this.cancelObj]
                ],
                resize_keyboard: true
            }
        }
    }
    confirm = () => {
        return {
            reply_markup: {
                keyboard: [
                    [{text: this.ctx.t('confirmBTN')}],
                ],
                resize_keyboard: true
            }
        }
    }
    restart = () => {
        return {
            reply_markup: {
                keyboard: [
                    [{text: this.ctx.t('restartBTN')}]
                ],
                resize_keyboard: true
            }
        }
    }
    skipCancel = () => {
        return {
            reply_markup: {
                keyboard: [
                    [this.skipObj],
                    [this.cancelObj]
                ],
                resize_keyboard: true
            }
        }
    }
    settings = () => {
        return {
            reply_markup: {
                keyboard: [
                    [{text: this.ctx.t('languageBTN')}],
                    [this.backObj]
                ],
                resize_keyboard: true
            }
        }
    }
    yesNo = () => {
        return {
            reply_markup: {
                keyboard: [
                    [{text: this.ctx.t('yesBTN')}, {text: this.ctx.t('noBTN')}],
                ],
                resize_keyboard: true
            }
        }
    }
    
    removeKYB:any = () => {
        return {
            reply_markup: {
                remove_keyboard: true,
            }
        }
    }
    OTL = () => {
        return {
            reply_markup: {
                keyboard: [
                    [{text: "🇬🇧 English"}, {text: "🇪🇹 አማርኛ"}],
                ],
                resize_keyboard: true
            }
        }
    }
    language = () => {
        return {
            reply_markup: {
                keyboard: [
                    [{text: "🇬🇧 English"}, {text: "🇪🇹 አማርኛ"}],
                    [{text: this.ctx.t("backBTN")}]
                ],
                resize_keyboard: true
            }
        }
    }
}