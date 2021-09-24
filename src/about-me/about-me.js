import React from "react";
import './about-me.css';
import image from '../assets/images/sinda.png';
import certif from '../assets/images/aws-developer-associate.png';
import Badge from "./badges/badge";

const AboutMe = () => {
    const languages = ['Python','Java','Javascript'];
    const iac = ['Terraform', 'AWS Cloudformation', 'AWS SAM'];
    const others = ['Docker', 'Kubernetes', '& other AWS services'];

    return (
        <div className="container" id="#about-me">
            <div className="row mt-5">
                <div className="col-4 px-5 title">About Me</div>
                <div className="col-8 bar mt-auto mb-auto"/>
            </div>
            <div className="row">
                <div className="col-7 px-5 pt-3 about-description">
                    Hi, my name is Sinda Jeddey and I’m a Cloud and DevOps enthusiast! I got introduced to Cloud Computing in the start of 2019 and from then started my journey and I got certified as an AWS Certified Developer Associate.
                    <br/><br/>
                    I also got the chance to work on multiple web applications in both front-end and back-end development.
                </div>
                <div className="col-5">
                    <img src={image} height={400} className="image"/>
                </div>
            </div>
            <br/>
            <div className="row px-5">
                <div className="row sub-title">Technical Skills:</div>
                <div className="col-4">
                    <ul>{languages.map(language => <li>{language}</li>)}</ul>
                </div>
                <div className="col-4">
                    <ul>{iac.map(el => <li>{el}</li>)}</ul>
                </div>
                <div className="col-4">
                    <ul>{others.map(el => <li>{el}</li>)}</ul>
                </div>
            </div>
            <div className="row px-5">
                <div className="row sub-title">Certifications:</div>
                <Badge img={certif}/>
            </div>
        </div>
    )
}

export default AboutMe;