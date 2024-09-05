import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <div>
        <Header />
        <ExploreMenu />
        <FoodDisplay category={category} />
    </div>
  )
}

export default Home