module.exports = {
  extends: ['@antfu'],
  rules: {
    // 参数尽在 需要 () 包裹 时才包裹
    'arrow-parens': ['error', 'as-needed'],
    // 关闭 let 转换成 const
    'prefer-const': 'off',
    // 强制使用 两个字符 缩进
    'indent': ['error', 2, {
      // switch case 开头的缩进 1 * 2
      SwitchCase: 1
    }],
    // 函数参数 不使用换行
    'function-paren-newline': ['error', 'never'],
    // 函数左括号前一定要加 空格
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    // 函数左括号前一定要加 空格
    'space-before-function-paren': ['error', 'always'],
    // 当仅有一个判断的时候，必须使用 {} 包裹
    'curly': ['error', 'all'],
    // 花括号是不是换行
    // 'object-curly-newline': ['error', {
    //   ObjectExpression: {
    //     // 多个换行
    //     multiline: true,
    //     // 超过或等于这个数量就换行
    //     minProperties: 1,
    //     // 如果对象中属性注释或不存在属性换行不报错。
    //     consistent: true
    //   },
    //   ObjectPattern: {
    //     multiline: true,
    //     minProperties: 1
    //   },
    //   ImportDeclaration: {
    //     multiline: true,
    //     minProperties: 2
    //   },
    //   ExportDeclaration: {
    //     multiline: true,
    //     minProperties: 2
    //   }
    // }],
    // 强制将对象的属性放在不同的行上
    // 'object-property-newline': ['error', {
    //   // 对象属性放在同一行(true 不换行) 但是不知道为什么不生效。。。
    //   allowAllPropertiesOnSameLine: false
    // }],
    // 不允许使用tab缩进
    'no-tabs': 'off',
    // 不允许使用 console
    'no-console': 'off',
    // 不允许使用 debugger
    'no-debugger': 'off',
    // 禁止使用特定的语法
    'no-restricted-syntax': 'off',
    // typescript 关闭逗号检测
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    // 关闭缩进检测
    '@typescript-eslint/indent': 'off',
    // {} 括号和 else 换行风格。
    '@typescript-eslint/brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }],
    // script标签缩进设置
    'vue/script-indent': ['error', 2, {
      // 基础缩进 1 * 2
      baseIndent: 1,
      // switch 缩进 1 * 2
      switchCase: 1,
      // 忽略的节点
      ignores: []
    }],
    // 逗号前面不要空格，后面必须空格
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // 末尾逗号使用规则配置
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    // vue 文件 按照特定的顺序 排列 template script style
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      // 关闭 vue 文件中的缩进检测
      rules: {
        indent: 'off'
      }
    }
  ]
}
