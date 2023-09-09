import { Carousel } from 'antd';
import { Fragment, useEffect, useRef } from 'react';

const contentStyle = {
margin: 0,
color: '#fff',
textAlign: 'center',
background: '#364d79',
display: 'flex',
justifyContent: 'space-between',
};

const carouselItemStyle = {
display: 'flex',
alignItems: 'center',
};

const contentCarouselStyle = {
marginLeft: '1rem', // Điều chỉnh khoảng cách giữa hình ảnh và .contentCarousel
};
const btnCarousel = {
width: '150px',
height: '50px',
background: "#F8B653",
color: "white",
fontSize: '24px',
border: '#F8B653',
};

const dotStyle = {
	width: '10px',
	height: '10px',
	borderRadius: '50%',
	backgroundColor: 'green', // Change the color to green
  };
  const dotActiveStyle = {
	width: '10px',
	height: '10px',
	borderRadius: '50%',
	backgroundColor: 'green', // Change the color to green
  };
function CarouselHome() {
const carouselRef = useRef();

const onChange = (currentSlide) => {
	console.log(currentSlide);
};

return (
	<Fragment>
		<Carousel
			ref={carouselRef}
			effect={'scrollx'}
			dotPosition='top'
			afterChange={onChange}
			autoplay={false}
			dotStyle={dotStyle} 
			dotActiveStyle={dotActiveStyle} 
			>
		
			<div style={contentStyle}>
				<div style={carouselItemStyle}>
					<img
						src='./src/assets/imgs/shoes/adidas-super-star-red.png'
						style={{
							height: 530,
							width: '700px',
							objectFit: 'cover',
						}}
					/>
					<div className="contentCarousel" style={contentCarouselStyle}>
						<h3 style={{
							fontSize: '30px',
						}}>Adidas prophere black white</h3>
						<button style={btnCarousel}>Buy now</button>
					</div>
				</div>
			</div>
			<div style={contentStyle}>
				<div style={carouselItemStyle}>
					<img
						src='./src/assets/imgs/shoes/adidas-prophere-black-white.png'
						style={{
							height: 530,
							objectFit: 'cover',
							width: '700px',
						}}
					/>
					<div className="contentCarousel" style={contentCarouselStyle}>
						<h3 style={{
							fontSize: '30px',
						}}>Adidas prophere black white</h3>
						<button style={btnCarousel}>Buy now</button>
					</div>
				</div>
			</div>
			<div style={contentStyle}>
				<div style={carouselItemStyle}>
					<img
						src='./src/assets/imgs/shoes/adidas-prophere.png'
						style={{
							height: 530,
							objectFit: 'cover',
							width: '700px',
						}}
					/>
					<div className="contentCarousel" style={contentCarouselStyle}>
						<h3 style={{
							fontSize: '30px',
						}}>Adidas prophere black white</h3>
						<button style={btnCarousel}>Buy now</button>
					</div>
				</div>
			</div>
			<div style={contentStyle}>
				<div style={carouselItemStyle}>
					<img
						src='./src/assets/imgs/shoes/nike-adapt-bb.png'
						style={{
							height: 530,
							objectFit: 'cover',
							width: '700px',
						}}
					/>
					<div className="contentCarousel" style={contentCarouselStyle}>
						<h3 style={{
							fontSize: '30px',
						}}>Adidas prophere black white</h3>
						<button style={btnCarousel}>Buy now</button>
					</div>
				</div>
			</div>
			
		</Carousel>
	</Fragment>
);
}

export default CarouselHome; 