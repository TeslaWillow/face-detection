import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./face-detector/pages/video-player-page/video-player-page.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
