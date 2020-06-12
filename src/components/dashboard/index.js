import React from 'react';
import SummaryTab from '../summaryTab';
import SalesReport from '../salesReport';
import BandwidthReport from '../bandwidthReport';
import WaveChart from '../waveChart';
import { 
    SUMMARY_TABS, 
    SALES_REPORT, 
    BANDWIDTH_REPORT,
    WAVE_CHARTS,
} from '../../data';
import styles from './dashboard.module.scss';

const Dashboard = (props) => {
    const {
        className,
    } = props;

    const dashboardClassNames = [
        styles.dashboard,
        className,
    ].join(' ').trim();

    return (
        <div className={dashboardClassNames}>
            <div className={styles['summary-tabs-container']}>
                {
                    SUMMARY_TABS.map((s, i) => {
                        return (
                            <SummaryTab className={styles['summary-tab']} key={i} summary={s}
                                {...{
                                    style: {
                                        backgroundImage: s.background,
                                    }
                                }}>
                            </SummaryTab>
                        );
                    })
                }
            </div>

            <div className={styles['sales-bandwidth-holder']}>
                <SalesReport className={styles['sales-report']} report={SALES_REPORT} />

                <BandwidthReport className={styles['bandwidth-report']} report={BANDWIDTH_REPORT} />
            </div>

            <div className={styles['wave-holder']}>
                {
                    WAVE_CHARTS.map((chart, i) => {
                        return (
                            <WaveChart className={styles['wave-chart']} chart={chart} key={i} />
                        );
                    })
                }
            </div>      
        </div>
    );
}

export default Dashboard;