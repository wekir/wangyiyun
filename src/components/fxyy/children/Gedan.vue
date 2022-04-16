<template>
  <div class="outter">
    <div class="content">
      <div class="innerwapper">
        <Lists :msg="gedan">
          <template slot="top">
            <div class="inner">
              <div class="left">
                <div class="yuanquan"></div>
                <h2>全部</h2>
              </div>
              <div class="right">
                <a-button class="btnstyle"
                          type="primary"
                          @click="btn">
                  热门
                </a-button>
              </div>
              <div class="footer"></div>
            </div>
          </template>
        </Lists>
        <a-pagination @change="onChange"
                      :page-size=number
                      :default-current="1"
                      v-model="pages"
                      :total=total />
      </div>
    </div>
  </div>
</template>

<script>
import Lists from './tuijianchildren/Lists'   //热门推荐
import { gedaninfo, gedantotal } from '../../../network/pc/gedan'

export default {
  name: 'Gedan',
  components: { Lists },
  data () {
    return {
      gedan: {},  //歌单
      number: 35,
      pages: 1,
      total: 0
    }
  },
  mounted () {
    //热门推荐
    gedantotal().then(res => {
      this.total = res.data
      console.log('歌单总数', this.total);
    })
    this.onChange()
  },
  methods: {
    btn () {
      console.log('按钮');
    },
    onChange () {
      // console.log(this.pages);
      gedaninfo(this.number, this.pages).then(res => {
        console.log(res);
        // this.total = res.data.length
        this.gedan = res.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
.outter {
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  .content {
    width: 980px;
    display: flex;
    justify-content: center;
    border: 2px solid #d3d3d3;
    background-color: white;
    padding: 40px;
    .innerwapper {
      width: 900px;
      // background-color: white;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .inner {
        // width: 683px;
        width: 100%;
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
            background-image: url("../../../assets/img/btns.png");
            background-position: -228px -155px;
          }
        }
        .right {
          display: flex;
          width: 60px;
          align-items: center;
          .btnstyle {
            background-color: #c20c0c;
            width: 60px;
            height: 30px;
            border: none;
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
  }
}
</style>