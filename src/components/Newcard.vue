<template>
    <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide mx-auto">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="./icons/img/c1.jpg" style="object-fit: cover; height: 20%; width: 100%;"  alt="...">
                </div>
                <div class="carousel-item">
                <img src="./icons/img/c2.jpg" style="object-fit: cover; height: 20%; width: 100%;"  alt="...">
                </div>
                <div class="carousel-item">
                <img src="./icons/img/c3.jpg" style="object-fit: cover; height: 20%; width: 100%;" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

    </div>

    <div class="row mb-2" style="margin: 50px;">
            <div class="col-md-6" v-for="(n,i) in travelList" :key="n">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  
                  <h3 class="mb-0">{{n.name}}</h3>
                  <div class="mb-1 text-body-secondary">{{n.price}} </div>
                  <p class="card-text mb-auto">{{n.text_box}}</p>
                  
                  <div style="margin-bottom: 30px;">
                  <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 icon-link-hover stretched-link">เพิ่มเติม
                    <svg class="bi"> <use xlink:href="#chevron-right"/></svg>
                 </RouterLink>
                </div>     
                </div>
                <div class="col-auto d-none d-lg-block">
                  <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" 
                  style="margin: 15px;" >
                    <image :xlink:href="n.img" x="0" y="10" width="200" height="200" />
                  </svg>
                </div>
              </div>
            </div>
            
          
        </div>
    
</template>
    
    <script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue';
    
    
    

    const travelList=ref([
      {name: 'เกี่ยวกับเรา',   img:"https://www.petmap.co/wp-content/uploads/2020/06/106003203_1385698631627513_4277046609756839871_o.jpg", 

        },
    
      {name:'ห้องพักและราคา',  img:"http://www.catdeva.com/data/content/article/1-kofuku4.jpg", 

      
        },


      
    ])
    
    </script>
<style scoped>


</style>
