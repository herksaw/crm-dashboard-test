import React from 'react';
import Button from '../button';
import FontIcon from '../fontIcon';
import Icon from '../icon';
import Image from '../image';
import Link from '../link';
import { RC_NAV_MENU, RP_LEFT_ITEMS } from '../../data';
import styles from './header.module.scss';

const Header = (props) => {
    const {
        className,
    } = props;

    const headerClassNames = [
        styles.header,
        className,
    ].join(' ').trim();

    return (
        <div className={headerClassNames}>
            <div className={styles['left-container']}>
                <Image className={styles.logo} src='logo.jpg' />
                <Button className={styles['button-menu']}>
                    <FontIcon name='menu' />
                </Button>                
            </div>

            <div className={styles['right-container']}>
                <div className={styles['rc-left']}>
                    <Button className={styles['button-search']}>
                        <FontIcon name='search' />
                    </Button>
                </div>

                <ul className={styles['rc-nav-menu']}>
                    {
                        RC_NAV_MENU.map((navItem, i) => {
                            return (
                                <li key={i}>
                                    <Link to={navItem.link}>
                                        {navItem.icon &&
                                            <FontIcon name={navItem.icon} />
                                        }

                                        {!navItem.icon &&
                                            <div>
                                                <span>4</span>
                                            </div>
                                        }

                                        <span>{navItem.text}</span>

                                        <Icon src={'chevron.svg'}></Icon>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>                   
            </div>

            <div className={styles['right-panel']}>
                <div className={styles['rp-left']}>
                {
                    RP_LEFT_ITEMS.map((item, i) => {
                        return (
                            <Link key={i} to={item.link}
                                {...{style: {
                                    backgroundColor: item.background,
                                }}}>
                                <Icon src={item.src}></Icon>
                            </Link>
                        );
                    })
                }
                </div>

                <div className={styles['rp-middle']}>
                    <div className={styles['content-tab']}>
                        <Button className={styles['avatar-group']}>
                            <Image src='avatar1.jpg' />
                            <Icon src='chevron.svg' />
                        </Button>
                        <div className={styles['text-group']}>
                            <span>Alina Mclourd</span>
                            <span>VP People Manager</span>
                        </div>
                        <Button className={styles['notifications-group']}>
                            <Icon src='calendar.svg' />
                        </Button>
                    </div>
                </div>

                <div className={styles['rp-right']}>
                    <Button>
                        <FontIcon name='menu' />
                    </Button>   
                </div>
            </div>
        </div>
    );
}

export default Header;