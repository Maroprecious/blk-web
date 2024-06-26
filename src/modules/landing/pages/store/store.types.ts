// types.ts
export interface Product {
  id: number;
  name: string;
  scientificName: string;
  medicinalUse: string;
  SpiritualUse: string;
  Contradictions: string;
  Interactions: string;
  image: string;
  price: string;
  quantity: number;
}

export interface ProductDetailsParams {
  productId: string;
}
