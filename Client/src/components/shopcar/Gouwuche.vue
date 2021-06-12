<template>
  <div class="clearfix shopcar">
      <img :src="item.imgurl" alt="" class="imgurl">
      <div class="right">
            <p class="name">汽车名称:{{item.name}}</p>
       
        <p class="region">汽车类型：{{item.region}}</p>
         <p class="monay">汽车首发价：{{item.monay}}</p>
      </div>
    
  </div>
</template>

<script>
export default {
    name:"Gouwuche",
    props:["item"]
}
</script>

<style scoped>
.region{
    font-size: 18px;
}
.monay {
    font-size: 16px;
    color: #ff6700;
}
.name {
    font-size: 20px;
    color: #b0b0b0;
}
.imgurl{
    float: left;
    width: 400px;
    height: 200px;
}
.right{
    float: left;
}
.right p{
    text-align: center;
}
.shopcar{
    width: 1226px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
}
.shopcar:hover{
transform: translate3d(0,-2px,0);
box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
}
</style>