module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/index.js(x)?', '!src/**/stories.jsx'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
	modulePaths: ['<rootDir>/src/'],
}
