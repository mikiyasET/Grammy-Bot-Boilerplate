import {MessageEntity, PhotoSize} from "@grammyjs/types";
import {Chat} from "@grammyjs/types/manage";

export type brainType = "text" | "callback" | "photo" | "document" | "video" | "channel" | "editChannel" | "joinChannel" | "joinGroup" | "leaveGroup" | "joinRequest" | "preCheckout" | "payment" | "shipping";
export type brainTextType = {
    id: number,
    chat_id: number,
    chat_type: "private" | "group" | "supergroup" | "channel" | undefined,

    // User info
    username: string | undefined,
    first_name: string | undefined,
    last_name: string | undefined,
    is_bot: boolean,
    is_user_premium: boolean | undefined,

    // Message info
    text: string,
    date: number,
    message_id: number,
    reply_to_message: string | undefined,
    reply_to_message_text: string | undefined,
    reply_to_message_id: number | undefined,
    reply_to_message_from_id: number | undefined,
}
export type brainCallbackType = {
    id: number,
    chat_id: number,
    chat_type: "private" | "group" | "supergroup" | "channel" | undefined,

    // User info
    username: string | undefined,
    first_name: string | undefined,
    last_name: string | undefined,
    is_bot: boolean,
    is_user_premium: boolean | undefined,

    // callback info
    callback_id: string,
    data: string,
    message_id: number,
    callback_chat_instance: string,
    text: string | undefined,
}
export type brainDocumentType = {
    id: number;
    chat_id: number;
    chat_type: "private" | "group" | "supergroup" | "channel" | undefined;

    // User info
    username: string | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    is_bot: boolean;
    is_user_premium: boolean | undefined;

    // Document info
    document: Document;
    file_id: string;
    file_name: string | undefined;
    file_size: number | undefined;
    mime_type: string | undefined;
    thumb: PhotoSize | undefined;
    caption: string | undefined;
    caption_entities: MessageEntity[] | undefined;

    // forwarded info
    forwarded_from: Chat | undefined;
    forwarded_from_id: number | undefined;
    forwarded_from_type: "private" | "group" | "supergroup" | "channel" | undefined;
    forwarded_from_title: string | undefined;
}
export type brainPhotoType = {
    id: number;
    chat_id: number;
    chat_type: "private" | "group" | "supergroup" | "channel" | undefined;

    // User info
    username: string | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    is_bot: boolean;
    is_user_premium: boolean | undefined;

    // Photo info
    photo: PhotoSize[];
    date: number;
    message_id: number;
    reply_to_message: string | undefined;
    reply_to_message_text: string | undefined;
    reply_to_message_id: number | undefined;
    reply_to_message_from_id: number | undefined;

    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    file_size: number | undefined;
    caption: string | undefined;
}
