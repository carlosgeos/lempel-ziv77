import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import LZtable from './LZtable';
import LZinput from './LZinput';
import logo from './logo.svg';
import 'typeface-roboto';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {input_str: '',
                      window_size: 6,
                      buffer_size: 4,
                      dict: []};

        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
    }

    prefix_exists(search_window, buffer) {
        // helper method to determine if a prefix exists in the search
        // window
        for (var j = 0; j < buffer.length; j++) {
            let to_match = buffer.substring(0, buffer.length - j);
            if (search_window.includes(to_match)) {
                let offset = search_window.length - search_window.lastIndexOf(to_match);
                let distance = to_match.length;
                if (offset === distance) { // maybe extends into lookahead buffer
                    let rest_of_buffer = buffer.substring(buffer.length - j, buffer.length);
                    let k = 0;
                    while((rest_of_buffer.charAt(k) === to_match.charAt(k)) &&
                          k < rest_of_buffer.length) {
                        distance++;
                        k++;
                    }
                }
                return [offset, distance];
            }
        }
        return false;
    }

    lz() {
        // lz77 algorithm
        const input_str = this.state.input_str;
        const w = parseInt(this.state.window_size, 10);
        const b = parseInt(this.state.buffer_size, 10);

        let i = 0;
        while (i < input_str.length) {
            const search_window = input_str.substring(i - w, i);
            const buffer = input_str.substring(i, i + b);
            let offset = 0;
            let distance = 0;
            let next_char = buffer.charAt(0);

            const prefix_info = this.prefix_exists(search_window, buffer);


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
            <div style={{maxWidth: 1200, padding: 50}} className="App">
              <CssBaseline />
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="display1">LZ77 compression algorithm</Typography>
              </header>

              <LZinput window_size={this.state.window_size} buffer_size={this.state.buffer_size} handleChange={this.handleChange}/>
              <LZtable dict_info={this.state.dict}/>
            </div>
        );
    }
}


export default App;
