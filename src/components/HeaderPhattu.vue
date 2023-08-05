<template>
    <div class="header-lotus">
        <v-app-bar class="header-app-bar" :elevation="0">
            <v-app-bar-nav-icon class="text-orange-accent-4 nav-icon"></v-app-bar-nav-icon>
             <v-app-bar-title><img :src="anhlotus" alt="" class="anhheader pt-2"></v-app-bar-title>
             <v-spacer></v-spacer>
              
        <h3 class="text-header">User</h3>
        <div class="square-header d-flex">
           <v-btn icon class="btn-header" size="small">
          <v-icon class="hover-header" >mdi-television</v-icon>
        </v-btn> 
        </div>
        
        <div class="square-header d-flex">
        <v-btn icon size="small">
          <v-icon class="hover-header">mdi-message</v-icon>
        </v-btn>
        </div>
        <div class="square-header d-flex mr-4">
        <v-btn icon size="small">
          <v-icon class="hover-header menu-down">mdi-chevron-down</v-icon>
        </v-btn>
        </div>
        </v-app-bar>
    </div>
</template>

<script>
import anhlotus from '../images/Logo LTS Edu-01.png';
export default {
    data(){
        return{
            anhlotus
        }
    }
}
</script>

<style>
.anhheader{
    width: 110px;
    
}
.text-header{
    font-weight: 400;
}
.hover-header{
    color: #E65100;
}
.square-header{
    width: 40px;
    height: 40px;
    background-color: #F5F5F5;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
}
.hover-header:hover{
    width: 40px;
    height: 40px;
}
.square-header:hover{
     width: 40px;
    height: 40px;
}
.menu-down{
    font-size: 30px;
}
.header-app-bar{
    box-shadow: none;
}
</style>