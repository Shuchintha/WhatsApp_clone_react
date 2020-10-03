import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import db from './firebase'
import './SidebarChat.css'
function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    const createChat = ()=>{
        const roomName = prompt("Please enter the Chat name.")
        if(roomName){
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }

    return !addNewChat?(
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat_Info">
                <h2>{name}</h2>
                <p>Last message...</p>
                </div>
            </div>
        </Link>
    ):(
        <div onClick={createChat} className="sidebarChat">
        <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat
