import React, {FC} from 'react';
import {CarouselProps} from 'antd/es/carousel';
import {Carousel} from 'antd';
import {ICarousel} from '../types/common.type';

interface IProps {
  overlay: FC;
  images: Array<ICarousel>;
  carousel?: CarouselProps;
}

const OverlayCarousel: FC<IProps> = ({overlay: Overlay, images, carousel}: IProps) => (
  <div style={{position: 'relative'}}>
    <div className='overlay'>
      <Overlay />
    </div>

    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Carousel autoplay dotPosition='right' {...carousel}>
      {images.map(({image, caption}, index) => (
        <img src={image} alt={caption} key={index.toString()} />
      ))}
    </Carousel>
  </div>
);

export default OverlayCarousel;
