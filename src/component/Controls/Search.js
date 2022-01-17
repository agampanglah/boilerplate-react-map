import React, {useContext } from "react"
import {
    Segment,
    Search,
    Button,
} from "semantic-ui-react"
import { SidebarContext } from "../../context/sidebarContext";

const segmentStyle = {
    zIndex: 999,
    position: "absolute",
    width: "330px",
    top: "10px",
    left: "10px",
    maxHeight: "calc(100vh - 5vw)",
    overflow: "auto",
    borderRadius: "50px"
};


function Control() {
    const { dispatch } = useContext(SidebarContext);
    return (
        <div >
            <Segment style={segmentStyle}>
                <div className="flex justify-between space-x-2">
                    <div>
                        <Button
                            onClick={() =>
                                dispatch({ type: 'CHANGE_ANIMATION', animation: 'push' })
                            }
                            icon="bars"
                        />
                    </div>
                    <div>
                        <Search
                            type="text"
                            fluid
                            className=""
                            placeholder="Cari ..."
                        />
                    </div>
                    <div>
                        <Button
                            circular
                            icon="globe"
                        />
                    </div>

                </div>
            </Segment>

        </div>

    )
} export default Control;