import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.components';
import { AutoresPage } from './pages/authors/authors.components';
import { PublisherComponent } from './pages/publishe/publisher.component';


export const routes: Routes =[
    {path: '', component: HomeComponent},
    {path: 'autores',component: AutoresPage},
    {path: 'editoras', component: PublisherComponent}
];
