import React from 'react';
import Image from '../image';
import styles from './profileCol.module.scss';

const ProfileCol = (props) => {
    const {
        imgSrc,
        name,
        desc,
        className,
        forwardedRef,
        style,
    } = props;

    const profileColClassNames = [
        styles.profileCol,
        className,
    ].join(' ').trim();

    return (
        <div className={profileColClassNames}
            style={style}
            ref={forwardedRef}>
            <Image src={imgSrc} />

            <div>
                <span>{name}</span>
                <span>{desc}</span>
            </div>
        </div>
    );
}

export default ProfileCol;