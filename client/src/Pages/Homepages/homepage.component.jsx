import React , { Profiler}from 'react';
//import './homepage.styles.scss';

import Directory from '../../Components/directory/directory.component'; 
//import MenuItem from '../../Components/menu-items/menu-item.component';

import {HomePageContainer} from './homepage.style';

const HomePage = () => 
   ( <HomePageContainer>

       <Profiler
       id='Directory'
       onRender={(id, phase, actualDuration) => {
           console.log({
               id,phase,actualDuration
           });
       }}>
           
       <Directory/>

       </Profiler>
       
        </HomePageContainer>)


export default HomePage ;