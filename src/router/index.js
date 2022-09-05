import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    DashboardOutlined
} from '@ant-design/icons';
import { Route } from 'react-router-dom';

const files = require.context('@/pages/', true, /\.js$/);
export const routes = files.keys().map(key=>{
    let path = key.replace('./','').replace(/(\/index.js$)|(\.js$)/,'')
    return (
        <Route component={files(key).default} path={`/${path}`} key={path}></Route>
    )
})

export default [
    {
        label: 'Dashboard',
        key: 'dashboard',
        icon: <DashboardOutlined/>
    },
    {
        label: 'Test1',
        key: 'test1',
        icon: <PieChartOutlined/>,
        children: [
            { 
                label: 'Child1',
                key: 'child1',
                hidden:false
            },
            { 
                label: 'Child2',
                key: 'child2',
            }
        ],
    },
    {
        label: 'Test2',
        key: 'test2',
        icon: <PieChartOutlined/>,
        children: [
            { 
                label: 'Child3',
                key: 'child3',
                hidden:false
            },
            { 
                label: 'Child4',
                key: 'child4',
            },
            { 
                label: 'Child5',
                key: 'child5',
            },
        ],
    },
];