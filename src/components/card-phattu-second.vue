<template>
            <v-card  width="100%" min-height="600" flat color="white" class="rounded card-phattu">
                <div class="table-in-card">
                    <v-table>
                  <thead>
                    <tr>
                        <th></th>
                        <th class="text-center">
                        Phật tử
                        </th>
                        <th class="text-center">
                        Ngày xuất gia
                        </th>
                        <th class="text-center">
                        Số điện thoại
                        </th>
                        <th class="text-center">
                        Số buổi đạo tràng đã tham gia
                        </th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in phattu" :key="index">
                            <td class="text-center"><v-icon color="green">mdi-account-circle</v-icon></td>
                            <td class="text-left d-flex ml-4"><v-icon style="font-size:40px">mdi-account-circle</v-icon> 
                            <div class="tenphattu ml-3">
                                {{item.phapdanh}}
                                <h5>{{item.email}}</h5>
                            </div>
                            </td>
                            <td class="text-center">{{item.ngayxuatgia}}</td>
                            <td class="text-center">{{item.sodienthoai}}</td>
                            <td class="text-center">11</td>
                            <td v-if="layrole()">
                                <v-icon color="green" class="mr-2" @click="clickOpenModal(item.phattuid)">mdi-pen</v-icon>
                                <v-icon color="red" @click="xoapt(item.phattuid)">mdi-trash-can</v-icon>
                            </td>
                        </tr>
                    </tbody>
                    </v-table>
                    <v-pagination :length="17" @click="chuyentrang(page)" v-model="page" total-visible="5" v-if="layrole() === false"></v-pagination>
                </div>
                <Teleport to="body">
                    <modal-phat-tu-dang-ki v-if="isOpen" @offModal="offModalContent()" @clickOffModal="offModalContent" :clickChange ="clickChange" :phattuid="phattuid"></modal-phat-tu-dang-ki>
                </Teleport>
                
            </v-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Swal from 'sweetalert2'
const { mapState } = createNamespacedHelpers("user")
import ModalPhatTuDangKi from './ModalPhatTuDangKi.vue'
export default {
    props:{
        clickChange:{
            type:Function
        }
    },
    setup(){
        // const store = useStore();
        // store.dispatch("user/getPhatTuListAction");
        // if(this.layrole()==false)
        // {
        //     let pageSize = 5;
        // let page = 1;
        // let payload = {page,pageSize}
        // store.dispatch("user/phantrangphat",payload);
        // }
        
    },
    data(){
        return {
            isOpen:false,
            phattuid:null,
            page:"",
            length:""
        }
    },
    created()
    {
        this.layrole();
          if(this.layrole() == false)
        {
            let pageSize = 5;
        let page = 1;
        let payload = {page,pageSize}
        this.$store.dispatch("user/phantrangphat",payload);
        }
        else{
             this.$store.dispatch("user/getPhatTuListAction");
        }
    },
    components:{
ModalPhatTuDangKi
    },
    computed:{
        ...mapState(
            {
             phattu:state => state.phattu
             
            }
        ),
        
    },
methods:{
    clickOpenModal(id)
    {
        this.isOpen = true;
       this.phattuid = id;
       console.log(this.phattuid);
    },
    offModalContent()
    {
        this.isOpen = false;
    },
    xoapt(id){
          Swal.fire({
  title: 'Bạn có muốn xóa phật tử này không?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Xóa',
  denyButtonText: `Không xóa`,
}).then((result)=> {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    this.$store.dispatch("user/xoaptactions",id);
        console.log(id);
    Swal.fire('Xóa thành công!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Đã không xóa', '', 'info')
  }

    }
)
    },
    chuyentrang(page){
        let pageSize = 5;
        let payload = {page,pageSize}
        this.$store.dispatch("user/phantrangphat",payload);
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
    }
}
</script>

<style scoped>
.card-phattu{
overflow-y: scroll;
}
</style>