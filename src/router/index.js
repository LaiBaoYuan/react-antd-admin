import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    DashboardOutlined
} from '@ant-design/icons';
import { Route } from 'react-router-dom';

const files = require.context('@/pages/', true, /index.js$/);
export const routes = files.keys().map(key=>{
    let path = key.replace('./','').replace('/index.js','')
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
        label: '菜单项二',
        key: 'login',
        icon: <FileOutlined/>
    },
    {
        label: '菜单项三',
        key: 'test3',
        icon: <PieChartOutlined/>,
        children: [
            { 
                label: '子菜单项一',
                key: 'child1',
            },
            { 
                label: '子菜单项一',
                key: 'child2',
            },
        ],
    },
];