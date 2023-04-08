import React from "react"
import Image from "next/image"
import { sources, colors, radius, thickness } from "@/theme"

const UserIcon: React.FC = () => {
    return (
        <Image 
        alt="user icon" 
        height={45}
        style={{
            border: `${thickness.t4} solid ${colors.c3}`,
            borderRadius: radius.r1
        }}
        src={sources.userIcon} 
        width={45}/>
    )
}

export default UserIcon