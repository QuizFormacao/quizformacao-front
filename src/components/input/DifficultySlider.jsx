import React from "react";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import SliderInput from "./SliderInput";

const styles = {
    textDifficulty:{
        color: '#8e8d8f',
    },
};

const DifficultySlider = ({disable}) => {

    return (
        <Box>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <h5 style={styles.textDifficulty}>DIFICULDADE:</h5>
                </Grid>
                <Grid item xs={12} md={12}>
                    <SliderInput isDisabled={true} />
                </Grid>
            </Grid>
        </Box>

    )
};
export default DifficultySlider;
