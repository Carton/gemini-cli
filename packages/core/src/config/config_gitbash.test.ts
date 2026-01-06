/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { describe, it, expect } from 'vitest';
import { Config, type ConfigParameters } from './config.js';

describe('Config - Git Bash on Windows', () => {
  it('should propagate experimentalUseGitBashOnWindows to shellExecutionConfig', () => {
    const params = {
      targetDir: '.',
      experimentalUseGitBashOnWindows: true,
      // Minimal required params
      sessionId: 'test-session',
      model: 'gemini-test',
      debugMode: false,
    } as unknown as ConfigParameters;

    const config = new Config(params);

    expect(config.experimentalUseGitBashOnWindows).toBe(true);
    // This expectation is expected to fail currently
    expect(config.getShellExecutionConfig().useGitBashOnWindows).toBe(true);
  });
});
