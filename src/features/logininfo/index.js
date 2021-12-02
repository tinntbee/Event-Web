import React from 'react';
import './style.css';
import '../../common.css';
import AVA from '../../images/ava1.jpg'

LoginInfoFeature.propTypes = {
    
};

function LoginInfoFeature(props) {
    return (
        <div>
            <header className="u-clearfix u-custom-color-4 u-header u-sticky u-sticky-b3b3 u-header" id="sec-f8c1"><div className="u-align-left u-clearfix u-sheet u-sheet-1">
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

            <section className="u-clearfix u-section-1" id="sec-2161">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                    <div className="u-layout-row">
                        <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-25 u-layout-cell-1">
                            <img src={AVA} className='image'/>
                        </div>

                        <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-35 u-layout-cell-2">
                        <div className="u-border-2 u-border-grey-75 u-container-layout u-valign-top u-container-layout-2">
                            <div className="u-align-center u-form u-form-1">
                            <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{padding: '10px'}}>
                                <div className="u-form-group u-form-name">
                                <label htmlFor="name-255a" className="u-form-control-hidden u-label" />
                                <input type="text" placeholder="Nhập họ và tên" id="name-255a" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                                </div>
                                <div className="u-form-email u-form-group">
                                <label htmlFor="email-255a" className="u-form-control-hidden u-label" />
                                <input type="email" placeholder="Nhập email của bạn" id="email-255a" name="email" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                                </div>
                                <div className="u-form-group u-form-phone u-form-group-3">
                                <label htmlFor="phone-1e7e" className="u-form-control-hidden u-label" />
                                <input type="tel" pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" placeholder="Nhập số điện thoại" id="phone-1e7e" name="phone" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                                </div>
                                <div className="u-form-date u-form-group u-form-group-4">
                                <label htmlFor="date-bbee" className="u-form-control-hidden u-label" />
                                <input type="date" placeholder="Ngày tháng năm sinh" id="date-bbee" name="date" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                                </div>
                                <div className="u-form-group u-form-group-5">
                                <label htmlFor="text-7a3c" className="u-form-control-hidden u-label" />
                                <input type="text" placeholder="Mã số sinh viên" id="text-7a3c" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" />
                                </div>
                                <div className="u-form-group u-form-group-6">
                                <label htmlFor="text-460c" className="u-form-control-hidden u-label" />
                                <input type="text" placeholder="Khoa" id="text-460c" name="text-1" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" />
                                </div>
                                <div className="u-align-center u-form-group u-form-submit">
                                <br/><br/><br/>
                                    <a href="#" className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-1 u-btn-1">ĐĂNG NHẬP<br />
                                    </a>
                                    <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <footer className="u-align-center u-clearfix u-footer u-white u-footer" id="sec-5843">
                <div className="u-align-left u-clearfix u-sheet u-sheet-1" />
                </footer>
        </div>

    );
}

export default LoginInfoFeature;