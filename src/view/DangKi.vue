<template>
  <div class="dangki">
    <div class="header-dangki">
      <lotus-header/>
    </div>
    <div class="MainContent">
      <v-container>
      <v-card width="100%" class="content-login">
        <div class="AllInfor">
          <div class="add-image d-flex align-center">
            <img :src="newImage || AddImage" alt="" class="hinhanh mt-4 mr-4">
            <input type="file" @change ="clickChange($event)">
          </div>
           
          <form action="" class="form-infor">

          <v-row justify="start">
              <v-col cols="4">
                <p><span style="color:red">*</span>Họ</p>
                  <v-sheet><input type="text" class="name my-2" v-model="phattu.ho"></v-sheet>
              </v-col>
              <v-col cols="4">
                <p><span style="color:red">*</span>Tên đệm</p>
                  <v-sheet><input type="text" class="name my-2" v-model="phattu.tendem"></v-sheet>
              </v-col>
          
              <v-col cols="4">
                <p><span style="color:red">*</span>Tên:</p>
                  <v-sheet><input type="text" class="name my-2" v-model="phattu.ten"></v-sheet>
              </v-col>
              <v-col cols="4">
                <p><span style="color:red">*</span>Email:</p>
                  <v-sheet><input type="text" class="name my-2" v-model="phattu.email"></v-sheet>
              </v-col>
              <v-col cols="4">
                <p><span style="color:red">*</span>Mật khẩu</p>
                  <v-sheet class="d-flex input"><input type="password" class="name my-2 pass" v-model="phattu.password">
                  <button @click.prevent="showPass" class="icon-eyes"><v-icon>mdi-eye-outline</v-icon></button>
                  </v-sheet>
              </v-col>
              <v-col cols="4">
                <p><span style="color:red">*</span>Ngày sinh:</p>
                  <v-sheet><input type="Date" class="name my-2" v-model="phattu.ngaysinh">
                  
                  </v-sheet>
              </v-col>
              <v-col cols="4">
                <p><span style="color:red">*</span>Giới tính:</p>
                  <v-sheet><select name="" id="" class="name my-2" v-model="phattu.gioitinh">
                    <option value="0">Nam</option>
                    <option value="1">Nữ</option>
                    </select></v-sheet>
              </v-col>
              <v-col cols="4">
                <p><span style="color:red">*</span>Số điện thoại:</p>
                  <v-sheet><input type="text" class="name my-2" v-model="phattu.sodienthoai"></v-sheet>
              </v-col>

              <v-col cols="4">
                <p><span style="color:red">*</span>Ngày cấp nhập:</p>
                  <v-sheet><input type="Date" class="name my-2" v-model="phattu.ngaycapnhap"></v-sheet>
              </v-col>
              <v-col cols="4">
                <p><span style="color:red">*</span>Ngày hoàn tục:</p>
                  <v-sheet><input type="Date" class="name my-2" v-model="phattu.ngayhoantuc"></v-sheet>
              </v-col>
              <v-col cols="4">
                <p><span style="color:red">*</span>Ngày xuất gia:</p>
                  <v-sheet><input type="Date" class="name my-2" v-model="phattu.ngayxuatgia"></v-sheet>
              </v-col>
              <v-col cols="4">
                <p><span style="color:red">*</span>Pháp danh:</p>
                  <v-sheet><input type="Text" class="name my-2" v-model="phattu.phapdanh"></v-sheet>
              </v-col>
              <v-col cols="4">
                <p><span style="color:red">*</span>Hoàn tục:</p>
                  <v-sheet>
                    <select name="" id="" class="name my-2" v-model="phattu.dahoantuc">
                      <option value="1">Đã hoàn tục</option>
                      <option value="0">Chưa hoàn tục</option>
                    </select>
                    </v-sheet>
              </v-col>
          </v-row>
          <v-btn class="bg-primary btn mt-10" @click="them()" to="/quanlicacphatmain">Gửi thông tin</v-btn>
          </form>
        </div> 
       
        
      </v-card>
    </v-container>
    </div>    
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import LotusHeader from './LotusHeader.vue'
import AddImage from '../images/add-image.png'
 import { createNamespacedHelpers } from 'vuex'
 import {addPhatTu} from "../apis/phattu"
 const { mapActions } = createNamespacedHelpers('user')
export default {
components:{
  LotusHeader,
},
data()
{
 return{
  AddImage,
  newImage:"",
  phattu:{
    anhchup:null,
    ho:"",
    tendem:"",
    ten:"",
    email:"",
    password:"",
    ngaysinh:"",
    gioitinh:"",
    sodienthoai:"",
    ngaycapnhap:"",
    ngayhoantuc:"",
    ngayxuatgia:"",
    dahoantuc:"",
    phapdanh:""
  }
 } 
},
methods:{
  showPass(){
  const matkhau = document.querySelector(".pass");
 if(matkhau.getAttribute("type") === "password")
   {
    matkhau.setAttribute("type","text");
   }
   else{
    matkhau.setAttribute("type","password");
   }

  },
  clickChange(event){
  const file = event.target.files[0];
  const theReader = new FileReader();
  theReader.onloadend =  ()=>{
      this.newImage =  theReader.result
  }
  theReader.readAsDataURL(file)
},
 showAlert() {
      this.$swal('Đăng kí thành công');
      
    },
     them() {
   addPhatTu(this.phattu);
   Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})
    },
    ...mapActions({
      addPhattu:"themptactions"
    })
    
}


}
</script>

<style>
.input{
  position: relative;
}
.icon-eyes{
  position: absolute;
  right: 4px;
  top:0;
  bottom:0
}
.MainContent{
  background-color: #F6F6F7;
}
.icon-user{
  font-size: 15px;
  color:black
}
.title-user{
  font-size: 15px;
  font-weight: 400;
  color:grey;
  padding:5px 0;
}
.AllInfor{
  width: 95%;
  margin:0 auto
}
.content-login{
  min-height:500px
}
.image{
  width: 100px;
}
.name{
  border:1px solid grey;
  width: 100%;
  border-radius:5px ;
  padding: 0 8px;
}
.location-icon,.book-icon{
  color: black;
}
.form-infor{
  display: flex;
  flex-direction: column;
  padding:25px 0
}
.btn{
  width: 15%;
  align-self: center;
}
.hinhanh{
  width: 150px;
}
</style>