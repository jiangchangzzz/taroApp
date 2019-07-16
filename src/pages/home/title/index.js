import Taro, { Component } from '@tarojs/taro'
import { Text, View, Image } from '@tarojs/components'
import arrowRight from '../../../assets/arrow-right.png';
import './index.scss';

export class Title extends Component {
  handleClick(){
    const { link } = this.props;
    Taro.navigateTo({
      url: link
    });
  }

  render() {
    const { text, link } = this.props;
    return (
      <View className='title-wrap'>
          <Text className='title-text'>{text}</Text>
          {link ? (
            <View className='title-more' onClick={()=>this.handleClick()}>
              <Text className='title-more-text'>更多</Text>
              <Image className='title-more-arrow' src={arrowRight}/>
            </View>
          ) : null}
      </View>
    )
  }
}

export default Title
