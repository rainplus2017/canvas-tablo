import { Box, Button, CardMedia, Link } from '@material-ui/core';
import React from 'react';
import App from './../styles/App.module.scss';
const Header = () => {
    return (
        <Box className={App.HeaderWrap}>
            <Box>
                <img src="" title="Paella dish" className={App.HeaderLogo} />
            </Box>
            <Box>
                <Link href="#" className={App.Color}>
                    Baxış
                </Link>
                <Button variant="contained" className={App.Buton}>
                    100 AZN Sifariş et
                </Button>
            </Box>
        </Box>
    );
};

export default Header;
