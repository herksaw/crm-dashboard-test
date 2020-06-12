import React, { useState } from 'react';
import Button from '../button';
import FontIcon from '../fontIcon';
import Icon from '../icon';
import Image from '../image';
import { invert } from '../../utils';
import styles from './bandwidthReport.module.scss';

const TAB = {
    TAB1: 0,
    TAB2: 1,
};

const BandwidthReport = (props) => {
    const {
        report,
        className,
        style,
    } = props;

    const [tab, setTab] = useState(TAB.TAB1);

    const bandwidthReportClassNames = [
        styles.bandwidthReport,
        className,
    ].join(' ').trim();

    const currPage = invert(TAB)[tab];

    const onClickState = e => {
        setTab(parseInt(e.currentTarget.dataset.value));
    }; 

    return (
        <div className={bandwidthReportClassNames} style={style}>
            <div className={styles.header}>
                <div className={styles['left-group']}>
                    <FontIcon name={'rocket'} />
                    <span>Bandwidth Report</span>
                </div>
                <div className={styles['right-group']}>
                    <Button value={TAB.TAB1} onClick={onClickState}
                        {...tab === TAB.TAB1 && {
                            style: {
                                backgroundColor: '#83588a',
                            }
                        }}>
                        <span {...tab === TAB.TAB1 && {
                            style: {
                                color: '#fff',
                            }
                        }}>Tab 1</span>
                    </Button>
                    <Button value={TAB.TAB2} onClick={onClickState}
                        {...tab === TAB.TAB2 && {
                            style: {
                                backgroundColor: '#83588a',
                            }
                        }}>
                        <span {...tab === TAB.TAB2 && {
                            style: {
                                color: '#fff',
                            }
                        }}>Tab 2</span>
                    </Button>
                </div>
            </div>

            <div className={styles['data-group']}>
                <div className={styles['chart-holder']}>
                    <Image src={report[currPage].chart} 
                        {...{
                            style: {
                                filter: report[currPage].color,
                            }
                        }}/>
                    
                    <div className={styles['chart-data']}>
                        <Icon className={styles[`trend-${report[currPage].trend}`]} src={'arrow.svg'} />
                        <span className={styles[`trend-${report[currPage].trend}`]}>{report[currPage].number}</span>
                        <span>{report[currPage].desc}</span>
                    </div>
                </div>

                <div className={styles['item-list']}>
                    {
                        report[currPage].list.map((item, i) => {
                            return (
                                <div className={styles.item} key={i}>
                                    <div className={styles['top-container']}>
                                        <span>{`${item.percentage}%`}</span>
                                        <span>{item.desc}</span>
                                    </div>

                                    <div className={styles['progress-bar-container']}>
                                        <div {...{
                                            style: {
                                                width: `${item.percentage}%`,
                                                backgroundColor: item.color,
                                            }
                                        }}></div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default BandwidthReport;