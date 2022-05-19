import React from "react";
import ShareIcons from "./ShareIcons";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = {
    paper:{
        marginTop:'1%',
        width: '71%',
        marginLeft:'12.5%',
    },
    textShare:{
        fontFamily:'Heveltica',
        fontWeight: 'Bold',
        color: '#777678',
        fontSize:12,
        marginLeft:'35%',
    },
    textRank:{
        fontFamily:'Heveltica',
        fontWeight: 'Bold',
        color: '#777678',
        fontSize:12,
    },
    gridShare:{
        marginLeft:'40%'
    },
    gridMargin:{
        marginTop:'3.5%',
        marginBottom:'2%'
    },
    gridMarginIcon:{
        marginTop:'2%',
        marginBottom:'3%'
    },
    gridRank:{
        marginBottom:'-10%',
    },
    gridTextRank:{
        marginTop:'4.6%',
        marginLeft:'5%',
    },
    gridBoxRank:{
        marginTop:'3%',
        marginBottom:'-2%',
        marginLeft:'-1.5%'
    }
};

const ShareTeste = () =>{
  return(
      <Paper sx={styles.paper} elevation={3}>
          <Grid container sx={styles.gridRank}>
              <Grid item md={1} xs={1} sx={styles.gridTextRank}>
                  <Typography sx={styles.textRank}>AVALIAR:</Typography>
              </Grid>
              <Grid item md={2} xs={2} sx={styles.gridBoxRank}>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating
                          name="customized-empty"
                          defaultValue={2}
                          precision={0.5}
                          emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      />
                  </Box>
              </Grid>
          </Grid>
          <Grid container sx={styles.gridShare}>
              <Grid item md={3} xs={3} sx={styles.gridMargin}>
                  <Typography sx={styles.textShare}>
                      COMPARTILHAR:
                  </Typography>
              </Grid>
              <Grid item md={4} xs={4} sx={styles.gridMarginIcon}>
                  <ShareIcons/>
              </Grid>
          </Grid>
      </Paper>
  )
};
export default ShareTeste;
