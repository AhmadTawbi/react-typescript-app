// this is the main layout of the whole application
// this layout is added on all the application pages
// it takes children props to render selected page content
import 'antd/dist/antd.css';
import '../App.css';
import Navigation from '../components/Navigation';
import Profile from '../components/Profile';
import { Layout } from 'antd';
const { Sider } = Layout;

export const PageLayout = (props: any) => {
    return (
        <Layout>
            <Sider>
                <Profile />
                <Navigation/>
            </Sider>
            <Layout>
                {props.children}
            </Layout>
        </Layout>
    )
}




