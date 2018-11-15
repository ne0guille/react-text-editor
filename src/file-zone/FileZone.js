import React, { Component } from 'react';
import _ from 'lodash';

import { formatWord, getSelection } from '../shared/textUtils';

import './FileZone.css';

class FileZone extends Component {

    constructor(props){
        super(props);

        this.state = {
            formattedText: props.text,
            selection: '',
        };

        this.debouncedUpdateSelection = _.debounce(this.updateSelection, 500);
    }
    
    componentDidMount(){
        document.addEventListener("selectionchange", this.debouncedUpdateSelection);
    }

    componentWillUnmount(){
        document.removeEventListener("selectionchange", this.debouncedUpdateSelection);
    }

    componentDidUpdate(prevProps){
        if(prevProps.text !== this.props.text)
        this.setState({ formattedText: this.props.text})
    }

    updateSelection = evt => {
        const selection = getSelection();
        
        this.setState({ selection, formattedText: `ASDASD` });
    }

    render(){
        const { formattedText } = this.state;

        return (
            <div id="file-zone">
            <div id="file">
                {this.props.render({formattedText})}
            </div>
        </div>
        )
    };  
}

export default FileZone;
