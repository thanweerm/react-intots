import React,{ useState}  from "react";
import axios from "axios";

function Register() {

    
        const [input,setInput] = useState({
            name:"",
            phoneNumber:"",
            email:"",

        });

        function handleChange(event ){
            const {name,value}=event.target;
            
            
            
            setInput(prevInput =>{
                return {
                    ...prevInput,
                    [name]:value
                }
            })
        }
    function handleClick(event){
        event.preventDefault();
        const newInput={
            name:input.name,
            phoneNumber:input.phoneNumber,
            email:input.email
        }
        
        axios.post("http://localhost:3001/create",newInput)
    }


    

   
   
    return (

        <div>
            <div class="consultationSection">
                <h5>CREATE YOUR<br/>Account </h5>
                
                <div class="row">
                    <div class="col-md-4 form">
                      
                            <form >
                                <label class="textbox" for="name">Name<br/>
                            <input class="textbox" type="text" 
                            placeholder="Enter Your Name"
                                name="name"
                                 value={input.name}
                                onChange={handleChange}
                            />
                        </label>
                       
                        <label class="textbox" for="number">Phone Number<br/>
                            <input class="textbox" type="text" 
                            placeholder="Enter Your Phone Number"
                                name="phoneNumber"
                                 value={input.phoneNumber}
                                onChange={handleChange}
                            />
                        </label>
                        <label class="textbox" for="email">Email<br/>
                            <input class="textbox" type="email" 
                            placeholder="Enter Your Email"
                                name="email"
                                 value={input.email}
                                onChange={handleChange}
                            />
                        </label>

                            <button onClick={handleClick} type="submit" class="sendbutton "  >
                                Register
                            </button>
                            </form>

                        </div>
                            <div class="formImg col-md-4">
                                <img src="images/form-img.png" alt="form-img" />
                            </div>
                    
                </div>

            </div>
         </div>   

            )
};
            export default Register;