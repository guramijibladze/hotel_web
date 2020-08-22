import React from 'react';


export default function Hero({children, hero}) {
    console.log(hero);
    return <header className={hero}>{children}</header>;
}

Hero.defaultProps={
    hero:'defaultHero'
};