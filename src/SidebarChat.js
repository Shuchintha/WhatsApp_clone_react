import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import db from './firebase'
import './SidebarChat.css'
import { useStateValue } from './StateProvider'
function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState('')
    const [messages,setMessages] = useState('')
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    useEffect(() => {
        if(id){
        db.collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp','desc')
            .onSnapshot(snapShot=>setMessages(snapShot.docs.map((doc)=>doc.data()))
            );
        }
    }, [id])

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
                <p>{messages[0]?.message}</p>
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
