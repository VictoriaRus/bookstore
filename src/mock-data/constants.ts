//media queries
export const DESKTOP_WIDTH = "1024px";
export const TABLET_WIDTH = "768px";
export const MOBILE_WIDTH = "415px";
//colors
export const COLORS = ['#D7E4FD', '#CAEFF0', '#F4EEFD', '#FEE9E2'];

export const getColor = () => {
    return Math.floor(Math.random() * COLORS.length);
}
//TabGroup
export const TYPES: string[] = ['Description', 'Authors'];
//Stars
export const STARS = [1, 2, 3, 4, 5];
//regular
export const REGULAR = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//Pagination
export const makeArr = (count: number) => {
    let pages: number[] = [];
    for (let i = 1; i <= count; i++) {
        pages.push(i);
    }
    return pages;
}