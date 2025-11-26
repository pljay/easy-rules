<template>
  <div>
    <h1>规则版本回滚管理模块</h1>
    <p>此组件用于管理规则的版本回滚。用户可以查看历史版本，并选择回滚到特定版本。</p>
    <div>
      <label for="version-select">选择版本:</label>
      <select id="version-select" v-model="selectedVersion">
        <option v-for="version in versions" :key="version.id" :value="version.id">{{ version.name }}</option>
      </select>
      <button @click="rollbackVersion">回滚到选定版本</button>
    </div>
    <div v-if="rollbackSuccess">
      <p>回滚成功！当前版本是: {{ currentVersion.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      versions: [], // 存储版本列表
      selectedVersion: null, // 当前选择的版本
      currentVersion: {}, // 当前版本
      rollbackSuccess: false, // 回滚成功的标志
    };
  },
  methods: {
    // 获取版本列表
    fetchVersions() {
      // 这里可以调用API获取版本数据
      this.versions = [
        { id: 1, name: '版本 1.0' },
        { id: 2, name: '版本 1.1' },
        { id: 3, name: '版本 1.2' },
      ];
      this.currentVersion = this.versions[this.versions.length - 1]; // 默认当前版本为最新版本
    },
    // 回滚到选定版本
    rollbackVersion() {
      if (this.selectedVersion) {
        // 这里执行回滚逻辑，如调用API
        this.rollbackSuccess = true;
        this.currentVersion = this.versions.find(version => version.id === this.selectedVersion);
      }
    },
  },
  created() {
    this.fetchVersions(); // 组件创建时获取版本
  },
};
</script>

<style scoped>
/* 添加一些样式，让组件更加美观 */
div {
  padding: 20px;
}
h1 {
  color: #333;
}
</style>