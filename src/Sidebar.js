import { Avatar } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
// import { Avatar } from '@material-ui/core'
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebar_header">
        
        <Avatar />
        </div>
        <div className="sidebar_search">
        <SearchIcon />
        </div>

        <div className="sidebar_chats"></div>
            
        </div>
    )
}

export default Sidebar
