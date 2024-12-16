export default {
    testEnvironment: "jsdom",
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        "^.+\\.tsx?$": "ts-jest",
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
    },
    setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  };