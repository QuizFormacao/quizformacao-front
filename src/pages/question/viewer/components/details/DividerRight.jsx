import React from "react";

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";

const styles = {
    lineMargin:{
        marginLeft:'4%',
        marginRight: '4%',
        backgroundColor:'#cac9cb',
    },
};

const DividerRight = () =>{
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item md={12} xs={12}>
                    <Divider sx={styles.lineMargin}/>
                </Grid>
            </Grid>
        </Box>
    )
};
export default DividerRight;
