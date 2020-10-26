import React from 'react';
import Navbar from '../ui/Navbar';
const Layout = props => {
    return (
        <div className="row">
            <main>
                 {props.children} 
                
            </main>
        </div>
        
    )
}

export default Layout
