import Taro , { Component } from '@tarojs/taro';
import { View, Text , Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.scss';

export class Index extends Component {

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    const { list } = this.props;
    return (
      <View className="wrap">
        <Swiper
            className="swiper"
            circular
            autoplay
            indicatorDots
            indicatorActiveColor='rgb(178, 42, 49)'
        >
           {list.map(item => (
            <SwiperItem
                key={item.rank}
                className="swiper-item"
            >
                <Image
                    className="swiper-item-img"
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