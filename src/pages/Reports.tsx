// this is the Report page
// here to manage the Report page content

import { Layout } from 'antd';
import { PageLayout } from './Layout';
const {Content } = Layout;

export const Reports = () => {
    return (
    // calling the PageLayout component with the children attribute to render the component content
    <PageLayout children={<Content>
        <div className='MainHeader'>
            <h2>Reports</h2>
        </div>
        <p className='defaultContent'>
           Reports content to be added soon....
        </p>
    </Content>} />
    )
}

