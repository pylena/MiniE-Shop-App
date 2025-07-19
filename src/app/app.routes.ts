import { Routes } from '@angular/router';
import {Products} from './components/products/products';
import {Home} from './components/home/home';
import {Contact} from './components/contact/contact';

export const routes: Routes = [
  {path: 'products' , component: Products},
  {path: '' , component: Home},
  {path: 'contact', component: Contact }
];
