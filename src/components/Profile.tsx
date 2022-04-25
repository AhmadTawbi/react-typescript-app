// this is the profile component
// this component is rendered in the sidebar
// display name, email and profile picture

import { Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from '../images/profile.jpg';
import { LoadingSpinner } from "./loadingSpinner";
export interface iProfileData {
    name: string;
    email: string;
    phone?: number;
    address?: iAddress;
    website?: string;
}

interface iAddress {
    city: string;
    street: string
}

const Profile = () => {
    // the below code is to handle the redirection to the profile page
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/profile';
        navigate(path);
    }

    // this is the state of the component
    const [profileCard, setProfileCard] = useState<iProfileData>({ name: '', email: '' });
    const [isLoading,setIsLoading] = useState(false);
    //the below function is to get the profile data from the local storage
    //it updates the state to render the updated component
    let items:{};
    useEffect(() => {
         items = JSON.parse(localStorage.getItem('UserProfile')!);
        if(items){
            setProfileCard(profileCard => ({
                ...profileCard,
                ...items
            }));
        }
        else{
            setIsLoading(true);
            checkData();
        }

    },[isLoading])

    function checkData(){
        setTimeout(() => {
            items? setIsLoading(false) : setIsLoading(true)
        }, 2000);
    }

    if(!isLoading){
        return (
            <div className="profileContainer">
                <div className="profileImage">
                    <img src={profile} alt="profile" />
                </div>
                <div className="profileName">{profileCard.name}</div>
                <div className="profileEmail">{profileCard.email}</div>
                <div className="viewProfile"><Button onClick={routeChange} type="primary">View Profile</Button></div>
            </div>
        )
    }
    else{
        return(
            <LoadingSpinner/>
        )
    }
    


}

export default Profile;

