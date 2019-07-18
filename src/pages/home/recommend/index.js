import Taro, { Component } from '@tarojs/taro'
import { Text, View, Image, SwiperItem } from '@tarojs/components'
import Title from '../title';
import './index.scss';

export class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <View className='recommend'>
        <Title text='为你推荐' link='/pages/index/index'/>
        <View className='recommend-list'>
          {list.filter(item => item.type === 1).map(item => {
            const info = item.categoryItem;
            return (
              <View key={item.id} className='recommend-item'>
                <View className='recommend-content'>
                  <Image className='recommend-production' src={info.listPicUrl}/>
                  <View className='recommend-desc'>
                    <Text className='recommend-desc-name' numberOfLines={1}>{info.name}</Text>
                    <Text className='recommend-desc-price' numberOfLines={1}>¥{info.activityPrice || info.retailPrice}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    )
  }
}

export default Recommend
