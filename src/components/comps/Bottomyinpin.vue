<template>
  <div class="bottom">
    <a-button @click="back"
              class="btn">
      上一首
    </a-button>
    <a-button @click="forword"
              class="btn">
      下一首
    </a-button>
    <!-- <aplayer :music="audio[0]"
               :list="audio"
               :show-Lrc="true"></aplayer> -->
    <div class="yinpin">
      <a-player false
                theme="white"
                :music="audio[whichSong]"
                :audio="audio"
                :show-Lrc="true">
      </a-player>
    </div>

  </div>
</template>

<script>
import VueAplayer from 'vue-aplayer'
// import { mapState, mapActions } from 'vuex'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'bottomyinpin',
  components: { 'a-player': VueAplayer },
  data () {
    return {
      songindex: 0,  //当前列表的第几首歌
    }
  },
  computed: {
    ...mapState('songinfo', ['audio', 'whichSong'])
  },
  methods: {
    ...mapMutations('songinfo', ['changebfsongs']),
    // 上一首
    back () {
      if (this.whichSong == 0) {
        this.songindex = this.whichSong
        this.songindex = this.audio.length - 1
        this.changebfsongs(this.songindex)
      } else {
        this.songindex = this.whichSong - 1
        this.changebfsongs(this.songindex)
        // this.songindex -= 1
      }
    },
    // 下一首
    forword () {
      if (this.whichSong === this.audio.length - 1) {
        this.changebfsongs(0)
        // this.songindex = 0
      } else {
        this.songindex = this.whichSong + 1
        this.changebfsongs(this.songindex)
        // this.songindex += 1
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bottom {
  color: white;
  position: fixed;
  // top: 550px;
  bottom: 0;
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