<template>
  <div class="outcontainer">
    <!-- 内容区 -->
    <div class="main">
      <Hasimgitem v-for="(item,index) in msg"
                  :key="item.id">
        <template slot="picture">
          <router-link :to="{name:'gsitempages',params: {allinfo:item,index:index,num:msg.length,all:msg}}"
                       href="#">
            <img :src="item.bigphoto">
          </router-link>
        </template>
        <template slot="footer">
          <router-link :to="{name:'gsitempages',params: {allinfo:item,index:index,num:msg.length,all:msg}}"
                       href="#">
            <div class="botttom">
              <div>{{item.artistName}}</div>
              <div class="userimg"></div>
            </div>
          </router-link>
        </template>
      </Hasimgitem>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Hasimgitem from './Hasimgitem.vue'
// import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Gshasimg',
  components: { Hasimgitem },
  props: ['msg'],
  // mounted () {
  //   console.log('msgggg', this.msg);
  // }
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