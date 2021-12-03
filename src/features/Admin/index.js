import React from 'react';
import './style.css';
import '../../common.css';
import { Link } from 'react-router-dom';

AdminFeature.propTypes = {
    
};

function AdminFeature(props) {
    return (
        <div>
            <header className="u-clearfix u-custom-color-4 u-header u-sticky u-sticky-b3b3 u-header" id="sec-f8c1">
                <div className="u-align-left u-clearfix u-sheet u-sheet-1">
                <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                    <div className="menu-collapse">
                    <a className="u-button-style u-nav-Link" href="#">
                        <svg><use xmlnsXLink="#" xLinkHref="#menu-hamburger" /></svg>
                        <svg version="1.1" xmlns="#" xmlnsXLink="#">
                            <defs>
                                <symbol id="menu-hamburger" viewBox="0 0 16 16" style={{width: '16px', height: '16px'}}>
                                    <rect y={1} width={16} height={2} /><rect y={7} width={16} height={2} />
                                    <rect y={13} width={16} height={2} />
                                </symbol>
                             </defs></svg>
                    </a>
                    </div>
                    <div className="u-custom-menu u-nav-container">
                    <ul className="u-nav u-unstyled">
                        <li className="u-nav-item"><Link className="u-button-style u-nav-Link" to="/home">HOME</Link>
                        </li></ul>
                    </div>
                    <div className="u-custom-menu u-nav-container-collapse">
                    <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                        <div className="u-inner-container-layout u-sidenav-overflow">
                        <div className="u-menu-close" />
                        <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item">
                            <Link className="u-button-style u-nav-Link" to='/home'>HOME</Link>
                            </li></ul>
                        </div>
                    </div>
                    <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
                    </div>
                </nav>
                </div>
            </header>

            <section className="u-clearfix u-section-1" id="sec-d1b4">
                <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-border-3 u-border-palette-1-base u-container-style u-group u-radius-23 u-shape-round u-group-1">
                    <div className="u-container-layout u-container-layout-1">
                        <div className="u-border-2 u-border-grey-75 u-image u-image-circle u-preserve-proportions u-image-1" alt="" data-image-width={1792} data-image-height={1792} />
                        <h2 className="u-text u-text-default u-text-palette-4-base u-text-1">Tạ Thị Mai Hương</h2>
                        <h4 className="u-text u-text-default u-text-palette-4-base u-text-2">Mã số sinh viên:</h4>
                        <h4 className="u-text u-text-default u-text-palette-4-base u-text-3">Ngày sinh:</h4>
                        <blockquote className="birthday u-border-2 u-border-custom-color-1 u-indent-15 u-text u-text-default u-text-4">25/5/2000</blockquote>
                        <blockquote className="mssv u-border-2 u-border-custom-color-1 u-indent-13 u-text u-text-default u-text-5">18110298<br /></blockquote>
                        <h4 className="u-text u-text-default u-text-palette-4-base u-text-6">Khoa:</h4>
                        <h4 className="u-text u-text-default u-text-palette-4-base u-text-7">Số điện thoại:</h4>
                        <blockquote className="phoneno u-border-2 u-border-palette-4-base u-indent-15 u-text u-text-default u-text-8">0985483013</blockquote>
                        <blockquote className="faculty u-border-2 u-border-custom-color-1 u-indent-15 u-text u-text-default u-text-9">Công nghệ thông tin</blockquote>
                    </div>
                </div>
                <Link to="/" className="u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-palette-1-light-1 u-radius-6 u-btn-1">Chỉnh sửa thông tin</Link>
                <Link to="/eventstudio" className="u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-palette-1-light-1 u-radius-6 u-btn-2">Quản lý sự kiện</Link>
                <Link to="/" className="u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-palette-1-light-1 u-radius-6 u-btn-3">Đăng xuất</Link>
                </div>
            </section>
            <footer className="u-align-center u-clearfix u-footer u-white u-footer" id="sec-5843">
                <div className="u-align-left u-clearfix u-sheet u-sheet-1" />
            </footer>
        </div>

    );
}

export default AdminFeature;