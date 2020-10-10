import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';
//import { link } from 'fs';

const MenuItem = ({title , imageUrl ,size,history,linkUrl,match}) => (
    <div 
        
            className = {`${size} menu-items`} onClick ={() => history.push(`${match.Url}${linkUrl}`)}
            >

           <div className = 'background-Image' 
            style ={{
                backgroundImage:`url(${imageUrl})`
            }}/>
           
    <div className = 'context'>
        <h1 className ='title'> {title.toUpperCase()} </h1>
        <span className ='sub-title'>SHOP NOW </span>
    </div>
</div>

);

export default withRouter (MenuItem) ;