import React, { Component } from 'react';






class AskForName extends Component {


          state = {

                      account: {
                                  name: ''
                                },
                      errors: {
                        username: "Username Required",
                        touched: false
                      }

          };
          handleChange = e => {



                       const username = e.currentTarget.value;
                       const errors = {...this.state.errors};
                       if(username.trim() === '') {
                        errors['username'] = "Username Required";
                       } else {

                         delete errors['username'];
                       }
                       this.setState({account: {name: username}, errors});

          }

          handleSubmit = e => {
              e.preventDefault();
              const errors = {...this.state.errors};
              console.log(errors['username']);
              if(errors.username)  {


                this.setState({errors :{
                  username: "Username Required",
                  touched: true
                }})
                return;
              }else {


                        this.props.history.replace('/questions');
                                console.log('submited');

                                //call server

              }



          };

            render() {


                        return (


                                    <form className="col-3 position-absolute top-50 start-50 translate-middle" onSubmit={this.handleSubmit}>
                                        <div className="">
                                        <label

                                        htmlFor="username"
                                        className="form-label"
                                        >Please Enter Your Name</label>
                                        <input
                                        autoComplete="off"
                                        autoFocus
                                        value={this.state.account.name}
                                        onChange={this.handleChange}
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        aria-describedby="emailHelp" />

                                        </div>
                                        {this.state.errors.username && this.state.errors.touched &&  <div id="nameHelp" className="form-text">{this.state.errors.username}</div>}
                                        <button type="submit" className="btn btn-primary position-absolute marginButton" >Submit</button>
                                    </form>




                        );


            }



}


export default AskForName;
