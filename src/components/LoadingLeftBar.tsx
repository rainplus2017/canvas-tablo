import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingLeftBar = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="1" y="1" rx="1" ry="1" width="310" height="245" />
    </ContentLoader>
);

export default LoadingLeftBar;
