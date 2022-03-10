<template>
  <div class="bottom">
    <a-button class="btn">
      上一首
    </a-button>
    <a-button class="btn">
      下一首
    </a-button>
    <!-- <aplayer :music="audio[0]"
               :list="audio"
               :show-Lrc="true"></aplayer> -->
    <div class="yinpin">
      <aplayer false
               theme="white"
               :music="audio[0]"
               :audio="audio"
               :show-Lrc="true">
      </aplayer>
    </div>

  </div>
</template>

<script>
import aplayer from "vue-aplayer";

export default {
  name: 'bottomyinpin',
  components: { aplayer },
  data () {
    return {
      audio: [
        {
          title: '天空之城',
          color: 'white',
          artist: '黄叶',
          src: 'http://m701.music.126.net/20220310153335/fb3b9e81f04054d348468fe3058cf711/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/9554478368/9941/07a7/74c8/8df047e7c0cdefeeb158e4a5630dee90.flac',
          pic: 'https://p1.music.126.net/pHW5tAm10IhHGGGGoa1f2g==/109951165754949754.jpg?param=70y70',
          lrc: '[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh',
        },
        {
          title: '蒲空英的约定',
          artist: '黄叶',
          src: 'http://m701.music.126.net/20220310153335/fb3b9e81f04054d348468fe3058cf711/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/9554478368/9941/07a7/74c8/8df047e7c0cdefeeb158e4a5630dee90.flac',
          pic: "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720200713203148.jpg",
          lrc: '[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh',
        },
        // {
        //   title: '无畏',
        //   artist: '马頔',
        //   url: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E9%A9%AC%E9%A0%94%20-%20%E6%97%A0%E7%95%8F.flac',
        //   pic: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E4%BB%A5%E5%AE%B6%E4%B9%8B%E5%90%8D.jpg', // prettier-ignore
        //   lrc: '[00:00.00] (,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词',
        // },
        // {
        //   title: '蓝乐',
        //   artist: '白纸',
        //   url: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E8%93%9D%E4%B9%90%20-%20%E7%99%BD%E7%BA%B8.flac',
        //   pic: "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/-1992181439.jpg",
        //   lrc: '[00:00.00] (,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词',
        // },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.bottom {
  color: white;
  position: fixed;
  top: 550px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2e2e2e;
  .btn {
    background-color: #cccccc;
    margin: 0 20px;
  }
  .yinpin {
    width: 900px;
    background-color: #2e2e2e;
    ::v-deep .aplayer-title {
      color: white;
    }
    ::v-deep .aplayer-author {
      color: white;
    }
    .aplayer {
      background-color: #2e2e2e;
      .aplayer-info {
        // background-color: #2e2e2e;
        .aplayer-music {
          // background-color: #2e2e2e;
          color: white;
        }
      }
    }
  }
}
</style>