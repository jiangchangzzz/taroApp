import Taro , { Component } from '@tarojs/taro';
import { View, Text , Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.scss';

export class Index extends Component {
  render() {
    const { list } = this.props;
    return (
      <View className="banner-wrap">
        <Swiper
            className="banner-swiper"
            circular
            autoplay
            indicatorDots
            indicatorActiveColor='rgb(178, 42, 49)'
        >
           {list.map(item => (
            <SwiperItem
                key={item.rank}
                className="banner-swiper-item"
            >
                <Image
                    className="banner-swiper-item-img"
                    src={item.img}
                />
            </SwiperItem>  
           ))} 
        </Swiper>
      </View>
    );
  }
}
export default Index;