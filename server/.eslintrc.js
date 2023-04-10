module.exports = {
    extends: ['airbnb-base', 'airbnb-typescript/base'],
    parserOptions: {
      project: './server/tsconfig.json',
    },
    rules:{
      "import/prefer-default-export": [
        ( "off" | "warn" | "error" ),
        { "target": "any" }
    ]
    }
    
  };