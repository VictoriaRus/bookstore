import { axiosContent } from "../../api/api";
import { IAsyncBooksResponseData } from "../../types/booksTypes/booksTypes";

export const getBooks = async ({ filter = "word-to-search", page = 1 }: { filter?: string, page?: number }) => {
    if (!filter) {
        filter = "word-to-search";
    }

    return await axiosContent.get<IAsyncBooksResponseData>(`/search/${ filter }/${ page }`);
}
