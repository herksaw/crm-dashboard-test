import React, { useState } from 'react';
import Button from '../button';
import FontIcon from '../fontIcon';
import Icon from '../icon';
import Image from '../image';
import ProfileCol from '../profileCol';
import { invert } from '../../utils';
import { TREND } from '../../const';
import styles from './salesReport.module.scss';

const STATE = {
    LAST: 0,
    CURR: 1,
};

const SalesReport = (props) => {
    const {
        report,
        className,
        style,
    } = props;

    const [state, setState] = useState(STATE.LAST);

    const salesReportClassNames = [
        styles.salesReport,
        className,
    ].join(' ').trim();

    const currPage = invert(STATE)[state];

    const onClickState = e => {
        setState(parseInt(e.currentTarget.dataset.value));
    };

    const getIconByTrend = trend => {
        switch (trend) {
            case TREND.UP:
                return (
                    <Icon src='chevron.svg' className={styles['trend-up']} />
                );
            case TREND.DOWN:
                return (
                    <Icon src='chevron.svg' className={styles['trend-down']} />
                );
            case TREND.SAME:
                return (
                    <Icon src='disc.svg' className={styles['trend-same']} />
                );
            default:
                return (<></>);
        }
    };    

    return (
        <div className={salesReportClassNames} style={style}>
            <div className={styles.header}>
                <div className={styles['left-group']}>
                    <FontIcon name={'property'} />
                    <span>Sales Report</span>
                </div>
                <div className={styles['right-group']}>
                    <Button value={STATE.LAST} onClick={onClickState}
                        {...state === STATE.LAST && {
                            style: {
                                color: '#545cd8',
                            }
                        }}>
                        Last
                        <div {...state === STATE.LAST && {
                            style: {
                                width: '100%',
                            }
                        }}></div>
                    </Button>
                    <Button value={STATE.CURR} onClick={onClickState}
                        {...state === STATE.CURR && {
                            style: {
                                color: '#545cd8',
                            }
                        }}>
                        Current
                        <div {...state === STATE.CURR && {
                            style: {
                                width: '100%',
                            }
                        }}></div>
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
                        <span>{report.CURRENCY}</span>
                        <span>{report[currPage].number}</span>
                        <span>{report[currPage].desc}</span>
                    </div>
                </div>

                <div className={styles['list-title']}>{report[currPage].list_title}</div>

                <div className={styles['list-holder']}>
                    {
                        report.LIST.map((item, i) => {
                            return (
                                <div className={styles['list-item']}>
                                    <ProfileCol name={item.name} desc={item.desc} imgSrc={item.img} />

                                    <div className={styles['trend-holder']}>
                                        <span>{report.CURRENCY}</span>
                                        <span>{item.data.number}</span>
                                        {
                                            getIconByTrend(item.data.trend)
                                        }
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

export default SalesReport;