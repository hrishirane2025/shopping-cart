export interface Product {
  id: string;
  company: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
}

export interface CartItems {
    product: Product;
    quantity: number
}
