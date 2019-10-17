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
            <div className={styles.exerpt}>
                Tell us about yourself
            </div>
            <div>
                I’d love easy, fresh, delicious, local, fast, prepped meals
                <input type="text" className={styles.formInputB} onKeyDown={props.handleFormB} name="number_of_servings"  onChange={props.getFormData } /> day(s) a week.
            </div>

            <div style={props.showInputFormB ? {display: 'block'} : { display: 'none' }} className={styles.formB}>
                My first name is
                <input type="text" className={styles.formInput} onKeyDown={props.handleFormC} name="name"  onChange={props.getFormData } />
            </div> 

            <div style={props.showInputFormC ? {display: 'block'} : { display: 'none' }} className={styles.formD}>
                <div>
                and my email is <input type="text" className={styles.formInput} onKeyDown={props.handleFormD} name="email"  onChange={props.getFormData }/>
                </div>
                <div>
                (you can use your email to access your account & recommendations)
                </div>
            </div>
        </div>
   <div className={styles.Preferences} style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}>
                <h2 style={props.showInputFormC ? {display: 'block'} : { display: 'none' }} className={styles.formC}>
                    My Preferences
                </h2>
                <div className={styles.exerpt} style={props.showInputFormC ? {display: 'block'} : { display: 'none' }}>
                    Let’s learn more about what foods you and your family like and the best time to deliver.
                </div>
                <div>
                    I don’t eat <input type="text" className={styles.formInputB} onKeyDown={props.handleFormB} name="number_of_servings"  onChange={props.getFormData } />
                </div>
                <div className={styles.exerpt2} style={props.showInputFormC ? {display: 'block'} : { display: 'none' }} className={styles.formC}>
                    (gluten, meat, other - write in)
                </div>
                <div style={props.showInputFormC ? {display: 'block'} : { display: 'none' }} className={styles.formC}>
                    <div className={styles.optionSelect}>
                        I prefer to get my freshly pre-prepped meals on&nbsp;                
                        <Select classNamePrefix={styles.optionSelect} options={options2} />
                    </div>
                <button style={props.showInputFormD ? {display: 'block'} : { display: 'none' }} className={styles.signUpButton} onClick={props.formSubmission}>
                    SIGN ME UP
                </button>
            </div>
 
            

              <div>What looks best to you?</div>

              Images of diverse food selection w/ option to swipe right/left or select boxes in grid
    </div>



        <div className={styles.Plan}>
             <h2>Recommended Plan</h2>

            <div>Name, we’ve selected the following plan - perfect for you/ your family.</div>

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