import React, { Component } from 'react';

class Checked extends Component {


                              render() {
                                          return (






                                                                        <i
                                                                        onClick={this.props.onClick}
                                                                        style={{cursor: 'pointer'}}
                                                                        className={this.props.checked ? "fa fa-circle" : "fa fa-circle-o"}>
                                                                        </i>




                                          );

                                  }

}

export default Checked;
