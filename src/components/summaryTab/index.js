import React from 'react';
import styles from './summaryTab.module.scss';

const SummaryTab = (props) => {
    const {
        summary,
        className,
        style,
    } = props;

    const summaryTabClassNames = [
        styles.summaryTab,
        className,
    ].join(' ').trim();

    return (
        <div className={summaryTabClassNames} style={style}>
            <div className={styles['left-group']}>
                <span>{summary.title}</span>
                <span>{summary.desc}</span>
            </div>

            <p className={styles.data}>{summary.data}</p>
        </div>
    );
}

export default SummaryTab;