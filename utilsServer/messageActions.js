const ChatModel = require('../models/ChatModel');

const loadMessages = async (userId, messagesWith) => {

    try {

        const user = await ChatModel.findOne({user:userId}).populate('chats.messagesWith')

        // console.log('user', user.chats[0].messagesWith._id.toString());
        // console.log('messagesWith', messagesWith)
        const chat = user.chats.find(chat => chat.messagesWith._id.toString() === messagesWith);

        if(!chat) {
            return { error: "No chat found"}
        }

        return { chat };

    } catch (error) {
        console.log(error);
        return {error};
    }

};


const sendMsg = async (userId, msgSendToUserId, msg) => {

    try {

        // Logged in user (sender)
        const user = await ChatModel.findOne({user: userId});

        // Receiver
        const msgSendToUser = await ChatModel.findOne({user: msgSendToUserId});

        const newMsg = {
            sender: userId,
            receiver: msgSendToUserId,
            msg,
            date: Date.now()
        };

        const previousChat = user.chats.find(chat => chat.messagesWith.toString() === msgSendToUserId);

        if(previousChat) {
            previousChat.messages.push(newMsg);
            await user.save();
        } else {
            const newChat = {
                messagesWith: msgSendToUserId,
                messages: [newMsg]
            };

            user.chats.unshift(newChat);
            await user.save();
        }

        const previousChatForReceiver = msgSendToUser.chats.find(chat => chat.messagesWith.toString() === userId);

        if(previousChatForReceiver) {
            previousChatForReceiver.messages.push(newMsg);
            await msgSendToUser.save();
        } else {
            const newChat = {
                messagesWith: userId,
                messages: [newMsg]
            };

            msgSendToUser.chats.unshift(newChat);
            await msgSendToUser.save();
        }

        return { newMsg }

    } catch (error) {
        console.error(error);
        return { error };
    }

}

module.exports={loadMessages, sendMsg};