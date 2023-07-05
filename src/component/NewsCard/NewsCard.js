import React , {useState,useEffect,createRef} from 'react'
import { Card, CardActionArea, CardActions , CardContent,CardMedia,Button,Typography } from '@mui/material'

const NewsCard = ({ article:{ description , publishedAt, source, title, url,urlToImage} , i,activeArticle }) => {

    const [elRefs , setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0,ref.current.offsetTop-50)
    useEffect(()=>{
        setElRefs((refs)=> Array(20).fill().map((_,j)=> refs[j] || createRef()));
    },[])

    useEffect(()=>{
        if(i === activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle]);
        }

    },[i , activeArticle, elRefs]);
  return (
   <Card ref={elRefs[i]} style={{ display: 'flex',flexDirection: 'column',justifyContent: 'space-between',borderBottom: '10px solid white',}} >
    <CardActionArea href = {url} target="_blank" >
        <CardMedia style = {{height: "200px"}}image = {urlToImage || 'https://www.everypixel.com/image-7411093689908857422'}/>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px',}}>
            <Typography variant='body2' color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
            <Typography variant='body2' color="textSecondary" component="h2">{source.name}</Typography>
        </div>
        <Typography  style={{padding: '0 16px'}} gutterBottom variant='h5'>{title}</Typography>
        <CardContent>
            <Typography variant='body2'color="textSecondary" component="p" >{description}</Typography>
        </CardContent>
    </CardActionArea>
    <CardActions style={{ padding: '0 16px 8px 16px',display: 'flex',justifyContent: 'space-between'}}> 
        <Button size="small" color="primary">Learn More</Button>
        <Typography variant='h5'color="textSecondary" >{i+1}</Typography>
    </CardActions>
   </Card>
  )
}

export default NewsCard