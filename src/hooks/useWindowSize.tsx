import React, {useEffect, useState} from 'react';

interface IWindowSizeState {
    width: number;
    height: number;
}

const UseWindowSize = () => {
    const [widowSize, setWindowSize] = useState<IWindowSizeState>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return widowSize;
};

export default UseWindowSize;