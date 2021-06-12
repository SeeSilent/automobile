<template>
  <div>
      <p class="header"><span>宝马</span> <span class="chakan">查看更多 <i class="el-icon-caret-right"></i></span></p>
        <div class="content">
            <ul class="ulcon">
                 <li v-for="item in list " :key="item" class="ulli">
                        <router-link :to="`/xiangqing/${item._id}`" > 
                    <img :src="item.imgurl" alt="" class="imgurl">
                    <p class="itemname">{{item.name}}</p>
                    <p class="itemregion">尊享系列：贵族{{item.region}}，拥你所有</p>
                    <p class="itemmonay">{{item.monay}}起</p>
                    </router-link>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
import { ref } from "vue"
import axios from "axios"
export default {
    name:"BaoMa",
    setup(){
        const list = ref([])
        axios.post("http://localhost:3000/headericon",{
            region:"宝马",
            list:8
        }).then((res)=>{
list.value = res.data
        })

        return { list}
    }
}
</script>

<style scoped>
.itemmonay{
        font-size: 14px;
        font-style: italic;
    text-align: center;
    color: #ff6700;
}
.itemregion{
     font-size: 12px;
    text-align: center;
    color: #b0b0b0;
}
.itemname{
    font-size: 14px;
    text-align: center;
}
.chakan:hover{
    color: #ff6700;
    cursor: pointer;
}
.chakan{
    font-size: 16px;

}
.ulcon{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.ulli{
    width: 300px;
    background-color: #fff;
    margin-bottom: 20px;
}
.ulli:hover{
    transform: translate3d(0,-2px,0);
        box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
        cursor: pointer;
}
.imgurl{
    width: 250px;
    height: 125px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;

}
.content{
    width: 1226px;
        margin-left: auto;
    margin-right: auto;
}
.header{
    font-size: 22px;
    color: #333;
    width: 1226px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    line-height: 58px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
}
</style>