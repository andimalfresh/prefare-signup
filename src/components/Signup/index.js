import React from 'react'

const options3= [
    {value: 0, label: 'The taste and presentation'},
    {value: 1, label: 'The cost of the meal'},
    {value: 2, label: 'The time it takes to prepare'},
    {value: 3, label: 'How healty the food is'}
]
const options2 = [
    {value: null, label: 'Select Day'},
    {value: 6, label: 'Saturday'},
    {value: 0, label: 'Sunday'},
    {value: 1, label: 'Monday'}
]
// const optionsServings = [
//     {value: 27, label: '2'},
//     {value: 47, label: '4'},
//     {value: 65.75, label: '6'},
//     {value: 85.28, label: '8'},
//     {value: 105.00, label: '10'},
//     {value: 122.88, label: '12'},
//     {value: 143.35, label: '14'},
//     {value: 163.84, label: '16'}
// ]

var options= options2.map((item,i) => {
    return (
        <option key={i} value={item.value}>{item.label}</option>
    )
})

var optionsPrepare= options3.map((item,i) => {
    return (
        <option key={i} value={item.value}>{item.label}</option>
    )
})
// var optionsNumbers= optionsServings.map(item => {
//     return (
//         <option value= {item.value}>{item.label}</option>
//     )
// })


const Signup = (props) => {
    return (
  <div className='Signup'>
        <span className='exerpt'>status bar </span>
    <div className='Me'>
        <div className='exerpt'>
            Tell us about yourself
        </div>
                <div>
                    I’d love fresh and fast, prepped meals
                    <input type='text' className='formInputB' onKeyDown={props.handleFormB} name='meals_per_week'  onChange={props.getFormData } /> day(s) a week.
                </div>
                <div>
                    Myself included, there are 
                    <input type='text' className='formInputB' name='number_of_servings'  onChange={props.getFormData } /> people in my family.
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
        <div style={props.showInputFormD ? {display: 'block'} : { display: 'none' }} className='formD'>
            <div className='optionSelect'>
                <div>
                     When preparing meals this the most important factor:
                </div>
                <div className='optionAlign'>
                    <select className='optionSelect' onChange={props.getQuestionAnswer} >
                                {optionsPrepare}
                    </select>
                </div>
            </div>
         </div>

        <div style={props.showInputFormE ? {display: 'block'} : { display: 'none' }} className='formE'>
            <div>
                When eating I typically avoid<input type='text' className='formInputD' onKeyDown={props.handleFormF} name='dietRestrictions'  onChange={props.getFormData } />.
            </div>
            <div className='exerpt2'>
                (gluten, meat, other - write in)
            </div>

            <div>
                And my kids typically avoid<input type='text' className='formInputD' onKeyDown={props.handleFormF} name='dietRestrictions'  onChange={props.getFormData } />.
            </div>
            <div className='exerpt2'>
                (if no children - leave blank)
            </div>
        </div>

        <div style={props.showInputFormF ? {display: 'block'} : { display: 'none' }} className='formF'>
            <div className='optionSelect'>
                <div>
                     I prefer to get my freshly prepped meals on
                </div>
                <div className='optionAlign'>
                    <div className='optionContain'>
                        <select className='optionSelect' onChange={props.getDeliveryDay} >
                            {options}
                        </select>
                    </div>
                </div>
            </div>
         </div>
     </div>
    <div style={props.showInputFormG ? {display: 'block'} : { display: 'none' }} className='formG'>
        <button className='signUpButton' onClick={props.checkDietRestrictions}>Lets choose your food</button>
    </div>
               
    <div style={props.showInputFormH ? {display: 'block'} : { display: 'none' }} className='formH'>
        <svg className='Wave-crest' viewBox='0 0 100 100' preserveAspectRatio='none' version='1.1' style={{height: '80px'}}>
                <path d='M100 100 H0 V100 H0 V50 C 33.3333 100, 66.6666 0, 100 50'></path>
            </svg>
        
            <div className='Plan'>
                <div className="planTitle">
                    {props.name}, we’ve selected the following plan - perfect for you / your family.
                </div>
                <div className='planCard'>
                    <ul>
                        <li><h2>{props.mealPlan[props.x].title}</h2></li>
                        <li className="planTagline">{props.mealPlan[props.x].tagline}</li>
                        <li>{props.meals_per_week} meals for {props.number_of_servings} people.</li>
                        <li>About ${props.number_of_servings * props.meals_per_week * 12}{props.mealPlan[props.x].priceString}</li>
                        <li><span className='exerpt'>Select your scratch prepared meals after check-out!</span></li>
                        <li><button className='orderButton'>Continue to check-out</button></li>
                        <li><a href='/Build' className='exerpt' >This plan doesn’t do it for me</a></li>
        
                    </ul>
                </div>
                    
            </div>
    </div>     
        </div> 
    </div>
    )
}
export default Signup 