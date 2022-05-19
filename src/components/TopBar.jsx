import React, {Fragment} from "react";
import {AppBar, IconButton, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import logoSocialStudyBlue from "../images/icons/social-study-text-blue.png";

const TopBar = ({children, rightElement}) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Fragment>
            <AppBar color="primary" position="static">
                <Toolbar variant="dense" sx={{marginRight: isDesktop? '0px' : '-12px'}}>
                    <Link to={'/'}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: isDesktop? 2: 0 }}>
                            <img src={logoSocialStudyBlue} alt="SocialStudy" width='65px' height='50px'/>
                        </IconButton>
                    </Link>
                    <Typography sx={{flexGrow: 1}} variant={isDesktop? 'h6': 'subtitle1'} color={'white'}>
                        Pesquisar
                    </Typography>
                    {rightElement}
                </Toolbar>
            </AppBar>
            {children}
        </Fragment>
    );
}

export default TopBar;