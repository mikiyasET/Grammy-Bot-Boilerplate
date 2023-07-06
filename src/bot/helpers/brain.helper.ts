import context from "../context";
import {Chat} from "@grammyjs/types/manage";
import {MessageEntity, PhotoSize} from "@grammyjs/types";
import {brainType} from "../types/brain.types";

const getBrain = (ctx: context, type: brainType):any => {
    const text= {
        // Basic info
        id: ctx.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.from?.username,
        first_name: ctx.from?.first_name,
        last_name: ctx.from?.last_name,
        is_bot: ctx.from?.is_bot,
        is_user_premium: ctx.from?.is_premium,

        // Message info
        text: ctx.message?.text?.trim(),
        date: ctx.message?.date,
        message_id: ctx.message?.message_id,
        reply_to_message: ctx.message?.reply_to_message,
        reply_to_message_text: ctx.message?.reply_to_message?.text,
        reply_to_message_id: ctx.message?.reply_to_message?.message_id,
        reply_to_message_from_id: ctx.message?.reply_to_message?.from?.id,
    }
    const video= {
        // Basic info
        id: ctx.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.from?.username,
        first_name: ctx.from?.first_name,
        last_name: ctx.from?.last_name,
        is_bot: ctx.from?.is_bot,
        is_user_premium: ctx.from?.is_premium,

        // Message info
        video: ctx.message?.video,
        date: ctx.message?.date,
        message_id: ctx.message?.message_id,
        reply_to_message: ctx.message?.reply_to_message,
        reply_to_message_text: ctx.message?.reply_to_message?.text,
        reply_to_message_id: ctx.message?.reply_to_message?.message_id,
        reply_to_message_from_id: ctx.message?.reply_to_message?.from?.id,

        // Video info
        file_id: ctx.message?.video?.file_id,
        file_unique_id: ctx.message?.video?.file_unique_id,
        length: ctx.message?.video?.duration,
        width: ctx.message?.video?.width,
        height: ctx.message?.video?.height,
        mime_type: ctx.message?.video?.mime_type,
        file_size: ctx.message?.video?.file_size,
        caption: ctx.message?.caption,
        duration: ctx.message?.video?.duration,

    }
    const photo= {
        // Basic info
        id: ctx.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.from?.username,
        first_name: ctx.from?.first_name,
        last_name: ctx.from?.last_name,
        is_bot: ctx.from?.is_bot,
        is_user_premium: ctx.from?.is_premium,

        // Message info
        photo: ctx.message?.photo,
        date: ctx.message?.date,
        message_id: ctx.message?.message_id,
        reply_to_message: ctx.message?.reply_to_message,
        reply_to_message_text: ctx.message?.reply_to_message?.text,
        reply_to_message_id: ctx.message?.reply_to_message?.message_id,
        reply_to_message_from_id: ctx.message?.reply_to_message?.from?.id,

        // Photo info
        file_id: ctx.message?.photo?.[ctx.message?.photo?.length - 1].file_id,
        file_unique_id: ctx.message?.photo?.[ctx.message?.photo?.length - 1].file_unique_id,
        width: ctx.message?.photo?.[ctx.message?.photo?.length - 1].width,
        height: ctx.message?.photo?.[ctx.message?.photo?.length - 1].height,
        file_size: ctx.message?.photo?.[ctx.message?.photo?.length - 1].file_size,
        caption: ctx.message?.caption,
    }
    const channel= {
        // Basic info
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // channel info
        channel_post: ctx.channelPost,
        channel_post_text: ctx.channelPost?.text,
        channel_post_id: ctx.channelPost?.message_id,
        channel_post_from_id: ctx.channelPost?.from?.id,
        channel_post_date: ctx.channelPost?.date,
        channel_id: ctx.channelPost?.chat?.id,
        channel_name: ctx.channelPost?.chat?.title,
        channel_username: ctx.channelPost?.chat?.username,
        channel_type: ctx.channelPost?.chat?.type,

        // sender info
        id: ctx.channelPost?.sender_chat?.id,

        // photo info
        photo_file_id: ctx.channelPost?.photo?.[ctx.channelPost?.photo?.length - 1].file_id,
        photo_file_unique_id: ctx.channelPost?.photo?.[ctx.channelPost?.photo?.length - 1].file_unique_id,
        photo_height: ctx.channelPost?.photo?.[ctx.channelPost?.photo?.length - 1].height,
        photo_width: ctx.channelPost?.photo?.[ctx.channelPost?.photo?.length - 1].width,
        photo_file_size: ctx.channelPost?.photo?.[ctx.channelPost?.photo?.length - 1].file_size,
        photo_caption: ctx.channelPost?.caption,

        // video info
        video_file_id: ctx.channelPost?.video?.file_id,
        video_file_unique_id: ctx.channelPost?.video?.file_unique_id,
        video_length: ctx.channelPost?.video?.duration,
        video_width: ctx.channelPost?.video?.width,
        video_height: ctx.channelPost?.video?.height,
        video_mime_type: ctx.channelPost?.video?.mime_type,
        video_file_size: ctx.channelPost?.video?.file_size,
        video_caption: ctx.channelPost?.caption,
        video_duration: ctx.channelPost?.video?.duration,

        // audio info
        audio_file_id: ctx.channelPost?.audio?.file_id,
        audio_file_unique_id: ctx.channelPost?.audio?.file_unique_id,
        audio_duration: ctx.channelPost?.audio?.duration,
        audio_performer: ctx.channelPost?.audio?.performer,
        audio_title: ctx.channelPost?.audio?.title,
        audio_mime_type: ctx.channelPost?.audio?.mime_type,
        audio_file_size: ctx.channelPost?.audio?.file_size,
        audio_caption: ctx.channelPost?.caption,

        // document info
        document_file_id: ctx.channelPost?.document?.file_id,
        document_file_unique_id: ctx.channelPost?.document?.file_unique_id,
        document_thumb: ctx.channelPost?.document?.thumbnail,
        document_file_name: ctx.channelPost?.document?.file_name,
        document_mime_type: ctx.channelPost?.document?.mime_type,
        document_file_size: ctx.channelPost?.document?.file_size,
        document_caption: ctx.channelPost?.caption,

        // sticker info
        sticker_file_id: ctx.channelPost?.sticker?.file_id,
        sticker_file_unique_id: ctx.channelPost?.sticker?.file_unique_id,
        sticker_width: ctx.channelPost?.sticker?.width,
        sticker_height: ctx.channelPost?.sticker?.height,
        sticker_is_animated: ctx.channelPost?.sticker?.is_animated,
        sticker_thumb: ctx.channelPost?.sticker?.thumbnail,
        sticker_emoji: ctx.channelPost?.sticker?.emoji,
        sticker_file_size: ctx.channelPost?.sticker?.file_size,
        sticker_caption: ctx.channelPost?.caption,

        // voice info
        voice_file_id: ctx.channelPost?.voice?.file_id,
        voice_file_unique_id: ctx.channelPost?.voice?.file_unique_id,
        voice_duration: ctx.channelPost?.voice?.duration,
        voice_mime_type: ctx.channelPost?.voice?.mime_type,
        voice_file_size: ctx.channelPost?.voice?.file_size,
        voice_caption: ctx.channelPost?.caption,

        // video note info
        video_note_file_id: ctx.channelPost?.video_note?.file_id,
        video_note_file_unique_id: ctx.channelPost?.video_note?.file_unique_id,
        video_note_length: ctx.channelPost?.video_note?.length,
        video_note_duration: ctx.channelPost?.video_note?.duration,
        video_note_thumb: ctx.channelPost?.video_note?.thumbnail,
        video_note_file_size: ctx.channelPost?.video_note?.file_size,
        video_note_caption: ctx.channelPost?.caption,

        // poll info
        poll_id: ctx.channelPost?.poll?.id,
        poll_question: ctx.channelPost?.poll?.question,
        poll_options: ctx.channelPost?.poll?.options,
        poll_total_voter_count: ctx.channelPost?.poll?.total_voter_count,
        poll_is_closed: ctx.channelPost?.poll?.is_closed,
        poll_is_anonymous: ctx.channelPost?.poll?.is_anonymous,
        poll_type: ctx.channelPost?.poll?.type,
        poll_allows_multiple_answers: ctx.channelPost?.poll?.allows_multiple_answers,
        poll_correct_option_id: ctx.channelPost?.poll?.correct_option_id,
        poll_explanation: ctx.channelPost?.poll?.explanation,
        poll_explanation_entities: ctx.channelPost?.poll?.explanation_entities,
        poll_open_period: ctx.channelPost?.poll?.open_period,
        poll_close_date: ctx.channelPost?.poll?.close_date,

        new_chat_members: ctx.channelPost?.new_chat_members,
        left_chat_member_id: ctx.channelPost?.left_chat_member?.id,
        left_chat_member_is_bot: ctx.channelPost?.left_chat_member?.is_bot,


        // other info
        is_photo: ctx.channelPost?.photo !== undefined,
        is_video: ctx.channelPost?.video !== undefined,
        is_text: ctx.channelPost?.text !== undefined,
        is_audio: ctx.channelPost?.audio !== undefined,
        is_document: ctx.channelPost?.document !== undefined,
        is_sticker: ctx.channelPost?.sticker !== undefined,
        is_voice: ctx.channelPost?.voice !== undefined,
        is_video_note: ctx.channelPost?.video_note !== undefined,
        is_poll: ctx.channelPost?.poll !== undefined,
        is_join: ctx.channelPost?.new_chat_members !== undefined,
        is_left: ctx.channelPost?.left_chat_member !== undefined,
    }
    const editChannel= {
        // Basic info
        id: ctx.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.from?.username,
        first_name: ctx.from?.first_name,
        last_name: ctx.from?.last_name,
        is_bot: ctx.from?.is_bot,
        is_user_premium: ctx.from?.is_premium,

        // Message info
        message_id: ctx.editedChannelPost?.message_id,
        message_date: ctx.editedChannelPost?.date,
        message_text: ctx.editedChannelPost?.text,
        message_entities: ctx.editedChannelPost?.entities,
        message_caption: ctx.editedChannelPost?.caption,
        message_caption_entities: ctx.editedChannelPost?.caption_entities,
        message_reply_to_message_id: ctx.editedChannelPost?.reply_to_message?.message_id,
        message_reply_to_message_text: ctx.editedChannelPost?.reply_to_message?.text,
        message_reply_to_message_entities: ctx.editedChannelPost?.reply_to_message?.entities,
        message_reply_to_message_caption: ctx.editedChannelPost?.reply_to_message?.caption,
        message_reply_to_message_caption_entities: ctx.editedChannelPost?.reply_to_message?.caption_entities,
    }
    const joinChannel= {
        // Basic info
        id: ctx.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.chatMember?.new_chat_member?.user.username,
        first_name: ctx.chatMember?.new_chat_member?.user.first_name,
        last_name: ctx.chatMember?.new_chat_member?.user.last_name,
        is_bot: ctx.chatMember?.new_chat_member?.user.is_bot,
        is_user_premium: ctx.chatMember?.new_chat_member?.user.is_premium,

        // chat info
        chat: ctx.chatMember?.chat,
        date: ctx.chatMember?.date,
        old_chat_member: ctx.chatMember?.old_chat_member,
        new_chat_member: ctx.chatMember?.new_chat_member,
        invite_link: ctx.chatMember?.invite_link,

        // old chat member info
        old_chat_member_id: ctx.chatMember?.old_chat_member?.user?.id,
        old_chat_member_is_bot: ctx.chatMember?.old_chat_member?.user?.is_bot,
        old_chat_member_first_name: ctx.chatMember?.old_chat_member?.user?.first_name,
        old_chat_member_last_name: ctx.chatMember?.old_chat_member?.user?.last_name,
        old_chat_member_username: ctx.chatMember?.old_chat_member?.user?.username,

        // new chat member info
        new_chat_member_id: ctx.chatMember?.new_chat_member?.user?.id,
        new_chat_member_is_bot: ctx.chatMember?.new_chat_member?.user?.is_bot,
        new_chat_member_first_name: ctx.chatMember?.new_chat_member?.user?.first_name,
        new_chat_member_last_name: ctx.chatMember?.new_chat_member?.user?.last_name,
        new_chat_member_username: ctx.chatMember?.new_chat_member?.user?.username,
        new_chat_member_status: ctx.chatMember?.new_chat_member?.status,

        // invite link info
        link_creator_id: ctx.chatMember?.invite_link?.creator.id,
        link_creator_first_name: ctx.chatMember?.invite_link?.creator.first_name,
        link_creator_last_name: ctx.chatMember?.invite_link?.creator.last_name,
        link_creator_username: ctx.chatMember?.invite_link?.creator.username,
        link_creator_is_bot: ctx.chatMember?.invite_link?.creator.is_bot,
        link_is_primary: ctx.chatMember?.invite_link?.is_primary,
        link_is_revoked: ctx.chatMember?.invite_link?.is_revoked,
        link_expire_date: ctx.chatMember?.invite_link?.expire_date,
        link_member_limit: ctx.chatMember?.invite_link?.member_limit,
        link_is_join_request: ctx.chatMember?.invite_link?.creates_join_request,
        link_pending_count: ctx.chatMember?.invite_link?.pending_join_request_count,
        link_name: ctx.chatMember?.invite_link?.name,
        link: ctx.chatMember?.invite_link?.invite_link,
    }
    const joinGroup = {
        // Basic info
        id: ctx.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.chatMember?.new_chat_member?.user.username,
        first_name: ctx.chatMember?.new_chat_member?.user.first_name,
        last_name: ctx.chatMember?.new_chat_member?.user.last_name,
        is_bot: ctx.chatMember?.new_chat_member?.user.is_bot,
        is_user_premium: ctx.chatMember?.new_chat_member?.user.is_premium,

        // chat info
        chat: ctx.chatMember?.chat,
        date: ctx.chatMember?.date,
        old_chat_member: ctx.chatMember?.old_chat_member,
        new_chat_member: ctx.chatMember?.new_chat_member,
        invite_link: ctx.chatMember?.invite_link,

        // old chat member info
        old_chat_member_id: ctx.chatMember?.old_chat_member?.user?.id,
        old_chat_member_is_bot: ctx.chatMember?.old_chat_member?.user?.is_bot,
        old_chat_member_first_name: ctx.chatMember?.old_chat_member?.user?.first_name,
        old_chat_member_last_name: ctx.chatMember?.old_chat_member?.user?.last_name,
        old_chat_member_username: ctx.chatMember?.old_chat_member?.user?.username,

        // new chat member info
        new_chat_member_id: ctx.chatMember?.new_chat_member?.user?.id,
        new_chat_member_is_bot: ctx.chatMember?.new_chat_member?.user?.is_bot,
        new_chat_member_first_name: ctx.chatMember?.new_chat_member?.user?.first_name,
        new_chat_member_last_name: ctx.chatMember?.new_chat_member?.user?.last_name,
        new_chat_member_username: ctx.chatMember?.new_chat_member?.user?.username,
        new_chat_member_status: ctx.chatMember?.new_chat_member?.status,

        // invite link info
        link_creator_id: ctx.chatMember?.invite_link?.creator.id,
        link_creator_first_name: ctx.chatMember?.invite_link?.creator.first_name,
        link_creator_last_name: ctx.chatMember?.invite_link?.creator.last_name,
        link_creator_username: ctx.chatMember?.invite_link?.creator.username,
        link_creator_is_bot: ctx.chatMember?.invite_link?.creator.is_bot,
        link_is_primary: ctx.chatMember?.invite_link?.is_primary,
        link_is_revoked: ctx.chatMember?.invite_link?.is_revoked,
        link_expire_date: ctx.chatMember?.invite_link?.expire_date,
        link_member_limit: ctx.chatMember?.invite_link?.member_limit,
        link_is_join_request: ctx.chatMember?.invite_link?.creates_join_request,
        link_pending_count: ctx.chatMember?.invite_link?.pending_join_request_count,
        link_name: ctx.chatMember?.invite_link?.name,
        link: ctx.chatMember?.invite_link?.invite_link,
    }
    const leaveGroup =  {
        // Basic info
        id: ctx.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.message?.left_chat_member?.username,
        first_name: ctx.message?.left_chat_member?.first_name,
        last_name: ctx.message?.left_chat_member?.last_name,
        is_bot: ctx.message?.left_chat_member?.is_bot,
        is_user_premium: ctx.message?.left_chat_member?.is_premium,

        // message info
        message_id: ctx.message?.message_id,
        date: ctx.message?.date,
    }
    const joinRequest = {
        // Basic info
        id: ctx.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.from?.username,
        first_name: ctx.from?.first_name,
        last_name: ctx.from?.last_name,
        is_bot: ctx.from?.is_bot,
        is_user_premium: ctx.from?.is_premium,

        // chat info
        chat: ctx.chatJoinRequest?.chat,
        date: ctx.chatJoinRequest?.date,
        user_chat_id: ctx.chatJoinRequest?.user_chat_id,
        invite_link: ctx.chatJoinRequest?.invite_link,

        // invite link info
        link_creator_id: ctx.chatJoinRequest?.invite_link?.creator.id,
        link_creator_first_name: ctx.chatJoinRequest?.invite_link?.creator.first_name,
        link_creator_last_name: ctx.chatJoinRequest?.invite_link?.creator.last_name,
        link_creator_username: ctx.chatJoinRequest?.invite_link?.creator.username,
        link_creator_is_bot: ctx.chatJoinRequest?.invite_link?.creator.is_bot,
        link_is_primary: ctx.chatJoinRequest?.invite_link?.is_primary,
        link_is_revoked: ctx.chatJoinRequest?.invite_link?.is_revoked,
        link_expire_date: ctx.chatJoinRequest?.invite_link?.expire_date,
        link_member_limit: ctx.chatJoinRequest?.invite_link?.member_limit,
        link_is_join_request: ctx.chatJoinRequest?.invite_link?.creates_join_request,
        link_pending_count: ctx.chatJoinRequest?.invite_link?.pending_join_request_count,
        link_name: ctx.chatJoinRequest?.invite_link?.name,
        link: ctx.chatJoinRequest?.invite_link?.invite_link,
    }
    const preCheckout = {
        // Basic info
        id: ctx.preCheckoutQuery?.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.preCheckoutQuery?.from?.username,
        first_name: ctx.preCheckoutQuery?.from?.first_name,
        last_name: ctx.preCheckoutQuery?.from?.last_name,
        is_bot: ctx.preCheckoutQuery?.from?.is_bot,
        is_user_premium: ctx.preCheckoutQuery?.from?.is_premium,

        // pre checkout info
        currency: ctx.preCheckoutQuery?.currency,
        total_amount: ctx.preCheckoutQuery?.total_amount,
        pre_checkout_id: ctx.preCheckoutQuery?.id,
        invoice_payload: ctx.preCheckoutQuery?.invoice_payload,
        shipping_option_id: ctx.preCheckoutQuery?.shipping_option_id,
        order_info: ctx.preCheckoutQuery?.order_info,
        payload: ctx.preCheckoutQuery?.invoice_payload,
    }
    const payment = {
        // Basic info
        id: ctx.message?.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.message?.from?.username,
        first_name: ctx.message?.from?.first_name,
        last_name: ctx.message?.from?.last_name,
        is_bot: ctx.message?.from?.is_bot,
        is_user_premium: ctx.message?.from?.is_premium,

        // payment info
        currency: ctx.message?.successful_payment?.currency,
        total_amount: ctx.message?.successful_payment?.total_amount,
        invoice_payload: ctx.message?.successful_payment?.invoice_payload,
        shipping_option_id: ctx.message?.successful_payment?.shipping_option_id,
        order_info: ctx.message?.successful_payment?.order_info,
        telegram_payment_charge_id: ctx.message?.successful_payment?.telegram_payment_charge_id,
        provider_payment_charge_id: ctx.message?.successful_payment?.provider_payment_charge_id,
    }
    const shipping = {
        // Basic info
        id: ctx.shippingQuery?.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.shippingQuery?.from?.username,
        first_name: ctx.shippingQuery?.from?.first_name,
        last_name: ctx.shippingQuery?.from?.last_name,
        is_bot: ctx.shippingQuery?.from?.is_bot,
        is_user_premium: ctx.shippingQuery?.from?.is_premium,

        // shipping info
        shipping_address: ctx.shippingQuery?.shipping_address,
        invoice_payload: ctx.shippingQuery?.invoice_payload,
        shipping_address_id: ctx.shippingQuery?.id,

        // shipping address info
        address_country_code: ctx.shippingQuery?.shipping_address?.country_code,
        address_state: ctx.shippingQuery?.shipping_address?.state,
        address_city: ctx.shippingQuery?.shipping_address?.city,
        address_street_line1: ctx.shippingQuery?.shipping_address?.street_line1,
        address_street_line2: ctx.shippingQuery?.shipping_address?.street_line2,
        address_post_code: ctx.shippingQuery?.shipping_address?.post_code,
    }
    const callback = {
        // Basic info
        id: ctx.callbackQuery?.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.callbackQuery?.from?.username,
        first_name: ctx.callbackQuery?.from?.first_name,
        last_name: ctx.callbackQuery?.from?.last_name,
        is_bot: ctx.callbackQuery?.from?.is_bot,
        is_user_premium: ctx.callbackQuery?.from?.is_premium,

        // callback info
        callback_id: ctx.callbackQuery?.id,
        data: ctx.callbackQuery?.data?.trim(),
        message_id: ctx.callbackQuery?.message?.message_id,
        callback_chat_instance: ctx.callbackQuery?.chat_instance,
        text: ctx.callbackQuery?.message?.text,
    }
    const document = {
        // Basic info
        id: ctx.message?.from?.id,
        chat_id: ctx.chat?.id,
        chat_type: ctx.chat?.type,

        // User info
        username: ctx.message?.from?.username,
        first_name: ctx.message?.from?.first_name,
        last_name: ctx.message?.from?.last_name,
        is_bot: ctx.message?.from?.is_bot,
        is_user_premium: ctx.message?.from?.is_premium,

        // Document info
        document: ctx.message?.document,
        file_id: ctx.message?.document?.file_id,
        file_name: ctx.message?.document?.file_name,
        file_size: ctx.message?.document?.file_size,
        mime_type: ctx.message?.document?.mime_type,
        thumb: ctx.message?.document?.thumbnail,
        caption: ctx.message?.caption,
        caption_entities: ctx.message?.caption_entities,

        // forwarded info
        forwarded_from: ctx.message?.forward_from_chat,
        forwarded_from_id: ctx.message?.forward_from_chat?.id,
        forwarded_from_type: ctx.message?.forward_from_chat?.type,
        forwarded_from_title:  ["channel","group","supergroup"].includes(ctx.message?.forward_from_chat?.type ?? '')  ? (ctx.message?.forward_from_chat as any).title : undefined,
    }
    switch (type) {
        case 'text':
            return text;
        case 'callback':
            return callback;
        case 'photo':
            return photo;
        case 'video':
            return video;
        case 'channel':
            return channel;
        case 'editChannel':
            return editChannel;
        case 'joinChannel':
            return joinChannel;
        case 'joinGroup':
            return joinGroup;
        case 'leaveGroup':
            return leaveGroup;
        case 'joinRequest':
            return joinRequest;
        case 'preCheckout':
            return preCheckout;
        case 'payment':
            return payment;
        case 'shipping':
            return shipping;
        case 'document':
            return document;
        default:
            return {};
    }
}
export default getBrain;