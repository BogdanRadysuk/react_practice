import React from 'react';

const Launch = ({value}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = value
    return (
        <>
            <div>name: {mission_name}</div>
            <div>year: {launch_year}</div>
            <img src={mission_patch_small} alt=""/>
        </>
    );
};

export default Launch;