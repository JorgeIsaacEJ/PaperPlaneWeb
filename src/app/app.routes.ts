import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/index/index.component'
import { IndexComponent } from './views/clientsservices/index/index.component';
import { CreateComponent } from './views/clientsservices/create/create.component';
import { EditComponent } from './views/clientsservices/edit/edit.component';
import { ViewComponent } from './views/clientsservices/view/view.component';

export const routes: Routes = [
    {
        path: '', redirectTo:'login', pathMatch:'full'
    },
    {
        path: 'login',
        component:LoginComponent
    },
    // {
    //     path: 'clientsservices/index', component:IndexComponent,
    //     children:[
    //         {path: 'clientsservices/create', component:CreateComponent},
    //         {path: 'clientsservices/:PpcsId/edit', component:EditComponent},
    //         {path: 'clientsservices/:PpcsId/view', component:ViewComponent}
            
    //     ]
    // }
    {path: 'clientsservices/index', component:IndexComponent},
    {path: 'clientsservices/create', component:CreateComponent},
    {path: 'clientsservices/:PpcsId/edit', component:EditComponent},
    {path: 'clientsservices/:PpcsId/view', component:ViewComponent}
];
