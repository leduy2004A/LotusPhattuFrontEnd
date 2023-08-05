<template>
  <div>sss</div>
</template>

<script>
export default {
created(){
    
     if(localStorage.getItem('token') === null)
        {
            this.$router.push("logincacphat");
        }
        else{
          this.$router.push("quanlicacphatmain");
        }
}
}
</script>

<style>

</style>