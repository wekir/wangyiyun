<template>
  <div class="outter">
    <div class="content">
      <!-- <div class="innerwapper"> -->
      <Lastxdsjlist style="width: 900px;"
                    :msg="xdsj" />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Lastxdsjlist from '../../fxyy/children/tuijianchildren/Lastxdsjlist'
import { lastXDSJinfo } from '../../../network/pc/lastxdsj'
export default {
  name: 'Xindieshangjia',
  components: { Lastxdsjlist },
  data () {
    return {
      xdsj: null
    }
  },
  mounted () {
    lastXDSJinfo().then(res => {
      console.log('resmmmm', res);
      this.xdsj = res.data
    })
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
    // .innerwapper {
    //   width: 900px;
    //   // background-color: white;
    //   display: flex;
    //   justify-content: center;
    //   flex-wrap: wrap;
    // }
  }
}
</style>