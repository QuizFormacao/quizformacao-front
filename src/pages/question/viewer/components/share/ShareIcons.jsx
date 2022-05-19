import {
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import React from "react";

const ShareIcons = () =>{
    return (
        <div>
            <FacebookShareButton url={""}>
                <FacebookIcon size={35} round={true}/>
            </FacebookShareButton>
            <LinkedinShareButton>
                <LinkedinIcon size={35} round={true}/>
            </LinkedinShareButton>
            <FacebookMessengerShareButton>
                <FacebookMessengerIcon size={35} round={true}/>
            </FacebookMessengerShareButton>
            <TwitterShareButton>
                <TwitterIcon size={35} round={true}/>
            </TwitterShareButton>
            <TelegramShareButton>
                <TelegramIcon size={35} round={true}/>
            </TelegramShareButton>
            <WhatsappShareButton>
                <WhatsappIcon size={35} round={true}/>
            </WhatsappShareButton>
        </div>
    )
};
export default ShareIcons;
