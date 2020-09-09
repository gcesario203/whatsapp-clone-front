import React from 'react'
import './Sidebar.css'
import {DonutLarge, MoreVert, Chat, SearchOutlined} from '@material-ui/icons'
import {IconButton, Avatar} from '@material-ui/core'

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars1.githubusercontent.com/u/37389862?s=400&u=15cab2ca0705c442dfd5bbd44ef3005201ac2e69&v=4"></Avatar>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge></DonutLarge>
                    </IconButton>
                    <IconButton>
                        <Chat></Chat>
                    </IconButton>
                    <IconButton>
                        <MoreVert></MoreVert>
                    </IconButton>
                </div>
                
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined>
                        
                    </SearchOutlined>
                    <input placeholder="Procure ou inicie uma nova conversa"/>
                </div>
            </div>

            <div className="sidebar_chats">
                {/* SidebarChat */}
            </div>
        </div>
    )
}

export default Sidebar