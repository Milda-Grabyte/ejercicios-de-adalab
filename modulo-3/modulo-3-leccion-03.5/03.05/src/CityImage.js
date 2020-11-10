import React from 'react';

const image = {
  'Buenos Aires': 'https://lp-cms-production.imgix.net/2019-06/4c410251e0146b2edd2b8b1d64a02047-buenos-aires.jpg',
  'Sydney': 'https://www.sydney.com/sites/sydney/files/styles/open_graph/public/2019-10/164154_0.jpg?itok=ttmOL5Gt',
  'Prague': 'https://www.tomorrowland.com/src/Frontend/Files/userfiles/images/Global%20Journey/Discover%20Europe/praag(1).jpg',
  'Boston': 'https://workandtravelgroup.com/wp-content/uploads/boston.jpg',
  'Tokyo': 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002533/img/basic/a0002533_main.jpg?20201007131627&q=80&rw=750&rh=536',
  'Default': '',
}

class CityImage extends React.Component {
  render() {
    return (
      <img src={image[this.props.city]}></img>
    );
  }
}

CityImage.defaultProps = {
  city: 'Default'
};

export default CityImage;
