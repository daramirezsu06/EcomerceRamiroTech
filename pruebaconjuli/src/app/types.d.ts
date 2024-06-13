
export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imgUrl: string;
  categoryId: number;
}
export interface IResponseProduct {
  products: IProduct[];
  total: number;
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

export interface LoginProps {
  email: string;
  password: string;
}

export interface LoginErrorProps {
  email?: string;
  password?: string;
}

export interface RegisterProps {
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  address: string;
  phone: string;
}

export interface RegisterErrorProps {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  address?: string;
  phone?: string;
}