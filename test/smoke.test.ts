import { describe, expect, test } from 'bun:test';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const cliEntryPoint = fileURLToPath(new URL('../src/cli.ts', import.meta.url));

describe('CLI smoke test', () => {
  test('runs via bun without errors', () => {
    const result = spawnSync('bun', ['run', cliEntryPoint], {
      encoding: 'utf8',
    });

    expect(result.error).toBeUndefined();
    expect(result.status).toBe(0);
    expect(result.stdout?.trim()).toBe('Hello via Bun!');
    expect(result.stderr).toBe('');
  });
});
