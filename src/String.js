import React, { Component } from "react";


class StringCompare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      name1: ''
    };
    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    console.log('Change detected. State updated' + name + ' = ' + value);
  }
  getDifference1 = (a, b) => {
    var i = 0;
    var j = 0;
    var result = "";
    while (j < b.length) {
      if (a.includes(b)) {
        result = "null"
      }
      else if (a[i] != b[j] || i == a.length)
        result += b[j];
      else
        i++;
      j++;
    }
    return result;
  };

  getDifference = (b, a) => {
    var i = 0;
    var j = 0;
    var result = "";
    while (j < b.length) {
      if (a.includes(b)) {
        result = "null"
      }
      else if (a[i] != b[j] || i == a.length)
        result += b[j];
      else
        i++;
      j++;
    }
    return result;
  };


  handleSubmit(event) {
    alert("characters only in first string"+" "+" :"+" "+this.getDifference(this.state.name, this.state.name1) +" "+ 
    " && "+" " + "characters only in second string"+" "+" :"+" "+this.getDifference1(this.state.name, this.state.name1));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label for="nameImput">String</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="String1" />
          </div>
          <div className="form-group">
            <label for="name1Imput">String</label>
            <input name="name1" type="name" value={this.state.name1} onChange={this.handleChange} className="form-control" id="name1Imput" placeholder="String2" />
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default StringCompare;