import React, { Component } from 'react';
import Signup from './components/Signup'

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
      ordersCount:''
    }
  }

  render() {
  return (
    <div className={styles.App}>
      <Signup />
    </div>
    );
  }
}
export default App;
