import Box from "@/components/models/Box";
import React, { PropsWithChildren } from "react";

interface LinerLayesProps extends PropsWithChildren {
    c1: string | "transparent",
    c2: string | "transparent",
}

const LinearLayer: React.FC<LinerLayesProps> = ({
    c1,
    c2,
    children,
}) => {

    return  (
    <div style={{
            background: `linear-gradient(45deg, ${c1} 50%, ${c2} 50%)`,
            height: "100%",
        }}>
        {children}
    </div>
    )
}



export default LinearLayer