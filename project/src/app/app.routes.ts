import { Routes } from '@angular/router';
import {CMainPage} from './pages/c-main-page/c-main-page';

export const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    component: CMainPage
  }
];
