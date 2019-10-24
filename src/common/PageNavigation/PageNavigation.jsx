import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNavigation.module.css';

const linksTitle = {
    '' : 'Главная',
    'market' : 'Магазин',
    'milk-products' : 'Молочные продукты',
    'grocery-products' : 'Бакалея',
    'fruits_and_vegetables-products' : 'Овощи,Фрукты',
    'meat-products' : 'Мясная продукция',
    'sea-products' : 'Морепродукты',
    'bakery-products' : 'Хлебобулочные изделия',
    'sweet-products' : 'Кондитерские изделия',
    'soft_drinks-products' : 'Безалкогольные Напитки',
    'alcohol_drinks-products' : 'Спиртные напитки',
    'cart' : 'Корзина',
    'search' : 'Поиск',
    'login' : 'Авторизация / регистрация',
    'setting' : 'Настройка Аккаунта'
}

const createLink = (url, link) => url.slice(0, url.indexOf(link) + link.length);

const PageNavigation = ({url}) => {
    const links = url.split('/');
    return (
        <div className={styles.navigationSection}>
            {links.map((link, index) => {

                const title = linksTitle[link] ? `${linksTitle[link]} ${index + 1 !== links.length ? ' > ' : ''} ` : link;
                
                return <NavLink 
                            exact 
                            to={createLink(url, link)} 
                            key={index}
                            className={styles.link} 
                            activeClassName={styles.activeLink}
                        >{title}</NavLink>
            })}
        </div>
    )
}

export default PageNavigation