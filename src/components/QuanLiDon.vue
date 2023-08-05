<template>
  <header>
    <header-phattu></header-phattu>
  </header>
  <nav>
    <nav-bar-phat-tu @index="clickChange"></nav-bar-phat-tu>
  </nav>
  <main>
    <title-card :title="title"></title-card>
    <div class="card-phattu">
    <cardQuanlidonFirst></cardQuanlidonFirst>
    </div>
    <div class="card-phattu-second mt-4">
        <cardQuanlidonSecond :clickChange="clickChange"></cardQuanlidonSecond>
    </div>
  </main>
</template>

<script>
import cardQuanlidonFirst from './card-quanlidon-first.vue'
import cardQuanlidonSecond from './card-quanlidon-second.vue'
import TitleCard from './TitleCard.vue'
export default {
    data(){
        return{
            title:"Đơn đăng kí"
        }
    },
    components:{
        cardQuanlidonFirst,
        cardQuanlidonSecond,
        TitleCard
    },
    methods:{
        clickChange(){
            console.log("duy")
            return 4;
        }
    }
}
</script>

<style>

</style>