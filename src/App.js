import React, { Component } from 'react';
import Signup from './components/Signup'
import Progressbar from './components/ProgressBar'
// import Buildyourplan from './components/Buildyourplan';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      menuItems: [],
      retail_price: '',
      menuItemSelected:'',
      ordersCount:'',
      percentage: 0,
      mealPlan: [
                  {
                    title: 'Original',
                    tagline: 'All the good stuff, delivered straight into your cooler!',
                    priceString: '$52 per week | FREE Shipping'
                  },
                  {
                    title: 'Veggie',
                    tagline: 'Meat-free dishes that make vegetables look sexy!',
                    priceString: '$52 per week | FREE Shipping'
                  },                    
                  {  
                    title: 'Gluten-Free',
                    tagline: 'Gluten-Free dishes that make vegetables look sexy!',
                    priceString: '$52 per week | FREE Shipping'
                  }
                ],
      x: 0
    }
  }
  checkDietRestrictions = () => {
    this.handleFormG()
    console.log('Checking Diet')
    if (this.state.dietRestrictions === 'meat' ) {
      this.setState ({
        vegetarian: true,
        x:1
      })
    } else if (this.state.dietRestrictions === 'gluten') {
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
    console.log('DDDay')
    const {value} = event.target
    this.setState ({
      delivery_day : value
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
    console.log('FormF')
    this.setState({
        showInputFormG: true
    })
  }
  render() {
  return (
    <div className='App'>
      <Progressbar  />
      <Signup
        name={this.state.name} 
        handleFormB={this.handleFormB} 
        handleFormC={this.handleFormC} 
        handleFormD={this.handleFormD}
        handleFormE={this.handleFormE}
        handleFormF={this.handleFormF} 
        showInputFormB={this.state.showInputFormB} 
        showInputFormC={this.state.showInputFormC} 
        showInputFormD={this.state.showInputFormD}
        showInputFormE={this.state.showInputFormE}
        showInputFormF={this.state.showInputFormF}
        showInputFormG={this.state.showInputFormG}
        getDeliveryDay = {this.getGetDeliveryDay}
        getFormData={this.getFormData}
        checkDietRestrictions={this.checkDietRestrictions}
        mealPlan={this.state.mealPlan}
        meals_per_week={this.state.meals_per_week}
        number_of_servings={this.state.number_of_servings}
        x={this.state.x}
      />
      {/* <Buildyourplan /> */}
    </div>
    );
  }
}
export default App;
