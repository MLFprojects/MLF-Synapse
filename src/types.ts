export type TriMode = 'ON' | 'AUTO' | 'OFF';

export interface NeuralNode {
  id: string;
  label: string;
  category: 'core' | 'rule' | 'schema' | 'cause_effect' | 'source';
  x: number;
  y: number;
  connections: string[];
  summary: string;
  sourceDoc?: string;
  confidence: number;
}

export interface ModelOption {
  id: string;
  name: string;
  type: 'local' | 'cloud';
  description: string;
  latency: string;
  contextWindow: string;
  privacyBadge: string;
}

export interface DocumentSample {
  id: string;
  title: string;
  type: 'pdf' | 'diagram' | 'manual';
  size: string;
  conceptsExtracted: number;
  rulesExtracted: number;
  relationsExtracted: number;
  rawSizeDiscarded: string;
  extractedConcepts: string[];
  causeEffectPairs: { cause: string; effect: string; rule: string }[];
}
