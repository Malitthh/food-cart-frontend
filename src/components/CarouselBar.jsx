import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselBar = () => {
    return (
			<div>
		
			<Carousel showThumbs={false} interval={8000} autoPlay={true}>
				<div>
					<img src="assets/images/HeaderImages1Edited.jpg" width="1920px" height="550px"/>

				</div>
				<div>
					<img src="assets/images/HeaderImages2Edited.jpg" width="1920px" height="550px" />
				</div>
				<div>
					<img src="assets/images/HeaderImages3Edited.jpg" width="1920px" height="550px"/>
				</div>
				<div>
					<img src="assets/images/HeaderImages4Edited.jpg" width="1920px" height="550px"/>
				</div>
				
			</Carousel>
			</div>
		);
	}

export default CarouselBar;