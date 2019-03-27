import React, { Component } from 'react';
import * as moment from 'moment';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Behavioural from './Behaviour';
import Medical from './Medical';

// import participents from "../db/participents.json";


class Questionnaire extends Component {
    render() {
        return (
        <div className="animated fadeIn">
            <Row>
                <Col>
                <Card>
                    <CardHeader>
                    <i className="fa fa-align-justify"></i> Participents
                    </CardHeader>
                    <CardBody>
                    <Table hover bordered striped responsive size="sm">
                        <thead>
                        <tr>
                        <th>שאלון</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Link to='/Questionnaires/Intro1'>הכרות רפואי - חלק א</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to='/Questionnaires/Intro2'>הכרות רפואי - חלק ב</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to='/Questionnaires/Behaviour'>התנהגותי שבועי</Link>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <Link to='/Questionnaires/Medical'>רפואי שבועי</Link>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    </CardBody>
                </Card>
                </Col>
            </Row>

                                {/* { path: '/Participents', name: 'רשימת הילדים', component: Children },
  { path: '/Questionnaires', exact: true, name: 'שאלונים', component: Questionnaires },
  { path: '/Questionnaires/Intro1', name: 'הכרות רפואי - חלק א', component: Intro1 },
  { path: '/Questionnaires/Intro2', name: 'הכרות רפואי - חלק ב', component: Intro2 },
  { path: '/Questionnaires/Behaviour', name: 'התנהגותי שבועי', component: Behaviour },
  { path: '/Questionnaires/Medical', name: 'רפואי שבועי', component: Medical }, */}
            <Switch>
                <Route
                    key='1'
                    path='/Questionnaires/Intro1'
                    exact=''
                    name='הכרות רפואי - חלק א'
                    render={<Intro1 />}
                />
                <Route
                    key='1'
                    path='/Questionnaires/Intro2'
                    exact=''
                    name='הכרות רפואי - חלק ב'
                    render={<Intro2 />}
                />
                <Route
                    key='1'
                    path='/Questionnaires/Behaviour'
                    exact=''
                    name='התנהגות שבועי'
                    render={<Behavioural />}
                />
                <Route
                    key='1'
                    path='/Questionnaires/Medical'
                    exact=''
                    name='רפואי שבועי'
                    render={<Medical />}
                />
            </Switch>
            </div>
        );
    }
}


export default Questionnaire;