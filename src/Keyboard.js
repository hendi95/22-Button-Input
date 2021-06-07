import React, {Component} from "react";
import "./Keyboard.css"; 
import "./App.css";

class Keyboard extends Component {
	render() {
		return (
		<div>
			<h1 className="header">Enter Number</h1>
			<input type="text" className="inputArea" placeholder="Enter Numbers" value={this.props.textInputBox} ></input>
			<div className="btn-group">
				<button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
				<button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
				<button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
				<button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
				<button name="Del" onClick={e => this.props.onClick(e.target.name)}>Del</button>
				<button name="Back" onClick={e => this.props.onClick(e.target.name)}>Back</button>
			</div>
		</div>
		)  
	};
};

export default Keyboard;
