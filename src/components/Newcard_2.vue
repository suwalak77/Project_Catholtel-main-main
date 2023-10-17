<template>
    <div class="box_all">
    <div class="col" v-for="(n,i) in travelList" :key="n">
      <div class="card" style="width: 60rem;" >
        <img :src="n.img" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">{{ n.name }}</h3>
          <a class="btn btn-primary" @click="list_local_control(i.name, i.quantity)"> จองห้องพัก </a>
        

        </div>
      </div>
    </div>

   
  </div>

</template>

<script setup>

import { ref } from 'vue';

const travelList=ref([
    {name:' ห้องพัก:ขนาดเล็ก/ราคา:400',   img:"https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/jajah_student/cat%20hotel/cat6_1.jpg", quantity: 0},
    {name:' ห้องพัก:ขนาดใหญ่/ราคา:700',   img:"https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/jajah_student/cat%20hotel/cat8_1.jpg", quantity: 0},
    {name:' ห้องพัก:แบบรวม/ราคา:300',   img:"https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/jajah_student/cat%20hotel/cat1_1.jpg", quantity: 0},])

</script>

<style>

.card-img-top{
height: 100%;
padding: 25px;

}
.box_all{
justify-content: center;
align-items: center;
margin-left: 50px;
margin-right: 50px;
text-align: center;
border-radius: 60px;

}

.card{
justify-content: center;
margin-right: 100px;
margin-top: 50px;
text-align: center;
}

</style>
