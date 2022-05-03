<template>
  <div class="content">
    <div class="contentoutter">
      <div class="contentinner">
        <div class="top">
          <h2>动态</h2>
          <div class="line"></div>
        </div>
        <div>
          <a-comment v-for="(item,index) in arr1"
                     :key="index">
            <template slot="actions">
              <span key="comment-basic-like">
                <a-tooltip title="Like">
                  <a-icon type="like"
                          :label="index"
                          :theme="action === 'liked' ? 'filled' : 'outlined'"
                          @click="like(index)" />
                </a-tooltip>
                <span style="padding-left: '8px';cursor: 'auto'">
                  {{ item.dianzan }}
                </span>
              </span>
              <!-- <span></span> -->
              <span key="comment-basic-reply-to">评论： {{item.pls}}</span>
            </template>
            <a slot="author">{{item.name}}</a>
            <a-avatar slot="avatar"
                      :src="item.TX"
                      alt="头像" />

            <p v-show="item.text.msg"
               slot="content">
              <a :href="item.name2url">#{{item.name2}}#</a>
              {{item.text.msg}}
            </p>
            <a-tooltip slot="datetime"
                       :title="item.time">
              <span>{{ item.time }}</span>
            </a-tooltip>
          </a-comment>
        </div>
      </div>
    </div>
    <Accountmsg :isshowrzgs="false" />
  </div>
</template>

<script> 
import Accountmsg from '../fxyy/children/tuijianchildren/Accountmsg'
import { yhgzlb, yhdt } from '../../network/login'
import { formatDateTime } from '../comps/time'
import moment from 'moment'
export default {
  name: 'Guanzhu',
  components: { Accountmsg },
  data () {
    return {
      follow: [],  //动态
      paixufollow: [],  //排序后的动态
      gzlbuserid: [],  //关注列表userid
      paixuuserid: [],  //排序后的userid
      likes: 0,  //评论
      dislikes: 0,  //评论
      action: null,  // 评论
      moment,  //评论
      obj: {
        TX: '',
        name: '',
        name2: '',
        text: '',
        name2url: '',
        pls: '',
        dianzan: '',
        time: ''
      },
      arr: [],
      arr1: [],  //没有安时间排序的数组
    }
  },
  mounted () {
    yhgzlb('1658129428').then(res => {
      res.data.follow.map((item, i) => {
        this.gzlbuserid.push(item)
      })
      this.paixuuserid = this.gzlbuserid.sort(function (a, b) {
        return a.userId - b.userId
      })
      this.obj = {}
      this.paixuuserid.map((item, i) => {
        yhdt(item.userId).then(res1 => {
          this.follow.push(res1)
          if (this.follow.length == 4) {
            this.paixufollow = this.follow.sort(function (a, b) {
              return a.data.events[0].user.userId - b.data.events[0].user.userId
            })
            this.arr1 = []
            this.paixufollow.map((item1, i) => {
              this.arr = item1.data.events
              this.arr.map((item2, index) => {
                // console.log('item2', item2);
                this.obj = {
                  TX: '',
                  name: '',
                  name2: '',
                  text: '',
                  name2url: '',
                  pls: '',
                  dianzan: '',
                  time: '',
                  index: 0
                }
                if (item2.user.avatarUrl) {
                  this.obj.TX = item2.user.avatarUrl
                }
                if (item2.user.nickname) {
                  this.obj.name = item2.user.nickname
                }
                if (item2.actName) {
                  this.obj.name2 = item2.actName
                }
                if (item2.json) {
                  this.obj.text = JSON.parse(item2.json)
                }
                if (item2.bottomActivityInfos) {
                  this.obj.name2url = item2.bottomActivityInfos[0].h5Target
                }
                if (item2.xInfo.info.commentCount) {
                  this.obj.pls = item2.xInfo.info.commentCount
                }
                if (item2.xInfo.info.likedCount) {
                  this.obj.dianzan = item2.xInfo.info.likedCount
                }
                if (item2.eventTime) {
                  this.obj.time = formatDateTime(item2.eventTime)
                }
                // this.obj.index = index
                this.arr1.push(this.obj)
              })
            })
            this.arr1.sort(function (a, b) {
              let obj1 = a['time']
              let obj2 = b['time']
              const val1 = Math.floor(new Date(obj1).getTime() / 1000)
              const val2 = Math.floor(new Date(obj2).getTime() / 1000)
              return val2 - val1
            });
            this.arr1.map((item, i) => {
              item.index = i
            })
            console.log('=====', this.arr1);
          }
        })
      })
    })
    // this.timeturn()
  },
  methods: {
    // 评论
    like (index) {
      this.arr1[index].dianzan += 1
      // this.likes = 1;
      // this.dislikes = 0;
      this.action = 'liked';
    },
    // 评论
    dislike () {
      // this.likes = 0;
      // this.dislikes = 1;
      this.action = 'disliked';
    },
    // timeturn (fmt) {
    //   //author:wangweizhen
    //   var o = {
    //     "M+": this.getMonth() + 1,                 //月份   
    //     "d+": this.getDate(),                    //日
    //     "h+": this.getHours(),                   //小时   
    //     "m+": this.getMinutes(),                 //分   
    //     "s+": this.getSeconds(),                 //秒   
    //     "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
    //     "S": this.getMilliseconds()             //毫秒   
    //   };
    //   if (/(y+)/.test(fmt)) {
    //     fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    //   }
    //   for (var k in o) {
    //     if (new RegExp("(" + k + ")").test(fmt)) {
    //       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    //     }
    //   }
    //   return fmt;
    // }
  },
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
  // background-color: white;
  background-color: #f5f5f5;
  .contentoutter {
    background-color: white;
    width: 730px;
    border: 2px solid #d3d3d3;
    display: flex;
    justify-content: center;
    .contentinner {
      width: 700px;
      .top {
        margin-top: 15px;
        .line {
          height: 2px;
          background-color: red;
          margin-top: -5px;
        }
      }
    }
  }
}
</style>