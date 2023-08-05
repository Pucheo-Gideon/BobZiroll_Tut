import React from "react"
import facebookIcon from '../Images/FacebookIcon.png'
import TwitterIcon from '../Images/TwitterIcon.png'
import InstagramIcon from '../Images/InstagramIcon.png'
import GithubIcon from '../Images/GitHubIcon.png'
import LinkedIn from '../Images/LinkedinIcon.png'

export default function Footer(){
    
    return (
        <div className="footer">
        <img src={TwitterIcon} alt="twitter Icon"/>
        <img src={facebookIcon} alt="facebook Icon"/>
        <img src={InstagramIcon} alt="InstagramIcon.png"/>
        <img src={GithubIcon} alt="GithubIcon"/>
        <img src={LinkedIn} alt="linkedIn Icon"/>
        </div> 
    )
}