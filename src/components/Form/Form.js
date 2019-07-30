import React, { Component } from "react";
import { connect } from "react-redux";
import { changeModo, changeData } from '../../redux/actions';


function mapDispatchToProps(dispatch) {
  return {
    changeModo: modo => dispatch(changeModo()),
    changeData: data => dispatch(changeData(data))
    
  };
}


class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      num: 5
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const num= this.state.num;
    this.props.changeModo();
    this.props.changeData(num)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>

      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;