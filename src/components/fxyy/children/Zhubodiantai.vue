<template>
  <div class="outter">
    <div class="content">
      <!-- <div class="innerwapper"> -->
      <Zbdtlist style="width: 900px;"
                :msg="yytj" />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Zbdtlist from '../children/zbdtchild/Zbdtlist'
import { yytjinfo } from '../../../network/pc/zbdtyytj'
export default {
  name: 'Zhubodiantai',
  components: { Zbdtlist },
  data () {
    return {
      yytj: null
    }
  },
  mounted () {
    yytjinfo().then(res => {
      console.log('resmmmm', res);
      this.yytj = res.data
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