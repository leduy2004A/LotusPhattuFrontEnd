<template>
 <div id="overlay" @click.self="offModal" v-if="off">
  <div class="main-modal">
    <div class="main-content-in-modal">
      <content-in-modal @offModal="offModalMain" v-if="clickChange() === 1" :phattuid="phattuid" @dong="dongmodal" @openmodal="open"></content-in-modal>
      <content-chua-in-modal @offModal="offModalMain" v-if="clickChange() === 2" :chuaid="chuaid" @closemodal="dongmodal"></content-chua-in-modal>
      <content-dao-trang-modal @offModal="offModalMain" v-if="clickChange() === 3" :daotrangid="daotrangid"></content-dao-trang-modal>
      <ContentDonModal v-if="clickChange() === 4" @offModal="offModalMain"></ContentDonModal>
    </div>
  </div>
 </div>
</template>

<script>
import ContentChuaInModal from './ContentChuaInModal.vue'
import ContentDaoTrangModal from './ContentDaoTrangModal.vue'
import ContentDonModal from './ContentDonModal.vue'
import ContentInModal from './ContentInModal.vue'
export default {
  props:{
    clickChange:{
      type:Function
    },
    phattuid:{
      type:Number
    },
    chuaid:{
      type:Number
    },
    daotrangid:{
      type:Number
    }
  },
  data(){
    return{
      chuathem:{},
      off:true
    }
  },
components:{
  ContentInModal,
  ContentChuaInModal,
ContentDaoTrangModal,
ContentDonModal
},
methods:{
  offModal()
  {
    this.$emit("offModal")
  },
  offModalMain()
  {
    this.$emit("clickOffModal")
    
  },
  dongmodal(){
    this.off = false;
  },
  open(){
    this.off = true;
  }
},
}
</script>

<style scoped>
#overlay {
  position: fixed; /* Sit on top of the page content */
  display: flex;
  width: 100%; /* Full width (cover the whole page) */
  min-height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 10000; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  justify-content: center;
  align-items: center;
}
.main-modal{
  flex-grow: 0;
  width: 950px;
  border-radius:10px ;
  height: 500px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px 0;
}
.main-content-in-modal{
  width: 97%;
  height:100%;
  overflow-y: scroll;
}

</style>