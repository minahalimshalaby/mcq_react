
import React, { Component, Fragment } from 'react';


class Score extends Component {


                  state = {

                    score: 0
                  }


                  calculUserScore = () => {


                                const questions = JSON.parse(localStorage.getItem('questionsAfterUserAnswered')) || [];

                                let userScore = 0;

                                questions.map(question => {

                                    userScore += question['score'];




                                })

                                return userScore;



                  }




                  componentDidMount ( ) {

                    const score = this.calculUserScore();
                    this.setState({score});


                  }



                  render() {



                            return (
                              <Fragment>
                              <div className="col-3 position-absolute top-50 start-50 translate-middle">
                                    <h2>Congratulation</h2>

                                    <h1 class="primary">
                                      You Score is  <span class={(this.calculUserScore() > 5 )? "badge bg-success" : "badge bg-danger"}>{this.calculUserScore()}</span>
                                    </h1>
                              </div>
                              </Fragment>

                            );

                    }



}

export default Score;
