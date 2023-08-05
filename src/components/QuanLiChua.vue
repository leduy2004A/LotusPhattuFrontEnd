<template>
  <div class="quanlichua">
    
    <header>
      <header-phattu></header-phattu>
    </header>
    <nav>
      <nav-bar-phat-tu @index ="clickChange()"></nav-bar-phat-tu>
    </nav>
    <main>
      <title-card :title="title"></title-card>
      <div class="card-phattu">
      <card-chua-first></card-chua-first>
      </div>
      <div class="card-phattu-second mt-4">
      <card-chua-second  :clickChange="clickChange"></card-chua-second>
      </div>
    </main>
  </div>
</template>

<script>
import cardChuaFirst from './card-chua-first.vue'
import titleCard from './TitleCard.vue'
import cardChuaSecond from './card-chua-second.vue'
export default {
  components:{
    cardChuaFirst,
    titleCard,
    cardChuaSecond
  },
   data(){
    return {
      title:"Giám sát chùa",
      idNav:0
    }
  },
  methods:{
    clickChange(){
      return this.idNav = 2
    }
  },

}
</script>

<style>

</style>