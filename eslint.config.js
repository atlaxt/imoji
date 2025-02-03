import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-undef': 'off',
  },
  vue: true,
  typescript: true,
})
