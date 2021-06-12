
<template>
  <div>
    <HomeHeader />
    <Lunbo />
    <HuaKuai />
    <div class="content">
      <Meisai />
      <Aodicar />
      <Bentian />
      <DazhongCar />
      <BaoMa />
      <Kaidi />
      <Binli />
      <Leikesa />
      <Wuling />
    </div>

  </div>
</template>

<script>
import Wuling from "../components/content/Wuling.vue"
import Leikesa from "../components/content/Leikesa.vue"
import Binli from "../components/content/Binli.vue"
import Kaidi from "../components/content/Kaidi.vue"
import BaoMa from "../components/content/BaoMa.vue"
import DazhongCar from "../components/content/DazhongCar.vue"
import Bentian from "../components/content/Bentian.vue"
import Aodicar from "../components/content/Aodicar.vue"
import HomeHeader from "../components/hometop/HomeHeader.vue";
import Lunbo from "../components/lunbo/Lunbo.vue"
import HuaKuai from "../components/huakuai/HuaKuai.vue"
import Meisai from "../components/content/Meisai.vue"
export default {
  name: "Home",
  components:{
    HomeHeader,
    Lunbo,
    HuaKuai,
    Meisai,
    Aodicar,
    Bentian,
    DazhongCar,
    BaoMa,
    Kaidi,
    Binli,
    Leikesa,
    Wuling
  }
};
</script>

<style scoped>
.content{
  background-color: #f5f5f5;
}
</style>
