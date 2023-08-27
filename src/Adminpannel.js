import React, { StrictMode } from 'react';
import {Route,Routes ,Outlet ,Link,redirect,useNavigate} from "react-router-dom";
import {Row,Col,Container,Button,ButtonGroup } from "react-bootstrap";
import Alluser from './admin/Alluser';
import Allorder from './admin/Allorder';
import Allitem from './admin/Allitem';
import Additem from './admin/Additem';
const Adminpannel=()=>{
    

    return (<>
    <Container>
        <Row > 
            <h1 className="text-center bg-dark text-success p-2">Admin Pannel</h1>
            <Col md={4}>
            <ButtonGroup vertical style={{minHeight:"400px"}}>
                        <Button className="text-center bg-dark text-success p-2"><Link className="nav-link" to="adminpannel/alluser">All Users</Link></Button>
                        <Button className="text-center bg-dark text-success p-2"><Link className="nav-link" to="adminpannel/allitem">All Items</Link></Button>
                        <Button className="text-center bg-dark text-success p-2"><Link className="nav-link" to="adminpannel/additem">Add New Item</Link></Button>
                        <Button className="text-center bg-dark text-success p-2"><Link className="nav-link" to="adminpannel/allorder">All Orders</Link></Button>
                        <Outlet/>
            </ButtonGroup>
            </Col>
            <Col>
             <Routes>
                        <Route exact path="/adminpannel/alluser" element={<Alluser />} />
                        <Route exact path="/adminpannel/allitem" element={<Allitem />} />
                        <Route exact path="/adminpannel/additem" element={<Additem />} />
                        <Route exact path="/adminpannel/allorder" element={<Allorder />} />
             </Routes>
            </Col>
        </Row>

    </Container>
    </>)
}
export default Adminpannel;