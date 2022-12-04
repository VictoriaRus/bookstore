export interface IAsyncBooksResponseData {
    error: string;
    total: string;
    page: string;
    books: [{
        title: string;
        image: string;
        price: string;
        subtitle: string;
        isbn13: string;
        url?: string;
    }];
}

export interface IBook {
    title: string,
    image: string,
    price: string,
    subtitle: string,
    isbn13: string,
    url?: string
}

export interface IBookInfo {
    error: number;
    title: string;
    subtitle: string;
    authors: string;
    publisher: string;
    isbn10: number;
    isbn13: string;
    pages: number;
    year: number;
    rating: number;
    desc: string;
    price: string;
    image: string;
    url: string;
    pdf: {
        "Chapter 2": string;
        "Chapter 5": string;
    }
}
