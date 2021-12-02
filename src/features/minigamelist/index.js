import React from 'react';
import './style.css';
import '../../common.css';
import MINIGAME1 from '../../images/minigame-3c.jpg';
import IMAGE from '../../images/images.jpg';
import MINIGAME2 from '../../images/Minigame-800x800.jpg';

MiniGameFeature.propTypes = {
    
};

function MiniGameFeature(props) {
    return (
        <div>
            <header className="u-clearfix u-custom-color-4 u-header u-sticky u-sticky-b3b3 u-header" id="sec-f8c1">
                <div className="u-align-left u-clearfix u-sheet u-sheet-1">
                <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                    <div className="menu-collapse">
                    <a className="u-button-style u-nav-link" href="#">
                        <svg><use xmlnsXlink="#" xlinkHref="#menu-hamburger" /></svg>
                        <svg version="1.1" xmlns="#" xmlnsXlink="#">
                            <defs><symbol id="menu-hamburger" viewBox="0 0 16 16" style={{width: '16px', height: '16px'}}><rect y={1} width={16} height={2} /><rect y={7} width={16} height={2} /><rect y={13} width={16} height={2} />
                            </symbol>
                        </defs></svg>
                    </a>
                    </div>
                    <div className="u-custom-menu u-nav-container">
                    <ul className="u-nav u-unstyled">
                        <li className="u-nav-item"><a className="u-button-style u-nav-link" href="#">HOME</a>
                        </li></ul>
                    </div>
                    <div className="u-custom-menu u-nav-container-collapse">
                    <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                        <div className="u-inner-container-layout u-sidenav-overflow">
                        <div className="u-menu-close" />
                        <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                            <li className="u-nav-item"><a className="u-button-style u-nav-link" href="#">HOME</a>
                            </li></ul>
                        </div>
                    </div>
                    <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
                    </div>
                </nav>
                </div></header>
            <section className="u-align-center u-clearfix u-section-1" id="sec-6c64">
                <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-container-style u-group u-palette-5-light-2 u-radius-30 u-shape-round u-group-1">
                    <div className="u-container-layout u-container-layout-1">
                    <h1 className="u-text u-text-custom-color-1 u-text-default u-text-1">MiniGame</h1>
                    <div className="pointer-event u-carousel u-expanded-width-xs u-gallery u-layout-thumbnails u-lightbox u-no-transition u-show-text-always u-gallery-1" id="carousel-e131" data-interval={5000} data-u-ride="carousel">
                        <div className="u-carousel-inner u-gallery-inner" role="listbox">
                        <div className="u-active u-carousel-item u-gallery-item u-carousel-item-1">
                            <div className="u-back-slide" data-image-width={800} data-image-height={800}>
                            <img className="u-back-image u-expanded" src={MINIGAME2} />
                            </div>
                            <div className="u-over-slide u-over-slide-1">
                            <h3 className="u-gallery-heading">Sample Title</h3>
                            <p className="u-gallery-text">Sample Text</p>
                            </div>
                        </div>
                        <div className="u-carousel-item u-gallery-item u-carousel-item-2">
                            <div className="u-back-slide" data-image-width={225} data-image-height={225}>
                            <img className="u-back-image u-expanded" src={IMAGE} />
                            </div>
                            <div className="u-over-slide u-over-slide-2">
                            <h3 className="u-gallery-heading">Sample Title</h3>
                            <p className="u-gallery-text">Sample Text</p>
                            </div>
                        </div>
                        <div className="u-carousel-item u-gallery-item u-carousel-item-3" data-image-width={2836} data-image-height={1875}>
                            <div className="u-back-slide" data-image-width={800} data-image-height={600}>
                            <img className="u-back-image u-expanded" src={MINIGAME1} />
                            </div>
                            <div className="u-over-slide u-over-slide-3">
                            <h3 className="u-gallery-heading">Sample Title</h3>
                            <p className="u-gallery-text">Sample Text</p>
                            </div>
                        </div>
                        </div>
                        <a className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-1" href="#carousel-e131" role="button" data-u-slide="prev">
                        <span aria-hidden="true">
                            <svg viewBox="0 0 451.847 451.847"><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
            c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
            c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></svg>
                        </span>
                        <span className="sr-only">
                            <svg viewBox="0 0 451.847 451.847"><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
            c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
            c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></svg>
                        </span>
                        </a>
                        <a className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-2" href="#carousel-e131" role="button" data-u-slide="next">
                        <span aria-hidden="true">
                            <svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
            L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
            c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></svg>
                        </span>
                        <span className="sr-only">
                            <svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
            L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
            c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></svg>
                        </span>
                        </a>
                        <ol className="u-carousel-thumbnails u-spacing-10 u-carousel-thumbnails-1">
                        <li className="u-active u-carousel-thumbnail u-carousel-thumbnail-1" data-u-target="#carousel-e131" data-u-slide-to={0}>
                            <img className="u-carousel-thumbnail-image u-image" src={MINIGAME2} />
                        </li>
                        <li className="u-carousel-thumbnail u-carousel-thumbnail-2" data-u-target="#carousel-e131" data-u-slide-to={1}>
                            <img className="u-carousel-thumbnail-image u-image" src={IMAGE} />
                        </li>
                        <li className="u-carousel-thumbnail u-carousel-thumbnail-3" data-u-target="#carousel-e131" data-u-slide-to={2}>
                            <img className="u-carousel-thumbnail-image u-image" src={MINIGAME1} />
                        </li>
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>

    );
}

export default MiniGameFeature;