// 화면 스타일은 assets/tailwind.css로 미리 빌드되어 있습니다.
// index.html의 class를 바꿨다면 `npm install` 후 `npm run build:css`로 다시 빌드하세요.
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: Object.fromEntries(['bg', 'surface', 'soft', 'line', 'fg', 'muted', 'accent', 'accent-fg', 'pos', 'neg', 'warn']
        .map((k) => [k, `rgb(var(--${k}) / <alpha-value>)`])),
      fontFamily: { sans: ['var(--font-sans)'] },
      zIndex: { header: '10', drawer: '40', dialog: '50' },
    },
  },
};
