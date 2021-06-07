import React, { useState } from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import calculateTime from '../../utils/calculateTime';



function Message({ message, user, setMessages, messagesWith, bannerProfilePic}) {

    const [deleteIcon, setDeleteIcon] = useState(false);

    const ifYouSender = message.sender === user._id

    return (
        <div className="bubbleWrapper">
            <div 
                className={ifYouSender ? "inlineContainer own" : "inlineContainer"}
                onClick={() => {
                    ifYouSender && setDeleteIcon(!deleteIcon)
                }}
            >
                <img className="inlineIcon" src={ifYouSender? user.profilePicUrl : bannerProfilePic} />
                <div className={ifYouSender ? "ownBubble own" : "otherBubble other"}>
                    {message.msg}
                </div>

                {deleteIcon && (
                    <Popup 
                        trigger={<Icon name="trash" color="red" style={{cursor: "pointer"}}/>} 
                        content="This will only delete the message from your inbox!"
                        position="top right"
                    />) 
                }
            </div>

            <span className={ifYouSender ? 'own' : 'other'}>
                {calculateTime(message.date)}
            </span>
        </div>
    )
};

export default Message;
