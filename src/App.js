import React, { Component } from 'react';
import Signup from './components/Signup'
// import Progressbar from './components/ProgressBar'
// import Filler from './components/Filler'

import styles from './App.css';

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
      gluten_free: false,
      vegetarian: false,
      number_of_servings:'',
      phone: '',
      meal_credits: '',
      showInputFormB: false,
      showInputFormC: false,
      showInputFormD: false,
      showHiddenForm: false,
      menuItems: [],
      retail_price: '',
      menuItemSelected:'',
      ordersCount:'',
      percentage: 0
    }
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
  render() {
  return (
    <div className={styles.App}>
      {/* <Progressbar /> */}
      <Signup 
        handleFormB={this.handleFormB} 
        handleFormC={this.handleFormC} 
        handleFormD={this.handleFormD} 
        showInputFormB={this.state.showInputFormB} 
        showInputFormC={this.state.showInputFormC} 
        showInputFormD={this.state.showInputFormD}
      />
    </div>
    );
  }
}
export default App;
