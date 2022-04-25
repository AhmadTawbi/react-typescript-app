import React from "react";
import {Spin} from 'antd';
interface iProps{}

export const LoadingSpinner:React.FC<iProps> = (props) =>{

    return(
        <>
            <div className="loadingSPinnerContainer">
                <Spin size="large"/>
            </div>
        </>

    )
}