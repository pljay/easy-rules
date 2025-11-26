<template>
  <div class="rule-group">
    <h2>可拖拽分组管理</h2>
    <draggable v-model="rules" :options="dragOptions">
      <div v-for="rule in rules" :key="rule.id" class="rule-item">
        {{ rule.name }}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'RuleGroup',
  components: { draggable },
  data() {
    return {
      rules: [], // 规则列表
      dragOptions: {
        animation: 200,
        ghostClass: 'blue-background-class',
      },
    };
  },
  methods: {
    addRule(rule) {
      this.rules.push(rule); // 添加新规则
    },
    removeRule(rule) {
      this.rules = this.rules.filter(r => r.id !== rule.id); // 移除规则
    },
  },
};
</script>

<style scoped>
.rule-group {
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.rule-item {
  padding: 8px;
  margin: 5px 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 3px;
}
</style>