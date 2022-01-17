import React, { createContext, useReducer } from "react";

import SidebarReducer from "../reducer/sidebarReducer";

export const SidebarContext = createContext()

const SidebarProvider = (props) => {

    const initialState = {
        animation: 'overlay',
        direction: 'left',
        dimmed: false,
        visible: false,
    }

    const [state, dispatch] = useReducer(SidebarReducer, initialState)
    const value = React.useMemo(() => ({
        state, dispatch
      }), [state]);

    return (
        <SidebarContext.Provider value={value}>
                {props.children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider
