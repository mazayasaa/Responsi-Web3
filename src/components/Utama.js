import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Beranda from './Beranda';
import Makanan from './Makanan';
import Perilaku from './Perilaku';
import Galeri from './Galeri';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/beranda" component={Beranda} />
        <Route path="/makanan" component={Makanan} />
        <Route path="/perilaku" component={Perilaku} />
        <Route path="/galeri" component={Galeri} />
    </Switch>
)

export default Utama;

