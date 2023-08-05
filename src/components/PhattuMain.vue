<template>
  <div class="PhattuMain">
    <main class="color-bg-main">
        <div class="main-phattu">
           <router-view/> 
        </div>
        <!-- <quan-li-cac-phat></quan-li-cac-phat> -->
        
    </main>
  </div>
</template>

<script>

// import QuanLiCacPhat from './QuanLiCacPhat.vue'
// import QuanLiChua from './QuanLiChua.vue'
export default {
components:{
    // QuanLiCacPhat,
    // QuanLiChua
}
}
</script>

<style>
.color-bg-main{
    background-color: #FCEDDA;
    min-height: 800px;
    width: 100%;
}
.main-phattu{
    width: 98%;
    margin: 0 auto;
}.box-icon-search{
    width: 30px;
    height: 30px;
    border-radius:50% ;
    background-color: #51C51A;
    display: flex;
    justify-content: center;
    align-items: center;
}
.rounded{
    padding-left: 8px;
    height: 28px;
}
</style>