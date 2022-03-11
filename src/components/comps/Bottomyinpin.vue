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
                :music="audio[0]"
                :audio="audio"
                :show-Lrc="true">
      </a-player>
    </div>

  </div>
</template>

<script>
import VueAplayer from 'vue-aplayer'
// import { mapState, mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
  name: 'bottomyinpin',
  components: { 'a-player': VueAplayer },
  data () {
    return {
      flag: false,
      musicList: '',
      songList: {
        src: ''
      },
    }
  },
  computed: {
    ...mapState('songinfo', ['audio'])
  },
  mounted () {
    console.log('audio[0]', this.audio);
  },
  methods: {
    // 上一首
    back () {
      this.$refs.aplayer.skipBack();
    },
    // 下一首
    forword () {
      this.$refs.aplayer.skipForward();
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