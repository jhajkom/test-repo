module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      1,
      'always',
      [
        'layout',
        'build',
        'deploy',
        'run',
        'auth',
        'reports',
        'root-store',
        'shared',
        'services',
        'graphql',
        'docs',
        'ci',
        'config'
      ]
    ],
    'subject-min-length': [2, 'always', 10]
  }
};
