import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { List, Image, Icon, Card } from 'semantic-ui-react'

import DataClubWebsite from '../assets/images/DataClubWebsite.PNG';
import WebsitePic from '../assets/images/WebsitePic.jpg';
import SSToolHome from '../assets/images/SSToolHome.JPG';
import SSToolPage2 from '../assets/images/SSToolPage2.JPG';
import KalahStart from '../assets/images/KalahStart.JPG';
import KalahBoard from '../assets/images/KalahBoard.JPG';
import ARResume from '../assets/images/ARResume.PNG';

function ProjectCards(props) {
    return(

        <Container className="ui centered cards py-2" fluid={true}>

            <Row className="justify-content-center py-2">

                <Card.Group>

                <Card>

                    <div className="ui slide masked reveal image">
                        <Image className="visible content" src={SSToolHome} wrapped ui={false} />
                        <Image className="hidden content" src={SSToolPage2} wrapped ui={false} />
                    </div>

                    <Card.Content>
                        <Card.Header>ShipStation Tool</Card.Header>
                        <Card.Meta>
                            <span className='date'>2018</span>
                        </Card.Meta>
                        <Card.Description>
                            Created an application during my internship at ShipStation. The application included multiple tools to aid
                            employees with their daily work. Among the tools included a base64 converter, dimensional calculator and a CSV validator.
                            This application was written in c++ using Qt Creator to create the ui and can be downloaded and Mac and Windows machines. 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href='https://github.com/hughr44/SSTools-Qt-Files-Windows-' target='_blank'>
                            <Icon name='github square' />
                            GitHub
                        </a>
                        <a href='https://github.com/hughr44/SSTools-Windows-' target='_blank'>
                            <Icon name='play' />
                            Demo
                        </a>
                    </Card.Content>
                </Card>
                

                
                <Card>

                    <div className="ui slide masked reveal image">
                        <Image className="visible content" src={KalahStart} wrapped ui={false} />
                        <Image className="hidden content" src={KalahBoard} wrapped ui={false} />
                    </div>

                    <Card.Content>
                        <Card.Header>Kalah Game</Card.Header>
                        <Card.Meta>
                            <span className='date'>2019</span>
                        </Card.Meta>
                        <Card.Description>
                            Created a version of the boardgame Kalah with the ability to play against an AI with multiple difficulties, play against another player
                            on the same computer or remotely. This game was created in Eclipse using Java and the JavaFX framework.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href='https://github.com/hughr44/Kalah-Game-Project' target='_blank'>
                            <Icon name='github square' />
                            GitHub
                        </a>
                        <a href='https://github.com/hughr44/Kalah-Game-Project' target='_blank'>
                            <Icon name='play' />
                            Demo
                        </a>
                    </Card.Content>
                </Card>
                

                
                <Card>
                    <Image src={DataClubWebsite} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Data Analytics Club Website</Card.Header>
                        <Card.Meta>
                            <span className='date'>2019</span>
                        </Card.Meta>
                        <Card.Description>
                            Created a website for the Data Analytics Club at Texas A&M. The website contained pages to display information about
                            the organization, list important announcements, list upcoming events and allow users to sign up for the events. 
                            Additionally, a sign in feature was implemented using google authentication.
                            Admin accounts are given special privileges to edit and add events and to make announcements.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href='https://github.com/hughr44/Data-Analytics-Club-Website' target='_blank'>
                            <Icon name='github square' />
                            GitHub
                        </a>
                        <a href='https://www.youtube.com/watch?v=9zUyhp2ncC0' target='_blank'>
                            <Icon name='play' />
                            Demo
                        </a>
                    </Card.Content>
                </Card>

                <Card>
                    <Image src={ARResume} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Resume in Augmented Reality</Card.Header>
                        <Card.Meta>
                            <span className='date'>2020</span>
                        </Card.Meta>
                        <Card.Description>
                            This was a fun project I created to explore and learn about Unity Augmented Reality development. I created a phone application using the Unity AR development tool 
                            that places components of my resume in Augmented Reality. (video shown below)
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href='https://github.com/hughr44/Unity-AR-Resume-Project' target='_blank'>
                            <Icon name='github square' />
                            GitHub
                        </a>
                        <a href='' target='_blank'>
                            <Icon name='play' />
                            Demo
                        </a>
                    </Card.Content>
                </Card>

                <Card>
                    <Image src={WebsitePic} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Personal Website</Card.Header>
                        <Card.Meta>
                            <span className='date'>2020</span>
                        </Card.Meta>
                        <Card.Description>
                            This website was created as an online portfolio for myself to display my skills and give general information about me.
                            This website was built using the React framework.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href='https://engineering.tamu.edu/cse/index.html' target='_blank'>
                            <Icon name='github square' />
                            GitHub
                        </a>
                        <a href='https://engineering.tamu.edu/cse/index.html' target='_blank'>
                            <Icon name='play' />
                            Demo
                        </a>
                    </Card.Content>
                </Card>

                </Card.Group>

            </Row>


            <Row className="justify-content-center py-2">

                <Card.Group>

                <Card>
                    {/* <Image src={} wrapped ui={false} /> */}
                    <Card.Content>
                        <Card.Header>Competition System Validation and GUI for AutoDrive Challenge (in progress)</Card.Header>
                        <Card.Meta>
                            <span className='date'>2020</span>
                        </Card.Meta>
                        <Card.Description>
                            Member of the Texas A&M AutoDrive Challenge Team participating in the Society of Automotive Engineers (SAE) AutoDrive challenge,
                            a three-year competition that allows university teams to develop and demonstrate their own autonomous vehicle.
                            Developing a GUI using RQT and ROS to perform multiple functions for the Autonomous Vehicle including launching the vehicle
                            and different modules of the vehicle, ensure devices such as the cameras and radars are in a functioning state, and report any potential
                            errors with the car if they occur. 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        {/* <a href='' target='_blank'> */}
                            <Icon name='github square' />
                            GitHub
                        {/* </a> */}
                        <a href='https://engineering.tamu.edu/news/2019/07/the-12th-unmanned-texas-am-team-places-in-autonomous-vehicle-competition.html' target='_blank'>
                            <Icon name='play' />
                            Demo
                        </a>
                    </Card.Content>
                </Card>

                <Card>
                    {/* <Image src={} wrapped ui={false} /> */}
                    <Card.Content>
                        <Card.Header>Find My Movie Application (in progress)</Card.Header>
                        <Card.Meta>
                            <span className='date'>2020</span>
                        </Card.Meta>
                        <Card.Description>
                            Creating a website that accesses APIs from various movie and show streaming services allowing users to search for any movie or show
                            to find what streaming services have the desired movie or show available for viewing. This project is for the semester long project
                            in my Information Storage and Retrieval class.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        {/* <a href='' target='_blank'> */}
                            <Icon name='github square' />
                            GitHub
                        {/* </a> */}
                        {/* <a href='' target='_blank'> */}
                            <Icon name='play' />
                            Demo
                        {/* </a> */}
                    </Card.Content>
                </Card>

                </Card.Group>

            </Row>


        </Container>       

    );
    
}

export default ProjectCards;