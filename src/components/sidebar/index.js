import React from 'react';
import Accordion from '../accordion';
import FontIcon from '../fontIcon';
import { NAV_ITEMS } from '../../data';
import styles from './sidebar.module.scss';

const Sidebar = (props) => {
    const {
        className,
    } = props;

    const sidebarClassNames = [
        styles.sidebar,
        className,
    ].join(' ').trim();

    return (
        <div className={sidebarClassNames}>
            <div className={styles['sidebar-container']}>
                {
                    NAV_ITEMS.map((item, i) => {
                        return (
                            <div className={styles['nav-item']} key={i}>
                                <p className={styles['group-title']}>
                                    {item.groupTitle}
                                </p>

                                {
                                    item.content.map((subItem, j) => {
                                        return (
                                            <Accordion key={j} 
                                                className={styles.accordion}
                                                titleNode={
                                                    <div className={styles['title-holder']}>
                                                        <div>
                                                            <FontIcon name={subItem.icon} />
                                                        </div>                                                        
                                                        <span>{subItem.title}</span>
                                                    </div>
                                            }>
                                                {subItem.panelData && subItem.panelData.length > 0 && 
                                                    <div className={styles['panel-data-holder']}>
                                                        {
                                                            subItem.panelData.map((data, k) => {
                                                                return (
                                                                    <div key={k}>{data}</div>
                                                                )
                                                            })                                                            
                                                        }
                                                    </div>
                                                }
                                            </Accordion>
                                        )
                                    })
                                }
                            </div>
                        );
                    })
                }                
            </div>
        </div>
    );
}

export default Sidebar;