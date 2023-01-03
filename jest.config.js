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
    "@zorse/adk/scenes": "<rootDir>/src/scenes",
    "@zorse/adk/scenes/(.*)": "<rootDir>/src/scenes/$1",
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
      lines: 75,
      branches: 75,
      functions: 75,
      statements: 75,
    },
  },
};
