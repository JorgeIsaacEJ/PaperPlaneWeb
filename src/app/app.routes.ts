import { Routes } from '@angular/router';
import { IndexComponent } from './views/clientsservices/index/index.component';
import { CreateComponent } from './views/clientsservices/create/create.component';
import { EditComponent } from './views/clientsservices/edit/edit.component';
import { ViewComponent } from './views/clientsservices/view/view.component';

export const routes: Routes = [
    {path: 'clientsservices', redirectTo:'clientsservices/index', pathMatch:'full'},
    {path: 'clientsservices/index', component:IndexComponent},
    {path: 'clientsservices/create', component:CreateComponent},
    {path: 'clientsservices/:PpcsId/edit', component:EditComponent},
    {path: 'clientsservices/:PpcsId/view', component:ViewComponent}
];
