import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import { Card, Col, Row } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


class Galeri extends Component {
    constructor(){
        super();
        this.state = { gambar: [] }
    }

    
    componentWillMount(){
        axios
        .get("https://raw.githubusercontent.com/learn-co-curriculum/cat-api/master/cats.json")
        .then((response) => {
            const data = response.data;
            this.setState({ gambar: data.images })
        });
    }
    
    render(){
        return(
            <Grid className="background-galeri">
                <div >
                    {
                        this.state.gambar.map((dinamis, key)=>
                        <div>
                            <img key={dinamis.url} src={dinamis.url}></img> 
                        </div>
                        )
                    }
                </div>
            </Grid>
            
        );
    }
}

export default Galeri;