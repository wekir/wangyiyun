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
          <div style="width: 60px;display: flex;justify-content: space-between; ">
            <!-- <div class="collection"
                 @click="collection(i)"></div> -->
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
import { collection, getcollection, share, download } from '../../network/fuction'
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
      // http://music.163.com/share/1658129428/21644539694?userid=1658129428
      sharelist: {
        share_url: ""
      },
    }
  },
  created () {
    this.listsongids = this.$route.params.ids
    this.datatest = []
    this.listsongids.forEach((item, index) => {

      let obj = {}
      songxq(item).then(res => {
        obj.key = index + 1
        obj.songtitle = res.data.songs[0].name
        obj.songtime = songtime(res.data.songs[0].dt).substring(songtime(res.data.songs[0].dt).length - 5)
        obj.songaudio = res.data.songs[0].ar[0].name
        obj.album = res.data.songs[0].al.name
        this.datatest.push(obj)
        if (this.datatest.length == 30) {
          this.datatest.sort(function (a, b) {
            return b.key - a.key
          })
        }
      })
    });
  },
  computed: {
    ...mapState('songinfo', ['audio'])
  },
  methods: {
    ...mapActions('songinfo', ['switchsong']),
    ...mapMutations('songinfo', ['changebfsongs']),
    // 播放按钮
    bfsong (index) {
      this.switchsong(this.listsongids)
      this.changebfsongs(index)
    },
    // 收藏
    collection (index) {
      collection(1, this.listsongids[index.key - 1]).then(res => {
        console.log('shouvcang', res);
      })
    },
    // 分享
    share (index) {
      share('song', this.listsongids[index.key - 1]).then(res => {
        //分享到QQ好友(PC端可用)
        //此处分享链接内无法携带图片
        this.sharelist.share_url = res.data.resUrl
        location.replace(
          "https://connect.qq.com/widget/shareqq/index.html?url=" +
          encodeURIComponent(this.sharelist.share_url)
        );
      })
    },
    // 下载
    download (index) {
      console.log('this.listsongids[index.key - 1]', this.listsongids[index.key - 1]);
      download(this.listsongids[index.key - 1]).then(res => {
        let blob = new Blob([res.data.data.url], { type: "audio/mpeg; charset=UTF-8" })
        let objectUrl = URL.createObjectURL(blob) // 创建URL
        const link = document.createElement('a')
        link.href = objectUrl
        // link.download = '.xlsx'// 自定义文件名
        //这里是获取后台传过来的文件名
        link.setAttribute("download", index.songtitle)
        link.click() // 下载文件
        URL.revokeObjectURL(objectUrl) // 释放内存
      })
      // console.log('下载', index);
    },
    get () {
      getcollection('1658129428').then(res => {
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