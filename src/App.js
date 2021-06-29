import React, { Component } from 'react';
import './App.css';
import Utama from './components/Utama';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Meowy" scroll>
            <Navigation className="header-menu">
              <Link to="/beranda">Beranda</Link>
              <Link to="/makanan">Makanan</Link>
              <Link to="/perilaku">Perilaku</Link>
              <Link to="/galeri">Galeri</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content"/>
              <Utama />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

