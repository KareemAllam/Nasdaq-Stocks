import { Config } from 'jest';

module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js)$': ['babel-jest', { plugins: ['babel-plugin-syntax-hermes-parser'] }],
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  automock: false,

  testMatch: ['**/*.test.tsx'],

  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
} as Config;
