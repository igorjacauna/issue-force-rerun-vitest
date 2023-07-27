/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { start } from '.';

describe('basic', async () => {
  let server;

  beforeAll(async () => {
    if (!server || !server.listening) {
      server = start();
    }
  });

  afterAll(async () => {
    await new Promise((resolve, reject) => {
      if (!server.listening) resolve();
      server.closeAllConnections();
      server.close(error => (error ? reject(error) : resolve()));
    });
  });

  test('simple test', async () => {
    expect(true).toBe(true);
  });
});
