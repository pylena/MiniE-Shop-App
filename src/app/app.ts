import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from './components/home/home';
import {Navbar} from './components/navbar/navbar';
import {Products} from './components/products/products';
import {Contact} from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MiniE-Shop');
}
