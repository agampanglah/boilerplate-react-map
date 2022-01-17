import React, { useContext } from 'react'
import {
  Menu,
  Sidebar,
} from 'semantic-ui-react'
import { SidebarContext } from '../../context/sidebarContext';
const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar className='Sidebar.bg-white  drop-shadow-2xl'
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    style={{width:'300px'}}
  >
<span className='text-white'>test</span>
  </Sidebar>
)


function SideBar() {
 const { state } = useContext(SidebarContext);
  const { animation, dimmed, direction, visible } = state
  const vertical = direction === 'bottom' || direction === 'top'
  return (
    <div className='bg-slate-400' >
      <Sidebar.Pushable className='segmenSidebar drop-shadow-2xl'>
        {!vertical && (
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />
        )}
        <Sidebar.Pusher dimmed={dimmed && visible} className='segmentSidebar drop-shadow-2xl'>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

export default SideBar