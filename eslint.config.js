import antfu, { combine } from '@antfu/eslint-config'
import plugin from '@unocss/eslint-plugin'

export default combine(
  antfu,
  {
    plugins: {
      '@unocss': plugin,
    },
    rules: plugin.configs.recommended.rules,
  },
)
