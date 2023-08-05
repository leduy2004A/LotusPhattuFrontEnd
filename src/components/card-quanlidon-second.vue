<template>
  <v-card  width="100%" min-height="600" flat color="white" class="rounded card-phattu">
                <div class="table-in-card">
                            <div class="adddon">
                                <h3 color="green" class="mr-2 taodon" @click="clickOpenModal()">Tạo đơn đăng kí</h3>
                            </div>
                                
                            
                    <v-table>
                  <thead>
                    <tr>
                        <th></th>
                        <th class="text-center">
                        Ngày gửi đơn
                        </th>
                        <th class="text-center">
                        Ngày xử lý
                        </th>
                        <th class="text-center">
                        Người xử lý
                        </th>
                        <th class="text-center">
                        Trạng thái đơn
                        </th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in 5" :key="index">
                            <td class="text-center"><v-icon color="green">mdi-account-circle</v-icon></td>
                            <td class="text-center">
                                2023-07-27 
                            </td>
                            <td class="text-center">2023-07-27 </td>
                            <td class="text-center">1</td>
                            <td class="text-center">1</td>
                            
                        </tr>
                    </tbody>
                    </v-table>
                </div>
                <Teleport to="body">
                    <modal-phat-tu-dang-ki v-if="isOpen" @offModal="offModalContent()" @clickOffModal="offModalContent" :clickChange ="clickChange"></modal-phat-tu-dang-ki>
                </Teleport>
                
            </v-card>
</template>

<script>
import ModalPhatTuDangKi from './ModalPhatTuDangKi.vue'
export default {
    components:{
        ModalPhatTuDangKi
    },
    data(){
        return {
            isOpen:false
        }
    },
    props:{
        clickChange:{
            type:Function
        }
    },
    methods:{
    clickOpenModal()
    {
        this.isOpen = true
    },
    offModalContent()
    {
        this.isOpen = false;
    },
    
},
}
</script>

<style scoped>
.taodon{
    font-size: 15px;
    display: block;
    background-color: green;
    color:white;
    padding: 5px 5px;
    border-radius:10px;
    cursor: pointer;
    margin: 10px 10px;
}
.adddon{
    width: 100%;
    display: flex;
    justify-content: right;
}
</style>