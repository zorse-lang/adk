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
    "@zorse/adk/clouds/(.*)": "<rootDir>/.gen/$1",
    "@zorse/adk": "<rootDir>/src",
    "@zorse/adk/(.*)": "<rootDir>/src/$1",
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
  detectLeaks: true,
  errorOnDeprecated: true,
};
