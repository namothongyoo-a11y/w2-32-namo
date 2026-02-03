import { View, Text ,Image, TouchableOpacity, Share } from "react-native"
import { FontAwesome6 } from "@expo/vector-icons"
import { useState } from "react"

type PostProps={
    username : string,
    caption : string,
    image?: string,
    profile? : string
}

export default function Post({username, caption, image, profile}:PostProps) {
    const [like,setLike] = useState(0)
    const [comment,setcomment] = useState(0)
    const [paperplane,setpaperplane] = useState(0)
  return(
    <View style={{backgroundColor:"lightgreen",padding:15,borderRadius:25,marginHorizontal:20}}>

      <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
        {
          image && <Image source={{uri: profile}} style={{width:50,height:50,borderRadius:50,marginTop:20}}/>
        }
      
        <Text style={{fontSize:18,fontWeight:"600"}}>{username}</Text>

      </View> 
      <Text style={{fontSize:14,fontWeight:"600",marginTop:10}}>{caption}</Text>




      {
        image && <Image source={{uri: image}} style={{width:"100%", height:300,}}/>
      }



      <View style={{flexDirection:"row",marginTop:20,gap:10}}>
      <TouchableOpacity onPress={() => setLike(like + 1)}>
      <FontAwesome6 name="heart" size={22} color="red"/> 
      </TouchableOpacity>


      <TouchableOpacity onPress={() => setcomment(comment)}>
        <FontAwesome6  name="comment" size={22} color="red"/>
      </TouchableOpacity>

    <TouchableOpacity onPress={() => setpaperplane(paperplane + 1)}>
  <FontAwesome6 name="paper-plane" size={22} color="red"/>
</TouchableOpacity>


      <Text>{like}</Text>
      </View>
      </View>
  )
}