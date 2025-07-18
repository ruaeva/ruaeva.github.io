import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  globalStyles: path.join(__dirname, './docs/styles/index.css'),

  title: 'My Site',
  icon: '/rspress-icon.png',
  logoText: 'Ruaeva',
  logo: {
    light: '1.png',
    dark: '1.png',

  },
  themeConfig: {

    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/ruaeva',
      },
      {
        icon: 'x',
        mode: 'link',
        content: '',
      },
      {
        icon: 'youtube',
        mode: 'link',
        content: '',
      },
        // {
        //   icon: 'qq',
        //   mode: 'link',
        //   content: '',
        // },
        // {
        //   icon: '',
        //   mode: 'link',
        //   content: '',
        // },
    ],
  },
  plugins: [],
});
