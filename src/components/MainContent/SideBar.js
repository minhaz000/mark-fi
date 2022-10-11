import React, { useContext } from 'react';
import { rootContext  } from '../../Context';
function SideBar(props) {
    const {user,setUser} = useContext(rootContext)
    return (
        <div>
             me as a side bar  {user}
             <button onClick={()=>{ setUser(" shoahn " )}}> set user </button>
        </div>
    );
}

export default SideBar;