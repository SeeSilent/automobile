<template>
  <div class="content">
    <p class="id">产品ID：{{item._id}}</p>
    <img :src="item.imgurl" alt="" class="imgurl">
    <p class="region">所属系列：{{item.region}}</p>
    <p class="monay">首发价：{{item.monay}}</p>
  </div>
</template>

<script>
export default {
    name:"Xiangqingye",
    props:["item"],
    setup(){
    
    }
}
</script>

<style scoped>
.content{
  width: 1226px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.id{
  font-size: 24px;
}
.imgurl{
  width: 560px;
}
.region{
  font-size: 24px;
}
.monay{
  font-size: 24px;
}
</style>