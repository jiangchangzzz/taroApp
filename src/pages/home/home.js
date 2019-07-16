import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import * as homeActions from '../../actions/home';
import Banner from './banner';
import Recommend from './recommend';

export class Home extends Component {
   config = {
       navigationBarTitleText: '网易严选'
  }

  state={}

  componentDidMount () {
    const { getHome, getRecommend } = this.props;
    getHome();
    getRecommend();
  } 

  render() {
    const { home } = this.props;
    return home.info ? (
      <View>
        <Banner list={home.info.focus}/>
        {home.recommend.isFetch ? <Recommend list={home.recommend.list}/> : null}
      </View>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  home: state.home
})

const mapDispatchToProps = {
  ...homeActions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);