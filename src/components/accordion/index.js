import React, { useState } from 'react';
import Icon from '../icon';
import styles from './accordion.module.scss';

const Accordion = (props) => {
    const {
        titleNode,
        key,
        children,
        className,
        titleClassName,
        panelClassName,
    } = props;

    const [isExpand, setIsExpand] = useState(false);

    const accordionClassNames = [
        styles.accordion,
        className,
    ].join(' ').trim();

    const onClickTitle = e => {
        setIsExpand(!isExpand);
    };

    return (
        <div className={accordionClassNames} key={key}>
            <div className={`${styles.title} ${titleClassName}`}
                onClick={onClickTitle}>
                {titleNode}

                {children && 
                    <Icon src='chevron.svg' 
                    {...isExpand && {style: {
                        transform: 'rotateX(0deg)',
                    }}}/>
                }                
            </div>

            {isExpand && 
            <div className={`${styles.panel} ${panelClassName}`}
                {...{style: {
                    opacity: '1',
                    marginTop: '0%',
                }}}>
                {children}
            </div>
            }
        </div>
    );
}

export default Accordion;
