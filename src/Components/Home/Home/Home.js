import React from 'react';
import Services from '../../Services/Services';

import SmartWay from '../../SmartWay/SmartWay';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories> </Inventories>
            <SmartWay></SmartWay>
            <Services></Services>
            
        </div>
    );
};

export default Home;