import React from "react";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box";

const styles = {

    dividerCenter:{
        color:'#dedddf',
    },
    textTitle:{
        fontWeight: 'bold',
        color: '#8e8d8f',
        marginBottom: '5px',
        marginTop: '10px'
    },
    textQuestionBody:{
        fontSize: 15,
    },
    textQuestionTitle:{
        fontSize: 15,
        marginBottom: '10px'
    },
};

const DefinitionBody = () =>{
  return(
          <Box sx={styles.box}>
              <Grid container>
                  <Grid item md={12} xs={12}>
                      <Typography sx={styles.textTitle} variant={'h4'}>
                          Título da Questão
                      </Typography>
                      <Typography sx={styles.textQuestionTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu ex est. Aenean auctor elit lorem, ac hendrerit arcu posuere eu. Praesent elementum ligula id mauris mollis, id molestie ex euismod. Morbi a purus velit. Suspendisse eleifend eros sit amet tortor sagittis pharetra. Proin varius hendrerit dui, at feugiat dolor rhoncus at. Vestibulum consequat a libero et rutrum. Proin a nulla ultricies, euismod mauris id, volutpat purus. Aliquam erat volutpat. Aliquam placerat felis sit amet augue fringilla, ac bibendum neque ultricies. Etiam ligula massa, mattis et dolor vel, faucibus posuere tellus. Morbi id condimentum quam.
                          Proin a porta magna. Nunc id finibus eros. Curabitur risus lacus, finibus at laoreet in, feugiat a sem. Fusce auctor in enim posuere dignissim. Morbi tempus nunc eu mauris hendrerit accumsan quis vel nulla. Curabitur aliquam id ex at venenatis. Phasellus ultrices mi at velit dignissim elementum. Donec nibh leo, viverra malesuada metus sit amet, tincidunt placerat lectus. Curabitur posuere metus nulla, non consectetur ex placerat suscipit. Sed pretium justo vel nulla congue, at aliquet erat lobortis. Ut vestibulum ultrices nulla eu euismod. Vestibulum in eros sed sem dapibus porttitor ut eget nulla. Duis arcu lectus, mattis fringilla rhoncus feugiat, interdum at felis.
                      </Typography>
                      <Divider sx={styles.dividerCenter}/>
                      <Typography variant={'h4'} sx={styles.textTitle}>
                          Resposta
                      </Typography>
                      <Typography sx={styles.textQuestionBody}>
                          In feugiat vestibulum magna, et dapibus eros iaculis et. Nulla eu mi eget risus accumsan scelerisque ut non velit. Donec laoreet feugiat nunc, quis tincidunt risus lacinia id. Cras dictum accumsan luctus. Donec rutrum felis ut elit ornare mattis. Quisque ut nunc id leo lobortis suscipit volutpat et sapien. Duis lectus arcu, suscipit sit amet maximus fringilla, congue eu ipsum. Nam id tellus viverra erat efficitur porttitor. Aenean eu rhoncus tortor. Ut tristique varius pulvinar. Mauris sodales nisi at ante gravida porta vel eget arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus et maximus tellus. Morbi vel nunc condimentum, aliquet sem ut, fermentum dolor. Nulla euismod sagittis eros nec pretium. Aenean imperdiet condimentum risus, at imperdiet dolor fermentum vel.
                          Fusce est ligula, pretium vitae erat quis, dapibus tempor est. Integer porta at urna sed dignissim. Aliquam sed nulla eu ipsum aliquam mollis quis id neque. Ut tincidunt libero neque, id viverra lectus faucibus quis. Proin efficitur pretium lacinia. Curabitur accumsan ante quis nunc convallis mollis. Integer magna libero, tempus ac rutrum in, fringilla quis felis.
                      </Typography>
                  </Grid>
              </Grid>
          </Box>
  )
};
export default DefinitionBody;
