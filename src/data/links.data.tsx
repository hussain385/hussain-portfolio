import {BsFillEnvelopeFill, BsGithub, BsLinkedin} from "react-icons/bs";
import {IoPhonePortraitOutline} from "react-icons/io5";
import {MdLocationPin} from "react-icons/md";

export const links = [
    {
        icons: () => <BsFillEnvelopeFill className={'w-5 h-5'} />,
        link: 'hussainquetta53@gmail.com',
        type: 'email',
    },
    {
        icons: () => <IoPhonePortraitOutline className={'w-5 h-5'} />,
        link: '+92 323 6501386',
        type: 'phone',
    },
    {
        icons: () => <MdLocationPin className={'w-5 h-5'} />,
        link: 'Karachi, Pakistan',
        type: 'email',
    },
    {
        icons: () => <BsLinkedin className={'w-5 h-5'} />,
        link: 'linkedin.com/in/hussain-saifuddin786',
        type: 'link',
    },
    {
        icons: () => <BsGithub className={'w-5 h-5'} />,
        link: 'github.com/hussain385',
        type: 'link',
    }
]
