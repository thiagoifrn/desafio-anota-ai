import { Routes } from '@angular/router';
import { WorkspaceComponent } from './workspace/workspace.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/workspace',
    pathMatch: 'full',
  },
  {
    path: 'workspace',
    component: WorkspaceComponent,
  },
];
