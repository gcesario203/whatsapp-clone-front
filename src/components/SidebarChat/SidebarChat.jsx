import React from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core'

function SidebarChat(){
    return(
        <div className="sidebarChat">
            <Avatar></Avatar>
            <div className="sidebarChat__info"> 
                <h2>Contato / Nome da pessoa</h2>
                <p>Ultima mensagem enviada</p>
            </div>
        </div>
    )
}

export default SidebarChat