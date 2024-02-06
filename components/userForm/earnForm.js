import classes from './earnForm.module.css'
import { useRef , useState} from 'react'
import data from '@/pages/api/data/countryData'
// useState
function EarnForm(){
    console.log(data)
    const[emailError,setEmailError] = useState('')
    const[passwordError,setPasswordError] = useState('')
    const[show,setshow] = useState()
    const[cCode, setCcode] = useState()
    // const[showCity,setShowCity]= useState()
    // understand show password 

    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const password2InputRef = useRef()
    const cityInputRef = useRef()
    const CountryInputRef = useRef()
    const phoneInputRef = useRef()
    const codeInputRef = useRef()
//////////////////////////////////////////////////////////

    function showFnc(){
      setshow(!show)
    }
///////////////////////////////////////////////////////////
    function countryFn(e){
      const foundCountry = data.find((el)=>{
        return el.country === e.target.value
      })

      setCcode(foundCountry.code)
    }

    let nCode = `+${cCode}`
//////////////////////////////////////////////////////////
    function submitHandler(Key){
        Key.preventDefault()
        console.log('I DEY WORK')

        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value
        const enteredPassword2 = password2InputRef.current.value
        const enteredCities = cityInputRef.current.value
        const enteredCountry = CountryInputRef.current.value
        const enteredPhone = phoneInputRef.current.value
        const enteredCode = codeInputRef.current.value

        let userPh 

        if (enteredPhone[0]==0){
          userPh = enteredPhone.slice(1,1000)
        }else{
          userPh = enteredPhone
        }
      
        const userPhone = `${enteredCode}${userPh}` 


        console.log({enteredEmail,enteredPassword,enteredPassword2,enteredCities,enteredCountry,userPhone})
        if (enteredEmail.length < 10) {
            setEmailError(<p className={classes.incorrect}>EMAIL TOO SHORT</p>);
          } else {
            setEmailError(<p className={classes.correct}>EMAIL CORRECT</p>);
          }
          
          if (enteredPassword.length <= 8 || enteredPassword2.length <= 8) {
            setPasswordError(<p className={classes.incorrect}>PASSWORD LENGTH MUST BE MORE THAN 8👀</p>);
          } else if (enteredPassword !== enteredPassword2) {
            setPasswordError(<p className={classes.incorrect}>PASSWORD DON'T MATCH 👀</p>);
          } else {
            setPasswordError(<p className={classes.correct}>PASSWORD MATCH</p>);
          }          
        

    }

    return(
        <div className={classes.display}>
          <div className={classes.ddd}>
          <span className={classes.tag}>SIGN UP</span>
          </div>
            <div>
                <form style={{display:'block'}} onSubmit={submitHandler} className={classes.form}>
                    <label htmlFor='Emails'className={classes.aaa}>Email✉</label>
                    <div className={classes.inputDiv}>
                     <input type='email'className={classes.bbb} id='Emails'ref={emailInputRef}>
    
                    </input>
                    </div>
                    {emailError}
                    <label htmlFor='Passwords'className={classes.aaa}>Password🔑</label>
                    <div className={classes.inputDiv}>
                     <input type={show?"password":"text" } className={classes.bbb} id='Passwords'ref={passwordInputRef}>

                    </input>
                    </div>
                    {passwordError}
                    <button className={classes.show} onClick={showFnc}>{show?'show':'Hide'}</button><br/>
                    <label htmlFor='Passwords'className={classes.aaa}>Confirm password</label>
                    <div className={classes.inputDiv}>
                     <input type='password'className={classes.bbb} id='Passwords'ref={password2InputRef}>

                    </input>
                    </div>
                    {passwordError}
                    <label htmlFor='Cities'className={classes.aaa}>City🏙</label>
                    <div className={classes.inputDiv}>
                     <input type='text'className={classes.bbb} id='Cities'ref={cityInputRef}>

                    </input>
                    </div>

                    <div>
                      <label htmlFor='Country'>Country'</label>

                      <div>
                        <select
                            required onChange={countryFn}
                            name='Country'
                            id='Country' 
                            ref={CountryInputRef}
                        
                        >
                          <option>
                            --select Country--
                          </option>

                          {data.map((el,i)=>{
                            return <option key={i}>{el.country}</option>
                          })}
                        </select>

                      </div>
                      <div>
                      <label htmlFor='Code'className={classes.aaa}>Code</label>
                    <input type='text'className={classes.Code} id='Code'ref={codeInputRef} value={nCode} readOnly>

                    </input>
                    <label htmlFor='Phone'className={classes.aaa}>Phone</label>
                    <input type='text'className={classes.ddd} id='Phone'ref={phoneInputRef}>

                    </input>
                      </div>
                    </div>
                    <input type='Submit' className={classes.submit}></input>
                </form>
            </div>
        </div>
    )
}

export default EarnForm
