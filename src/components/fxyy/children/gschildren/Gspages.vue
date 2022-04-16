<template>
  <div class="wapper">
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
  </div>
</template>

<script>
export default {
  name: 'Geshou'
}
</script>

<style scoped lang="scss">
.wapper {
  padding: 40px;
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
        background-image: url("../../../../assets/img/btns.png");
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
</style>