import Header from './Header'
import Footer from './Footer'

const Layout = (props)=>{
    return (
        <div>
            <Header/>
             <div className="ap-body">{props.children}</div>
            <Footer/>
        </div>
    )
}

export default Layout