<template>
  <div class="rule-config">
    <el-row>
      <!-- Left side navigation menu -->
      <el-col :span="6">
        <el-menu
          class="el-menu-vertical"
          :default-active="activeComponent"
          @select="handleSelect">
          <el-menu-item index="RuleGroup">规则组</el-menu-item>
          <el-menu-item index="RuleImportExport">导入导出</el-menu-item>
          <el-menu-item index="RuleSandbox">沙盒</el-menu-item>
          <el-menu-item index="RuleVersion">版本</el-menu-item>
          <el-menu-item index="RuleDependency">依赖</el-menu-item>
        </el-menu>
      </el-col>
      
      <!-- Right side content display -->
      <el-col :span="18">
        <component :is="activeComponent" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RuleGroup from './RuleGroup.vue';
import RuleImportExport from './RuleImportExport.vue';
import RuleSandbox from './RuleSandbox.vue';
import RuleVersion from './RuleVersion.vue';
import RuleDependency from './RuleDependency.vue';

export default {
  data() {
    return {
      activeComponent: 'RuleGroup', // Default component
    };
  },
  components: {
    RuleGroup,
    RuleImportExport,
    RuleSandbox,
    RuleVersion,
    RuleDependency
  },
  methods: {
    handleSelect(index) {
      this.activeComponent = index; // Change active component based on menu selection
    }
  }
};
</script>

<style scoped>
.rule-config {
  padding: 20px;
}
.el-menu-vertical {
  border-right: 1px solid #ebeef5;
}
</style>
