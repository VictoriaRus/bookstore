export interface IProduct {
    id: string,
    booksCount: number,
    bookPrice: number,
    booksCost: number,
}

export interface IBookCart {
    title: string,
    image: string,
    price: string,
    subtitle: string,
    isbn13: string,
    url?: string,
    count: number,
}

export interface IOder {
    sumTotal: number,
    vat: number,
    total: number,
}