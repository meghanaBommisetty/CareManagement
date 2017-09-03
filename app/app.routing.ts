import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { AssementsComponent } from './assements/index';
import { MainhomeComponent } from './mainhome/index';
const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'assements', component: AssementsComponent },
     { path: 'mainhome' , component: MainhomeComponent },
     { path: '**', redirectTo: '/mainhome', pathMatch: 'full'  }
    // otherwise redirect to home
      // otherwise redirect to home
    
];

export const routing = RouterModule.forRoot(appRoutes);