import React from "react";
import Box from "@/components/models/Box";
import LinearLayer from "@/components/sets/LinearLayer";
import { colors } from "@/theme";

export default function HomePage()
{
    return (
        
        <Box backgroundImage="/imgs/backgrounds/home.png" height="100%" backgroundSize="cover">
            <LinearLayer c1={colors.c2} c2="transparent">
                <Box>
                    
                </Box>
            </LinearLayer>
        </Box>
    )
}