import React, { Component } from 'react'
// import Signup from './components/Signup'
// import Progressbar from './components/ProgressBar'
import Buildyourplan from './components/Buildyourplan'
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
      meals_per_week:'0',
      delivery_day:'',
      account_on_hold: null,
      dietRestrictions: '',
      gluten_free: false,
      vegetarian: false,
      number_of_servings:'0',
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
      menuMeatsHighlighted: false,
      menuVeggieHighlighted: false,
      menuGlutenHighlighted: false,
      menuKidsHighlighted: false,
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
      answer: null,
      totalCalculated: 0
    }
  }

  componentDidMount() {
    this.calculateOrderTotal()
  }
  checkDietRestrictions = () => {
    this.handleFormH()
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
    } else if (this.state.dietRestrictions === 'ciliac') {
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
  // Start Sign Up Functions
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
      [name]: value.toLowerCase()
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

  // End Sign Up Functions
  // Build Functions
  getNumberOfMeals = (event) => {
    this.setState ({
      meals_per_week : event.target.value
    })
  }
  getNumberOfServings = (event) => {
    this.setState ({
      number_of_servings : '0'
    })
    this.setState ({
      number_of_servings : event.target.value
    })
  }

  meatSelected = () => {
    this.setState({ 
      menuMeatsHighlighted: true,
      menuItemSelected: "Meats"
    })
  }
  veggieSelected = () => {
    this.setState({ 
      menuVeggieHighlighted: true,
      menuItemSelected: "Vegetarian",
      vegetarian: true
    })
  }
  glutenSelected = () => {
    this.setState({ 
      menuGlutenHighlighted: true,
      menuItemSelected: "Gluten Free",
      gluten_free: true
    })
  }
  kidsSelected = () => {
    this.setState({ 
      menuKidsHighlighted: true,
      menuItemSelected: "Kid Friendly"
    })
  }
  resetForm = () => {
    this.calculateOrderTotal()
    this.setState({
      totalCalculated: 0,
      menuMeatsHighlighted: false,
      menuVeggieHighlighted: false,
      menuGlutenHighlighted: false,
      menuKidsHighlighted: false,
    })
  }
  calculateOrderTotal = () => {
    const a = Number.parseInt(this.state.meals_per_week)
    const b = Number.parseInt(this.state.number_of_servings)
    const total = ((a*11)*b) + 6 
    this.setState({
      totalCalculated: total
    })
    this.forceUpdate();
  }
  // menuSelected = (event, value) => {
  //   console.log('Selected')
  //   if (event.target.value === '0') {
  //     this.setState({ 
  //       menuMeatsHighlighted: true
  //     })
  //    } else if (event.target.value === '1') {
  //       this.setState({ 
  //         menuVeggieHighlighted: true
  //       })
  //     } else if (event.target.value === '2') {
  //       this.setState({ 
  //         menuGlutenHighlighted: true
  //       })
  //     } else if (event.target.value === '3') {
  //       this.setState({ 
  //         menuKidsHighlighted: true
  //       })
  //   }
  //   this.setState({
  //     menuItemSelected : event.target.value,
  //   })
  // }




  render() {
  return (
    <div className='App'>
      {/* <Progressbar  /> */}
      {/* <Signup
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
      /> */}
      <Buildyourplan
         meatSelected={this.meatSelected}
         veggieSelected={this.veggieSelected}
         glutenSelected={this.glutenSelected}
         kidsSelected={this.kidsSelected}
         menuItemSelected={this.state.menuItemSelected}
         menuSelected={this.menuSelected}
         menuMeatsHighlighted={this.state.menuMeatsHighlighted}
         menuVeggieHighlighted={this.state.menuVeggieHighlighted}
         menuGlutenHighlighted={this.state.menuGlutenHighlighted}
         menuKidsHighlighted={this.state.menuKidsHighlighted}
         meals_per_week={this.state.meals_per_week}
         number_of_servings={this.state.number_of_servings}
         getNumberOfMeals={this.getNumberOfMeals}
         getNumberOfServings={this.getNumberOfServings}
         resetForm={this.resetForm}
         calculateOrderTotal={this.calculateOrderTotal}
         totalCalculated={this.state.totalCalculated} 
       />
      {/* <Shippinginfo /> */}
    </div>
    )
  }
}
export default App
