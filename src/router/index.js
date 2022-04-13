// 导入
import VueRouter from 'vue-router'
// 引入发现组件
import Faxianyniyue from '../components/fxyy/Faxianyinyue'
// children
import Tuijian from '../components/fxyy/children/Tuijian'
import Paihangban from '../components/fxyy/children/Paihangban'
import Gedan from '../components/fxyy/children/Gedan'
import Zhubodiantai from '../components/fxyy/children/Zhubodiantai'
import Geshou from '../components/fxyy/children/Geshou'
import Xindieshangjia from '../components/fxyy/children/Xindieshangjia'
import Rmtjitempages from '../components/fxyy/children/tuijianchildren/itempage/Rmtjitempages'
import Xdsjitempages from '../components/fxyy/children/tuijianchildren/itempage/Xdsjitempages'
import Phbpages from '../components/fxyy/children/phbchildren/Phbpages'

import Guanzhu from '../components/gz/Guanzhu'
import Wodeyinyue from '../components/wdyy/Wodeyinyue'




// 创建路由对象
const router = new VueRouter({
  routes: [
    // {
    //   path: '/faxianyinyue/wodeyinyue',
    //   redirect: '/',
    // },
    {
      path: '/',  // 默认进入路由
      redirect: '/faxianyinyue'   //重定向
    },
    {
      path: '/faxianyinyue',  //发现音乐
      name: 'faxianyinyue',
      component: Faxianyniyue,
      children: [
        {
          path: '/faxianyinyue',
          redirect: 'tuijian'
        },
        {
          path: 'tuijian',
          component: Tuijian
        },
        {
          path: 'paihangban',
          component: Paihangban,
          children: [
            // {
            //   path: 'paihangban',
            //   redirect: 'Phbpages'
            // },
            {
              path: 'phbpages',
              name: 'phbpages',
              component: Phbpages
            }
          ]
        },
        {
          path: 'gedan',
          component: Gedan
        },
        {
          path: 'zhubodiantai',
          component: Zhubodiantai
        },
        {
          path: 'geshou',
          name:'geshou',
          component: Geshou
        },
        {
          path: 'xindieshangjia',
          component: Xindieshangjia
        },
        {
          name: 'rmtjitempages',
          path: 'rmtjitempages',
          component: Rmtjitempages
        },
        {
          name: 'xdsjitempages',
          path: 'xdsjitempages',
          component: Xdsjitempages
        }
        
      ]
    },
    {
      path: '/wodeyinyue',  //我的音乐
      name: 'wodeyinyue',
      component: Wodeyinyue
    },
    {
      path: '/guanzhu',  //关注
      name: 'guanzhu',
      component:  Guanzhu
    }
  ]
})

// 导出
export default router