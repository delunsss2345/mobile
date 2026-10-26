import { axiosInstance } from "@/libs/axios";
import { BookResponse } from "@/types";


export const bookService = {
  async getBookById(id: string): Promise<BookResponse> {
    const response = await axiosInstance.get<BookResponse>(`/books/${id}`);
    return response.data;
  },
  
  async getBooks(search?: string): Promise<BookResponse[]> {
    const response = await axiosInstance.get<BookResponse[]>("/books", {
      params: { search }, 
    });
    return response.data;
  },
};
