import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from '../../services/woocommerce.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private woocommerceService: WoocommerceService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.woocommerceService.getProducts(this.currentPage, this.itemsPerPage).subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => console.error('Error fetching products:', error)
    });
  }

  nextPage(): void {
    this.currentPage++;
    this.loadProducts();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }
}