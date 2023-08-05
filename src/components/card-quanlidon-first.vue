<template>
    <v-card width="100%" min-height="220" flat color="white" class="rounded card-header-v-card">
                <div class="inside-card-phattu mx-auto py-2" style="width:98%">
                    <div class="header-card d-flex justify-space-between align-center">
                       <h3 class="title-card" style="font-weight:400">Tìm kiếm đơn đăng kí</h3> 
                        <div class="box-icon-search">
                            
                                <v-icon color="white" style="font-size:20px">mdi-magnify</v-icon>
                            
                            
                        </div>
                    </div>
                    
                    <div class="all-input-header">
                        <v-container>
                            <v-row>
                             <v-col
                            cols="3"
                            >
                                <v-sheet>
                                    <p class="mb-2">Ngày gửi đơn</p>
                                    <input type="Date" style="border: 1px solid #DBDBDB;width:95%" class="rounded">
                                </v-sheet>
                            </v-col>
                             <v-col
                            cols="3"
                            >
                                <v-sheet>
                                    <p class="mb-2">Ngày xử lý</p>
                                    <input type="Date" style="border: 1px solid #DBDBDB;width:95%" class="rounded">
                                </v-sheet>
                            </v-col>
                             <v-col
                            cols="3"
                            >
                                <v-sheet>
                                    <p class="mb-2">Người xử lý</p>
                                    <input type="Text" style="border: 1px solid #DBDBDB;width:95%" class="rounded">
                                </v-sheet>
                            </v-col>
                             <v-col
                            cols="3"
                            >
                                <v-sheet>
                                    <p class="mb-2">Trạng thái đơn</p>
                                    <input type="text" style="border: 1px solid #DBDBDB;width:95%" class="rounded">
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

}
</script>

<style>

</style>