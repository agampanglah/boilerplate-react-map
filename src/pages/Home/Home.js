import React from 'react'
import SidebarProvider from '../../context/sidebarContext';
import Index from '../../component/Controls';
function Home() {
  return (
    <>
      <SidebarProvider>
        <Index/>
      </SidebarProvider>
    </>
  );
}


export default Home