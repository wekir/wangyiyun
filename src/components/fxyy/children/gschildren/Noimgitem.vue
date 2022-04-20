<template>
  <div class="listitem">
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'Noimgitem',
  props: { itemmsg: Object },
}
</script>

<style scoped lang="scss">
.listitem {
  width: 130px;
  height: 30px;
  // padding: 10px 10px 220px 10px;

  .info {
    height: 40px;
    width: 140px;
    a {
      color: #000000;
    }
  }
}
</style>



