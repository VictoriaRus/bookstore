import React from "react";

interface SVGProps {
    fill: string;
}

const IconBG = ({ fill }: SVGProps) => {

    return (
        <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="56" fill={ fill }/>
            <path
                d="M35.612 21.4145C35.1722 20.9661 34.65 20.6103 34.0752 20.3676C33.5005 20.1249 32.8844 20 32.2623 20C31.6401 20 31.0241 20.1249 30.4493 20.3676C29.8746 20.6103 29.3524 20.9661 28.9126 21.4145L27.9998 22.3448L27.087 21.4145C26.1986 20.5091 24.9936 20.0005 23.7372 20.0005C22.4809 20.0005 21.2759 20.5091 20.3875 21.4145C19.4991 22.3199 19 23.5479 19 24.8283C19 26.1088 19.4991 27.3367 20.3875 28.2421L21.3003 29.1724L27.9998 36L34.6992 29.1724L35.612 28.2421C36.0521 27.7939 36.4011 27.2617 36.6393 26.676C36.8774 26.0902 37 25.4624 37 24.8283C37 24.1943 36.8774 23.5664 36.6393 22.9807C36.4011 22.3949 36.0521 21.8627 35.612 21.4145Z"
                fill="#FC857F"/>
        </svg>
    );
};

export default IconBG;