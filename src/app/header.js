
import Image from 'next/image';
import logo from './logo_transparent.png';

export default function Header() {
    return (
        <div className="header">
            <div className="container-fluid headhead">
                <div className='row align-items-end justify-content-start'>
                    <div className='col-4 mt-1 text-start'>
                        <Image
                            src={logo}
                            alt="lx fifa club logo"
                            height="64"
                            width="64"
                        />
                    </div>
                    <div className='col-8 mt-1 '>
                        <h2 className='headText'>The Laxmimarga FIFA CLUB</h2>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-4">
                        <div className='img-fluid'>
                            <Image
                            src="/lx_fifa_club.png"
                            alt="LX fifa club logo"
                            height="64"
                            width="64"
                            />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className=' align-items-center justify-content-start'>
                            <p>Welcome to the Laxmimarga FIFA Club.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}