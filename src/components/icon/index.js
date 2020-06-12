import React, { useEffect, useState } from 'react';
import styles from './icon.module.scss';

const Icon = (props) => {
    const {
        src,
        alt,
        className,
        forwardedRef,
        style,
    } = props;

    const [icon, setIcon] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const iconFile = await import(`../../../public/assets/icons/${src}`);
                setIcon(iconFile.default);
            } catch (ex) {
                console.error(ex);
            }
        })();        
    }, [src]);

    const iconClassNames = [
        styles.icon,
        className,
    ].join(' ').trim();

    return (
        <img className={iconClassNames}
            style={style}
            alt={alt ? alt : ''} 
            src={icon}
            ref={forwardedRef}
        />
    );
}

export default Icon;