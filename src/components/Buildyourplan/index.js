import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Container,Row} from 'react-bootstrap'

// const optionsMenuItemsOrdered = [
//     {value: 27, label: '2'},
//     {value: 47, label: '4'},
//     {value: 65.75, label: '6'},
//     {value: 85.28, label: '8'},
//     {value: 105.00, label: '10'},
//     {value: 122.88, label: '12'},
//     {value: 143.35, label: '14'},
//     {value: 163.84, label: '16'}
// ]
const optionsNumberOfServings = [  
    {value: 2, label: '2'},
    {value: 4, label: '4'},
    {value: 6, label: '6'},
    {value: 8, label: '8'},   
]
const optionsNumberOfMeals = [  
    {value: 2, label: '2'},
    {value: 4, label: '4'},
    {value: 6, label: '6'},
    {value: 8, label: '8'},   
]
var mapOutServingsSelect= optionsNumberOfServings.map((item,i) => {
    return (
        <option key={i} value={item.value}>{item.label}</option>
    )
})
var mapOutMealsSelect= optionsNumberOfMeals.map((item,i) => {
    return (
        <option key={i} value={item.value}>{item.label}</option>
    )
})
// const totalOrdered = 







const Buildmenu = (props) => {
    return (
        <div className="buildPlan">
             Build your plan
            <Container className='buildCard'>
                <Container>
                    1.Choose your Preference
                    <Row className='menuRow'>
                        <Col style={props.menuMeatsHighlighted ? {backgroundColor: '#ff8d6a', color:'white'} : {}} className='menuType1' value='0' onClick={props.menuSelected}>Meat and Veggies</Col>
                        <Col style={props.menuVeggieHighlighted ? {backgroundColor: '#ff8d6a', color:'white'} : {}}  className='menuType2' value='1' onClick={props.menuSelected}>Veggie</Col>
                    </Row>
                    <Row className='menuRow'>
                        <Col style={props.menuGlutenHighlighted ? {backgroundColor: '#ff8d6a', color:'white'} : {}} className='menuType3' value='2' onClick={props.menuSelected}>Gluten Free</Col>
                        <Col style={props.menuKidsHighlighted ? {backgroundColor: '#ff8d6a', color:'white'} : {}} className='menuType4' value='3' onClick={props.menuSelected}>Kid Friendly</Col> 
                    </Row>
                    <Row className='quantityRow'>
                        <Col>Meals per Week</Col>
                        <Col><select className='optionSelect2' onChange={props.getNumberOfMeals} >
                                    <option name='Choose Option' disabled />
                                        {mapOutMealsSelect}
                            </select>
                        </Col>
                    </Row>
                    <Row className='quantityRow'>
                        <Col>Number of Servings</Col>
                        <Col>
                            <select className='optionSelect2' onChange={props.getNumberOfServings} >
                                <option name='Choose Option' disabled />
                                    {mapOutServingsSelect}
                            </select>
                        </Col>
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