<template>
  <div class="ContentModal">
    <div class="header-modal">
        <div class="title-modal-phattu d-flex justify-space-between align-center">
            <h4 class="title-modal">Thông tin người dùng</h4>
            
            <v-btn icon size="small" @click="offModal">
                <v-icon>mdi-xmpp</v-icon>
            </v-btn>
        </div>
        
        <img :src="newImage||addimage" alt="" class="addimage mt-4">
        <p>Ảnh đại diện người dùng</p>
         <input type="file" @change="previewFiles($event)" />
    </div>
    <div class="all-input-modal">
        <v-container>
            <v-row
            justify="start"
            >
            <v-col cols="6">
                <v-sheet>
                    <p>Họ tên</p>
                    <input type="text" class="input-modal" v-model ="phattusua.hoten">
                </v-sheet>
            </v-col>
             <v-col cols="6">
                <v-sheet>
                    <p>Pháp danh</p>
                    <input type="text" class="input-modal" v-model="phattusua.phapdanh">
                </v-sheet>
            </v-col>
             <v-col cols="6">
                <v-sheet>
                    <p>Email</p>
                    <input type="text" class="input-modal" v-model="phattusua.email">
                </v-sheet>
            </v-col>
             <v-col cols="6">
                <v-sheet>
                    <p>Số điện thoại</p>
                    <input type="text" class="input-modal" v-model="phattusua.sodienthoai">
                </v-sheet>
            </v-col>
             <v-col cols="6">
                <v-sheet>
                    <p>Ngày sinh</p>
                    <input type="Date" class="input-modal" v-model="phattusua.ngaysinh">
                </v-sheet>
            </v-col>
             <v-col cols="6">
                <v-sheet>
                    <p>Ngày xuất gia</p>
                    <input type="Date" class="input-modal" v-model="phattusua.ngayxuatgia">
                </v-sheet>
            </v-col>
             
            </v-row>
            <v-row
            justify="start"
            >
            <v-col cols="4">
                <v-sheet>
                    <p>Giới tính</p>
                    <select name="gioitinh" id="" class="input-modal" v-model="phattusua.gioitinh">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                    </select>
                </v-sheet>
            </v-col>
             <v-col cols="4">
                <v-sheet>
                    <p>Hoàn tục</p>
                    <select name="gioitinh" id="" class="input-modal" v-model="phattusua.dahoantuc">
                        <option value="true">Đã hoàn tục</option>
                        <option value="false">Chưa hoàn tục</option>
                    </select>
                </v-sheet>
            </v-col>
             <v-col cols="4">
                <v-sheet>
                    <p>Ngày hoàn tục</p>
                    <input type="Date" class="input-modal" v-model="phattusua.ngayhoantuc">
                </v-sheet>
            </v-col>
            </v-row>
        </v-container>
        <v-btn class="bg-primary nut-gui mx-auto" width="100" @click="suapt()">
            Gửi
        </v-btn>
    </div>
    
  </div>
</template>

<script>
import Swal from 'sweetalert2'

import addimage from '../images/add-image.png'
import {createNamespacedHelpers} from 'vuex'
const {mapState} = createNamespacedHelpers('user')
export default {
    data(){
        return {
            addimage,
            newImage:"",
            phattusua:{
                hoten:"",
                phapdanh:"",
                email:"",
                sodienthoai:"",
                ngaysinh:"",
                ngayxuatgia:"",
                gioitinh:"",
                ngayhoantuc:"",
                dahoantuc:"",
                phattuid:""
            },
            phattuadd:[]
            
        }
    },
    props:{
        phattuid:{
            type:Number
        }
    },
    created(){
        this.formphattu();
       
    },
    computed:{
        ...mapState({
            phattu:state=>state.phattu
        })
    },
    methods: {
      previewFiles(event) {
      const file = event.target.files[0];

      const theReader = new FileReader();
      theReader.onloadend = async () => {
        this.newImage = await theReader.result;
      };
      theReader.readAsDataURL(file);
    },
    offModal()
    {
        this.$emit("offModal")
        
    },
    formphattu(){
       for(let i=0;i<=this.phattu.length-1;i++)
       {
        if(this.phattu[i].phattuid === this.phattuid)
        {
            const{ho,tendem,ten,phapdanh,email,sodienthoai,ngaysinh,ngayxuatgia,gioitinh,dahoantuc,ngayhoantuc} = this.phattu[i];
            this.phattusua.hoten = ho +" "+tendem+" "+ten;
            this.phattusua.phapdanh = phapdanh;
            this.phattusua.email = email;
            this.phattusua.ngaysinh = this.formatDate(ngaysinh);
            this.phattusua.sodienthoai = sodienthoai;
            this.phattusua.ngayxuatgia = this.formatDate(ngayxuatgia);
            this.phattusua.gioitinh = gioitinh;
            this.phattusua.dahoantuc = dahoantuc;
            this.phattusua.ngayhoantuc = this.formatDate(ngayhoantuc);
        }
       }
        
    },
    formatDate(dateString) {
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear();
  let month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Đảm bảo tháng có 2 chữ số
  let day = dateObject.getDate().toString().padStart(2, '0'); // Đảm bảo ngày có 2 chữ số
  return `${year}-${month}-${day}`;
},
suapt(){
    this.$emit("dong")
    let id = this.phattuid;
    let doiphattu = this.phattusua;
    let payload = {id,doiphattu};
     Swal.fire({
  icon: 'success',
  title: 'Sửa thành công',
  showConfirmButton: false,
  timer: 1500
})
    
    this.$store.dispatch("user/suaptaction",payload);
}
  },
  }
</script>

<style>
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