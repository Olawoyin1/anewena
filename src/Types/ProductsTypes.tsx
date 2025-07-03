export type Product = {
  id: number;
  brand: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice?: number;
  discountPercentage?: number;
  rating?: number;
  images: string[]; // image[0] is cover, others are for gallery
};


// For the cart:
export type CartItem = Product & { quantity: number };