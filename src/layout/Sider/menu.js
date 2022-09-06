import { Link } from "react-router-dom";
import router from "@/router";
import { deepClone } from '@/utils';

function toLink(item, parentPath = '') {
    item.forEach(v => {
        let path = parentPath ? `${parentPath}/${v.key}` : `/${v.key}`
        if (v.children && v.children.length) {
            toLink(v.children, path)
        }else{
            v.label = (<Link to={path}>{v.label}</Link>)
        }
    })
    return item
}

function toRoutes(routes,parentPath = ''){
    let arr = []
    routes.forEach(v=>{
        const { key } = v
        let resolvePath = parentPath ? `${parentPath}/${key}` : `/${key}`
        if(v.children && v.children.length){
            arr.push(...toRoutes(v.children,resolvePath))
        }else if(!v.hidden){
            arr.push(resolvePath)
        }
    })
    return arr
}

export const routes = toRoutes(router)

export default toLink(deepClone(router))