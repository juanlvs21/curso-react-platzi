import React from 'react';
import './Home-layout.css';

function HomeLayout(props)  {
    return(
        <section className="HomeLayout">
            {props.children}
        </section>
    ) 
}

export default HomeLayout;
