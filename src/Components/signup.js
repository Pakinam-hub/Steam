import React from "react";
import "../Style/login.css";

const Signup = () => {

    return (
        <body>
            <div className="cover signup" >
                <section className="glass">
                    <center>
                        <h1>Registeration Form</h1>
                    </center>
                    <div className="form">
                        <form>
                            <label>Name</label>
                            <input type="text" placeholder="name" required />

                            <label>USERNAME</label>
                            <input type="text" placeholder="username" required/>

                            <label>PASSWORD</label>
                            <input type="password" placeholder="password" required />

                            <label>PHONE</label>
                            <input type="text" placeholder="phone" required/>

                            <label>EMAIL</label>
                            <input type="email" placeholder="email" required/>
                            <center>
                            <button>Create Account</button>
                            </center>

                        </form>




                    </div>
                </section>

            </div>
        </body>


    )
};

export default Signup;