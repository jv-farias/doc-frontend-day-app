import React from 'react'
import style from './components/style.module.css'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span className={style.titulo}>Frontend Day App</span>,
  project: {
    link: 'https://github.com/jv-farias/frontend-day-app',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: <span className={style.textFooter}>Frontend Day App</span>,
  },
}

export default config
