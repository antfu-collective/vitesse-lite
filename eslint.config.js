import antfu from '@antfu/eslint-config'
import plugin from '@unocss/eslint-plugin'

export default antfu(
  {
    ignores: [],
  },
  {
    plugins: {
      '@unocss': plugin,
    },
    rules: plugin.configs.recommended.rules,
  },
)
