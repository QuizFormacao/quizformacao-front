import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import UserInformationHeader from "./UserInformationHeader";
import MoreInformation from "./MoreInformation";

const styles = {
    comment: {
        marginTop: '-3%',
    },
    paper:{
        width:'auto',
        marginLeft: '5%',
        marginRight:'5%',
        marginBottom: '1%',
    },
    text:{
        fontWeight:'normal'
    },
    position:{
        marginTop:'-3%'
    }
};

const Post = () =>{

    return <Paper sx={styles.paper} elevation={'3'}>
        <List>
           <UserInformationHeader/>
           <ListItem sx={styles.position}>
               <Link color={"inherit"}>
                   <h2>Título da questão</h2>
               </Link>
           </ListItem>
            <ListItem sx={styles.comment}>
                <Link color={"inherit"}>
                    <h4 className={styles.text}>
                        est simplement du faux texte employé dans la composition et la mise en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
                        depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux
                        de texte pour réaliser un livre spécimen de polices de texte.
                    </h4>
                </Link>
            </ListItem>
            <MoreInformation/>
        </List>
    </Paper>
};
export default Post;
