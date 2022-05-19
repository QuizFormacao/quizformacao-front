import React from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const styles = {
    textRank:{
        color: '#8e8d8f'
    }
};
const RatingComponent = () =>{
    return(
        <Box>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <h5 style={styles.textRank}>AVALIAÇÃO:</h5>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Rating
                        readOnly
                        defaultValue={2}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                </Grid>
            </Grid>
        </Box>
    )
};
export default RatingComponent;
