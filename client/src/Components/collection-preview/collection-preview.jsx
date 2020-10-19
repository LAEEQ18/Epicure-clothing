import React from 'react';

import {withRouter} from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component'

import {
    CollectionPreviewCon,
    TitleContainer,
    PreviewContainer
} from  './collection-previe-item.style.jsx';
// import { findAllByTitle } from '@testing-library/react';


// const CollectionPreview = ({title,items}) => (
//     <div className = 'collection-preview'>
//         <h1 className ='title'>{title.toUpperCase()}</h1>
//         <div className = 'preview'> { items
//         .filter((item,idx) => idx <4)
//         .map((item)=> (
//             <CollectionItem key={item.id} item={item}/> )
//         )}</div>
//     </div>

//);

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewCon>
      <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item , idx) => idx < 4)
          .map( (item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewCon>
  );
  
  export default withRouter(CollectionPreview);
  