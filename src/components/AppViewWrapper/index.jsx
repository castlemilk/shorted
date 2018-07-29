import React from 'react';

import { Wrapper } from './style';



const AppViewWrapper = (props) => (
    <Wrapper>
        {props.children}
    </Wrapper>
)

export default AppViewWrapper;