import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselBar = () => {
    return (
			<div>
				<Carousel 
					showThumbs={false} 
					interval={8000} 
					autoPlay={true}
					showStatus={false}
				>
				<div>
					<img src="assets/images/ImageEdited1.jpg"/>
				</div>
				<div>
					<img src="assets/images/ImageEdited2.jpg" />
				</div>
				<div>
					<img src="assets/images/ImageEdited3.jpg"/>
				</div>
				<div>
					<img src="assets/images/ImageEdited4.jpg"/>
				</div>
				</Carousel>
			</div>
		);
	}

export default CarouselBar;