/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots: ["<rootDir>/test"],
  preset: "ts-jest",
  testEnvironment: "node",
  automock: false,
  bail: true,
  maxConcurrency: 1,
  maxWorkers: 1,
  testMatch: ["**/*.test.ts"],
  testPathIgnorePatterns: ["node_modules", "git_modules", "cache", "dist", ".gen", "gen", "src"],
  testTimeout: 10000,
  verbose: true,
  moduleNameMapper: {
    "@zorse/adk/core": "<rootDir>/src/core",
    "@zorse/adk/core/(.*)": "<rootDir>/src/core/$1",
    "@zorse/adk/local": "<rootDir>/src/local",
    "@zorse/adk/local/(.*)": "<rootDir>/src/local/$1",
    "@zorse/adk/cloud": "<rootDir>/src/cloud",
    "@zorse/adk/cloud/(.*)": "<rootDir>/src/cloud/$1",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        isolatedModules: true,
      },
    ],
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["html-spa"],
  coverageThreshold: {
    global: {
      lines: 95,
      branches: 95,
      functions: 95,
      statements: 95,
    },
  },
};
