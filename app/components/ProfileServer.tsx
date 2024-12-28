import { getServerSession } from "next-auth";
import { ProfileCard } from "./ProfileClient";
import NextAuth from "../lib/NextAuth";
import findUserInfo from "../lib/serverActions/findUserInfo";

export default async function ProfileComponent(){
    const data=await getServerSession(NextAuth)
    const {user}=data
    console.log(user)
    const userInfo=await findUserInfo(user.userId)
    return(
        <ProfileCard 
            userId={userInfo?.userId} 
            fullName={userInfo?.fullName}
            username={userInfo?.username}
            followers={userInfo?.followerCount}
            following={userInfo?.followingCount}
            />
    )
}