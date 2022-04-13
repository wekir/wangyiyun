<template>
  <div class="gqlb">
    <div class="top">
      <h1>包含歌曲列表</h1>
      <div>
        <span>播放：</span>
        <span style="color:#c20c0c">122</span>
        <span>次</span>
      </div>
    </div>
    <a-table :columns="columns"
             :data-source="data"
             :pagination="false"
             :rowKey="record=>record.id"
             :bordered=true>
      <div slot="bf"
           slot-scope="text,tags,i">
        <span style="font-size:16px;margin: 0 30px 0 10px">{{i + 1}}</span>
        <strong><i class="iconfont icon-24gl-playCircle icon-sel right"
             @click="bfsong(i)"></i></strong>
      </div>
    </a-table>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { songxq } from '../../network/song'
const columns = [
  {
    title: '',
    width: 90,
    dataIndex: 'bf',
    key: 'bf',
    scopedSlots: { customRender: 'bf' },
  },
  {
    title: '歌曲标题',
    dataIndex: 'songtitle',
    key: 'songtitle',
  },
  {
    title: '时长',
    dataIndex: 'songtime',
    key: 'songtime',
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
  }
];


export default {
  name: 'songslist',
  props: { ids: String },
  data () {
    return {
      data: [],
      columns,

      listsongids: [],
      // arr: []
    }
  },
  watch: {
    ids: {
      immediate: true,
      handler (val) {
        // console.log(val);
        this.listsongids = JSON.parse(val).map((item) => {
          return item.slice(9)
        })
        // // 获得歌手数据放入data数组里
        this.listsongids.forEach((item, index) => {
          this.data = []
          // console.log('111', item);
          let obj = {}
          songxq(item).then(res => {
            // console.log('666', res);
            obj.key = index + 1
            obj.songtitle = res.data.songs[0].name
            obj.songtime = res.data.songs[0].dt
            obj.songaudio = res.data.songs[0].ar[0].name
            obj.album = res.data.songs[0].al.name
            this.data.push(obj)
            // console.log(this.data);
          })
        });
      }
    }
  },
  // mounted () {
  //   // 得到列表歌单的所有id
  //   console.log("qwer");
  //   this.listsongids = JSON.parse(this.ids).map((item) => {
  //     return item.slice(9)
  //   })
  //   // // 获得歌手数据放入data数组里
  //   this.listsongids.forEach((item, index) => {
  //     // console.log('111', item);
  //     let obj = {}
  //     songxq(item).then(res => {
  //       // console.log('666', res);
  //       obj.key = index + 1
  //       obj.songtitle = res.data.songs[0].name
  //       obj.songtime = res.data.songs[0].dt
  //       obj.songaudio = res.data.songs[0].ar[0].name
  //       obj.album = res.data.songs[0].al.name
  //       this.data.push(obj)
  //     })
  //   });
  //   console.log('按时的', this.data);
  //   // this.test1()
  //   // // console.log(this.listsongids);
  //   // console.log('this.audio', this.audio);
  //   // console.log('去微软', this.data);
  //   // this.audio.foreach((item) => {
  //   //   let obj = {}
  //   //   obj.key = item.key
  //   //   obj.songtitle = item.songtitle
  //   //   obj.songtime = item.songtime
  //   //   obj.songaudio = item.songaudio
  //   //   obj.album = item.album
  //   //   this.data.push(obj)
  //   // })

  //   // this.switchsong(this.listsongids)
  //   // for (var item of this.audio) {
  //   //     console.log('kk', item);
  //   //     let obj = {}
  //   //     obj.key = item.key
  //   //     obj.songtitle = item.songtitle
  //   //     obj.songtime = item.songtime
  //   //     obj.songaudio = item.songaudio
  //   //     obj.album = item.album
  //   //     this.data.push(obj)
  //   //   }
  // },
  computed: {
    ...mapState('songinfo', ['audio'])
  },
  methods: {
    ...mapActions('songinfo', ['switchsong']),
    ...mapMutations('songinfo', ['changebfsongs']),
    // 播放按钮
    bfsong (index) {
      // console.log('musicid', musicid);
      this.switchsong(this.listsongids)
      this.changebfsongs(index)
    },
    // test () {
    // for (var item of this.audio) {
    //   console.log('kk', item);
    //   let obj = {}
    //   obj.key = item.key
    //   obj.songtitle = item.songtitle
    //   obj.songtime = item.songtime
    //   obj.songaudio = item.songaudio
    //   obj.album = item.album
    //   this.data.push(obj)
    // }
    // },
    // async test1 () {
    //   this.switchsong(this.listsongids)
    //   await this.test()
    // }
  }
}
</script>

<style scoped lang="scss">
.gqlb {
  ::v-deep .ant-table-thead > tr > th {
    background-color: #f3f3f3;
    padding: 8px !important;
  }
  ::v-deep .ant-table-tbody > tr > td {
    padding: 5px !important;
  }
  ::v-deep .ant-table-tbody > tr > td > div i:hover {
    color: #626262;
  }
  .top {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>