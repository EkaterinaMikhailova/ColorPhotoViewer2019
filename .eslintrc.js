module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "node": true,
      "jest": true
  },
  "globals": {
    "shallow": true
  },
  "rules": {
      "indent": ["error", 2],
      "no-console": "off",
      "no-plusplus": "off",
      "no-continue": "off",
      "max-len": [1, 200, 2, {ignoreComments: true}],
      "lines-between-class-members": ["error", "never"]
  }
};