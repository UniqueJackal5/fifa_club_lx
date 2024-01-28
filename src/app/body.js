
import Image from 'next/image';
import './globals.css';
import bgImg from './bgImg.jpeg';

export default function Body(){
    return (
        <div className="container-fluid px-0 py-0">
            <div>
                {/* <Image
                className='bgImg'
                src={bgImg}
                // height='1080'
                // width='auto'
                alt=''
                /> */}
            </div>

            {/* <div className='overlay'>

            </div> */}
            {/* <div className='textOverlay'>
                <h3>
                    Welcome to LX FIFA Club
                </h3>
            </div> */}

        </div>
    );
}