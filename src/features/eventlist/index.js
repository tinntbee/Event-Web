import React from 'react';
import './style.css';
import '../../common.css';
import BGSK from '../../images/bgsk.png';
import FOX from '../../images/fox.png';
import MQ from '../../images/quan.jpg';
import HG from '../../images/hg.jpg';
import TT from '../../images/tín.jpg';
import IMAGE1 from '../../images/ava1.jpg';
import IMAGE2 from '../../images/ava2.jpg';
import IMAGE3 from '../../images/ava3.jpg';
import LOGIN from '../../images/login.png';
import MINIGAME1 from '../../images/pngtree-indoor-decoration-green-plants-image_544013.jpg';
import MINIGAME2 from '../../images/Minigame-800x800.jpg';

EvenListFeature.propTypes = {
    
};

function EvenListFeature(props) {
    return (
        <div>
            <header className="u-clearfix u-custom-color-4 u-header u-sticky u-sticky-b3b3 u-header" id="sec-f8c1"><div className="u-align-left u-clearfix u-sheet u-sheet-1">
                <form action="#" method="get" className="u-border-1 u-border-grey-30 u-search u-search-left u-search-1">
                    <button className="u-search-button" type="submit">
                        <span className="u-search-icon u-spacing-10">
                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 56.966 56.966"><use xmlnsXlink="#" xlinkHref="#svg-3d20" /></svg>
                        <svg xmlns="#" xmlnsXlink="#" version="1.1" id="svg-3d20" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{enableBackground: 'new 0 0 56.966 56.966'}} xmlSpace="preserve" className="u-svg-content"><path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" /></svg>
                        </span>
                    </button>
                    <input className="u-search-input" type="search" name="search" defaultValue placeholder="Search" />
                </form>
                <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                <div className="menu-collapse">
                    <a className="u-button-style u-nav-link" href="#">
                    <svg><use xmlnsXlink="#" xlinkHref="#menu-hamburger" /></svg>
                    <svg version="1.1" xmlns="#" xmlnsXlink="#"><defs><symbol id="menu-hamburger" viewBox="0 0 16 16" style={{width: '16px', height: '16px'}}><rect y={1} width={16} height={2} /><rect y={7} width={16} height={2} /><rect y={13} width={16} height={2} />
                        </symbol>
                        </defs></svg>
                    </a>
                </div>
                <div className="u-custom-menu u-nav-container">
                    <ul className="u-nav u-unstyled"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="#">HOME</a>
                    </li></ul>
                </div>
                <div className="u-custom-menu u-nav-container-collapse">
                    <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                    <div className="u-inner-container-layout u-sidenav-overflow">
                        <div className="u-menu-close" />
                        <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="#">HOME</a>
                        </li></ul>
                    </div>
                    </div>
                    <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
                </div>
                </nav>
            </div>
            </header>


            <section className="u-clearfix u-section-1" id="sec-5d9d">
                <div className="u-clearfix u-sheet u-sheet-1">
                <div className="pointer-event u-carousel u-expanded-width u-gallery u-layout-thumbnails u-lightbox u-no-transition u-show-text-always u-gallery-1" data-interval={5000} data-u-ride="carousel" id="carousel-d8f8">
                    <div className="u-carousel-inner u-gallery-inner" role="listbox">
                    <div className="u-active u-carousel-item u-gallery-item u-carousel-item-1">
                        <div className="u-back-slide" data-image-width={1218} data-image-height={597}>
                        <img className="u-back-image u-expanded" src={BGSK} />
                        </div>
                        <div className="u-over-slide u-over-slide-1">
                        <h3 className="u-gallery-heading">Sample Title</h3>
                        <p className="u-gallery-text">Sample Text</p>
                        </div>
                    </div>
                    <div className="u-carousel-item u-gallery-item u-carousel-item-2">
                        <div className="u-back-slide" data-image-width={1280} data-image-height={853}>
                        <img className="u-back-image u-expanded" src={FOX} />
                        </div>
                        <div className="u-over-slide u-over-slide-2">
                        <h3 className="u-gallery-heading">Sample Title</h3>
                        <p className="u-gallery-text">Sample Text</p>
                        </div>
                    </div>
                    </div>
                    <a className="u-carousel-control u-carousel-control-prev u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-1" href="#carousel-d8f8" role="button" data-u-slide="prev">
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
                    <a className="u-carousel-control u-carousel-control-next u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-2" href="#carousel-d8f8" role="button" data-u-slide="next">
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
                    <li className="u-active u-border-2 u-border-custom-color-1 u-carousel-thumbnail u-carousel-thumbnail-1" data-u-target="#carousel-d8f8" data-u-slide-to={0}>
                        <img className="u-carousel-thumbnail-image u-image" src={FOX} />
                    </li>
                    <li className="u-border-2 u-border-custom-color-1 u-carousel-thumbnail u-carousel-thumbnail-2" data-u-target="#carousel-d8f8" data-u-slide-to={1}>
                        <img className="u-carousel-thumbnail-image u-image" src={FOX} />
                    </li>
                    </ol>
                </div>
                <a href="#" className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-none u-text-custom-color-1 u-btn-1">TÊN SỰ KIỆN</a>
                </div>
            </section>
            <section className="u-clearfix u-section-2" id="sec-1380">
                <div className="u-align-left u-clearfix u-sheet u-valign-middle u-sheet-1">
                <div className="u-container-style u-group u-palette-5-light-2 u-radius-30 u-shape-round u-group-1">
                    <div className="u-container-layout u-container-layout-1">
                    <p className="u-text u-text-body-alt-color u-text-default u-text-1">Followed Host</p>
                    <div className="u-container-style u-group u-group-2">
                        <div className="u-container-layout">
                        <img className="u-border-2 u-border-grey-75 u-image u-image-circle u-image-1" src={IMAGE1} alt="" data-image-width={500} data-image-height={587} />
                        <img className="u-border-2 u-border-palette-2-base u-image u-image-circle u-image-2" src={IMAGE2} alt="" data-image-width={550} data-image-height={648} />
                        <img className="u-border-2 u-border-grey-75 u-image u-image-circle u-image-3" src={IMAGE3} alt="" data-image-width={564} data-image-height={787} />
                        <img className="u-border-2 u-border-palette-2-base u-image u-image-circle u-preserve-proportions u-image-4" src={MQ} alt="" data-image-width={956} data-image-height={956} />
                        <img className="u-border-2 u-border-grey-75 u-image u-image-circle u-preserve-proportions u-image-5" src={HG} alt="" data-image-width={1792} data-image-height={1792} />
                        <img className="u-border-2 u-border-grey-75 u-image u-image-circle u-preserve-proportions u-image-6" src={TT} alt="" data-image-width={1334} data-image-height={1334} />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="u-clearfix u-section-3" id="sec-1f14">
                <div className="u-clearfix u-sheet u-sheet-1">
                <p className="u-text u-text-default u-text-1">Present Event</p>
                <div className="u-gallery u-layout-horizontal u-lightbox u-no-transition u-show-text-on-hover u-gallery-1">
                    <div className="u-gallery-inner">
                        <div className="u-effect-hover-zoom u-effect-over-left u-gallery-item u-gallery-item-1" data-href="#">
                            <div className="u-back-slide" data-image-width={360} data-image-height={360}>
                                <img className="u-back-image" src={MINIGAME1} alt="Tên Sự kiện" />
                        </div>
                        <div className="u-over-slide u-shading u-over-slide-1">
                            <h3 className="u-gallery-heading">Tên Sự kiện</h3>
                            <p className="u-gallery-text">Nội Dung</p>
                        </div>
                    </div>
                    <div className="u-effect-hover-zoom u-effect-over-left u-gallery-item u-gallery-item-2" data-href="#">
                        <div className="u-back-slide" data-image-width={1218} data-image-height={597}>
                            <img className="u-back-image" src={BGSK} alt="Tên Sự kiện" />
                        </div>
                        <div className="u-over-slide u-shading u-over-slide-2">
                            <h3 className="u-gallery-heading">Tên Sự kiện</h3>
                            <p className="u-gallery-text">Nội dung</p>
                        </div>
                    </div>
                    <div className="u-effect-hover-zoom u-effect-over-left u-gallery-item u-gallery-item-3">
                        <div className="u-back-slide" data-image-width={1920} data-image-height={1080}>
                            <img className="u-back-image" src={LOGIN} />
                        </div>
                        <div className="u-over-slide u-shading u-over-slide-3">
                            <h3 className="u-gallery-heading" />
                            <p className="u-gallery-text" />
                        </div>
                    </div>
                    <div className="u-effect-hover-zoom u-effect-over-left u-gallery-item u-gallery-item-4" data-href="#">
                        <div className="u-back-slide">
                            <img className="u-back-image" src={MINIGAME2} alt="Tên Sự kiện" />
                        </div>
                        <div className="u-over-slide u-shading u-over-slide-4">
                            <h3 className="u-gallery-heading">Tên Sự kiện</h3>
                            <p className="u-gallery-text">Nội dung</p>
                        </div>
                    </div>
                    <div className="u-effect-hover-zoom u-effect-over-left u-gallery-item u-gallery-item-5">
                        <div className="u-back-slide">
                            <img className="u-back-image" src={FOX} />
                        </div>
                        <div className="u-over-slide u-shading u-over-slide-5">
                            <h3 className="u-gallery-heading" />
                            <p className="u-gallery-text" />
                        </div>
                    </div>
                    <div className="u-effect-hover-zoom u-effect-over-left u-gallery-item u-gallery-item-6">
                        <div className="u-back-slide">
                            <img className="u-back-image" src={FOX} />
                        </div>
                        <div className="u-over-slide u-shading u-over-slide-6">
                            <h3 className="u-gallery-heading" />
                            <p className="u-gallery-text" />
                        </div>
                    </div>
                    </div>
                    <a className="u-absolute-vcenter u-gallery-nav u-gallery-nav-prev u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-gallery-nav-1" href="#" role="button">
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
                    <a className="u-absolute-vcenter u-gallery-nav u-gallery-nav-next u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-gallery-nav-2" href="#" role="button">
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
                </div>
                </div>
            </section>

            <section className="u-clearfix u-section-4" id="sec-ebb8">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <div className="u-container-style u-group u-palette-5-light-2 u-radius-30 u-shape-round u-group-1">
                    <div className="u-container-layout u-container-layout-1">
                    <p className="u-text u-text-body-alt-color u-text-default u-text-1">
                        <span style={{fontSize: '1.5rem', fontWeight: 700}}>Coming Event</span>
                    </p>
                    <div className="u-carousel u-expanded-width u-gallery u-layout-carousel u-lightbox u-no-transition u-show-text-always u-gallery-1" data-interval={5000} data-u-ride="carousel" id="carousel-c677">
                        <ol className="u-absolute-hcenter u-carousel-indicators u-carousel-indicators-1">
                        <li data-u-target="#carousel-c677" data-u-slide-to={0} className="u-active u-grey-70 u-shape-circle" style={{width: '10px', height: '10px'}} />
                        <li data-u-target="#carousel-c677" data-u-slide-to={1} className="u-grey-70 u-shape-circle" style={{width: '10px', height: '10px'}} />
                        </ol>
                        <div className="u-carousel-inner u-gallery-inner" role="listbox">
                        <div className="u-active u-carousel-item u-gallery-item u-carousel-item-1" data-href="#">
                            <div className="u-back-slide" data-image-width={1218} data-image-height={597}>
                            <img className="u-back-image u-expanded" src={BGSK} />
                            </div>
                            <div className="u-align-center u-over-slide u-palette-4-light-2 u-over-slide-1">
                            <h3 className="u-gallery-heading" style={{width: '997px', marginRight: 'auto', marginLeft: 'auto'}}>Tên Sự kiện</h3>
                            <p className="u-gallery-text" style={{width: '997px', marginRight: 'auto', marginLeft: 'auto', marginTop: '3px'}}>Nội dung</p>
                            </div>
                        </div>
                        <div className="u-carousel-item u-gallery-item u-carousel-item-2">
                            <div className="u-back-slide">
                            <img className="u-back-image u-expanded" src={FOX} />
                            </div>
                            <div className="u-align-center u-over-slide u-palette-1-base u-over-slide-2">
                            <h3 className="u-gallery-heading" style={{width: '978px', marginRight: 'auto', marginLeft: 'auto'}}>Sample Title</h3>
                            <p className="u-gallery-text" style={{width: '978px', marginRight: 'auto', marginLeft: 'auto', marginTop: '3px'}}>Sample Text</p>
                            </div>
                        </div>
                        </div>
                        <a className="u-carousel-control u-carousel-control-prev u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-1" href="#carousel-c677" role="button" data-u-slide="prev">
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
                        <a className="u-carousel-control u-carousel-control-next u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-2" href="#carousel-c677" role="button" data-u-slide="next">
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
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>

    );
}

export default EvenListFeature;