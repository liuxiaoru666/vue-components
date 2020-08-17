<template>
    <div class='notice' v-if='isShow'>
        标题：{{title}}
        内容：{{message}}
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:'默认标题',
            message:'默认内容',
            isShow:false,
            duration:2000
        }
    },
    mounted(){
        this.isShow = true;
        setTimeout(()=>{
            this.isShow = false;
        },this.duration)
    }
    
}
</script>
<style lang="">
    
</style>