import React from 'react';
import ContentRowTop from '../contentRowTop/contentRowTop';
import Footer from '../footer/footer';
import TopBar from '../topBar/topBar';

function ContentWraper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content-wrapper" className="d-flex flex-column">
                <TopBar></TopBar>
                <ContentRowTop></ContentRowTop>
                <Footer></Footer>
            </div>            
        </div>
    )
}

export default ContentWraper;