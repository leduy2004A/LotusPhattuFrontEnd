<template>
   <v-card  width="100%" min-height="600" flat color="white" class="rounded card-phattu">
    <div class="themdaotrang" v-if="layrole()">
        <v-btn class="bg-green rounded" @click="clickOpenModal()">Thêm đạo tràng</v-btn>
    </div>
                <div class="table-in-card">
                    <v-table>
                  <thead>
                    <tr>
                        <th></th>
                        <th class="text-center">
                        Nội dung
                        </th>
                        <th class="text-center">
                        Số thành viên tham gia
                        </th>
                        <th class="text-center">
                        Thời gian tổ chức
                        </th>
                        <th class="text-center">
                        Nơi tổ chức
                        </th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in daotrang" :key="index">
                            <td class="text-center"><v-icon color="green">mdi-home-circle</v-icon></td>
                            <td class="text-center">{{item.noidung}}</td>
                            <td class="text-center">{{item.sothanhvienthamgia}}</td>
                            <td class="text-center">{{item.thoigiantochuc}}</td>
                            <td class="text-center">{{item.noitochuc}}</td>
                            <td v-if="layrole()">
                                <v-icon color="green" class="mr-2" @click="clickOpenModal(item.daotrangid)">mdi-pen</v-icon>
                                <v-icon color="red" @click="xoadaotrang(item.daotrangid)">mdi-trash-can</v-icon>
                            </td>
                        </tr>
                    </tbody>
                    </v-table>
                      <v-pagination :length="17" @click="chuyentrang(page)" v-model="page" total-visible="5"></v-pagination>
                </div>
                <Teleport to="body">
                    <modal-phat-tu-dang-ki v-if="isOpen" @offModal="offModalContent()" @clickOffModal="offModalContent" :clickChange="clickChange" :daotrangid="daotrangid"></modal-phat-tu-dang-ki>
                </Teleport>
                
            </v-card>
</template>

<script>
import ModalPhatTuDangKi from './ModalPhatTuDangKi.vue'
import {useStore,createNamespacedHelpers} from 'vuex';
const {mapState:mapStatefromdaotrang} = createNamespacedHelpers("daotrang");
const {mapState:mapStatefromphattu} = createNamespacedHelpers("user");
import {xoadaotrang} from '../apis/daotrang';
import Swal from 'sweetalert2'
export default {
    setup()
    {
        const store = useStore();
        let page = 1;
        let pageSize = 4;
        const payload = {page,pageSize};
        store.dispatch("daotrang/hienthidaotrang",payload);
    },
    created(){
        this.layrole();
    },
    props:{
        clickChange:{
            type:Function
        }
    },
    components:{
        ModalPhatTuDangKi
    },
    computed:{
        ...mapStatefromdaotrang({
            daotrang: state => state.daotrangs
        }),
        ...mapStatefromphattu({
            phattu:state => state.phattu
        })
    },
 data(){
        return {
            isOpen:false,
            page:"",
            daotrangid:""
        }
    },
    methods:{
    clickOpenModal(id)
    {
        this.daotrangid = id;
        this.isOpen = true
    },
    offModalContent()
    {
        this.isOpen = false;
    },
    chuyentrang(page){
        let pageSize = 4;
        const payload = {page,pageSize};
        this.$store.dispatch("daotrang/hienthidaotrang",payload);
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
    xoadaotrang(id)
    {
        Swal.fire({
  title: 'Có chắc chắn muốn xóa?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Xóa',
  denyButtonText: `Không xóa`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
     this.$store.dispatch("daotrang/xoadaotrang",id);
        xoadaotrang(id);
    Swal.fire('Xóa thành công!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Đã không xóa', '', 'info')
  }
})
       
    }
}
}
</script>

<style>
    .themdaotrang{
        display: flex;
        justify-content: flex-end;
        margin: 10px 10px;
    }
</style>