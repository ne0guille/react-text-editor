import React, {Component} from 'react';
import './App.css';

import Editor from './editor/Editor';
import getMockText from './text.service';

class App extends Component {
    state = {
        text: ''
    };

    getText() {
        return getMockText().then(result => result);
    }

    componentDidMount(){
        this.getText().then(text => this.setState({ text }))
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                   <Editor text={this.state.text} />
                </main>
            </div>
        );
    }
}

export default App;
