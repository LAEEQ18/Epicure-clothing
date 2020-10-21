import React from 'react';

//import { SpinnerContainer, SpinnerOverlay } from './with-spiner.styles';

import Spinner from '../spinner/spinner.component';
//import { SpinnerContainer } from '../spinner/spinner.styles';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {

    return isLoading ? (
        <Spinner/>
    ) : (
        <WrappedComponent {...otherProps} />
    );
};


export default WithSpinner;