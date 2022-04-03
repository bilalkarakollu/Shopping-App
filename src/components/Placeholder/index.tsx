import { Skeleton } from "@mui/material";

interface PropsType {
    width:any,
    height:number
    mx:number,
}

export default function Placeholder(props:PropsType){
    const {mx, width, height} = props
    return <Skeleton sx={{mx:mx}} width={width} height={height}/>
}