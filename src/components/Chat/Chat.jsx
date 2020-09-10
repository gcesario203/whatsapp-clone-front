import React from 'react'
import './Chat.css'
import {Avatar, IconButton} from '@material-ui/core'
import {SearchOutlined,MoreVert,AttachFile, InsertEmoticon, Mic} from '@material-ui/icons'
function Chat(){
    return(
        <div className="chat">
            <div className="chat__header">
                <Avatar></Avatar>
                <div className="chat__headerInfo">
                    <h3>Conversa</h3>
                    <p>Visto por último...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined></SearchOutlined>
                    </IconButton>
                    <IconButton>
                        <AttachFile></AttachFile>
                    </IconButton>
                    <IconButton>
                        <MoreVert></MoreVert>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">
                        Cesão
                    </span>
                    Mensagem uiui ola mundo
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">
                        Cesão
                    </span>
                    Mensagem uiui ola mundo
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">
                        Cesão
                    </span>
                    Mensagem uiui ola mundo
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon></InsertEmoticon>
                <form action="">
                    <input placeholder="Digite uma mensagem..."/>
                    <button type="submit">kkk</button>
                </form>
                
                <Mic></Mic>
            </div>
        </div>
    )
}

export default Chat