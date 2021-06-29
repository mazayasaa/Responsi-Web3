import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Beranda extends Component {
    render() {
        return(
            <Grid className="beranda-grid">
                <div className="banner-beranda">
                    <img
                        src="https://i.pinimg.com/favicons/42d97f1239979432ecd8be69e957d3fd5e6ab58e513176a995b2d577.ico?4d4c71859589b46f8b84a55dc0cc583d"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        Seberapa tahukah kamu tentang kucing?
                    </div>
                </div>
            </Grid>
        )
    }
}

export default Beranda;