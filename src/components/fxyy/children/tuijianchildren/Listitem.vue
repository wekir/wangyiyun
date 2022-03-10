<template>
  <div class="listitem">
    <slot name="picture"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'listitem',
  props: { itemmsg: Object },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.listitem {
  // width: 140px;
  height: 180px;
  padding: 10px 10px 220px 10px;
  a {
    display: block;
    img {
      width: 140px;
      height: 140px;
    }
  }
  .bofang {
    background-color: #221612;
    opacity: 0.7;
    margin-top: -28px;
    height: 28px;
    // width: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #cbcaca;
    // position: relative;
    // z-index: 1;

    // 图标大小
    .icon-sel {
      font-size: 13px;
      padding: 0 8px 0 8px;
    }
  }
  .info {
    height: 40px;
    width: 140px;
    a {
      color: #000000;
    }
  }
}
</style>