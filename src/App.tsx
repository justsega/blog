import React, {Suspense, useContext, useState} from 'react'
import './styles/index.scss';
import {Routes, Route, Link} from "react-router-dom";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import MainPageAsync from "./pages/MainPage/MainPage.async";
import {useTheme} from "./context/theme/useTheme";
import classNames from "./helpers/classNames/classNames";


const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={ <div>Loading...</div> }>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>

            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

export default App;