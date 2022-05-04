<template>
  <div class="gqlb">
    <div class="conten">
      <a-table :columns="columns"
               :data-source="datatest"
               :pagination="false"
               :rowKey="record=>record.id"
               :bordered=true>
        <div style="display: flex;justify-content: space-between;"
             slot="bf"
             slot-scope="text,tags,i">
          <span style="font-size:16px;">{{i + 1}}</span>
          <strong><i class="iconfont icon-24gl-playCircle icon-sel right"
               @click="bfsong(i)"></i></strong>
        </div>
        <div style="display: flex;justify-content: space-between;"
             slot="scfxxz"
             slot-scope="text,i">
          <span style="font-size:16px;margin: 0 0 0 10px">{{text}}</span>
          <!-- <span style="font-size:16px;margin: 0 30px 0 10px">{{tags}}</span>
          <span style="font-size:16px;margin: 0 30px 0 10px">{{i}}</span> -->
          <div style="width: 80px;display: flex;justify-content: space-between; ">
            <div class="collection"
                 @click="collection(i)"></div>
            <div class="share"
                 @click="share(i)"></div>
            <div class="download"
                 @click="download(i)"></div>
            <!-- <strong><i class="iconfont icon-24gl-playCircle icon-sel right"
                 @click="bfsong(i)"></i></strong>
            <strong><i class="iconfont icon-24gl-playCircle icon-sel right"
                 @click="bfsong(i)"></i></strong>
            <strong><i class="iconfont icon-24gl-playCircle icon-sel right"
                 @click="bfsong(i)"></i></strong> -->
          </div>

        </div>
      </a-table>
      <a-button @click="get">得到收藏</a-button>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { songxq } from '../../network/song'
import { songtime } from '../../components/comps/time'
import { collection, getcollection } from '../../network/fuction'
import { by } from '../../components/comps/paixu'
const columns = [
  {
    title: '',
    width: 90,
    // height: 90,
    dataIndex: 'bf',
    key: 'bf',
    scopedSlots: { customRender: 'bf' },
  },
  {
    title: '歌曲标题',
    dataIndex: 'songtitle',
    key: 'songtitle',
    scopedSlots: { customRender: 'scfxxz' },
  },
  {
    title: '歌手',
    dataIndex: 'songaudio',
    key: 'songaudio',
  },
  {
    title: '专辑',
    dataIndex: 'album',
    key: 'album',
  },
  {
    title: '时长',
    dataIndex: 'songtime',
    key: 'songtime',
  },
];


export default {
  name: 'searchsongslist',
  props: { ids: Object, bfcs: String },
  data () {
    return {
      datatest: [],
      columns,
      listsongids: [],
    }
  },
  created () {
    this.listsongids = this.$route.params.ids
    this.datatest = []
    // console.log('this.listsongids1', this.listsongids);
    // this.listsongids.sort(function (a, b) {
    //   return b - a
    // })
    // console.log('this.listsongids2', this.listsongids);
    this.listsongids.forEach((item, index) => {

      let obj = {}
      songxq(item).then(res => {
        obj.key = index + 1
        obj.songtitle = res.data.songs[0].name
        obj.songtime = songtime(res.data.songs[0].dt).substring(songtime(res.data.songs[0].dt).length - 5)
        obj.songaudio = res.data.songs[0].ar[0].name
        obj.album = res.data.songs[0].al.name
        this.datatest.push(obj)
        // console.log('thsi.datadfasf', this.datatest);
        if (this.datatest.length == 30) {
          this.datatest.sort(function (a, b) {
            // console.log('123456789');
            // console.log(']]]', a);
            return b.key - a.key
          })
        }
      })
    });
    // this.data.sort(function (a, b) {
    //   console.log('123456789');
    //   console.log(']]]', a);
    //   return b.key - a.key
    // })
    // console.log(this.datatest.length);
    // if (this.data.length == 30) {
    //   this.data.sort(function (a, b) {
    //     console.log('2222');
    //     // let obj1 = a['time']
    //     // let obj2 = b['time']
    //     // const val1 = Math.floor(new Date(obj1).getTime() / 1000)
    //     // const val2 = Math.floor(new Date(obj2).getTime() / 1000)
    //     // return val2 - val1
    //   });
    // }
    console.log('11111', this.datatest);
  },
  computed: {
    ...mapState('songinfo', ['audio'])
  },
  methods: {
    ...mapActions('songinfo', ['switchsong']),
    ...mapMutations('songinfo', ['changebfsongs']),
    // 播放按钮
    bfsong (index) {
      // this.listsongids = this.$route.params.ids
      // // this.data = []
      // // console.log('this.listsongids1', this.listsongids);
      // this.listsongids.sort(function (a, b) {
      //   return b - a
      // })
      // console.log('this.listsongids3', this.listsongids)
      this.switchsong(this.listsongids)
      this.changebfsongs(index)
    },
    // 收藏
    collection (index) {
      // this.listsongids[index]
      // console.log('ss', this.listsongids);
      console.log('收藏', this.listsongids[index.key]);
      collection(1, 106697785).then(res => {
        console.log('shouvcang', res);
      })
    },
    // 分享
    share (index) {
      console.log('分享', index);
    },
    // 下载
    download (index) {
      console.log('下载', index);
    },
    get () {
      getcollection().then(res => {
        console.log('得到收藏', res);
      })
    }
  }
}
</script>

<style scoped lang="scss">
.gqlb {
  display: flex;
  // justify-content: space-between;
  justify-content: center;
  ::v-deep .ant-table-thead > tr > th {
    background-color: #f3f3f3;
    padding: 18px !important;
  }
  ::v-deep .ant-table-tbody > tr > td {
    padding: 11px !important;
  }
  ::v-deep .ant-table-tbody > tr > td > div i:hover {
    color: #626262;
  }
  .conten {
    width: 1100px;
    .collection {
      height: 17px;
      width: 17px;
      // background-color: red;
      background-image: url("../../assets/img/table.png");
      background-position: 0 -172px;
    }
    .share {
      height: 17px;
      width: 17px;
      // background-color: gray;
      background-image: url("../../assets/img/table.png");
      background-position: 0 -192px;
    }
    .download {
      height: 17px;
      width: 17px;
      // background-color: brown;
      background-image: url("../../assets/img/table.png");
      background-position: 40px -172px;
    }
  }
}
</style>