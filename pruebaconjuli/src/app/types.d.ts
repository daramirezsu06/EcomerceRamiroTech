export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}
export interface IProductcart extends IProduct {
  cantidad: number;
}

export interface ICategory {
  id?: number;
  name: string;
  image?: string;
}

export interface IOrderUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: "admin" | "user";
}

export interface IOrder {
  status: "approved" | "pending" | "rejected";
  date: string;
  products: IProduct[];
  id: number;
}

export interface IUser {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

export interface IProfile {
  email: string;
  password: string;
}

export interface ItoggleMenu {
  toggleMenu: () => void;
}
