import classNames from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}
export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <button
                type="button"
                onClick={onToggle}
            >
                Toggle
            </button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
}
