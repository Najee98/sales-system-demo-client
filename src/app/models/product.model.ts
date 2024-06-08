export interface ProductResponseDto {
    id: number;
    name: string;
    description: string;
    category: string;
    creationDate: Date;
  }
  
  export interface ProductRequestDto {
    name: string;
    description: string;
    price: number;
    categoryId: number;
  }
  