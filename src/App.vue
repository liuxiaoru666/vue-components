<template>
  <div id="app">
    <div></div>
    <!-- <el-component/> -->
    <div class="item">
      <h2>通知组件</h2>
      <el-button @click="open" type="primary">notice</el-button>
    </div>
    <div class="item">
      <h2>tree组件</h2>
      <m-tree
        v-for="(item, index) in sourceData"
        :treeData="item"
        :key="index"
      ></m-tree>
    </div>
    <div class="item">
      <h2>uploadFile组件</h2>
      <m-upload-file></m-upload-file>
    </div>
    <div class="item">
      <h2>折叠面板组件</h2>
      <m-collapse :active="active">
        <m-collapse-item title="国内" name="1">
          焦点新闻 FOCAL NEWS 7月广东外贸反弹 防疫和“宅经济”商品出口亮眼
        </m-collapse-item>
        <m-collapse-item title="国际" name="2"
          >焦点新闻 FOCAL NEWS
          迪拜一座“十星级”水下酒店，入住一晚3.6万</m-collapse-item
        >
        <m-collapse-item title="军事" name="3"
          >焦点新闻 FOCAL NEWS
          “国际军事比赛-2020”“开阔水域”项目开展比赛</m-collapse-item
        >
      </m-collapse>
    </div>
  </div>
</template>

<script>
// import component from "./components/compoment.vue";

export default {
  name: "app",
  data() {
    return {
      sourceData: [
        {
          label: "一级A",
          isOpen: false,
          children: [
            {
              label: "二级A",
              isOpen: false,
              children: [
                {
                  label: "三级A",
                  isOpen: false,
                },
              ],
            },
          ],
        },
        {
          label: "一级B",
          isOpen: false,
          children: [
            {
              label: "二级B",
              isOpen: false,
              children: [
                {
                  label: "三级B",
                  isOpen: false,
                },
              ],
            },
          ],
        },
      ],
      active: "1",
    };
  },
  components: {
    // component,
  },
  methods: {
    open() {
      this.$notify({
        message: "通知：鬼画符鬼画符看到过和梵蒂",
      });
    },
  },
};
</script>

<style scoped>
.item {
  margin-top: 20px;
}
</style>
