import React, { Component } from 'react';
import { rootContext } from '../../Context';
import SideBar from './SideBar';
class MainContent extends Component {
    static contextType = rootContext;
    render() {
        const {user,setUser} = this.context
        console.log(user , " + " , this.context)
        return (
            <div >
                user from main { user}
                <button onClick={()=>{ setUser("rafu")}}> rafi </button>

                 <SideBar> </SideBar>


            </div>
        );
    }
}

export default MainContent;