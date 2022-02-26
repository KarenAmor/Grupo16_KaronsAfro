import React from 'react';
import ContentRowTop from '../contentRowTop/contentRowTop';
import Footer from '../footer/footer';
import TopBar from '../topBar/topBar';
import Table from '../table/table';

function ContentWraper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content-wrapper" className="d-flex flex-column">
                <TopBar></TopBar>
                <ContentRowTop></ContentRowTop>
            </div>
            <Table></Table>
            <Footer></Footer>
        </div>
    )
}

export default ContentWraper;