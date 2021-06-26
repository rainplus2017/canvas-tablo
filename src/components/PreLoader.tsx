import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import AppWrap from '../styles/App.module.scss';
import { Box } from '@material-ui/core';

function PreLoader() {
    return (
        <Box className={AppWrap.PreLoader}>
            <img
                src="https://cdn.dribbble.com/users/283669/screenshots/3508937/color.gif"
                width="400"
            />
        </Box>
    );
}

export default PreLoader;
