<template>
  <div class="rule-sandbox">
    <h1>规则沙盒测试环境</h1>
    <p>欢迎来到规则沙盒测试环境，在这里你可以创建、编辑、测试和调试你的规则。</p>
  </div>
</template>

<script>
export default {
  name: 'RuleSandbox',
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    addRule(rule) {
      this.rules.push(rule);
    },
    // 其他测试方法
  },
};
</script>

<style scoped>
.rule-sandbox {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
