<template>
  <div>
    <!-- 留坑    -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  data(){
      return {
          activeNames:[].concat(this.active)
      }
  },
  props: {
    active: {
      //传入数组能同时展开多个，传入字符串只能同时展开一个
      type: [Array,String],
    },
  },
  watch:{
    active(value){
        this.activeNames = [].concat(value);
    }
  },
  provide() {
    return {
      collapse: this,
    };
  },
  created() {
    this.$on("item-click", (item) => {
      if (typeof this.active === "object") {
        //能同时展开多个
        let index = this.activeNames.indexOf(item.name);
        if (index < 0) {
          this.activeNames.push(item.name);
        } else {
          this.activeNames.splice(index, 1);
        }
      } else {
        //只能同事展开一个
        this.activeNames = [item.name];
      }
    });
  },
};
</script>
<style lang=""></style>
