import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselBar = () => {
    return (
			<div>
		
			<Carousel showThumbs={false} interval={8000} autoPlay={true}>
				<div>
					<img src="assets/images/headerImg1.jpg"/>

				</div>
				<div>
					<img src="assets/images/headerImg2.jpg" />
				</div>
				<div>
					<img src="assets/images/headerImg3.jpg"/>
				</div>
				<div>
					<img src="assets/images/headerImg4.jpg"/>
				</div>
				<div>
					<img src="assets/images/headerImg5.jpg"/>
				</div>
			</Carousel>
			</div>
		);
	}

export default CarouselBar;