import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Definition from "./components/definition/Definition";
import Details from "./components/details/Details";
import Forum from "./components/forum/Forum";
import Box from "@mui/material/Box";

const styles = {
    divStyle:{
        marginTop:'20px',
        marginBottom:'20px'
    },

};

const QuestionViewer = () =>{
    return(
        <Box sx={styles.divStyle}>
            <Toolbar/>
            <Grid container>
                <Grid item md={12} xs={12}>
                    <Definition/>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Details/>
                </Grid>
                {/*<Grid item md={12} xs={12}>*/}
                {/*    <ShareTeste/>*/}
                {/*</Grid>*/}
                <Grid item md={12} xs={12}>
                    <Forum/>
                </Grid>
            </Grid>
        </Box>
    )
};
export default QuestionViewer;
