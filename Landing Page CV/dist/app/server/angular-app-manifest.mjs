
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
    'index.csr.html': {size: 16878, hash: 'b156582847e5a5aefaa3643e21f3180469718cc3aa2753e64109b13bc5d09e41', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11233, hash: '33b394a763ce7f656a73d27134cd8ddddf728840217533ddd29ef464129124c1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 43386, hash: 'd8edeff3783701377210005547519776594d33c0d2fb2db52b33b8c570fe28c9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JCC2FRGE.css': {size: 21643, hash: '4NztCD7FpmM', text: () => import('./assets-chunks/styles-JCC2FRGE_css.mjs').then(m => m.default)}
  },
};
