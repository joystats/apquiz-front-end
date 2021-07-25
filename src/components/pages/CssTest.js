import { useEffect } from 'react'
import Layout from '../Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos } from '../../actions'


const CssTest = ()=>{
    const dispatch = useDispatch()
    const photos = useSelector(state=>state.photos?.photos)

    useEffect(()=>{
        dispatch(getPhotos())
    },[dispatch])

    const listPhotos = ()=>{
        return photos && photos.map((item, index)=>{
            return <img className="picsum-150" alt={item.author} key={index} src={item.download_url}/>
        })
    }
    return (
        <Layout>
           <h4>O1 - CSS Test</h4>
           <div className="picsum-container clear">
               {listPhotos()}
           </div>
        </Layout>   
    )
}

export default CssTest