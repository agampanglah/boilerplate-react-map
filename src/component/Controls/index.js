import React from 'react'
import SideBar from '../../component/Controls/Sidebar';
import Map from './Map';
import Control from './Search';
function Index() {
  return (
    <>
        <SideBar/>
        <Map/>
        <Control/>
    </>
  );
}


export default Index