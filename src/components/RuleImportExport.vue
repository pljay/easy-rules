<template>
  <div>
    <h1>规则导入导出</h1>
    <input type="file" @change="handleFileUpload" />
    <button @click="exportRules">导出规则</button>
    <textarea v-model="jsonRules" rows="10" cols="30" placeholder="JSON 格式的规则"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonRules: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.jsonRules = e.target.result;
      };
      reader.readAsText(file);
    },
    exportRules() {
      const blob = new Blob([this.jsonRules], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'rules.json';
      link.click();
    },
  },
};
</script>

<style scoped>
/* 样式可以根据需要进行调整 */
</style>
