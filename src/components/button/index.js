import React from 'react';
import styles from './button.module.scss';

const Button = (props) => {
    const {
        children,
        value,
        className,
        style,
        onClick,
    } = props;

    const buttonClassNames = [
        styles.button,
        className,
    ].join(' ').trim();

    return (
        <div className={buttonClassNames} 
            onClick={onClick}
            data-value={value}
            style={style}>            
            {children}
        </div>
    );
}

export default Button;