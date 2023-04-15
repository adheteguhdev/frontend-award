import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, Offcanvas, Card, Row, Col, Badge, Form } from 'react-bootstrap';
import authService from "../services/auth-service";
import getAwards from "../services/award-service";
import { useNavigate } from "react-router-dom";
import withAuth from "../utils/with-auth";

const FeedPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [awards, setAwards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAwards();
        setAwards(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [])

  const handleLogout = () => {
    authService.logout();
    navigate('/')
  }

  const getBadgeVariant = (type) => {
    switch (type) {
      case 'Vouchers':
        return 'primary';
      case 'Products':
        return 'warning'
      case 'Giftcard':
        return 'danger'
      default:
        return 'warning'
    }
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Button variant="outline-secondary" style={{ marginLeft: '20px' }} onClick={() => setShowMenu(true)}>Menu</Button>
        <Navbar.Brand className="mx-auto" style={{ fontWeight: 'bold', fontSize: '30px' }}>Awards</Navbar.Brand>
        <Button variant="outline-primary" style={{ marginRight: '20px' }} onClick={() => setShowFilter(true)}>Filter</Button>
      </Navbar>
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Awards Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={() => setShowMenu(false)}>Home</Nav.Link>
            <Nav.Link href="#">Cards</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={showFilter} onHide={() => setShowFilter(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Label>Poin Needed</Form.Label>
            <Form.Range />
            <Form.Label>Awards type</Form.Label>
            <Form.Check type="checkbox" label="All Type" />
            <Form.Check type="checkbox" label="Vouchers" />
            <Form.Check type="checkbox" label="Products" />
            <Form.Check type="checkbox" label="Others" />
          </Form>
        </Offcanvas.Body>
        <Button variant="primary" className="mt-3" style={{ marginBottom: "15px", fontSize: '20px' }}>Filter</Button>
      </Offcanvas>

      <Row xs={1} md={1} className="g-4" style={{ margin: '0 auto', maxWidth: '800px' }}>
        {awards.map((award, i) => (
          <Col key={i}>
            <div style={{ position: "relative" }}>
              <Card className="shadow">
                <div style={{ position: "relative" }}>
                  <Card.Img variant="top" src="https://dummyimage.com/700x150.png" width="100" height="160" />
                  <Card.Text className="text-start" style={{ position: "absolute", bottom: 0, left: '10px', width: "100%", color: "#000", padding: "2px" }}>
                    {award.point.toLocaleString('id-ID', { minimumFractionDigits: 0 })} Poin
                  </Card.Text>
                  <Badge bg={getBadgeVariant(award.type)} style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '16px', width: '120px', height: '30px' }}>
                    {award.type}
                  </Badge>
                </div>
              </Card>
              <Card.Body className="text-start" style={{ marginTop: "15px" }}>
                <Card.Title>
                  {award.name}
                </Card.Title>
              </Card.Body>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default withAuth(FeedPage)