import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NewsComponent from "./components/Newscomponent";
import Home from './components/home//Home';


export default function Home() {
  return <div>
    <Container>
    <h1>Hello world</h1>
    <Home/>
    <NewsComponent/>
    <span>
     
     <iframe width="560" height="315" src="https://www.youtube.com/embed/YteL7HTDtKQ?si=CGxEhVAWTZ9zq31c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     
   </span>
   <span>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/nj6r_7p_rCo?si=c3N5d2VipnXsvwNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </span>
   <span>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/IW9i3bJ8bkU?si=gZAK-_MOI4H5ZYdh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </span>

    </Container>
    </div>
      
}
