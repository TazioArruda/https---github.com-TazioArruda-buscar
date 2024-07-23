export interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: "Comida" | "Bebida" | "Não comestível";
  }