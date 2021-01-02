import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)(test).ts?(x)'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
export default config;
