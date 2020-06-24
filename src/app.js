import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/home/home',
      'pages/cate/cate',
      'pages/cate-sub/cate-sub',
      'pages/cart/cart',
      'pages/user/user',
      'pages/user-login/user-login',
      'pages/user-login-email/user-login-email',
      'pages/item/item',
      'pages/webview/webview'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '网易严选',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/home/home",
        iconPath: "assets/tabbar/home.png",
        selectedIconPath: "./assets/tabbar/home-active.png",
        text: "首页"
      }, { 
        pagePath: "pages/cate/cate",
        iconPath: "./assets/tabbar/cate.png",
        selectedIconPath: "./assets/tabbar/cate-active.png",
        text: "分类"
      }, {
        pagePath: "pages/cart/cart",
        iconPath: "./assets/tabbar/cart.png",
        selectedIconPath: "./assets/tabbar/cart-active.png",
        text: "购物车"
      }, {
        pagePath: "pages/user/user",
        iconPath: "./assets/tabbar/user.png",
        selectedIconPath: "./assets/tabbar/user-active.png",
        text: "个人"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
