import React from 'react';
import styles from './link.module.scss';

const Link = (props) => {
    const {
        to,
        children,
        className,
        style,
    } = props;

    const linkClassNames = [
        styles.link,
        className,
    ].join(' ').trim();

    return (
        <a className={linkClassNames} style={style} href={to ? to : '#'}>
            {children}
        </a>
    );
}

export default Link;