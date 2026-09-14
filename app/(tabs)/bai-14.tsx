interface ApiResponse<T> {
  data: T[];
  total: number;
  page: number;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand?: string;
  thumbnail: string;
  images: string[];
}

interface DummyProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const getProducts = async (
  page: number,
  limit: number = 10,
): Promise<ApiResponse<Product>> => {
  const skip = (page - 1) * limit;
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );

  const result: DummyProductResponse = await response.json();

  return {
    data: result.products,
    total: result.total,
    page,
  };
};
