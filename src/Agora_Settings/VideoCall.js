import { useEffect, useState } from "react";
import { config,useClient,useMicrophoneAndCameraTracks,channelName } from "./settings";
const VideoCall = (props) => {
     const {setInCall} = props;
     const [users,setUsers]= useState([]);
     const [start,setStart]=useState(false);
     const client=useClient()
     const {ready,tracks} = useMicrophoneAndCameraTracks()

     useEffect(()=>{
          let init = async (name)=> {
               client.on("user-published",async (user,mediaType)=>{
                    await client.unsubscribe(user,mediaType);
                    if (mediaType == "video"){
                         setUsers((prevUsers)=> {
                              return [...prevUsers,user];
                         });
                    }
                    if (mediaType == "audio") {
                         user.audioTrack.play();
                    }
               })
               client.on("user-unpublished",async(user,mediaType)=> {
                    if (mediaType == "audio") {
                         if (user.audioTrack) user.audioTrack.stop();
                    }
                    if (mediaType == "video") {
                         setUsers((prevUsers)=>{
                              return prevUsers.filter((User)=>User.uid !== User.uid);
                         })
                    }
               })
               client.on("user-left",(user)=> {
                    setUsers((prevUsers) => {
                         return prevUsers.filter((User) => User.uid !== User.uid);
                    });
               });
               try {
                    await client.join(config.appId,name,config.token,null)
               } catch (error) {
                    console.log(error);
               }
               if (tracks) await client.publish([tracks[0],tracks[1]]);
               setStart(true);
          }
          if (ready && tracks){
               try{
                    init(channelName)
               }catch(error){
                    console.log(error);
               }
          }
     },[channelName,client,ready,tracks])

  return (
    <>{ready && tracks  &&  (<Controls tracks={tracks} setStart={start} setInCall={setInCall} />)}
    {start && tracks  &&  (<Videos tracks={tracks} users={start} />)}</>
  )
}

export default VideoCall