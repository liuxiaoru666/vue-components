<template>
    <transition name='fade'>
        <div class='notice' v-if='isShow'>
        {{message}}
    </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{
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
<style scoped>
    .notice{
        display:inline-block;
        padding:20px;
        width:500px;
        text-align:center;
        border:1px solid #409EFF;
        color:#409EFF;
        border-radius:15px;
        position:fixed;
        right:0; 
        top:10px;
    }

    .fade-enter,.fade-leave-to{
        right:-500px;
    }
    .fade-enter-active,.fade-leave-active{
        transition: all 0.5s linear;
    }
</style>