export interface SaleResponseDto {
    id: number;
    creationDate: Date;
    client: string;
    seller: string;
    total: number;
  }
  
  export interface SaleRequestDto {
    products: ProductUpdateRequestDto[];
    seller: string;
    clientId: number;
  }
  
  export interface ProductUpdateRequestDto {
    productId: number;
    quantity: number;
    price: number;
  }
  