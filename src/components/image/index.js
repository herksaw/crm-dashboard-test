import React, { useEffect, useState } from 'react';
import styles from './image.module.scss';

const Image = (props) => {
    const {
        src,
        alt,
        className,
        forwardedRef,
        style,
    } = props;

    const [image, setImage] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const imageFile = await import(`../../../public/assets/images/${src}`);
                setImage(imageFile.default);
            } catch (ex) {
                console.error(ex);
            }            
        })();        
    }, [src]);

    const imageClassNames = [
        styles.image,
        className,
    ].join(' ').trim();

    return (
        <img className={imageClassNames}
            style={style}
            alt={alt ? alt : ''} 
            src={image}
            ref={forwardedRef}
        />
    );
}

export default Image;