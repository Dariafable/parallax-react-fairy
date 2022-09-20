import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import topBase from '../img/layer-base.png';
import middle from '../img/layer-middle.png';
import front from '../img/layer-front.png';
import ground from '../img/ground.png';
import bottomBase from '../img/dungeon.jpg';

const TopSlider = () => {
  return (
    <div className='container'>
      <Parallax pages={1.5}>
        <ParallaxLayer
          className='front'
          speed={0.9}
          style={{
            backgroundImage: `url(${front})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <ParallaxLayer
          className='middle'
          speed={0.6}
          style={{
            backgroundImage: `url(${middle})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <ParallaxLayer
          className='ground'
          offset={0.9}
          speed={0.9}
          style={{
            backgroundImage: `url(${ground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100px',
            zIndex: 4,
            position: 'absolute',
          }}
        />

        <ParallaxLayer
          className='top-base'
          speed={0.1}
          style={{
            backgroundImage: `url(${topBase})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <ParallaxLayer speed={0.4}>
          <div className='top-content'>
            <p>Welcome to parallax</p>
            <h1>Fairy forest</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className='bottom-base'
          offset={0.95}
          speed={0.8}
          style={{
            backgroundImage: `url(${bottomBase})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='bottom-content'>
            <h2>To be continued</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed porro dolorum deserunt
              perspiciatis. Eius fuga officiis consequatur eum possimus ullam laboriosam velit ut?
              Esse veniam autem officia, ipsum placeat accusantium tenetur tempora.
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default TopSlider;
