import React from 'react'
import Select from 'react-select'


const options2 = [
    {value: null, label: 'Select Day'},
    {value: 6, label: 'Saturday'},
    {value: 0, label: 'Sunday'},
    {value: 1, label: 'Monday'}
]
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
                    <input type='text' className='formInputB' onKeyDown={props.handleFormB} name='number_of_servings'  onChange={props.getFormData } /> day(s) a week.
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
            I don’t eat <input type='text' className='formInputB' onKeyDown={props.handleFormE} name='dietRestrictions'  onChange={props.getFormData } />
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
                <div>
                    {props.name}, we’ve selected the following plan - perfect for you/ your family.
                </div>
                <div className='planCard'>
                    <ul>
                        <li>{props.mealPlan.title}</li>
                        <li>{props.number_of_servings}</li>
                        <li>{props.mealPlan.tagline}</li>
                        <li>{props.mealPlan.priceString}</li>
                    </ul>
                        <div className='cardLinks'>
                            <button className='orderButton'>Continue to check-out</button>
                            <a href='./Build' >This plan doesn’t do it for me</a>
                        </div>
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