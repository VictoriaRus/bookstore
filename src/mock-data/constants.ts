//media queries
export const DESKTOP_WIDTH = "1024px";
export const TABLET_WIDTH = "768px";
export const MOBILE_WIDTH = "415px";
//colors
export const COLORS = ['#D7E4FD', '#CAEFF0', '#F4EEFD', '#FEE9E2'];

export const getColor = () => {
    return Math.floor(Math.random() * COLORS.length);
}
//regular
export const REGULAR = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;