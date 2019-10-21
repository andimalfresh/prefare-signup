import React from 'react'
import Select from 'react-select'


const options2 = [
    {value: null, label: 'Select Day'},
    {value: 6, label: 'Saturday'},
    {value: 0, label: 'Sunday'},
    {value: 1, label: 'Monday'}
]
const optionsServings = [
    {value: 27, label: '2'},
    {value: 47, label: '4'},
    {value: 65.75, label: '6'},
    {value: 85.28, label: '8'},
    {value: 105.00, label: '10'},
    {value: 122.88, label: '12'},
    {value: 143.35, label: '14'},
    {value: 163.84, label: '16'}
]
const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted grey',
      color: state.isSelected ? 'red' : 'blue',
      padding: 2,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 75,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

const Signup = (props) => {
    return (
  <div className='Signup'>
        status bar
    <div className='Me'>
        <div className='exerpt'>
            Tell us about yourself
        </div>
                <div>
                    I’d love easy, fresh, delicious, local, fast, prepped meals
                    <input type='text' className='formInputB' onKeyDown={props.handleFormB} name='meals_per_week'  onChange={props.getFormData } /> day(s) a week.
                </div>

                <div style={props.showInputFormB ? {display: 'block'} : { display: 'none' }} className='formB'>
                    My first name is
                    <input type='text' className='formInput' onKeyDown={props.handleFormC} name='name'  onChange={props.getFormData } />
                </div> 

                <div style={props.showInputFormC ? {display: 'block'} : { display: 'none' }} className='formD'>
                    <div>
                        And my email is 
                        <input type='text' className='formInput' onKeyDown={props.handleFormD} name='email'  onChange={props.getFormData }/>.
                    </div>
                    <div className='exerpt2'>
                        (you can use your email to access your account & recommendations)
                    </div>
                </div>    
   <div className='Pref' style={props.showInputFormD ? {display: 'flex'} : { display: 'none' }}>
        <div className='exerpt' style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}>
            Let’s learn more about what foods you and your family like and the best time to deliver.
        </div>
        <div>
            I don’t eat <input type='text' className='formInputB' onKeyDown={props.handleFormE} name='dietRestrictions'  onChange={props.getFormData } />.
        </div>
        <div className='exerpt2'>
            (gluten, meat, other - write in)
        </div>
        <div style={props.showInputFormE ? {display: 'block'} : { display: 'none' }} className='formE'>
            <div className='optionSelect'>
                <div>
                     I prefer to get my freshly pre-prepped meals on
                </div>
                <div className='optionAlign'>
                    <div className='optionContain'>
                        <Select className='optionSelect' onChange={props.handleFormF} options={options2} />
                    </div>
                </div>
            </div>
         </div>
     </div>
    <div style={props.showInputFormE ? {display: 'block'} : { display: 'none' }} className='formE'>
            {/* What looks best to you? */}
            {/* Images of diverse food selection w/ option to swipe right/left or select boxes in grid */}
            <button className='signUpButton' onClick={props.checkDietRestrictions}>Lets choose your food</button>
    </div>
               
    <div style={props.showInputFormG ? {display: 'block'} : { display: 'none' }} className='formG'>
        <svg className='Wave-crest' viewBox='0 0 100 100' preserveAspectRatio='none' version='1.1' style={{height: '80px'}}>
                <path d='M100 100 H0 V100 H0 V50 C 33.3333 100, 66.6666 0, 100 50'></path>
            </svg>
        
            <div className='Plan'>
                <div className="planTitle">
                    {props.name}, we’ve selected the following plan - perfect for you/ your family.
                </div>
                <div className='planCard'>
                    <ul>
                        <li><h2>{props.mealPlan[props.x].title}</h2></li>
                        <li className="planTagline">{props.mealPlan[props.x].tagline}</li>
                        <li>{props.meals_per_week} meals for </li>
                        <li><div className="selectRow"><Select className='optionSelect2' onChange={null} options={optionsServings} styles={customStyles} /> people.</div></li>
                        <li>{props.mealPlan[props.x].priceString}</li>
                        <li><button className='orderButton'>Continue to check-out</button></li>
                        <li><a href='./Build' className='exerpt' >This plan doesn’t do it for me</a></li>
                    </ul>
                </div>
                    <span className='exerpt'>Select your scratch prepared meals after check-out!</span>
            </div>
    </div>
   {/* <div className='Build'>
       <div>Build your plan</div>
        <div>
                <div> 
                    1.Choose your preference
                </div>
                <div>
                    2.Review your order
                </div>
                SELECT THIS PLAN
            </div>
        </div> */}
        
        
        
        </div> 
    </div>
    )
}
export default Signup 