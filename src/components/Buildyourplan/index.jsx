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
    {value: 0,  label: '#'}, 
    {value: 2, label: '2'},
    {value: 4, label: '4'},
    {value: 6, label: '6'},
    {value: 8, label: '8'},   
]
const optionsNumberOfMeals = [  
    {value: 0,  label: '#'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
    {value: 6, label: '6'},
    {value: 7, label: '7'},      
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

const Buildmenu = (props) => {
    const viewerTotal = props.totalCalculated
    return (
        <div className='buildPlan' style={
            props.showBuildMenu ? { display: 'flex' } : { display: 'none' }
          }>
            <div className='exerptTitle'>Build your plan</div>
            <Container className='buildCard'>
                <Container>
                    1.Choose your Preference
                    <Row className='menuRow'>
                        <Col style={props.menuMeatsHighlighted ? {backgroundColor: '#ff9e16', color:'white'} : {}} className='menuType'  onClick={props.meatSelected}>Meat and Veggies</Col>
                        <Col style={props.menuVeggieHighlighted ? {backgroundColor: '#ff9e16', color:'white'} : {}}  className='menuType' onClick={props.veggieSelected}>Veggie</Col>
                    </Row>
                    <Row className='menuRow'>
                        <Col style={props.menuGlutenHighlighted ? {backgroundColor: '#ff9e16', color:'white'} : {}} className='menuType' onClick={props.glutenSelected}>Gluten Free</Col>
                        <Col style={props.menuKidsHighlighted ? {backgroundColor: '#ff9e16', color:'white'} : {}} className='menuType'  onClick={props.kidsSelected}>Kid Friendly</Col> 
                    </Row>
                    <Row className='quantityRow'>
                        <Col>Meals per Week</Col>
                        <Col><select className='optionSelect2' onChange={props.getNumberOfMeals}>        
                                        {mapOutMealsSelect}
                            </select>
                        </Col>
                    </Row>
                    <Row className='quantityRow'>
                        <Col>Number of Servings</Col>
                        <Col>
                            <select className='optionSelect2' onChange={props.getNumberOfServings} >      
                                    {mapOutServingsSelect}
                            </select>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    2. Review your Order 
                    <Row className='menuRow'> 
                        <Col>Menu Selected</Col>
                        <Col>{props.menuItemSelected}</Col>
                    </Row>
                    <Row className='menuRow'> 
                        <Col>Price per Serving</Col>
                        <Col>$11/per serving</Col>
                    </Row>
                    <Row className='menuRow'> 
                        <Col>Shipping</Col>
                        <Col>$6/per Shipment</Col>
                    </Row>
                    <Row className='menuRow'>
                        <Col><button className='resetButton' onClick={props.resetForm}>Reset</button></Col>
                        <Col><button className='totalButton' onClick={props.calculateOrderTotal}>Get Total</button></Col>
                    </Row>
                    <Row>
                        <div className='exerpt'>You can choose from a wide variety of meals, full of fresh veggies and proteins after check out. Your card will not be charged until you have selected your menu for the week.</div>
                    </Row>
                    <Row className='menuRow'> 
                        <Col>Total</Col>
                        <Col>${props.totalCalculated}</Col>
                    </Row>
                    <Row className='menuRow'><button className='checkoutButton'>Check out</button></Row>
                </Container>
            </Container>

            {/* mobile version of build card here  */}

            <Container className='buildCardMobile'>
                <Col>
                    1.Choose your Preference
                    <Row className='menuRow'>
                        <Col style={props.menuMeatsHighlighted ? {backgroundColor: '#ff9e16', color:'white'} : {}} className='menuType'  onClick={props.meatSelected}>Meat and Veggies</Col>
                        <Col style={props.menuVeggieHighlighted ? {backgroundColor: '#ff9e16', color:'white'} : {}}  className='menuType' onClick={props.veggieSelected}>Veggie</Col>
                    </Row>
                    <Row className='menuRow'>
                        <Col style={props.menuGlutenHighlighted ? {backgroundColor: '#ff9e16', color:'white'} : {}} className='menuType' onClick={props.glutenSelected}>Gluten Free</Col>
                        <Col style={props.menuKidsHighlighted ? {backgroundColor: '#ff9e16', color:'white'} : {}} className='menuType'  onClick={props.kidsSelected}>Kid Friendly</Col> 
                    </Row>
                    <Row className='quantityRow'>
                        <Col>Meals per Week</Col>
                        <Col><select className='optionSelect2' onChange={props.getNumberOfMeals}>        
                                        {mapOutMealsSelect}
                            </select>
                        </Col>
                    </Row>
                    <Row className='quantityRow'>
                        <Col>Number of Servings</Col>
                        <Col>
                            <select className='optionSelect2' onChange={props.getNumberOfServings} >      
                                    {mapOutServingsSelect}
                            </select>
                        </Col>
                    </Row>

 
                    2. Review your Order 
                    <Row className='menuRow'> 
                        <Col>Price per Serving</Col>
                        <Col>$11/per serving</Col>
                    </Row>
                    <Row className='menuRow'> 
                        <Col>Shipping</Col>
                        <Col>$6/per Shipment</Col>
                    </Row>
                    <Row className='menuRow'>
                        <button className='resetButton' onClick={props.resetForm}>Reset</button>
                        <button className='totalButton' onClick={props.calculateOrderTotal}>Get Total</button>
                    </Row>
                    <Row>
                        <div className='exerpt'>You can choose from a wide variety of freshly prepared meals, after you 'create an account'  You'll only get charged if and when you decide to place an order.  The best part?  You have the flexibility to change any preferences at any point.</div>
                    </Row>
                    <Row className='menuRow'> 
                        <Col>Total</Col>
                        <Col>${viewerTotal}</Col>
                    </Row>
                    <Row className='menuRow'><button className='checkoutButton'>Create Account</button></Row>
                    <Row className='expert'>your preferences will be saved in your account</Row>
                </Col>
            </Container>
        </div>
    )
}

export default Buildmenu 