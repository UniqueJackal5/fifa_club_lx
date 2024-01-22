
import Image from 'next/image';

export default function Header() {
    return (
        <div className="header">
            <div className="container text-center">
                <div className="row">
                    <div className="col-4">
                        <div className='img-fluid'>
                            <Image
                            src="/lx_fifa_club.png"
                            alt="LX fifa club logo"
                            height="128"
                            width="128"
                            />
                        </div>
                    </div>
                    <div className="col-8">
                        <p>Hello I should be the larger part.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}