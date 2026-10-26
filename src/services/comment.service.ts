import { axiosInstance } from "@/libs/axios";
import { Comment } from "@/types";

export const commentService = {
  async create(bookId: string, comment: Omit<Comment, "id" | 'bookId'>): Promise<Comment> {
    return axiosInstance.post(`/comments` , {
      bookId,
      ...comment,
    });
  },

  async getCommentByBookId(
    bookId: string,
  ): Promise<Comment> {
    return axiosInstance.get(`/comments/${bookId}`);
  },
};
