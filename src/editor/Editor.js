import React, { Component, Fragment } from 'react';

import ControlPanel from "../control-panel/ControlPanel";
import FileZone from "../file-zone/FileZone";
import { Text } from '../components/Text';

class Editor extends Component {
    state = {
        format: ''
    };
    
    handleAction = (evt) => {
        const format = evt.currentTarget.value;
        this.setState({ format });
    }

    render() {
        return (
            <Fragment>
                    <ControlPanel onClick={this.handleAction}/>
                    <FileZone text={this.props.text} render={({formattedText}) => (
                      <Text format={this.state.format}>
                        {formattedText}
                      </Text>
                    )}
                    />
            </Fragment>
        );
    }
}

export default Editor;
