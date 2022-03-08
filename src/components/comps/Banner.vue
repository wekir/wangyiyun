<template>
  <div class="container">
    <!-- 轮播图 -->
    <div class="banner">

      <a-carousel arrows>
        <!-- 左箭头 -->
        <div slot="prevArrow"
             class="custom-slick-arrow"
             style="left: 10px;zIndex: 1">
          <a-icon type="left-circle" />
        </div>
        <!-- 右箭头 -->
        <div slot="nextArrow"
             class="custom-slick-arrow"
             style="right: 10px">
          <a-icon type="right-circle" />
        </div>
        <div v-for="(item) in banners"
             :key="item.encodeId">
          <img :src="item.imageUrl">
        </div>
      </a-carousel>
    </div>

  </div>
</template>

<script>
import { getbanner } from '../../network/banner'

export default {
  name: 'banner',
  data () {
    return {
      banners: []  //轮播图
    }
  },
  mounted () {
    // 请求轮播图
    getbanner(0).then(res => {
      this.banners = res.data.banners
    })
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  .banner {
    width: 983px;
    // height: 160px;
    // line-height: 160px;
    ::v-deep .slick-slide {
      text-align: center;
      height: 284px;
      line-height: 284px;
      background: #364d79;
      overflow: hidden;
    }
    ::v-deep .slick-slide img {
      height: 284px;
      width: 983px;
    }

    ::v-deep .custom-slick-arrow {
      width: 25px;
      height: 25px;
      font-size: 25px;
      color: #fff;
      background-color: rgba(31, 45, 61, 0.11);
      opacity: 0.3;
    }
    ::v-deep .custom-slick-arrow:before {
      display: none;
    }
    ::v-deep .custom-slick-arrow:hover {
      opacity: 0.5;
    }
  }
}
</style>