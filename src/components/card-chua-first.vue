<template>
  <v-card width="100%" min-height="220" flat color="white" class="rounded card-header-v-card">
                <div class="inside-card-phattu mx-auto py-2" style="width:98%">
                    <div class="header-card d-flex justify-space-between align-center">
                       <h3 class="title-card" style="font-weight:400">Tìm kiếm chùa</h3> 
                        <div class="box-icon-search">
                            
                                <v-icon color="white" style="font-size:20px" @click="search(tenchua)">mdi-magnify</v-icon>
                            
                            
                        </div>
                    </div>
                    
                    <div class="all-input-header">
                        <v-container>
                            <v-row>
                             <v-col
                            cols="3"
                            >
                                <v-sheet>
                                    <p class="mb-2">Tên chùa</p>
                                    <input type="text" style="border: 1px solid #DBDBDB;width:95%" class="rounded" v-model="tenchua">
                                </v-sheet>
                            </v-col>
                           
                             
                            
                            
                            </v-row>
                            
                        </v-container>
                    </div>
                </div>
            </v-card>
</template>

<script>
export default {
    data(){
        return {
            tenchua:""
        }
    },
    methods:{
        search(tenchua){
            this.$store.dispatch("chua/timtheoten",tenchua)
        }
    }
}
</script>

<style>

</style>