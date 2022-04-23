// this is the Report page
// here to manage the Report page content
import 'antd/dist/antd.css';
import '../App.css';
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </Content>} />
    )
}

