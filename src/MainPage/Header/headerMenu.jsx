import React from 'react';
import SearchField from "./SearchField";
import ButtonsHeader from "./buttonsHeader";
 
function HeaderMenu(props) {
    return (<div>
        <ButtonsHeader onEnter ={props.onEnter}/>
        </div>
    )
}
export default HeaderMenu;