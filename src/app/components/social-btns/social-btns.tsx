import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { FacebookIcon } from "../icons/facebook-icon";
import { GitHubIcon } from "../icons/github-icon";

import "./social-btns.scss"

interface SocialBtnsProps {

}
export function SocialBtns(props : SocialBtnsProps){
    return(
        <div className="social">
            <a href="">
                <InstaIcon />
            </a>
            <a href="">
                <LinkedInIcon />
            </a>
            <a href="">
                <FacebookIcon />
            </a>
            <a href="">
                <GitHubIcon />
            </a>
        </div>
    )
}