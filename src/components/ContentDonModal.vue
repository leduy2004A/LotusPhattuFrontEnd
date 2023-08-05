<template>
  <div class="ContentModal">
    <div class="header-modal">
        <div class="title-modal-phattu d-flex justify-space-between align-center">
            <h4 class="title-modal">Sửa đạo tràng</h4>
            
            <v-btn icon size="small" @click="offModal">
                <v-icon>mdi-xmpp</v-icon>
            </v-btn>
        </div>
    
    </div>
    <div class="all-input-modal">
        <v-container>
            <v-row
            justify="start"
            >
            <v-col cols="6">
                <v-sheet>
                    <p>Nội dung</p>
                    <input type="text" class="input-modal">
                </v-sheet>
            </v-col>
             <v-col cols="6">
                <v-sheet>
                    <p>Thời gian tổ chức</p>
                    <input type="Date" class="input-modal">
                </v-sheet>
            </v-col>
             <v-col cols="6">
                <v-sheet>
                    <p>Nơi tổ chức</p>
                    <input type="Text" class="input-modal">
                </v-sheet>
            </v-col>
             
            </v-row>
        </v-container>
        <v-btn class="bg-primary nut-gui mx-auto" width="100">
            <input type="submit">
        </v-btn>
    </div>
    
  </div>
</template>

<script>
export default {
methods:{
         offModal()
    {
        this.$emit("offModal")
        
    }
 }
}
</script>

<style scoped>
    .addimage{
    width: 150px;
    
}
.input-file{
    width: 100px;
    height: 20px;
}
.input-modal{
    border: 1px solid #D9D9D9;
    width: 90%;
    margin-left: -15px;
    padding-left: 10px;
    border-radius:5px ;
}
.nut-gui{
    display: block;
}
.title-modal-phattu{
    width: 100%;
}
</style>