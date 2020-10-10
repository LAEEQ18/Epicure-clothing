import React from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';


import MenuItem from '../menu-items/menu-item.component';
import './directory.styles.scss';
// import { render } from '@testing-library/react';
// import { format } from 'url';

const Directory = ({sections}) => (

<div className ='directory-menu'>
    {sections.map (({id,...otherSectionProps}) => (
    <MenuItem key ={ id} {...otherSectionProps}/>
    ))}
</div> 

);

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
});
  
 export default connect(mapStateToProps)(Directory);
