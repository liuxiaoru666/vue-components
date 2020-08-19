<template>
  <div class="collapseItem">
    <div class="header" @click="itemClick">
      <h3>{{ title }}</h3>
    </div>
      <div v-show="isShow" class="content">
        <slot></slot>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  inject:['collapse'],
  computed: {
    isShow() {
          return this.collapse.activeNames.indexOf(this.name) > -1;
    },
  },
  methods: {
    itemClick() {
      this.collapse.$emit('item-click',this)
    },
  },
};
</script>
<style scoped>
.content {
  height: 50px;
  width: 500px;
}

</style>
