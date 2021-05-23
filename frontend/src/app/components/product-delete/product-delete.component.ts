
import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.getAll('id')
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.delete(`${this.product.id}`).subscribe(() => {
      this.router.navigate(["/products"]);
     this.productService.showMessager('Produto excluido com sucesso!')
    })
  }

  cancel(): void {
    this.router.navigate(["/products"]);

  }

}
