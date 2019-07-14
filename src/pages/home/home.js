import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import * as homeActions from '../../actions/home';
import Banner from './banner';

export class Home extends Component {

   config = {
       navigationBarTitleText: '网易严选'
  }

  state={}

  componentWillMount () {}
  componentDidMount () {
    const { getHome } = this.props;
    getHome();
  } 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    const { home } = this.props;
    return home.info ? (
      <View>
        <Banner list={home.info.focus}/>
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