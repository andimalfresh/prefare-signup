import React from 'react'
import styles from './Signup.module.scss'
import Select from 'react-select'


const options2 = [
    {value: 'Saturday', label: 'Saturday'},
    {value: 'Sunday', label: 'Sunday'},
    {value: 'Monday', label: 'Monday'}
]

const Signup = (props) => {
    return (
  <div className={styles.Signup}>
        {/* status bar */}
        <div className={styles.Me}>
            <h2>Me</h2>
            <span className={styles.exerpt}>Tell us about yourself</span>
            <p>I’d love easy, fresh, delicious, local, fast, prepped meals <input type="text" className={styles.formInputB} onKeyDown={props.handleFormB} name="number_of_servings"  onChange={props.getFormData } /> day(s) a week.</p>

            <p>My first name is <input type="text" className={styles.formInput} onKeyDown={props.handleFormB} name="name"  onChange={props.getFormData } /></p> 

            <p>and my email is <input type="text" className={styles.formInput} onKeyDown={props.handleFormB} name="email"  onChange={props.getFormData }/></p>
            <span className={styles.exerpt2}>(you can use your email to access your account & recommendations)</span>
        </div>

   <div className={styles.Preferences}>
            <h2>My Preferences</h2>
            Let’s learn more about what foods you and your family like and the best time to deliver.
            <p>I don’t eat <input type="text" className={styles.formInput} onKeyDown={props.handleFormB} name="number_of_servings"  onChange={props.getFormData } /> 
                gluten, meat, other - write in
            </p> 

            <p><div className={styles.optionSelect}>
                I prefer to get my freshly pre-prepped meals on&nbsp;                
                    <Select options={options2} />
                </div>
                
            </p>
 
            

              <p>What looks best to you?</p>

              Images of diverse food selection w/ option to swipe right/left or select boxes in grid
    </div>



        <div className={styles.Plan}>
             <h2>Recommended Plan</h2>

            <p>Name, we’ve selected the following plan - perfect for you/ your family.</p>

             recommended plan 
       </div>
        
       <div className={styles.Build}>
           <h2>Build your plan</h2>
           <div>
               <div> 
                   1.Choose your preference
               </div>
               <div>
                   2.Review your order
               </div>
               SELECT THIS PLAN
           </div>
       </div>
    </div> 

    )
}
export default Signup 