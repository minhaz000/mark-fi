import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Home from './Home/Hero';
import HomeTopics from './Home/HomeTopics';
function MainContent(props) {
    const quizzes = useLoaderData()
    return (
        <div>
            <Home> </Home>
            <HomeTopics quizzes={quizzes}></HomeTopics>
        </div>
    );
}

export default MainContent;