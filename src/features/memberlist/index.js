import React from 'react';
import './style.css';
import '../../common.css';
import BGSK from '../../images/bgsk.png';
import HG from '../../images/hg.jpg';
import MQ from '../../images/quan.jpg';

MemberListFeature.propTypes = {
    
};

function MemberListFeature(props) {
    return (
        <div>
            <header className="u-clearfix u-custom-color-4 u-header u-sticky u-sticky-b3b3 u-header" id="sec-f8c1"><div className="u-align-left u-clearfix u-sheet u-sheet-1">
                <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                    <div className="menu-collapse">
                    <a className="u-button-style u-nav-link" href="#">
                        <svg><use xmlnsXlink="#" xlinkHref="#menu-hamburger" /></svg>
                        <svg version="1.1" xmlns="#" xmlnsXlink="#"><defs>
                            <symbol id="menu-hamburger" viewBox="0 0 16 16" style={{width: '16px', height: '16px'}}><rect y={1} width={16} height={2} /><rect y={7} width={16} height={2} /><rect y={13} width={16} height={2} />
                            </symbol>
                        </defs></svg>
                    </a>
                    </div>
                    <div className="u-custom-menu u-nav-container">
                    <ul className="u-nav u-unstyled"><li className="u-nav-item">
                        <a className="u-button-style u-nav-link" href="#">HOME</a>
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
                </div>
            </header>

            <section className="u-clearfix u-section-1" id="sec-099a">
                <div className="u-clearfix u-sheet u-sheet-1">
                <img className="u-image u-image-round u-radius-44 u-image-1" src={BGSK} alt="" data-image-width={1218} data-image-height={597} />
                <h4 className="u-text u-text-default u-text-1">Tên Sự kiện</h4>
                <h4 className="u-text u-text-default u-text-2">Nội dung</h4>
                </div>
            </section>

            <section className="u-clearfix u-section-2" id="sec-5495">
                <div className="u-align-left u-clearfix u-sheet u-sheet-1">
                <h3 className="u-text u-text-custom-color-1 u-text-default u-text-1">NGƯỜI TỔ CHỨC</h3>
                <div className="pointer-event u-carousel u-gallery u-gallery-slider u-layout-carousel u-lightbox u-no-transition u-show-text-on-hover u-gallery-1" data-interval={5000} data-u-ride="carousel" id="carousel-e66f">
                    <ol className="u-absolute-hcenter u-carousel-indicators u-carousel-indicators-1">
                    <li data-u-target="#carousel-e66f" data-u-slide-to={0} className="u-active u-grey-70 u-shape-circle" style={{width: '10px', height: '10px'}} />
                    <li data-u-target="#carousel-e66f" data-u-slide-to={1} className="u-grey-70 u-shape-circle" style={{width: '10px', height: '10px'}} />
                    </ol>
                    <div className="u-carousel-inner u-gallery-inner" role="listbox">
                    <div className="u-active u-carousel-item u-effect-fade u-gallery-item u-carousel-item-1">
                        <div className="u-back-slide" data-image-width={1600} data-image-height={1600}>
                            <img className="u-back-image u-expanded" src={HG} />
                        </div>
                        <div className="u-align-center u-over-slide u-shading u-valign-bottom u-over-slide-1">
                            <h3 className="u-gallery-heading">Tạ Thị Mai Hương</h3>
                            <p className="u-gallery-text">Ban Tổ chức</p>
                        </div>
                    </div>
                    <div className="u-carousel-item u-effect-fade u-gallery-item u-carousel-item-2">
                        <div className="u-back-slide" data-image-width={956} data-image-height={956}>
                            <img className="u-back-image u-expanded" src={MQ} />
                        </div>
                        <div className="u-align-center u-over-slide u-shading u-valign-bottom u-over-slide-2">
                            <h3 className="u-gallery-heading">Võ Trần Minh Quân</h3>
                            <p className="u-gallery-text">Ban Tổ chức</p>
                        </div>
                    </div>
                    </div>
                    <a className="u-carousel-control u-carousel-control-prev u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-1" href="#carousel-e66f" role="button" data-u-slide="prev">
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
                    <a className="u-carousel-control u-carousel-control-next u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-2" href="#carousel-e66f" role="button" data-u-slide="next">
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

            <section className="u-clearfix u-section-3" id="sec-7527">
                <div className="u-clearfix u-sheet u-sheet-1">
                <h3 className="u-text u-text-default u-text-palette-4-base u-text-1">NGƯỜI THAM GIA</h3>
                <div className="u-container-style u-group u-palette-5-light-1 u-radius-30 u-shape-round u-group-1">
                    <div className="u-container-layout u-valign-top u-container-layout-1">
                    <div className="u-table u-table-responsive u-table-1">
                        <table className="u-table-entity">
                        <colgroup>
                            <col width="25%" />
                            <col width="18.3%" />
                            <col width="36.3%" />
                            <col width="20.4%" />
                        </colgroup>
                        <thead className="u-palette-4-base u-table-header u-table-header-1">
                            <tr style={{height: '49px'}}>
                            <th className="u-border-1 u-border-palette-4-base u-table-cell">Họ và Tên</th>
                            <th className="u-border-1 u-border-palette-4-base u-table-cell">Mã số sinh viên</th>
                            <th className="u-border-1 u-border-palette-4-base u-table-cell">Email</th>
                            <th className="u-border-1 u-border-palette-4-base u-table-cell">Số điện thoại</th>
                            </tr>
                        </thead>
                        <tbody className="u-table-body">
                            <tr style={{height: '66px'}}>
                            <td className="u-border-1 u-border-grey-30 u-first-column u-grey-5 u-table-cell u-table-cell-5">Row 1</td>
                            <td className="u-border-1 u-border-grey-30 u-table-cell">Description</td>
                            <td className="u-border-1 u-border-grey-30 u-table-cell">Description</td>
                            <td className="u-border-1 u-border-grey-30 u-table-cell">Description</td>
                            </tr>
                            <tr style={{height: '68px'}}>
                            <td className="u-border-1 u-border-grey-30 u-first-column u-grey-5 u-table-cell u-table-cell-9">Row 2</td>
                            <td className="u-border-1 u-border-grey-30 u-table-cell">Description</td>
                            <td className="u-border-1 u-border-grey-30 u-table-cell">Description</td>
                            <td className="u-border-1 u-border-grey-30 u-table-cell">Description</td>
                            </tr>
                            <tr style={{height: '68px'}}>
                            <td className="u-border-1 u-border-grey-30 u-first-column u-grey-5 u-table-cell u-table-cell-13">Row 3</td>
                            <td className="u-border-1 u-border-grey-30 u-table-cell">Description</td>
                            <td className="u-border-1 u-border-grey-30 u-table-cell">Description</td>
                            <td className="u-border-1 u-border-grey-30 u-table-cell">Description</td>
                            </tr>
                            <tr style={{height: '68px'}}>
                            <td className="u-border-1 u-border-grey-30 u-first-column u-grey-5 u-table-cell u-table-cell-17">Row 4</td>
                            <td className="u-border-1 u-border-grey-30 u-table-cell">Description</td>
                            <td className="u-border-1 u-border-grey-30 u-table-cell">Description</td>
                            <td className="u-border-1 u-border-grey-30 u-table-cell">Description</td>
                            </tr>
                            <tr style={{height: '68px'}}>
                            <td className="u-border-1 u-border-grey-30 u-grey-5 u-table-cell u-table-cell-21" />
                            <td className="u-border-1 u-border-grey-30 u-table-cell" />
                            <td className="u-border-1 u-border-grey-30 u-table-cell" />
                            <td className="u-border-1 u-border-grey-30 u-table-cell" />
                            </tr>
                            <tr style={{height: '68px'}}>
                            <td className="u-border-1 u-border-grey-30 u-grey-5 u-table-cell u-table-cell-25" />
                            <td className="u-border-1 u-border-grey-30 u-table-cell" />
                            <td className="u-border-1 u-border-grey-30 u-table-cell" />
                            <td className="u-border-1 u-border-grey-30 u-table-cell" />
                            </tr>
                            <tr style={{height: '68px'}}>
                            <td className="u-border-1 u-border-grey-30 u-grey-5 u-table-cell u-table-cell-29" />
                            <td className="u-border-1 u-border-grey-30 u-table-cell" />
                            <td className="u-border-1 u-border-grey-30 u-table-cell" />
                            <td className="u-border-1 u-border-grey-30 u-table-cell" />
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>

    );
}

export default MemberListFeature;