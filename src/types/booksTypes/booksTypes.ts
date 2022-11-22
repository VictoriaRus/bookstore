export interface IAsyncBooksResponseData {
    error: string;
    total: string;
    page: string;
    books: [{
        title: string;
        image: string;
        price: string;
        subtitle: string;
        isbn13: number;
        url?: string;
    }
    ];
}

export interface IBook {
    title: string,
    image: string,
    price: string,
    subtitle: string,
    isbn13: number,
    url?: string
}
