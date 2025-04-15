import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-undef': 'off',
    'ts/ban-ts-comment': 'off',
  },
  vue: true,
  typescript: true,
})
