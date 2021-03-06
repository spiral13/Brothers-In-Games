module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
      "browser": true
    },
    "rules": {
        "react/no-unescaped-entities": "off",
        "react/forbid-prop-types": "off",
        "react/jsx-filename-extension": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-mixed-operators": ["error", { "allowSamePrecedence": true }],
        "no-param-reassign": ["error", { "props": false }],
        "brace-style": ["error", "stroustrup"],
        "linebreak-style": "off",
        "import/no-unresolved": "off",
        "default-case": "off",
        "import/extensions": ["error", "never", { "svg": "always" }],
    },
    "settings": {
      "import/resolver": {
        "node": {
          "paths": ["./"]
        }
      }
    }
}
