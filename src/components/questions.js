import React, { Component, Fragment} from 'react';

import { getQuestions } from '../services/fakeQuestionService';


import Checked from './checked';





const questionIndex = (numberOfItems = 10) => {



              const arrayIndex = [];
              while (arrayIndex.length < numberOfItems) {
                //get random number
                let index = Math.floor((Math.random() * numberOfItems ));
                if (arrayIndex.indexOf(index) === -1) {
                  arrayIndex.push(index);
                }

              }


              return arrayIndex;



}


class Questions extends Component {









          state = {

                    questions: getQuestions(),
                    questionIndex: questionIndex(),
                    index: 0,
                    ckecked: false,


          };

          //
          // generateIndex = (numberOfItems) => {
          //
          //
          //   const arrayIndex = [];
          //   while (arrayIndex.length < numberOfItems) {
          //     //get random number
          //     let index = Math.floor((Math.random() * numberOfItems ));
          //     if (arrayIndex.indexOf(index) === -1) {
          //       arrayIndex.push(index);
          //     }
          //
          //   }
          //
          //
          //   this.setState({questionIndex: arrayIndex});
          //
          // }
          //

          componentDidMount () {

                //
                // this.generateIndex(10);
                // this.state.questions[v]


          }

            componentWillUnmount() {



                                    console.log('Score Screen now ');
                                    console.log(this.state.questions);

                                    localStorage.setItem("questionsAfterUserAnswered", JSON.stringify(this.state.questions));


          }

          handleNextClick = i => {


              if(i ===  9) this.props.history.replace('/score');

              const newIndex = i + 1;

              this.setState({index: newIndex});


          }


          handleAnswer = (answer) => {

            console.log("checked clicked");
            console.log(answer);

              const questions = [...this.state.questions];
              const currentQuestionIndex = questions.indexOf(questions[this.state.questionIndex[this.state.index]]);
              console.log('###################', currentQuestionIndex);
              console.log("$$$$$$$$$$$$$$$", questions);


              questions[currentQuestionIndex]['answers'].map(a => {

                    if ( a._id === answer._id) {
                      answer.checked = true;


                      //update score
                      if(a['correctAnswer']) {

                            questions[currentQuestionIndex]['score'] = 1;

                      } else {

                        questions[currentQuestionIndex]['score'] = 0;

                      }


                    }
                    if (a._id !== answer._id) {

                         if(a['checked']) delete a['checked'];

                    }

                    return null;

              });


              // let useranswer = questions[currentQuestionIndex]['answers'].find(a => a._id === answer._id);
              // useranswer.checked = true;




              this.setState({questions});
             // const choosedAnswer =  _.get(questions[this.state.questionIndex[this.state.index]], answers._id);
             // console.log(choosedAnswer);

               // const { questions,  questionIndex, index } = this.state;
               //
               //  const selectedAnswer =   questions[questionIndex[index]]['answers'].filter(a => a._id === id);
               //
               //  console.log(selectedAnswer);
               //
               //  selectedAnswer['checked'] = true;


                //
                // console.log(answers);

                // console.log('111111111111111111111111', id);
                //
                // this.setState({ckecked: selectedAnswer['checked']});




          }

            render() {


              // this.generateIndex(10);



                  const { questions, questionIndex, index } = this.state;

                  console.log('@@@@@@@@@@@@@@@@@@@', questionIndex);
                  console.log('3333333333333333', questions[questionIndex[index]]);

                  const currentQuestion = questions[questionIndex[index]];

              //     console.log(_.map(questions, 'title'));
              // console.log(this.state.questions);
              // let test =_(questions)
              //             .chain()
              //             .head()
              //
              //             .value();
              // console.log(test);
              // console.log(_.values(test));

              // console.log(questionIndex);
                        return (




                                    <Fragment>


                                    {currentQuestion &&  <div>

                                      <h2 className="question">{currentQuestion['title']}</h2>


                                      <ul type="a" style={{listStyle: 'none'}}>

                                                                        { currentQuestion['answers'].map(answer => <li>
                                                                            <div class="form-check">
                                                                                <Checked
                                                                                checked={answer.checked}
                                                                                onClick={() => this.handleAnswer(answer)}
                                                                                />
                                                                              <label class="form-check-label m-2" for="radioButton">
                                                                              {answer.text}
                                                                              </label>
                                                                            </div>
                                                                            </li>


                                                                          )}

                                                                        </ul>
                                                                    </div>

                                    }


                                        <button type="button" class="btn btn-success" onClick={() => this.handleNextClick(index)}>Next</button>
                                      </Fragment>
































//                                 <Fragment>
//
//                                 {questions.map(question => (<div>
//                                   <h2 className="question">{question.title}</h2>
//                                   <ul type="a" style={{listStyle: 'none'}}>
//
//                                   {
//                                     question.answers.map(answer => <li>
//                                       <div class="form-check">
//                                         <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
//                                         <label class="form-check-label" for="flexRadioDefault1">
//                                         {answer.text}
//                                         </label>
//                                       </div>
//                                       </li>
// )
//
//                                   }
//
//                                   </ul>
//                                 </div>
//                               ))}
//
//                                     <button type="button" class="btn btn-success">Next</button>
//                                   </Fragment>
//


                        );


            }



}


export default Questions;
