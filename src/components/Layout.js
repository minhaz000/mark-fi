import React from 'react';
import Header from './Header/Header';
import Footer  from './Footer/Footer';
import MainContent  from './MainContent/MainContent';
function Layout(props) {
    return (
        <div>
            <Header> </Header>
              <MainContent  > </MainContent>
            <Footer> </Footer>
        </div>
    );
}

export default Layout;