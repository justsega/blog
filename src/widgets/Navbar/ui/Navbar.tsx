import React from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(styles.Navbar)}>

            <div className={classNames(styles.links, {}, [className])}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
            </div>
        </div>
    );
}
