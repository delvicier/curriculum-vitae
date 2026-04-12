
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 18126, hash: '02f6a09dcc27e9b3e8df0902b4d4e5d5c77618571d4265722b6bfe2dd7f4c42b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11233, hash: 'ddbd2e1e6d533c0a817e95c382dd234981bcf7d4fb0de258c810d05cd95e5a2f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52242, hash: 'b831291554ec158d85eeb8e5836fdbc26fc49e41f2e1863376ba5427289cfc94', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HL6O2YL5.css': {size: 25423, hash: 'TzzQwl748qc', text: () => import('./assets-chunks/styles-HL6O2YL5_css.mjs').then(m => m.default)}
  },
};
