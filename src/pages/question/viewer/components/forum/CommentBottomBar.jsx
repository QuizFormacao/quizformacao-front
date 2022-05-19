import React from "react";
import { AiOutlineLike,AiOutlineDislike} from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import SubComment from "./SubComment";
import { RiReplyLine } from "react-icons/ri";

import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';
import Box from "@mui/material/Box";

const styles = {
    barColor:{
        backgroundColor:'#fcfcfc',
        height:'50px',
        marginBottom:'-5%'
    },
    defaultColor:{
        color: '#777678',
    },
    buttonFontSize:{
        fontSize:10,
        color: '#777678',
        marginTop:'2%',
        marginLeft:'-8%'
    },
    buttonShowMore:{
        fontSize:10,
        color: '#777678',
        marginTop:'3%',
        marginLeft:'20%'
    },
    color:{
        color:'#2196f3'
    },
};

const CommentBottomBar = () =>{
    const [likes, setLikes] = React.useState(0);
    const [dislikes,setDislikes] = React.useState(0);
    const [seeMore,setSeeMore] = React.useState(false);

    const handleSeeMore = () =>{
        setSeeMore(!seeMore)
    };

    const moreLikes = () =>{
        setLikes(likes + 1)
    };
    const moredislike = () =>{
        setDislikes(dislikes + 1)
    };

    return(
        <Box sx={styles.box}>
                <Grid container>
                    <Grid item md={1} xs={1}>
                        <IconButton onClick={moreLikes} >
                            <Badge sx={likes > 0 ? styles.color: styles.defaultColor} badgeContent={likes}>
                                <AiOutlineLike size={20}/>
                            </Badge>
                        </IconButton>
                    </Grid>

                    <Grid item md={2} xs={2}>
                        <IconButton onClick={moredislike} >
                            <Badge sx={dislikes > 0 ? styles.color : styles.defaultColor} badgeContent={dislikes}>
                                <AiOutlineDislike size={20}/>
                            </Badge>
                        </IconButton>
                    </Grid>

                    <Grid item md={5} xs={5} >
                        <Button variant={"text"} sx={styles.buttonFontSize} size={"small"} startIcon={ <RiReplyLine size={20}/>}>
                            Responder
                        </Button>
                    </Grid>

                    <Grid item md={4} xs={4}>
                        <Button onClick={handleSeeMore} sx={styles.buttonShowMore} size={"small"} startIcon={<FaRegCommentDots size={20}/>}>
                            Mostrar Respostas
                        </Button>
                    </Grid>
                    {/*<Grid item md={2} xs={2}>*/}
                    {/*    usar editor*/}
                    {/*</Grid>*/}
                </Grid>



                <Collapse in={seeMore} timeout="auto" unmountOnExit>
                    <CardContent>
                        <SubComment/>
                        <Divider/>
                        <SubComment/>
                        <Divider/>
                    </CardContent>
                </Collapse>

        </Box>
    )
};
export default CommentBottomBar;
