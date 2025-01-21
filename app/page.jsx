import React from 'react';
import { HomePageContainer } from './container/homepage-container';
import { HomePageProvider } from './container/homepage-container/useHomepage';

function Homepage() {
  return (
    <HomePageProvider>
      <HomePageContainer />
    </HomePageProvider>
  )
}

export default Homepage;