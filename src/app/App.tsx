import React, { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import classNames from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Suspense fallback={<div>Loading translations...</div>}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
export default App;
