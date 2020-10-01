import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Sidebar.css"
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar_header">
                <IconButton><Avatar /></IconButton>
                <div className="sidebar_headerRight">
                    <IconButton><DonutLargeIcon /></IconButton>
                    <IconButton><ChatIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <IconButton><SearchOutlined /></IconButton>
                    <input placeholder="Search or start new chat" type="text"></input>
                </div>
            </div>

            <div className="sidebar_chats">
            </div>  

        </div>
    )
}

export default Sidebar
