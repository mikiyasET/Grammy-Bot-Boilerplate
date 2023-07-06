export class Inline_KYB {
    private ctx: any;
    private readonly backObj: any;
    private readonly skipObj: any;
    private readonly cancelObj: any;
    private readonly backCancelObj: any;
    constructor(ctx:any) {
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
    back = () => {
        return {
            reply_markup: {
                inline_keyboard: [
                    [this.backObj]
                ]
            }
        };
    }
    yesNo = () => {
        return {
            reply_markup: {
                inline_keyboard: [
                    [{text: this.ctx.t('yesBTN'), callback_data: "yes"}, {text: this.ctx.t('noBTN'), callback_data: "no"}],
                ],
            }
        }
    }
    cancel = () => {
        return {
            reply_markup: {
                inline_keyboard: [
                    [this.cancelObj]
                ]
            }
        };
    }
    confirm = () => {
        return {
            reply_markup: {
                inline_keyboard: [
                    [{text: this.ctx.t('confirmBTN'), callback_data: "confirm"}, this.cancelObj]
                ],
            }
        }
    }
    userMenu = () => {
        return {
            reply_markup: {
                inline_keyboard: [
                    [{text: this.ctx.t('settingsBTN'), callback_data: "settings"}],
                ],
            }
        }
    }
    settings = () => {
        return {
            reply_markup: {
                inline_keyboard: [
                    [{text: this.ctx.t('languageBTN'), callback_data: "language"}],
                    [this.cancelObj]
                ],
                resize_keyboard: true
            }
        }
    }
    adminMenu = () => {
        return {
            reply_markup: {
                inline_keyboard: [
                    [{text: this.ctx.t('settingsBTN'), callback_data: "settings"}],
                ],
            }
        }
    }
    skipCancel = () => {
        return {
            reply_markup: {
                inline_keyboard: [
                    [this.skipObj],
                    [this.cancelObj]
                ],
            }
        }
    }
    activate = () => {
        return {
            reply_markup: {
                inline_keyboard: [
                    [{text: this.ctx.t("activateBTN"), callback_data: "activate_user"}],
                ],
                resize_keyboard: true
            }
        }
    }
    list = (list:any) => {
        return {
            reply_markup: {
                inline_keyboard: [
                    ...list
                ]
            }
        };
    }
}