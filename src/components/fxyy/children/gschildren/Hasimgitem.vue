<template>
  <div class="listitem">
    <slot name="picture"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'Hasimgitem',
  props: { itemmsg: Object },
}
</script>

<style scoped lang="scss">
.listitem {
  padding-bottom: 10px;
}
</style>