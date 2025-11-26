import React, { useState } from 'react'
import './Navigation.css';
import AuthModal from '../AuthModal/AuthModal';


function Navigation() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState('login');

    const openLoginModal = () => {
        setAuthMode('login');
        setIsAuthModalOpen(true);
    };

    const openSignupModal = () => {
        setAuthMode('signup');
        setIsAuthModalOpen(true);
    };

    const closeAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    return (
        <>
            <div className="header fl_c w-full mb-8 mb-m-0">
                <div className="wrap fl_c_sb">
                    <div className="header-menu rounded_6">
                        <button type="button" className="header-menu__button" aria-label="Open main menu"></button>
                    </div>
                    <div className="header-center fl_c_sb w-full">
                        <span className='header-logo'>


                            <a href="/">

                                <img src="https://ratingbet.com/ratingbet_build/img/header_logo.0cd68f92.svg"
                                    alt="Ratingbet Betting Tips &amp; Predictions" width="166" height="28"
                                    title="Betting Tips &amp; Predictions for Today ➡ Sure Tips for Winning Bets - Ratingbet" />

                            </a>                        </span>
                        <ul className="header-nav fl_c_sb">
                            <li className="dropdown-menu__wrapper">
                                <a href='/predictions/' className='header-nav__link fl_c nav__link-arrow-down'>Predictions</a>
                                <div className="dropdown-menu">
                                    <div className="section-title mb-12">
                                        <a href='/predictions/'>Predictions</a>
                                    </div>

                                    <ul className="dropdown-submenu fl_s_s">
                                        <li className="dropdown-submenu__block">
                                            <div className="dropdown-submenu__subtitle">Expert insights</div>
                                            <div className="dropdown-submenu__list forecast">
                                                <span className="dropdown-submenu__item fl_c dropdown-submenu__item-football">
                                                    <a href='/predictions/football/'
                                                        aria-label='Football predictions'>Football</a>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c dropdown-submenu__item-basketball">
                                                    <a href='/predictions/basketball/'
                                                        aria-label='Basketball predictions'>Basketball</a>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c dropdown-submenu__item-tennis">
                                                    <a href='/predictions/tennis/' aria-label='Tennis predictions'>Tennis</a>
                                                </span>
                                            </div>
                                        </li>


                                    </ul>
                                </div>

                            </li>
                            <li className="dropdown-menu__wrapper">
                                <a href='/bookmakers/' className='header-nav__link fl_c nav__link-arrow-down'>Bookmakers</a>

                                <div className="dropdown-menu">
                                    <div className="section-title section-title_en-bk mb-12">
                                        All Bookmakers
                                    </div>

                                    <ul className="dropdown-submenu fl_s_s">
                                        <li className="dropdown-submenu__block">
                                            <div className="dropdown-submenu__subtitle">Sportsbooks by Country</div>
                                            <div className="dropdown-submenu__list bookmaker-rating-en-list-header">
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="regional-flag fl_c_c mr-8 rounded_2">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="/ratingbet_build/img/flags/en-ke.05aef928.svg 100w"
                                                            data-sizes="auto"
                                                            src="/ratingbet_build/img/flags/en-ke.05aef928.svg" width="20"
                                                            height="13" alt="Best betting sites in Kenya" className="lazyload" />

                                                    </span>
                                                    <span>
                                                        <a href='/bookmakers/'>Best betting sites in Kenya</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="regional-flag fl_c_c mr-8 rounded_2">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="/ratingbet_build/img/flags/ar.c6ff8d6c.svg 100w"
                                                            data-sizes="auto" src="/ratingbet_build/img/flags/ar.c6ff8d6c.svg"
                                                            width="20" height="13" alt="Best betting sites in Egypt"
                                                            className="lazyload" />

                                                    </span>
                                                    <span>
                                                        <a href='/ar/bookmakers/'>Best betting sites in Egypt</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="regional-flag fl_c_c mr-8 rounded_2">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="/ratingbet_build/img/flags/en-bd.4438a0c9.svg 100w"
                                                            data-sizes="auto"
                                                            src="/ratingbet_build/img/flags/en-bd.4438a0c9.svg" width="20"
                                                            height="13" alt="Best betting sites in Bangladesh" className="lazyload" />

                                                    </span>
                                                    <span>
                                                        <a href='/en-bd/bookmakers/'>Best betting sites in Bangladesh</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="regional-flag fl_c_c mr-8 rounded_2">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="/ratingbet_build/img/flags/en-gh.0d713733.svg 100w"
                                                            data-sizes="auto"
                                                            src="/ratingbet_build/img/flags/en-gh.0d713733.svg" width="20"
                                                            height="13" alt="Best betting sites in Ghana" className="lazyload" />

                                                    </span>
                                                    <span>
                                                        <a href='/en-gh/bookmakers/'>Best betting sites in Ghana</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="regional-flag fl_c_c mr-8 rounded_2">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="/ratingbet_build/img/flags/en-in.783807a9.svg 100w"
                                                            data-sizes="auto"
                                                            src="/ratingbet_build/img/flags/en-in.783807a9.svg" width="20"
                                                            height="13" alt="Best betting sites in India" className="lazyload" />

                                                    </span>
                                                    <span>
                                                        <a href='/en-in/bookmakers/'>Best betting sites in India</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="regional-flag fl_c_c mr-8 rounded_2">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="/ratingbet_build/img/flags/en-ng.7dc12445.svg 100w"
                                                            data-sizes="auto"
                                                            src="/ratingbet_build/img/flags/en-ng.7dc12445.svg" width="20"
                                                            height="13" alt="Best betting sites in Nigeria" className="lazyload" />

                                                    </span>
                                                    <span>
                                                        <a href='/en-ng/bookmakers/'>Best betting sites in Nigeria</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="regional-flag fl_c_c mr-8 rounded_2">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="/ratingbet_build/img/flags/en-ug.ee5bebd8.svg 100w"
                                                            data-sizes="auto"
                                                            src="/ratingbet_build/img/flags/en-ug.ee5bebd8.svg" width="20"
                                                            height="13" alt="Best betting sites in Uganda" className="lazyload" />

                                                    </span>
                                                    <span>
                                                        <a href='/en-ug/bookmakers/'>Best betting sites in Uganda</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="regional-flag fl_c_c mr-8 rounded_2">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="/ratingbet_build/img/flags/en-za.0611a475.svg 100w"
                                                            data-sizes="auto"
                                                            src="/ratingbet_build/img/flags/en-za.0611a475.svg" width="20"
                                                            height="13" alt="Best betting sites in South Africa"
                                                            className="lazyload" />

                                                    </span>
                                                    <span>
                                                        <a href='/en-za/bookmakers/'>Best betting sites in South Africa</a>
                                                    </span>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="dropdown-submenu__block">
                                            <div className="dropdown-submenu__subtitle">More Ratings</div>
                                            <div className="dropdown-submenu__list">
                                                <span className="dropdown-submenu__item fl_c">
                                                    <a href='/bookmakers/betting-app/'>Betting Apps in Kenya</a>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <a href='/en-ng/bookmakers/betting-app/'>Betting Apps in Nigeria</a>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <a href='/en-za/bookmakers/betting-app/'>Betting Apps in South Africa</a>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <a href='/bookmakers/welcome-bonus/'>Betting Sites with Welcome Bonus in
                                                        Kenya</a>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <a href='/en-za/bookmakers/welcome-bonus/'>Betting Sites with Welcome Bonus
                                                        in South Africa</a>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="dropdown-submenu__block">
                                            <div className="dropdown-submenu__subtitle">Top Brands</div>
                                            <div className="dropdown-submenu__list top-brand-list-header">
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="fl_c brand-icon brand-icon-24 brand-icon-relative">







                                                        <img decoding="async" style={{ maxWidth: "46px", maxHeight: "24px" }}
                                                            alt="Melbet app"
                                                            src="https://cdn.ratingbet.com/ratingbet/20250730/f2f56e08aed8fc2d0c7c62b4a7adbc859573ea1dfd61d9332bdd09935b5cf5ad.webp" />

                                                    </span>
                                                    <span className="top-brand ml-8">
                                                        <a href='/bookmakers/melbet/'>Melbet</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="fl_c brand-icon brand-icon-24 brand-icon-relative">







                                                        <img decoding="async" style={{ maxWidth: "46px", maxHeight: "24px" }}
                                                            alt="Mostbet app"
                                                            src="https://cdn.ratingbet.com/ratingbet/20250730/3a97885f736962b6f6fcbeac8cc692f9128c8dd84bcd44ea1f4c3f24f4a02c42.webp" />

                                                    </span>
                                                    <span className="top-brand ml-8">
                                                        <a href='/bookmakers/mostbet/'>Mostbet</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="fl_c brand-icon brand-icon-24 brand-icon-relative">







                                                        <img decoding="async" style={{ maxWidth: "46px", maxHeight: "24px" }}
                                                            alt="1xbet app"
                                                            src="https://cdn.ratingbet.com/ratingbet/20250730/a0db9c6cbe87e21c49a4e2f34bd3d3e3e78bbb2da5f95654d42bd8326130c408.webp" />

                                                    </span>
                                                    <span className="top-brand ml-8">
                                                        <a href='/bookmakers/1xbet/'>1xbet</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="fl_c brand-icon brand-icon-24 brand-icon-relative">







                                                        <img decoding="async" style={{ maxWidth: "46px", maxHeight: "24px" }}
                                                            alt="Betwinner app"
                                                            src="https://cdn.ratingbet.com/ratingbet/20250730/c08a6830c5f2de737d1fc7bb7ae0de681af2ee89bb9efe3eb621c89d290b7ee5.webp" />

                                                    </span>
                                                    <span className="top-brand ml-8">
                                                        <a href='/bookmakers/betwinner/'>Betwinner</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="fl_c brand-icon brand-icon-24 brand-icon-relative">







                                                        <img decoding="async" style={{ maxWidth: "46px", maxHeight: "24px" }}
                                                            alt="22Bet app"
                                                            src="https://cdn.ratingbet.com/ratingbet/20250730/6be99251ff304468479b9289e65f725d5e3715101a6221f2eec632f724c04597.webp" />

                                                    </span>
                                                    <span className="top-brand ml-8">
                                                        <a href='/bookmakers/22bet/'>22Bet</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="fl_c brand-icon brand-icon-24 brand-icon-relative">







                                                        <img decoding="async" style={{ maxWidth: "46px", maxHeight: "24px" }}
                                                            alt="Paripesa app"
                                                            src="https://cdn.ratingbet.com/ratingbet/20250730/1f202a0cb0410f896fbdac482453e322618d0f119f6994c59491796d7cd43dcd.webp" />

                                                    </span>
                                                    <span className="top-brand ml-8">
                                                        <a href='/bookmakers/paripesa/'>Paripesa</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="fl_c brand-icon brand-icon-24 brand-icon-relative">







                                                        <img decoding="async" style={{ maxWidth: "46px", maxHeight: "24px" }}
                                                            alt="WinWin app"
                                                            src="https://cdn.ratingbet.com/ratingbet/20250730/a89596acf4e83359e0e217b4f284ba6e02dd9323662ebcda2f8bb897bb4aa9f4.webp" />

                                                    </span>
                                                    <span className="top-brand ml-8">
                                                        <a href='/bookmakers/winwin/'>WinWin</a>
                                                    </span>
                                                </span>
                                            </div>
                                        </li>

                                    </ul>

                                </div>

                            </li>
                            <li className="dropdown-menu__wrapper">
                                <a href='/football/competitions/' className='header-nav__link fl_c nav__link-arrow-down'>Leagues</a>
                                <div className="dropdown-menu">
                                    <div className="section-title mb-12">
                                        <a href='/football/competitions/'>All leagues</a>
                                    </div>

                                    <ul className="dropdown-submenu fl_s_s">
                                        <li className="dropdown-submenu__block">
                                            <div className="dropdown-submenu__subtitle">Popular Leagues</div>
                                            <div className="dropdown-submenu__list top-tournaments">
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/2fac95e438c6ad7daa746a87fef553d4fd8b2a581ab4d890fea603bee6bc26db-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24"
                                                            alt="English Premier League"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/2fac95e438c6ad7daa746a87fef553d4fd8b2a581ab4d890fea603bee6bc26db-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/england-premier-league/'>English Premier League</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/e318c571b3b1ddfd22ade03a16922d202f5c67b5228b961ae65d1e6781d20fed-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24" alt="LaLiga Spain"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/e318c571b3b1ddfd22ade03a16922d202f5c67b5228b961ae65d1e6781d20fed-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/spain-laliga/'>LaLiga Spain</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/23526f4857e8fe4ed673e22a116045d1e109beee8001709806d0e2b2cab909d4-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24" alt="Serie A Italy"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/23526f4857e8fe4ed673e22a116045d1e109beee8001709806d0e2b2cab909d4-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/italy-serie-a/'>Serie A Italy</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/3d5fc302a8ce7e60781f75eeb66b19ccd333737db5138635f4855275497ad8ca-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24" alt="Bundesliga Germany"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/3d5fc302a8ce7e60781f75eeb66b19ccd333737db5138635f4855275497ad8ca-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/germany-1-bundesliga/'>Bundesliga Germany</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/a41a5cb68dabbb9bf6a8e6d34184f6bdbf5e70646b84e0a460c25ea2ba3b8342-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24" alt="Ligue 1 France"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/a41a5cb68dabbb9bf6a8e6d34184f6bdbf5e70646b84e0a460c25ea2ba3b8342-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/france-ligue-1/'>Ligue 1 France</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/6ad5c6e991dcfe8977804e2c944d71d9d08c7f7d6288915dc9826e91c2e28dbb-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24"
                                                            alt="Primeira Liga Portugal"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/6ad5c6e991dcfe8977804e2c944d71d9d08c7f7d6288915dc9826e91c2e28dbb-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/portugal-liga-portugal/'>Primeira Liga Portugal</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/6845080b8e3e897282565a52d9ff41a4c975fb841dd4cb9d54f5caa7038313eb-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24" alt="Serie A Brazil"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/6845080b8e3e897282565a52d9ff41a4c975fb841dd4cb9d54f5caa7038313eb-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/brazil-serie-a/'>Serie A Brazil</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/396a38104c7c5f6545e5488fd09f6c80f8b54effc35bee5f6728b7ec96d18b02-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24" alt="Super League Greece"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/396a38104c7c5f6545e5488fd09f6c80f8b54effc35bee5f6728b7ec96d18b02-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/greece-super-league/'>Super League Greece</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/65af137ac053174373e2ab3b9aa6853c5439da897217b33e2750cb6a0e3d8064-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24"
                                                            alt="Eredivisie Netherlands"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/65af137ac053174373e2ab3b9aa6853c5439da897217b33e2750cb6a0e3d8064-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/netherlands-eredivisie/'>Eredivisie Netherlands</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/7f7f6e11a67acf8cfa5c5170ae348b02c650f9d3aa53dcb522b90f5065dbf917-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24" alt="EFL Championship"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/7f7f6e11a67acf8cfa5c5170ae348b02c650f9d3aa53dcb522b90f5065dbf917-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/england-championship/'>EFL Championship</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/9ab707110d31f53210a75a25fe58f7baf4111bba5e6349621713c39ce6c91570-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24"
                                                            alt="National League England"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/9ab707110d31f53210a75a25fe58f7baf4111bba5e6349621713c39ce6c91570-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/england-national-league/'>National League England</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/5978ea5429a6bfa34688d9075b1e2b429f833b5cfaad5a937901e806530af282-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24" alt="Pro League Belgium"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/5978ea5429a6bfa34688d9075b1e2b429f833b5cfaad5a937901e806530af282-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/belgium-first-division-a/'>Pro League Belgium</a>
                                                    </span>
                                                </span>
                                                <span className="dropdown-submenu__item fl_c">
                                                    <span className="icon-wrapper fl_c_c">







                                                        <img srcSet="/ratingbet_build/img/placeholder.svg 100w" decoding="async"
                                                            data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/131b8b0b8222411df533660c3f1ec26cae7275f52de8c687ef4532f4328cfde5-30-30.png 30w"
                                                            data-sizes="auto" width="24" height="24"
                                                            alt="South African Betway Premiership"
                                                            src="https://statistic-cdn.ratingbet.com/statistic/tournament/131b8b0b8222411df533660c3f1ec26cae7275f52de8c687ef4532f4328cfde5-30-30.png"
                                                            className="lazyload" />

                                                    </span>
                                                    <span className="ml-8 overflow-elipsis">
                                                        <a href='/football/south-africa-premier-soccer-league/'>South African
                                                            Betway Premiership</a>
                                                    </span>
                                                </span>
                                            </div>
                                        </li>

                                        <div className="dropdown-submenu-wrapper fl_col_st_st">
                                            <li className="dropdown-submenu__block">
                                                <div className="dropdown-submenu__subtitle">Internationals</div>
                                                <div className="dropdown-submenu__list top-tournaments">
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/2bbad9bb64a8a528a98448d45129fd3767536804d45535fe4bff213e69f21e92-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24"
                                                                alt="African Nations Championship"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/2bbad9bb64a8a528a98448d45129fd3767536804d45535fe4bff213e69f21e92-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/african-nations-championship/'>African Nations
                                                                Championship</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/7475ec0522c21747d5d7921662eea1aaa0ced88ec427cc5a1ab07f9224db9005-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24" alt="Champions League"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/7475ec0522c21747d5d7921662eea1aaa0ced88ec427cc5a1ab07f9224db9005-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/champions-league/'>Champions League</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/831abb59d4a8552d3e8b8d49a36543f7616a57926f1bfcf67b2fc6e84ad9b1c5-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24" alt="UEFA Super Cup"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/831abb59d4a8552d3e8b8d49a36543f7616a57926f1bfcf67b2fc6e84ad9b1c5-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/uefa-super-cup/'>UEFA Super Cup</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/50f4bc248bad3ba31bd43dc7f3f5f93414c1e4e12f28250f849dc57760128989-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24" alt="Europa League"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/50f4bc248bad3ba31bd43dc7f3f5f93414c1e4e12f28250f849dc57760128989-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/europa-league/'>Europa League</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/dd05aa3cd97f343c80626f1f3525d1bdd3982880f0c0d3f1cd5c60a8e8f2e834-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24"
                                                                alt="Europa Conference League"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/dd05aa3cd97f343c80626f1f3525d1bdd3982880f0c0d3f1cd5c60a8e8f2e834-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/europa-conference-league/'>Europa Conference
                                                                League</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/dcb69393b74f65ea6658712eed52ee89813a20eeca6addcaf54eb6ed5c654811-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24"
                                                                alt="World Cup Qualification CAF"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/dcb69393b74f65ea6658712eed52ee89813a20eeca6addcaf54eb6ed5c654811-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/world-cup-qualification-caf/'>World Cup
                                                                Qualification CAF</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/dcb69393b74f65ea6658712eed52ee89813a20eeca6addcaf54eb6ed5c654811-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24"
                                                                alt="World Cup Qualification UEFA"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/dcb69393b74f65ea6658712eed52ee89813a20eeca6addcaf54eb6ed5c654811-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/world-cup-qualification-uefa/'>World Cup
                                                                Qualification UEFA</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/dcb69393b74f65ea6658712eed52ee89813a20eeca6addcaf54eb6ed5c654811-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24"
                                                                alt="World Cup Qualification CONCACAF"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/dcb69393b74f65ea6658712eed52ee89813a20eeca6addcaf54eb6ed5c654811-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/world-cup-qualification-concacaf/'>World Cup
                                                                Qualification CONCACAF</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/3651ad1c63029239c8845e9b3a4e2dd8c4e1e16da65fb6ff9df05c61ea0d9956-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24"
                                                                alt="World Cup Qualification CONMEBOL"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/3651ad1c63029239c8845e9b3a4e2dd8c4e1e16da65fb6ff9df05c61ea0d9956-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/world-cup-qualification-conmebol/'>World Cup
                                                                Qualification CONMEBOL</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/b1e9d3e3d8384b9eccf37226e94b73a4d89357e68999c3187400aab2619269e3-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24" alt="Copa Libertadores"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/b1e9d3e3d8384b9eccf37226e94b73a4d89357e68999c3187400aab2619269e3-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/copa-libertadores/'>Copa Libertadores</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/b5c9b74cbc5b58555f3dba13f07a539360962e7843f9c8ea576d7956d5410a0a-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24" alt="World Cup U-20"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/b5c9b74cbc5b58555f3dba13f07a539360962e7843f9c8ea576d7956d5410a0a-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/world-cup-u-20/'>World Cup U-20</a>
                                                        </span>
                                                    </span>
                                                </div>
                                            </li>

                                            <li className="dropdown-submenu__block">
                                                <div className="dropdown-submenu__subtitle">Cups</div>
                                                <div className="dropdown-submenu__list top-tournaments">
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/f31dfaca977adb659203808319d8ec8a9326386a71c4999207ae1b1e1ae45bdf-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24" alt="Coppa Italia"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/f31dfaca977adb659203808319d8ec8a9326386a71c4999207ae1b1e1ae45bdf-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/italy-coppa-italia/'>Coppa Italia</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/e9bed24ee1a476de8446b7a4e6e01aefaf5cb19cf0aa2ab9088888a9393ba362-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24" alt="DFB-Pokal Germany"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/e9bed24ee1a476de8446b7a4e6e01aefaf5cb19cf0aa2ab9088888a9393ba362-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/germany-dfb-pokal/'>DFB-Pokal Germany</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/f69329462a015cdf31837db80f7252bb6ad4f5ea1e9750dc064971161911f6b2-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24"
                                                                alt="EFL Cup (Carabao Cup)"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/f69329462a015cdf31837db80f7252bb6ad4f5ea1e9750dc064971161911f6b2-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/england-efl-cup/'>EFL Cup (Carabao Cup)</a>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-submenu__item fl_c">
                                                        <span className="icon-wrapper fl_c_c">







                                                            <img srcSet="/ratingbet_build/img/placeholder.svg 100w"
                                                                decoding="async"
                                                                data-srcset="https://statistic-cdn.ratingbet.com/statistic/tournament/13ad50aba0186607b33f3fcede71a4055bd200128333677521294b46f06e2a9c-30-30.png 30w"
                                                                data-sizes="auto" width="24" height="24" alt="FA Cup England"
                                                                src="https://statistic-cdn.ratingbet.com/statistic/tournament/13ad50aba0186607b33f3fcede71a4055bd200128333677521294b46f06e2a9c-30-30.png"
                                                                className="lazyload" />

                                                        </span>
                                                        <span className="ml-8 overflow-elipsis">
                                                            <a href='/football/england-fa-cup/'>FA Cup England</a>
                                                        </span>
                                                    </span>
                                                </div>
                                            </li>

                                        </div>
                                    </ul>
                                </div>

                            </li>
                            <li>
                                <a href='/math-predictions/' className='header-nav__link fl_c'>Math predictions</a>
                            </li>
                            <li className="dropdown-menu__wrapper">
                                <span className="header-nav__link fl_c nav__link-arrow-down">Football Tips</span>
                                <div className="dropdown-menu">
                                    <div className="section-title mb-12 section-title_ft">
                                        All betting tips
                                    </div>

                                    <div className="dropdown-submenu fl_s_s">
                                        <div className="dropdown-submenu__block">
                                            <div className="dropdown-submenu__subtitle">By bet type</div>
                                            <ul className="dropdown-submenu__list football-tips">
                                                <li className="dropdown-submenu__item fl_c">
                                                    <a href='/football/' className='overflow-elipsis'>Betting Tips 1x2</a>
                                                </li>
                                                <li className="dropdown-submenu__item fl_c">
                                                    <a href='/football/goals-over-under/' className='overflow-elipsis'>Over/Under
                                                        2.5 Goals</a>
                                                </li>
                                                <li className="dropdown-submenu__item fl_c">
                                                    <a href='/football/btts/' className='overflow-elipsis'>BTTS Predictions</a>
                                                </li>
                                                <li className="dropdown-submenu__item fl_c">
                                                    <a href='/football/half-full-time/' className='overflow-elipsis'>HT/FT
                                                        Prediction</a>
                                                </li>
                                                <li className="dropdown-submenu__item fl_c">
                                                    <a href='/football/asian-handicap/' className='overflow-elipsis'>Asian
                                                        Handicap</a>
                                                </li>
                                                <li className="dropdown-submenu__item fl_c">
                                                    <a href='/football/double-chance/' className='overflow-elipsis'>Double
                                                        Chance</a>
                                                </li>
                                                <li className="dropdown-submenu__item fl_c">
                                                    <a href='/football/corners-over-under/' className='overflow-elipsis'>Corners
                                                        Prediction</a>
                                                </li>
                                                <li className="dropdown-submenu__item fl_c">
                                                    <a href='/football/cards-over-under/' className='overflow-elipsis'>Cards
                                                        Prediction</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </li>
                            <li>
                                <a href='/livescore/' className='header-nav__link fl_c'>Scores</a>
                            </li>
                        </ul>


                    </div>
                    <button className="header-login fl_c js-login-button ml-2" onClick={openLoginModal}>
                        <span className="header-login__text fl_c">Log in</span>
                    </button>



                </div>
            </div>

            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={closeAuthModal}
                initialMode={authMode}
            />
        </>
    )
}

export default Navigation