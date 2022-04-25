// this is the profile component
// this component is rendered in the sidebar
// display name, email and profile picture

import { Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const profileImage=require('../images/profile.jpg');

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
    //the below function is to get the profile data from the local storage
    //it updates the state to render the updated component
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('UserProfile')!);
          setProfileCard(profileCard => ({
              ...profileCard,
              ...items
          }));
    },[]);

    return (
        <div className="profileContainer">
            <div className="profileImage">
                <img src={profileImage} alt="profile" />
            </div>
            <div className="profileName">{profileCard.name}</div>
            <div className="profileEmail">{profileCard.email}</div>
            <div className="viewProfile"><Button onClick={routeChange} type="primary">View Profile</Button></div>
        </div>
    )
}

export default Profile;

