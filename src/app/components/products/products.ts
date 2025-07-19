import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import {Toast} from 'primeng/toast';

import { MessageService } from 'primeng/api';
import {Divider} from 'primeng/divider';

// Product interface
interface Product {
  name: string;
  price: number;
  image: string;
  description: string
}
@Component({
  imports: [CardModule, ButtonModule, CommonModule, Toast, Divider],
  providers: [MessageService],
  selector: 'app-products',
  standalone: true,
  styleUrl: './products.css',
  templateUrl: './products.html'
})
export class Products {

  products: Product[] = [
    {
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      description: 'High-quality wireless headphones with noise cancellation and premium sound quality.'
    },
    {
      name: 'Smart Watch',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      description: 'Advanced smartwatch with health tracking, GPS, and long-lasting battery life.'
    },
    {
      name: 'Bluetooth Speaker',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
      description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design.'
    },
    {
      name: 'Laptop Stand',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop',
      description: 'Adjustable aluminum laptop stand for better ergonomics and cooling.'
    },
    {
      name: 'Wireless Mouse',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop',
      description: 'Ergonomic wireless mouse with precision tracking and long battery life.'
    },
    {
      name: 'USB-C Hub',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=300&fit=crop',
      description: 'Multi-port USB-C hub with HDMI, USB 3.0, and fast charging support.'
    },
    {
      name: 'Phone Case',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop',
      description: 'Durable phone case with military-grade protection and wireless charging compatibility.'
    },
    {
      name: 'Tablet',
      price: 329.99,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
      description: '10-inch tablet with high-resolution display, fast processor, and all-day battery.'
    }
  ];

  addToCart(product: Product) {
    console.log(`${product.name} added to cart!`);
  }
}
