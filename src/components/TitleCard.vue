<template>
  <div class="main-phattu py-4">
            <div class="address-nav">
            <h4 style="font-weight:400">Home  >  {{title}}</h4>
            <h2 style="font-weight:400">{{title}}</h2>
        </div>
        </div>
</template>

<script>
export default {
props:{
    title:{
        type:String
    }
}
}
</script>

<style>

</style>