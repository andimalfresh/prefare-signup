import React from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Container,Row} from 'react-bootstrap'

const optionsNumberOfPeople = [
    {value: 27, label: '2'},
    {value: 47, label: '4'},
    {value: 65.75, label: '6'},
    {value: 85.28, label: '8'},
    {value: 105.00, label: '10'},
    {value: 122.88, label: '12'},
    {value: 143.35, label: '14'},
    {value: 163.84, label: '16'}
]
const optionsNumberOfRecepies = [
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
    {value: 6, label: '6'},
    {value: 7, label: '7'}
]







const Buildmenu = (props) => {
    return (
        <div className="buildPlan">
             Build your plan
            <Container className='buildCard'>
                <Container>
                    1.Choose your Preference
                    <Row className='menuRow'>
                        <Col className='menuType' value='0' onClick={props.menuItem}>Meat and Veggies</Col>
                        <Col className='menuType' value='1'>Veggie</Col>
                    </Row>
                    <Row className='menuRow'>
                        <Col className='menuType' value='2'>Gluten Free</Col>
                        <Col className='menuType' value='3'>Kid Friendly</Col> 
                    </Row>
                    <Row className='quantityRow'>
                        <Col>Number of People</Col>
                        <Col><Select className='optionSelect2' onChange={null} options={optionsNumberOfPeople} /></Col>
                    </Row>
                    <Row className='quantityRow'>
                        <Col>Number of Recepies</Col>
                        <Col><Select className='optionSelect2' onChange={null} options={optionsNumberOfRecepies} /></Col>
                    </Row>
                </Container>
                <Container>
                    2. Review your Order 
                    <Row> 
                        <Col>Price per Serving</Col>
                        <Col>Serving Price</Col>
                    </Row>
                    <Row> 
                        <Col>Shipping</Col>
                        <Col>Shipping Price</Col>
                    </Row>
                    <Row>
                        <Col className='exerpt'> You can choose from a wide variety of meals full of fresh veggies and proteins.</Col>
                    </Row>
                </Container>
            </Container>

        </div>
    )
}

export default Buildmenu 