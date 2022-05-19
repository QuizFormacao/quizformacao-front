import React from "react";
import {Box, Link, Typography, useTheme} from "@mui/material";
import {useLocation} from "react-router-dom";
import Footer from "../../components/Footer";
import TextParagraph from "../../components/TextParagraph";
import TopBar from "../../components/TopBar";
import Partners from "../../components/Partners";

const createStyles = (theme) => ({
    linksContainer: {
        padding: '0px 20px',
    },
    toCenter: {
        display: 'flex',
        justifyContent: 'left',
        textAlign: 'left',
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            justifyContent: 'center',
        }
    },
    firstLinkBox: {
        marginTop: '-20px',
        marginBottom: '10px'
    },
    link: {
        fontWeight: 'bold',
        margin: '0 15px',
    },
});

const PageNotFound = () => {
    let location = useLocation();
    let theme = useTheme();
    let styles = createStyles(theme);

    let from = location.state?.from?.pathname || '/';

    return (
        <TopBar>
            <TextParagraph title={'Página não encontrada'}>
                Seja muito bem-vindo ao SocialStudy, infelizmente não encontramos a página solicitada,
                por favor verifique se o link que você está acessando está correto,
                caso tenha chegado aqui pela propria plataforma por favor informar ao suporte.
            </TextParagraph>
            <Box sx={styles.linksContainer}>
                <Link href={from} underline="hover" color={'white'} sx={{...styles.toCenter, ...styles.firstLinkBox}}>
                    <Typography variant="p" color='secondary' sx={styles.link}>Clique aqui para voltar a página anterior</Typography>
                </Link>
                <Link href={'/'} underline="hover" color={'white'} sx={styles.toCenter}>
                    <Typography variant="p" color='secondary' sx={styles.link}>Clique aqui para ir a página inicial</Typography>
                </Link>
            </Box>
            <Partners/>
            <Footer/>
        </TopBar>
    );
}

export default PageNotFound;