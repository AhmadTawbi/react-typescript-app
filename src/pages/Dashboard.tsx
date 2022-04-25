// this is the Dashboard page
// here to manage the Dashboard page content

import { Layout } from 'antd';
import { PageLayout } from './Layout';
const {Content } = Layout;

export const Dashboard = () => {
    return (
        // calling the PageLayout component with the children attribute to render the component content
        <PageLayout children={<Content>

            <div className='MainHeader'>
                <h2>Dashboard</h2>
            </div>
            <p className='defaultContent'>
                Dashboards content to be added soon....
            </p>
        </Content>} />
    )
}




