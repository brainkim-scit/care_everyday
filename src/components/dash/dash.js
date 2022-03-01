import {Header} from "../common/header";
import {Container, Grid} from "@mui/material";
import {Fragment, useState} from "react";

import "../../assets/css/main.css";

export const Dash = () => {

    const [name, setName] = useState("돌봄1");

    return (
        <Fragment>
            <Header/>
            <Container style={{marginTop: "10px"}}>
                <Grid container spacing={0.5} style={{backgroundColor: "#efefef96"}}>
                    <Grid item lg={3} sm={1}></Grid>
                    <Grid item lg={6} sm={10} style={{textAlign: "center"}}>
                        <div style={{fontSize: "25px", padding: "8px 0"}}>{name}</div>
                        <img className={"cam"} src={"http://116.124.4.222:5008/mjpeg/1"}/>
                    </Grid>
                    <Grid item lg={3} sm={1}></Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}