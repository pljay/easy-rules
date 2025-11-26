export interface Rule {
  id: string;
  name: string;
  description: string;
  groupId?: string;
  version: string;
  dependencies?: string[];
  conditions: Array<{ field: string; operator: string; value: any }>;
  actions: Array<{ type: string; params: any }>;
}

export interface RuleGroup {
  id: string;
  name: string;
  ruleIds: string[];
}

export interface RuleVersion {
  ruleId: string;
  versions: Array<{ version: string; data: Rule; timestamp: string }>;
}