<template>
  <div class="nav-bar-phattu">
    <v-navigation-drawer theme="light">
        <v-list nav>
          <v-list-item prepend-icon="mdi-home" title="Giám sát phật tử" value="giamsatphattu" class="color" id=1 to="/quanlicacphatmain" @click="clickChange()" color="red"></v-list-item>
          <v-list-item prepend-icon="mdi-account-circle" title="Giám sát chùa" value="giamsatchua" class="color" to="/quanlichua" @click="clickChange()" color="red"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Đạo tràng" value="hocvien" class="color" to="/quanlidaotrang" @click="clickChange()" color="red"></v-list-item>
          <v-list-item prepend-icon="mdi-account-tie" title="Tạo đơn đăng kí" value="trogiang" class="color" color="red" to="/quanlidondangki" @click="clickChange()"></v-list-item>
          <v-list-item prepend-icon="mdi-menu" title="Test Online" value="testonline" class="color" color="red"></v-list-item>
          <v-list-item prepend-icon="mdi-tab" title="Công Việc" value="congviec" class="color" color="red"></v-list-item>
        </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{
    clickChange()
    {
      this.$emit("index")
    }
  }
}
</script>

<style scoped>
</style>