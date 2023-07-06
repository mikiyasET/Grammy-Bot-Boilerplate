import {Context, SessionFlavor} from "grammy";
import {Inline_KYB} from "./inline_kyb";
import {KYB} from "./kyb";
import {I18nFlavor} from "@grammyjs/i18n";
import {users} from "@prisma/client";

interface BotConfig {
    botDeveloper: number;
    isDeveloper: boolean;
}
export interface sessionData {
    previous: string;
    current: string;
    waiting: boolean;
    __language_code?: string;

    data: any;
    selected: any;

    list: any[];
}

type context = Context & SessionFlavor<sessionData> & {
    isAdmin: boolean;
    user: users | null;
    config: BotConfig;
    ikyb: Inline_KYB;
    kyb: KYB;
} & I18nFlavor;

export default context;