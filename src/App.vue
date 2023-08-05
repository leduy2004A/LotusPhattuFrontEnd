<template>
  <v-app>
    <v-main>
      <!-- <HelloWorld/> -->
      <phattu-main></phattu-main>
      <!-- <router-view></router-view> -->
    </v-main>
  </v-app>
</template>

<script>
// import HeaderPhattu from './components/HeaderPhattu.vue'
// import NavBarPhatTu from './components/NavBarPhatTu.vue'
import PhattuMain from './components/PhattuMain.vue'
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',

  components: {
    // HelloWorld,
    // HeaderPhattu,
    // NavBarPhatTu,
    PhattuMain,
    
  },

  data: () => ({
    //
  }),
}
</script>
