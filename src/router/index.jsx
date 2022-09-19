import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    DashboardOutlined
} from '@ant-design/icons';
import { Route } from 'react-router-dom';

const files = import.meta.globEager('@/pages/**/*.jsx')
export const routes = Object.keys(files).map(key=>{
    let path = key.replace('/src/pages','').replace(/(\/index.jsx$)|(\.jsx$)/,'')
    // console.log(path,files[key])
    return (
        <Route element={files[key].default} path={path} key={path} exact></Route>
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
                children:[
                    { 
                        label: 'Child6',
                        key: 'child6',
                    },
                ]
            },
        ],
    },
];