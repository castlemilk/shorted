import React from 'react';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';

import AppViewWrapper from './../../components/AppViewWrapper';

const TopShortsWrapper = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;it 
    width: 900px;
    height: 800px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
`;

class TopShorts extends React.Component {


    render() {
        return (
        <AppViewWrapper>
            <TopShortsWrapper>
                graph goes here
            </TopShortsWrapper>
        </AppViewWrapper>
            )
            
    }
}


export default TopShorts;
