/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  roots: ['<rootDir>__tests__'],
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};