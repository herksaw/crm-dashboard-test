import React from 'react';
import styles from './fontIcon.module.scss';

const FontIcon = (props) => {
    const {
        name,
        className,
    } = props;

    const fontIconClassNames = [
        styles.fontIcon,
        styles[name],
        className,
    ].join(' ').trim();

    return (
        <i className={fontIconClassNames}
        />
    );
}

export default FontIcon;