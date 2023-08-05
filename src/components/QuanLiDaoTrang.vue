<template>
  <div class="quanlidaotrang">
    <header>
        <HeaderPhattu></HeaderPhattu>
    </header>
    <nav>
        <NavBarPhatTu @index="clickChange"></NavBarPhatTu>
    </nav>
    <main>
        <title-card :title="title"></title-card>
        <div class="card-phattu">
        <card-daotrang-first></card-daotrang-first>
        </div>
        <div class="card-phattu-second mt-4">
        <card-daotrang-second :clickChange="clickChange"></card-daotrang-second>
        </div>
    </main>
    
  </div>
</template>

<script>
import cardDaotrangFirst from './card-daotrang-first.vue'
import TitleCard from './TitleCard.vue'
import cardDaotrangSecond from './card-daotrang-second.vue'
export default {
    data(){
        return {
            title:"Đạo tràng"
        }
    },
    components:{
        cardDaotrangFirst,
        TitleCard,
        cardDaotrangSecond
    },
    methods:{
        clickChange(){
            return 3;
        }
    }
}
</script>

<style>

</style>