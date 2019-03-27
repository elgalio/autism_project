// Presents the list of children (in a TABLE) with the following indexes:
// 1. email
// 2. dates of submitting each questionnaire
// in the future there will be links

// SQL query:
// SELECT t1.child_id, t1.email, t1.behavioural_submit, t2.medical_submit
// FROM 
//     (SELECT "child_id", Max("email") as "email", Max("submitted_at") AS "behavioural_submit"
//     FROM "sheelon"."sheelon"
//     where "title"='שאלון התנהגותי'
//     GROUP BY "child_id"
//     ORDER by "child_id" asc) t1
// LEFT JOIN
//     (SELECT "child_id", Max("email") as "email", Max("submitted_at") AS "medical_submit"
//     FROM "sheelon"."sheelon"
//     where "title"='שאלון רפואי'
//     GROUP BY "child_id"
//     ORDER by "child_id" asc) t2
// ON (t1.child_id = t2.child_id);

import React, { Component } from 'react';
import * as moment from 'moment';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
// import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import participents from "../db/participents.json";

class Tables extends Component {

  isActive(behave_submission, medic_submission) {
    var lastWeek = moment().subtract(7,'d').format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    var threeMonth = moment().subtract(3,'m').format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    var behave = moment(behave_submission, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
    var medic = moment(medic_submission, 'YYYY-MM-DDTHH:mm:ss.SSSZ');

    if(behave.isAfter(lastWeek) && medic.isAfter(lastWeek)){
      return <Badge color="success">Active</Badge>;
    }
    else if(behave.isBefore(threeMonth) && medic.isBefore(threeMonth)){
      return <Badge color="secondary">Inactive</Badge>;
    }
  }

  render() {
    var isActive = this.isActive;
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
                    <th>ID</th>
                    <th>Email</th>
                    <th>Behaviour Last Submission</th>
                    <th>Medical Last Submission</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      participents.records.map(function(item, key) {
                        return (
                          <tr key = {key}>
                              <td>{item.child_id}</td>
                              <td>{item.email}</td>
                              <td>{item.behavioural_submit}</td>
                              <td>{item.medical_submit}</td>
                              <td>
                                {isActive(item.behavioural_submit, item.medical_submit)}
                              </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
                {/* <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tables;
