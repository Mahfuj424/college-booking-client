import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

import img4 from '../Banner/images/banner4.jpg'
import img1 from '../Banner/images/banner1.jpg'
import img6 from '../Banner/images/banner6.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;