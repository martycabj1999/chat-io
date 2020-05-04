module.exports = {
    "env": {
        "browser": true,
        "commonjs": true
    },
    "extends": "airbnb-base",
    rules: {
        'max-len': ["error", { "code": 200 }],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
        ]
      }
};