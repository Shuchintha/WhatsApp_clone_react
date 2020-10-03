import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import React ,{useState,useEffect} from 'react'
import MicIcon from '@material-ui/icons/Mic';
import "./Chat.css"
import { useParams } from 'react-router-dom';
import db from './firebase';


function Chat() {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    const {roomId} = useParams()
    const [roomName,setRoomName] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()
        console.log("you tuypes"+ input)
        setInput('')
    }

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(
                snapShot =>{
                    console.log("hellooooooo"+JSON.stringify(snapShot.data().name))
                    setRoomName(snapShot.data().name)
            })
        }
    }, [roomId])
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [roomId])
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className={`chat_message ${true && 'chat_reciever'}`}>
                <span className="chat_name">Shuchi</span>
                Hello guys
                <span className="chat_timestamp">3.50pm</span>
                </p>

            </div>
            
            <div className="chat_footer">
                    <InsertEmoticon />
                    <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send message</button>
                    </form>
                    <MicIcon />
            </div>
        </div>
    )
}

export default Chat
