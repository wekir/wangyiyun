<template>
  <div class="outcontainer">
    <!-- 顶部 -->
    <div class="outer">
      <div class="inner">
        <div class="left">
          <div class="yuanquan"></div>
          <h2>榜单</h2>
        </div>
        <div class="right">
          <span>更多</span>
          <div class="next"></div>
        </div>
        <div class="footer"></div>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="main">
      <a-table :pagination="false"
               :columns="columns"
               :data-source="data1"
               :rowKey="record=>record.id"
               :bordered=true>
        <div slot="bf"
             slot-scope="text,tags,i">
          <span style="font-size:16px;margin: 0 30px 0 10px;width:20px">{{tags.id + 1}}</span>
          <span class="songname">{{text}}</span>
          <span style="display:none">{{tags.songid}}</span>
          <!-- <span>{{tags}}</span> -->
          <strong><i :id="tags.songid"
               style="margin-right:20px"
               class="iconfont icon-24gl-playCircle icon-sel"
               @click="bsbsbsong(i)"></i></strong>

        </div>
      </a-table>
      <a-table :pagination="false"
               :columns="columns"
               :data-source="data2"
               :rowKey="record=>record.id"
               :bordered=true>
        <div slot="bf"
             slot-scope="text,tags,i">
          <span style="font-size:16px;margin: 0 30px 0 10px;width:20px">{{i + 1}}</span>
          <span class="songname">{{text}}</span>
          <span style="display:none">{{tags.songid}}</span>
          <!-- <span>{{tags}}</span> -->
          <strong><i style="margin-right:20px"
               class="iconfont icon-24gl-playCircle icon-sel"
               @click="xgbsbsong(i)"></i></strong>

        </div>
      </a-table>
      <a-table :pagination="false"
               :columns="columns"
               :data-source="data3"
               :rowKey="record=>record.id"
               :bordered=true>
        <div slot="bf"
             slot-scope="text,tags,i">
          <span style="font-size:16px;margin: 0 30px 0 10px;width:20px">{{i + 1}}</span>
          <span class="songname">{{text}}</span>
          <span style="display:none">{{tags.songid}}</span>
          <!-- <span>{{tags}}</span> -->
          <strong><i style="margin-right:20px"
               class="iconfont icon-24gl-playCircle icon-sel"
               @click="ycbsbsong(i)"></i></strong>

        </div>
      </a-table>

    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import { bsbinfo, xgbinfo, ycbinfo } from '../../../../network/pc/rmtj';
const columns = [
  {
    title: '',
    width: "225px",
    dataIndex: 'song',
    key: 'song',
    scopedSlots: { customRender: 'bf' },
  }
];
export default {
  name: 'Bandanlist',
  data () {
    return {
      data1: [],
      data2: [],
      data3: [],
      columns,
      bsb: {},   //飙升榜
      xgb: {},   //新歌榜
      ycb: {},   //原创榜
      bsbids: [], //飙升榜id
      xgbids: [],  //新歌榜id
      ycbids: [],  //原创榜id
    }
  },
  mounted () {
    // 飙升榜
    bsbinfo().then(res => {
      this.bsb = res.data
      this.bsb.forEach((item, index) => {
        this.data1.push(item)
        this.bsbids.push(item.songid)
      });
    })
    // 新歌榜
    xgbinfo().then(res => {
      this.xgb = res.data
      this.xgb.forEach((item, index) => {
        this.data2.push(item)
        this.xgbids.push(item.songid)
      });
    })
    // 原创榜
    ycbinfo().then(res => {
      this.ycb = res.data
      this.ycb.forEach((item, index) => {
        this.data3.push(item)
        this.ycbids.push(item.songid)
      });
    })
  },
  methods: {
    ...mapActions('songinfo', ['switchsong']),
    ...mapMutations('songinfo', ['changebfsongs']),
    // 飙升榜播放按钮
    bsbsbsong (index) {
      this.switchsong(this.bsbids)
      this.changebfsongs(index)
    },
    // 新歌榜播放按钮
    xgbsbsong (index) {
      this.switchsong(this.xgbids)
      this.changebfsongs(index)
    },
    // 原创榜播放按钮
    ycbsbsong (index) {
      this.switchsong(this.ycbids)
      this.changebfsongs(index)
    },
  }
}
</script>

<style scoped lang="scss">
.outcontainer {
  width: 733px;
  margin-bottom: 45px;
  // background-color: red;
  .outer {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 7px;

    .inner {
      width: 683px;
      height: 35px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-bottom: 50px;
      .left {
        display: flex;
        .yuanquan {
          width: 35px;
          height: 35px;
          background-image: url("../../../../assets/img/btns.png");
          background-position: -228px -155px;
        }
      }
      .right {
        display: flex;
        width: 60px;
        align-items: center;

        .next {
          width: 30px;
          height: 30px;
          background-image: url("../../../../assets/img/btns.png");
          background-position: 5px -230px;
          // padding-left: 20px;
        }
      }
      .footer {
        width: 100%;
        height: 2px;
        background-color: #c20c0c;
        margin: -5px 0 10px 0;
      }
    }
  }

  .main {
    display: flex;
    justify-content: center;
    // justify-content: space-around;
    // flex-wrap: wrap;
    ::v-deep .ant-table-thead > tr > th {
      background-color: #f3f3f3;
      padding: 8px !important;
    }
    ::v-deep .ant-table-tbody > tr > td {
      padding: 5px !important;
      color: #000;
    }
    ::v-deep .ant-table-tbody > tr > td > div {
      display: flex;
      justify-content: space-between;
    }
    ::v-deep .ant-table-tbody > tr > td > div i:hover {
      color: #626262;
    }
    .songname {
      width: 128px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>