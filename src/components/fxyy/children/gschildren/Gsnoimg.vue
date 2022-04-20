<template>
  <div class="outcontainer">
    <!-- 内容区 -->
    <div class="main">
      <!-- <h1>{{msg}}</h1> -->
      <!-- <h3>{{msg}}</h3> -->
      <a-divider type="horizontal"
                 :dashed="true" />
      <Noimgitem v-for="(item,index) in msg"
                 :key="item.id">
        <template slot="footer">
          <router-link :to="{name:'gsitempages',params: {allinfo:item,index:index,num:msg.length,all:msg}}"
                       href="#">
            <div class="botttom">
              <div>{{item.artistName}}</div>
              <div class="userimg"></div>
            </div>
          </router-link>
        </template>
      </Noimgitem>
    </div>
  </div>
</template>

<script>
import Noimgitem from './Noimgitem.vue'
export default {
  name: 'Gsnoimg',
  components: { Noimgitem },
  props: ['msg'],
}
</script>

<style scoped lang="scss">
.outcontainer {
  .main {
    display: flex;
    // justify-content: space-around;
    justify-content: space-between;
    flex-wrap: wrap;
    a {
      display: block;
      color: #000;
      img {
        width: 130px;
        height: 130px;
      }
    }
    .botttom {
      display: flex;
      height: 30px;
      justify-content: space-between;
      .userimg {
        width: 20px;
        height: 20px;
        background-image: url("../../../../assets/img/someicons.png");
        background-position: 0 -737px;
      }
    }
  }
}
</style>