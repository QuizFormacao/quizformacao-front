import React from "react";
import RatingComponent from "./RatingComponent";
import Requirements from "./Requirements";
import Topics from "./Topics";
import Area from "./Area";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import DifficultySlider from "../../../../../components/input/DifficultySlider";

const styles = {
    descriptionPaper:{
        padding: '20px',
        marginLeft:'10px',
        marginRight:'10px',
        marginTop: '10px'
    },
    descriptionText:{
        color: '#9b9a9c',
        fontWeight: 'Bold'
    },
};
const Details =() =>{
    return(
        <Paper sx={styles.descriptionPaper} elevation={3}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid item  xs={12} md={12}>
                        <Typography sx={styles.descriptionText} variant={'h5'}>Detalhes</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <RatingComponent/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <DifficultySlider/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Requirements/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Area/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Topics/>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
};

export default Details;
