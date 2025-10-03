import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.components';
import { AutoresPage } from './pages/authors/authors.components';
import { PublisherComponent } from './pages/publishe/publisher.component';
import { BooksComponent } from './pages/books/books.components';
import { LoginComponents } from './pages/login.components/login.components';
import { authGuard } from './auth.guard';



export const routes: Routes =[
    {path: '', component: LoginComponents},
    {path: 'login', component: LoginComponents},
    {path: 'home', component: HomeComponent},
    {path: 'autores',component: AutoresPage,canActivate:[authGuard]},
    {path: 'editoras', component: PublisherComponent,canActivate: [authGuard]},
    {path: 'livros', component: BooksComponent}
];
