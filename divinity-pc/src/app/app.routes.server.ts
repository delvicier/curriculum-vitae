import {RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'service/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [{ id: 'web' }, { id: 'apps' }, { id: 'ia' }];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
