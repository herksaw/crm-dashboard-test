import React from 'react';
import Image from '../image';
import styles from './waveChart.module.scss';

const WaveChart = (props) => {
    const {
        chart,
        className,
        style,
    } = props;

    const waveChartClassNames = [
        styles.waveChart,
        className,
    ].join(' ').trim();

    return (
        <div className={waveChartClassNames} style={style}>
            <div className={styles.header}>
                
            </div>

            <div className={styles['data-group']}>
                <div className={styles['chart-holder']}>
                    <span {...{
                        style: {
                            color: chart.color,
                        }
                    }}>{chart.title}</span>

                    <Image src={chart.src} 
                        {...{
                            style: {
                                filter: chart.filter,
                            }
                        }}/>

                    <div className={styles['chart-data']}>
                        <span {...{
                            style: {
                                color: chart.color,
                            }
                        }}>{chart.number}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WaveChart;