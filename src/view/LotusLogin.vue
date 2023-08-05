<template>
  <div class="LotusLogin bg-white">
    <div class="header-dangnhap">
        <LotusHeader/>
    </div>
    <v-container>
        <div class="login d-flex flex-column align-center" width="400">
            <h4 class="title-login mt-2 text-center pb-4">
                ĐĂNG NHẬP
            </h4>
            <div class="all-form d-flex justify-center align-center mt-6">
                <div class="form-login mt-6 d-flex">
                <v-text-field label="Gmail" class="inputName" v-model="gmail"></v-text-field>
                <v-text-field label="Mật khẩu" class="inputName inputPass" v-model="password"></v-text-field>
                <div class="accept-login d-flex flex-column">
                <v-btn type="submit" class="accept bg-blue mb-6" @click="login(gmail,password)">Đăng nhập</v-btn>
                <router-link to="/formdangki">Bạn chưa có tài khoản?</router-link>
                </div>
                
            </div>
            
            </div>
                 
       </div>
    </v-container>
    </div>
</template>

<script>
import LotusHeader from "./LotusHeader.vue"
import Swal from 'sweetalert2'
export default {
    data(){
        return {
            gmail:"",
            password:""
        }
    },
components:{
    LotusHeader
},
methods:{
    login(gmail,password){
       try {
        
        if(gmail === "" && password ==="" || gmail === "" || password ==="")
        {
            Swal.fire({
        icon: 'error',
        title: 'Đăng nhập thất bại',
        showConfirmButton: false,
        timer: 1500
        })
        return;
        }
        else{
            const payload = {gmail,password};
             this.$store.dispatch("user/loginPhatTuAction",payload);
        this.$store.dispatch("user/savelogin",gmail);
        let data = localStorage.getItem('token');
        let data2 = JSON.parse(data);
        let token = data2.stoken;
        if(token !== null)
        {
            Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đăng nhập thành công',
        showConfirmButton: false,
        timer: 1500
        })
        this.$router.push("/quanlicacphatmain")
        }
        else{
             Swal.fire({
        icon: 'error',
        title: 'Đăng nhập thất bại',
        showConfirmButton: false,
        timer: 1500
        })
        
        }
                
        }
       
       }catch(err)
       {
        
                    Swal.fire({
        // position: 'top-end',
        icon: 'error',
        title: 'Đăng nhập thất bại',
        showConfirmButton: false,
        timer: 1500
        })
       }
        
    }
}
}
</script>

<style scoped>
.title-login{
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.2;
    letter-spacing: 1.5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-bottom: 1px solid #EEEE;
    width: 350px;
    color:#04A6E1
    
} 
.form-login{
   height: 280px;
    width: 300px;
    flex-wrap: wrap;
    
}
.inputName{
    height: 20px;
    width: 300px;
}
.accept{
    width: 100%;
}
.all-form{
    height: 300px;
    width: 350px;
    border: 1px solid #EEEE;
    flex-wrap: wrap;
    flex: 0;
}
.accept-login{
    width: 100%;
}
.LotusLogin{
    height: 800px;
}
</style>