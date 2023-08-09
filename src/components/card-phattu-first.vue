<template>
  <v-card width="100%" min-height="220" flat color="white" class="rounded card-header-v-card">
                <div class="inside-card-phattu mx-auto py-2" style="width:98%">
                    <div class="header-card d-flex justify-space-between align-center">
                       <h3 class="title-card" style="font-weight:400">Tìm kiếm phật tử</h3> 
                        <div class="box-icon-search">
                                <v-icon color="white" style="font-size:20px" @click="timkiem()">mdi-magnify</v-icon>
                            
                        </div>
                    </div>
                    
                    <div class="all-input-header">
                        <v-container>
                            <v-row>
                            
                             <v-col
                            cols="3"
                            >
                                <v-sheet>
                                    <p class="mb-2">Pháp danh</p>
                                    <input type="text" style="border: 1px solid #DBDBDB;width:95%" class="rounded" v-model="ten">
                                </v-sheet>
                            </v-col>
                             <v-col
                            cols="3"
                            >
                                <v-sheet>
                                    <p class="mb-2">Email</p>
                                    <input type="text" style="border: 1px solid #DBDBDB;width:95%" class="rounded" v-model="email">
                                </v-sheet>
                            </v-col> 
                           
                            </v-row>
                            
                        </v-container>
                    </div>
                </div>
            </v-card>
</template>

<script>
// import {createNamespacedHelpers} from 'vuex'
// const { mapActions } = createNamespacedHelpers("user")
export default {
    data(){
        return {
            ten:"",
            email:"",
            gioitinh:"",
            trangthaiphattu:null
        }
    },
    
    methods:{
        
            timkiem(){
                if(this.ten !== "")
                {
                     this.$store.dispatch("user/timphapdanhactions",this.ten);
                     
                }
               if(this.email !== "")
               {
                
                this.$store.dispatch("user/timphattheoemailactions",this.email);
                
               }
            }
            
  
    }
}
</script>

<style>

</style>