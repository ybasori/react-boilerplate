export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: "ts-jest-mock-import-meta",
              options: {
                metaObjectReplacement: { url: "https://www.url.com" },
              },
            },
          ],
        },
      },
    ],
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
};
