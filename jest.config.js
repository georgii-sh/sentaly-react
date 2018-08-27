module.exports = {
  testURL: 'http://localhost/',
  coverageDirectory: './coverage',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['/templates/'],
  setupFiles: ['./.enzymeConfig.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: ['**/src/**/*.js*', '!**/node_modules/**', '!**/__snapshots__/**'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 60,
      functions: 48,
      lines: 50
    }
  }
}
