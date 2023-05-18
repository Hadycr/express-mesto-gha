module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "airbnb-base",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "vue"
    ],
    "rules": {
      "no-underscore-dangle": [
        "error",
        {
          "allow": [
            "_id"
          ],
        }
      ]
    },
}
