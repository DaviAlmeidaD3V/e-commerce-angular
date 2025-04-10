import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { ProductService } from '../../services/product.service'; 
import { CartService } from '../../services/cart.service';
import { ProductImage } from '../../shared/models/product.images';
import Swal from 'sweetalert2';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productId!: number; 
  product: any; 
  images: ProductImage [] = [];
  activeImageIndex: number = 0;
  quantityItems: number = 1;


  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private cartService: CartService,

    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.productId = +params.get('id')!; 
      this.loadProductData(); 

      window.scrollTo(0, 0);
    });
  }

  loadProductData() {
    this.productService.getSingleProduct(this.productId).subscribe({
      next: (data) => {
        this.product = data;


        this.productService.getProductImages(this.productId).subscribe({
          next: (images) => {
            this.images = images;
            if (this.images.length > 0) {
              this.activeImageIndex = 0; 
            }
          },
          error: (err) => {
            Swal.fire({
              title: `Error`, 
              text: 'Error on Loading Images ',
              icon: 'error',
              position: 'top-right',  
              showConfirmButton: false,   
              timer: 3000,  
              toast: true,  
              timerProgressBar: true  
            });
          },
        });
      },
      error: (err) => {
        Swal.fire({
          title: `Error`, 
          text: 'Error on Loading Images ',
          icon: 'error',
          position: 'top-right',  
          showConfirmButton: false,   
          timer: 3000,  
          toast: true,  
          timerProgressBar: true  
        });
      },
    });
  }
  
  addToCart() {

    let product_name =  this.product.p_name;
    let productImage = this.product.image;

    Swal.fire({
      title: `  "${product_name}"  Added to Cart`, 
      text: 'The Product Was Added on Cart ',
      icon: 'success',
      imageUrl: productImage,  
      imageWidth: 120,  
      imageHeight: 120,
      position: 'top-right',  
      showConfirmButton: false,   
      timer: 3000,  
      toast: true,  
      timerProgressBar: true  
    });

    if ( this.product ) {

      const quantityToAdd = this.quantityItems > 1 ? this.quantityItems : 1;

      this.cartService.addToCart({
        ...this.product,
        quantity: quantityToAdd,
      });
    }
  }

  setActiveImage(index: number): void {
    this.activeImageIndex = index;
  }

  copyUrl () {

    Swal.fire({
      title: `Copied url`, 
      icon: 'warning',
      position: 'top-right',  
      showConfirmButton: false,   
      timer: 3000,  
      toast: true,  
      timerProgressBar: true  
    });


    const url = window.location.href;
    navigator.clipboard.writeText(url)
  }

  pickQuantity(incremento: number): void {
    this.quantityItems += incremento;  

    if (this.quantityItems < 1) {
      this.quantityItems = 1
    }
  }


  addFavorite() {
    let product_name =  this.product.p_name;
    let productImage = this.product.image;

    this.favoritesService.addToFavorites( this.product )

    Swal.fire({
      title: `  "${product_name}"  Added to Favorites`, 
      text: 'The Product Was Added on Favorites List ',
      icon: 'success',
      imageUrl: productImage,  
      imageWidth: 120,  
      imageHeight: 120,
      position: 'top-right',  
      showConfirmButton: false,   
      timer: 3000,  
      toast: true,  
      timerProgressBar: true  
    });
  }

}