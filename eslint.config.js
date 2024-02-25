import eslint from "@antfu/eslint-config";

export default eslint({
  react: true,
  jsx: true,
  typescript: true,
  unocss: true,
  formatters: true,
  files: ['src/**/*.tsx'],
  ignore: ['node_modules/*', 'pnpm-lock.yaml'],
});
