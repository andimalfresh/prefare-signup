import React, { Component } from 'react';
import Signup from './components/Signup'
import Progressbar from './components/ProgressBar'
import './App.css';

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
      mealPlan: {
        title: 'Veggie',
        tagline: 'Meat-free dishes that make vegetables look sexy',
        priceString: '$52 per week | FREE Shipping'
      }
    }
  }
  checkDietRestrictions = () => {
    this.handleFormG()
    console.log('Checking Diet')
    if (this.state.dietRestrictions === 'meat' ) {
      this.setState ({
        vegetarian: true
      })
    } else if (this.state.dietRestrictions === 'gluten') {
      this.setState ({
        gluten_free: true
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
        number_of_servings={this.state.number_of_servings}
      />
    </div>
    );
  }
}
export default App;
