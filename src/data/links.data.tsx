import {BsFillEnvelopeFill, BsGithub, BsLinkedin} from "react-icons/bs";
import {IoPhonePortraitOutline} from "react-icons/io5";
import {MdLocationPin} from "react-icons/md";
import {PiFilePdfBold} from "react-icons/pi";

export const links = [
    {
        icons: () => <BsFillEnvelopeFill className={'w-4 h-4 md:w-5 md:h-5'} />,
        link: 'hussainquetta53@gmail.com',
        type: 'email',
    },
    {
        icons: () => <IoPhonePortraitOutline className={'w-4 h-4 md:w-5 md:h-5'} />,
        link: '+92 323 6501386',
        type: 'phone',
    },
    {
        icons: () => <MdLocationPin className={'w-4 h-4 md:w-5 md:h-5'} />,
        link: 'Karachi, Pakistan',
        type: 'location',
    },
    {
        icons: () => <BsLinkedin className={'w-4 h-4 md:w-5 md:h-5'} />,
        link: 'linkedin.com/in/hussain-saifuddin786',
        type: 'link',
    },
    {
        icons: () => <BsGithub className={'w-4 h-4 md:w-5 md:h-5'} />,
        link: 'github.com/hussain385',
        type: 'link',
    },
    {
        icons: () => <PiFilePdfBold className={'w-4 h-4 md:w-5 md:h-5'} />,
        link: 'Download Résumé',
        type: 'link',
    }
]
