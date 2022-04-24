// this is the profile details page
import { Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import profile from '../images/profile.jpg';

import { Layout } from 'antd';
import { PageLayout } from './Layout';
import { iProfileData } from '../components/Profile';

const {Content } = Layout;


export const ProfileDetails = () => {
    // this is the component states
    const [profileCard, setProfileCard] = useState<iProfileData>({ name: '', phone: 0, email: '', website: '', address: { city: '', street: '' } });
    //const [address, setAddress] = useState({ city: '', street: '' })

    // here to get the profile data from local storage
    // it updates the component state to render the component
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('UserProfile')!);
        setProfileCard(profileCard => ({
            ...profileCard,
            ...items
        }));        
    })
    return <PageLayout children={<Content>
        <div className='MainHeader'>
            <h2>Profile</h2>
        </div>
        <div className='profileMainContainer'>
            <Row>
                <Col className='imageRow' span={24}>
                    <img src={profile} className='imageDetails'  alt="profile" />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <label className='labeClass'>Name</label>
                    <div className='labelData'>{profileCard.name}</div>
                </Col>
                <Col span={12}>
                    <label className='labeClass'>Phone</label>
                    <div className='labelData'>{profileCard.phone ? profileCard.phone : ""}</div>
                </Col>
                <Col span={12}>
                    <label className='labeClass'>Email</label>
                    <div className='labelData'>{profileCard.email}</div>
                </Col>
                <Col span={12}>
                    <label className='labeClass'>Website</label>
                    <div className='labelData'>{profileCard.website ? profileCard.website : ""}</div>
                </Col>
                <Col span={12}>
                    <label className='labeClass'>Address</label>
                    <div className='labelData'>{profileCard.address ? profileCard.address.city : ""}</div>
                </Col>
                <Col span={12}>
                    <label className='labeClass'>Streed</label>
                    <div className='labelData'>{profileCard.address ? profileCard.address.street : ""}</div>
                </Col>
            </Row>
        </div>
    </Content>

    } />;

}




