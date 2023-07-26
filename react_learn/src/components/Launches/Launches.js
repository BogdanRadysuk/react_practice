import React, {useEffect, useState} from 'react';
import Launch from "./Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/').then(res => res.json()).then(value => {
            const filter = value.filter(item=> item.launch_year !== '2020')
            setLaunches(filter)
        })
    })

    return (
        launches.map(value => <Launch key={value.launch_date_unix} value={value}/>
        )
    );
};

export default Launches;