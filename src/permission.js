import {Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { routes } from '@/layout/Sider/menu'

NProgress.configure({showSpinner:false})

const whiteList = ['/login']

class RouteGuard extends Component {
    constructor(props){
        super(props)
        this.checkPermission()
    }

    shouldComponentUpdate({location}){
        const { pathname, search } = this.props.location
        return location.pathname !== pathname && location.search === search
    }
    
    componentDidUpdate(){
        this.checkPermission()
    }


    checkPermission(){
        NProgress.start()
        let { history: { replace, push }, user:{ token }, location } = this.props
        console.log(this.props)
        const { pathname, search } = location
        let fullPath = encodeURIComponent(pathname + search)
        if(!routes.includes(pathname)){
            replace('/404')
            NProgress.done()
            return
        }
        if(token){
            if(pathname === '/login'){
                push('/')
                NProgress.done()
            }else{
                console.log('nothing to guard!')
                NProgress.done()
            }
        }else{
            if (whiteList.indexOf(pathname) !== -1) {
                NProgress.done()
            } else {
                push(`/login?redirect=${fullPath}`)
                NProgress.done()
            }
        }
    }

    render() {
        return (
            this.props.children
        );
    }
}

export default connect(
    (state)=>({...state}),
    ()=>({})
)(withRouter(RouteGuard))