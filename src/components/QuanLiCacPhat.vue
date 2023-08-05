<template>
<div class="quanlicacphat">
  <title-card :title="title"></title-card>
  <header>
    <HeaderPhattu ></HeaderPhattu>
  </header>
  <nav>
    <NavBarPhatTu @index="clickChange()"></NavBarPhatTu>
  </nav>
    <div class="card-phattu">
    <CardPhatTuFirst></CardPhatTuFirst>
  </div>
  <div class="card-phattu-second mt-4">
            <CardPhatTuSecond :clickChange="clickChange"></CardPhatTuSecond>
        </div>
</div>
  
</template>

<script>
import TitleCard from './TitleCard.vue'
export default {
  components: { TitleCard },
  data(){
    return {
      title:"Giám sát phật tử",
      idNav:0
    }
  },
  methods:{
    clickChange()
    {
      return this.idNav = 1
    }
  }
}
</script>

<style scoped>

</style>