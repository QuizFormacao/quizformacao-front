import React from "react";
import {Box, Grid, Link, Typography} from "@mui/material";
import UnivaliIcon from "../images/iconJsx/UnivaliIcon";
import UnieduIcon from "../images/iconJsx/UnieduIcon";

const Partners = ({color}) => {
    const partners = [
        {
            url: 'https://univali.br',
            element: <UnivaliIcon size={'140px'}/>
        },
        {
            url: 'http://www.uniedu.sed.sc.gov.br/',
            element: <UnieduIcon size={'130px'}/>
        },
    ];

    return (
        <Box sx={{padding: '45px', textAlign: 'center', backgroundColor: color}}>
            <Typography variant="h4" color={'primary'} sx={{marginBottom: '30px'}}>Parceiros</Typography>
            <Grid container spacing={5} justifyContent={'center'} alignItems={'center'}>
                {partners.map((partner) => (
                    <Grid item>
                        <Link href={partner.url} underline="hover" target={'_blank'} color={'white'}>
                            {partner.element}
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Partners;