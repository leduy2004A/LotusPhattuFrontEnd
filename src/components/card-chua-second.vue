<template>
   <v-card  width="100%" min-height="600" flat color="white" class="rounded card-phattu">
    <div class="addphattu" v-if="layrole()">
        <v-btn class="bg-green rounded nut" @click="clickOpenModal()">Thêm chùa</v-btn>
    </div>
    
                <div class="table-in-card">
                    <v-table>
                  <thead>
                    <tr>
                        <th></th>
                        <th class="text-center">
                        Tên chùa
                        </th>
                        <th class="text-center">
                        Ngày thành lập
                        </th>
                        <th class="text-center">
                        Ngày cấp nhập
                        </th>
                        <th class="text-center">
                        Địa chỉ
                        </th>
                        <th class="text-center">
                        trụ trì
                        </th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in chua" :key="index">
                            <td class="text-center"><v-icon color="green">mdi-home-circle</v-icon></td>
                            <td class="text-left ml-4"><v-icon style="font-size:40px">mdi-home-circle</v-icon> 
                                {{item.tenchua}}
                            </td>
                            <td class="text-center">{{item.ngaythanhlap}}</td>
                            <td class="text-center">{{item.capnhat}}</td>
                            <td class="text-center">{{item.diachi}}</td>
                            <td class="text-center">{{item.trutri}}</td>
                            <td v-if="layrole()">
                                <v-icon color="green" class="mr-2" @click="clickOpenModal(item.chuaid)">mdi-pen</v-icon>
                                <v-icon color="red" @click="xoapt(item.chuaid)">mdi-trash-can</v-icon>
                            </td>
                        </tr>
                    </tbody>
                    </v-table>
                    <v-pagination :length="17" @click="chuyentrang(page)" v-model="page" total-visible="5"></v-pagination>
                </div>
                <Teleport to="body">
                    <modal-phat-tu-dang-ki v-if="isOpen" @offModal="offModalContent()" @clickOffModal="offModalContent" :clickChange="clickChange" :chuaid="chuaid"></modal-phat-tu-dang-ki>
                </Teleport>
                
            </v-card>
</template>

<script>
import modalPhatTuDangKi from './ModalPhatTuDangKi.vue'
import Swal from 'sweetalert2'
import {useStore} from 'vuex'
import {createNamespacedHelpers} from 'vuex'
const { mapState:mapStateFromChua  } = createNamespacedHelpers("chua");
const { mapState:mapStateFromphattu  } = createNamespacedHelpers("user");
export default {
    setup(){
        const store = useStore();
        // store.dispatch("chua/hienthichuaAction");
       let page = 1;
       let pageSize = 4;
        let payload = {page,pageSize}
        store.dispatch("chua/phantrangchua",payload)
    },
    created()
    {
        this.layrole();
    },
    props:{
        clickChange:{
            type:Function
        }
    },
    components:{
        modalPhatTuDangKi
    },
     data(){
        return {
            isOpen:false,
            chuaid:0,
            page:""
        }
    },
    computed:{
        ...mapStateFromChua({
            chua : state => state.chuas,
        }),
        ...mapStateFromphattu(
            {
                phattu:state => state.phattu
            }
        )
            
        
    },
    methods:{
    clickOpenModal(id)
    {
        this.chuaid = id;
        this.isOpen = true
    },
    offModalContent()
    {
        this.isOpen = false;
    },
    addchua(){
        this.isOpen = true;
        // this.$store.dispatch("chua/themchua",this.chuaadd);
    },
     layrole()
    {
        let data = localStorage.getItem('token');
        let data2 = JSON.parse(data);
        if(data2.stoken !== null)
        {
            for(let i in this.phattu)
            {
                if(this.phattu[i].phattuid === data2.phattuid)
                {
                    if(this.phattu[i].kieuthanhvienid === 1)
                    {
                        return true;
                    }
                }
            }
        }
        return false;
    },
    chuyentrang(page)
    {
        let pageSize = 4;
        let payload = {page,pageSize}
        this.$store.dispatch("chua/phantrangchua",payload)
    },
   xoapt(id)
   {
    Swal.fire({
  title: 'Bạn có muốn xóa chùa này?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Đồng ý!'
}).then((result) => {
  if (result.isConfirmed) {
    this.$store.dispatch("chua/xoachua",id);
    Swal.fire(
      'Xóa chùa!',
      'Xóa chùa thành công',
      'Thành công'
    )
  }
})
    
   }
}
}
</script>

<style scoped>
.addphattu{
    display:flex;
    justify-content: flex-end;
}
.nut{
    margin: 10px 10px;
}
</style>