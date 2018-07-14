import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {input_str: '',
                      window_size: 6,
                      buffer_size: 3,
                      dict: []};

        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
    }

    prefix_exists(search_window, buffer) {
        // helper method to determine if a prefix exists in the search
        // window
        for (var j = 0; j < buffer.length - 1; j++) {
            let to_match = buffer.substring(0, buffer.length - 1 - j);
            console.log("To match: " , to_match);
            if (search_window.includes(to_match)) {
                let offset = search_window.length - search_window.lastIndexOf(to_match);
                let distance = to_match.length;
                if (offset == distance) { // maybe extends into lookahead buffer
                    let rest_of_buffer = buffer.replace(to_match, "");
                    for (var k = 0; k < rest_of_buffer.length; k++) {
                        if (rest_of_buffer.charAt(k) == to_match.charAt(k)) {
                            distance++;
                        }
                    }
                }
                return [offset, distance];
            }
        }
        return false;
    }

    lz() {
        // lz77 algorithm
        let input_str = this.state.input_str;
        let w = this.state.window_size;
        let b = this.state.buffer_size;

        let i = 0;
        while (i < input_str.length) {
            let search_window = input_str.substring(i - w, i);
            let buffer = input_str.substring(i, i + b);

            let offset = 0;
            let distance = 0;
            let next_char = buffer.charAt(0);

            let prefix_info = this.prefix_exists(search_window, buffer);


            if (prefix_info) {
                offset = prefix_info[0];
                distance = prefix_info[1];
                next_char = input_str.charAt(i + distance);
                i = i + distance + 1;
            } else {
                i++;
            }
            // add the table row info to state
            this.setState((prevstate) => {
                // updater function to read up-to-date state
                return {dict: [...prevstate.dict, {
                    "window": search_window,
                    "buffer": buffer,
                    "offset": offset,
                    "distance": distance,
                    "next_char": next_char
                }]};
            });
        }
    }

    handleChange(event) {
        // generalized change handler using 'computer property names'
        // - ES2015 only
        this.setState({[event.target.name]: event.target.value,
                       dict: []}, // clean dict
                      this.lz); // lz is calledback when setState
        // finishes, we are sure to get the
        // correct input fields
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <LZinput window_size={this.state.window_size} buffer_size={this.state.buffer_size} handleChange={this.handleChange}/>
              <LZtable dict_info={this.state.dict}/>
            </div>
        );
    }
}

function LZinput(props) {
    return (
        <div>
          <input type="number" name="window_size" value={props.window_size} onChange={props.handleChange}></input>
          <input type="number" name="buffer_size" value={props.buffer_size} onChange={props.handleChange}></input>
          <input type="text" name="input_str" onChange={props.handleChange}></input>
        </div>
    );
}

function LZtable_row(props) {
    return <p>{props.row_info.window}|{props.row_info.buffer}, {props.row_info.distance}, {props.row_info.offset}, {props.row_info.next_char}</p>;
}

function LZtable(props) {
    const dict_info = props.dict_info;
    const rows = dict_info.map((row_info, index) =>
                               <LZtable_row key={index} row_info={row_info} />
                              );
    return (
        <div>{rows}</div>
    );
}

export default App;
