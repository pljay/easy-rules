import { Rule, RuleGroup, RuleVersion } from '@/types/rule';

export async function fetchRules(): Promise<Rule[]> {
  // 使用 mock 或请求后端 API
  return [];
}

export async function saveRule(rule: Rule): Promise<void> {
  // 保存规则，不同版本
}

export async function fetchRuleGroups(): Promise<RuleGroup[]> {
  return [];
}

export async function importRules(json: string): Promise<void> {
  // 解析并保存规则
}

export async function exportRules(): Promise<string> {
  // 导出为 JSON
  return JSON.stringify([]);
}

export async function testRule(rule: Rule, inputData: any): Promise<any> {
  // 前端沙盒执行 rule
}

export async function setDependencies(ruleId: string, dependsOn: string[]): Promise<void> {}

export async function fetchRuleVersions(ruleId: string): Promise<RuleVersion> { return {ruleId: '', versions: []}; }