import React, { Component } from 'react'
import Signup from './components/Signup'
import Progressbar from './components/ProgressBar'
// import Buildyourplan from './components/Buildyourplan'
// import Shippinginfo from './components/Shippinginfo'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      address_1:'',
      address_2:'',
      city:'',
      state:'',
      zip:'',
      email:'',
      signup_date:'',
      meals_per_week:'',
      delivery_day:'',
      account_on_hold: null,
      dietRestrictions: '',
      gluten_free: false,
      vegetarian: false,
      number_of_servings:'',
      phone: '',
      meal_credits: '',
      showInputFormB: false,
      showInputFormC: false,
      showInputFormD: false,
      showInputFormE: false,
      showInputFormF: false,
      showInputFormG: false,
      showInputFormH: false,
      menuItems: [],
      retail_price: '',
      menuItemSelected:'',
      menuItemHighlighted: false,
      ordersCount:'',
      percentage: 0,
      mealPlan: [
                  {
                    title: 'Original',
                    tagline: 'All the good stuff, delivered straight into your cooler!',
                    priceString: ' per week | FREE Shipping'
                  },
                  {
                    title: 'Veggie',
                    tagline: 'Meat-free dishes that make vegetables look sexy!',
                    priceString: ' per week | FREE Shipping'
                  },                    
                  {  
                    title: 'Gluten-Free',
                    tagline: 'Gluten-Free dishes that make vegetables look sexy!',
                    priceString: ' per week | FREE Shipping'
                  },
                  {  
                    title: 'Kid Friendly',
                    tagline: 'Fresh Family meals kids will love!',
                    priceString: ' per week | FREE Shipping'
                  }
                ],
      x: 0,
      answer: null
    }
  }
  checkDietRestrictions = () => {
    this.handleFormH()
    console.log('Checking Diet')
    if (this.state.dietRestrictions.toLowerCase === 'meat' ) {
      this.setState ({
        vegetarian: true,
        x:1
      })
    } else if (this.state.dietRestrictions.toLowerCase === 'gluten') {
      this.setState ({
        gluten_free: true,
        x:2
      })
    } else if (this.state.dietRestrictions.toLowerCase === 'ciliac') {
      this.setState ({
        gluten_free: true,
        x:2
      })   
    } else {
      this.setState ({
        x:0
      })
    }
  }
   
  getDeliveryDay = (event) => {   
    this.handleFormG() 
      this.setState ({
        delivery_day : event.target.value
      })
    }
  getQuestionAnswer = (event) => {
    this.handleFormE()    
        this.setState ({
          answer : event.target.value
        })
      }
  getFormData = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }
  handleFormB = () => {
    console.log('FormB')
    this.setState({
        showInputFormB: true
    })
  }
  handleFormC = () => {
    console.log('FormC')
    this.setState({
        showInputFormC: true
    })
  }
  handleFormD = () => {
    console.log('FormD')
    this.setState({
        showInputFormD: true
    })
  }
  handleFormE = () => {
    console.log('FormE')
    this.setState({
        showInputFormE: true
    })
  }
  handleFormF = () => {
    console.log('FormF')
    this.setState({
        showInputFormF: true
    })
  }
  handleFormG = () => {
    console.log('FormG')
    this.setState({
        showInputFormG: true
    })
  }
  handleFormH = () => {
    console.log('FormH')
    this.setState({
        showInputFormH: true
    })
  }
  menuSelected = (event) => {
    this.setState({
      menuItemSelected : event.target.value
    })
  }
  render() {
  return (
    <div className='App'>
      <Progressbar  />
      <Signup
        name={this.state.name}
        getQuestionAnswer={this.getQuestionAnswer} 
        handleFormB={this.handleFormB} 
        handleFormC={this.handleFormC} 
        handleFormD={this.handleFormD}
        handleFormE={this.handleFormE}
        handleFormF={this.handleFormF}
        handleFormG={this.handleFormG}
        handleFormH={this.handleFormH} 
        showInputFormB={this.state.showInputFormB} 
        showInputFormC={this.state.showInputFormC} 
        showInputFormD={this.state.showInputFormD}
        showInputFormE={this.state.showInputFormE}
        showInputFormF={this.state.showInputFormF}
        showInputFormG={this.state.showInputFormG}
        showInputFormH={this.state.showInputFormH}
        getDeliveryDay = {this.getDeliveryDay}
        getFormData={this.getFormData}
        checkDietRestrictions={this.checkDietRestrictions}
        mealPlan={this.state.mealPlan}
        meals_per_week={this.state.meals_per_week}
        number_of_servings={this.state.number_of_servings}
        x={this.state.x}
      />
      {/* <Buildyourplan */}
        {/* menuItemSelected={this.state.menuItemSelected}
        menuItem={this.menuItem}
        menuItemHighlighted={this.state.menuItemHighlighted}
      /> */}
      {/* <Shippinginfo /> */}
    </div>
    )
  }
}
export default App
