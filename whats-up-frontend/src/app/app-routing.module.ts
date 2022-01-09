import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './GUARDS/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./PAGES/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard] //cant go to home without registration
  },
  {
    path: 'messages',
    loadChildren: () => import('./PAGES/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./PAGES/registration/registration.module').then( m => m.RegistrationPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
