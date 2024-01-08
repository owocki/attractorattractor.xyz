import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Attractor Attractor</span>,
  project: {
    link: 'https://github.com/owocki/attractorattractor.xyz/',
  },
  docsRepositoryBase: 'https://github.com/owocki/attractorattractor.xyz/',
  footer: {
    text: 'Attractor Attractor',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Attractor Attractor'
    }
  }
}

export default config
