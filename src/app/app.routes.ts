import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {     
    path: 'aboutus',
    loadComponent: () =>
    import('./components/aboutus/aboutus.component').then((m) => m.AboutusComponent),
  },
  {
    path: 'drink',
    loadComponent: () =>
    import('./components/drink/drink.component').then((m) => m.DrinkComponent),
  },
  {
    path: '',
    redirectTo: 'aboutus',
    pathMatch: 'full',
  }
];
