import React from "react";
import Card from 'react-bootstrap/Card';

function Dashboard() {
    return <div className = "row card-row">
        <Card className = "col-lg-3 col-md-4 col-sm-6" style={{width: "15rem"}}>
            <Card.Body>
                <Card.Title>Passport</Card.Title>
                <Card.Text>

                </Card.Text>
                <Card.Link href="">Verify Passport</Card.Link> <br />
                <Card.Link href="">Apply for Passport</Card.Link>
            </Card.Body>
        </Card>
        <Card className = "col-lg-3 col-md-4 col-sm-6" style={{width: "15rem"}}>
            <Card.Body>
                <Card.Title>Driving License</Card.Title>
                <Card.Text>

                </Card.Text>
                <Card.Link href="">Verify Driving License</Card.Link> <br />
                <Card.Link href="">Apply for Driving License</Card.Link>
            </Card.Body>
        </Card>
        <Card className = "col-lg-3 col-md-4 col-sm-6" style={{width: "15rem"}}>
            <Card.Body>
                <Card.Title>Voter ID</Card.Title>
                <Card.Text>

                </Card.Text>
                <Card.Link href="">Verify Voter ID</Card.Link> <br />
                <Card.Link href="">Apply for Voter ID</Card.Link>
            </Card.Body>
        </Card>
        <Card className = "col-lg-3 col-md-4 col-sm-6" style={{width: "15rem"}}>
            <Card.Body>
                <Card.Title>Visa</Card.Title>
                <Card.Text>

                </Card.Text>
                <Card.Link href="">Verify Visa</Card.Link> <br />
                <Card.Link href="">Apply for Visa</Card.Link>
            </Card.Body>
        </Card>
    </div>;
}

export default Dashboard;