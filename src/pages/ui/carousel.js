import React, { Component } from 'react';
import { Carousel, Card } from 'antd';
import './ui.less';

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <Card title="Text Carousel" className="card-wrap">
          <Carousel autoplay effect="fade">
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </Card>

        <Card title="Image Carousel" className="card-wrap slider-wrap">
          <Carousel autoplay effect="fade">
            <div>
              <img src="/carousel-img/carousel-1.jpg" alt="" />
            </div>

            <div>
              <img src="/carousel-img/carousel-2.jpg" alt="" />
            </div>

            <div>
              <img src="/carousel-img/carousel-3.jpg" alt="" />
            </div>
            
          </Carousel>
        </Card>
      </div>
    );
  }
}

export default MyCarousel;