import React from 'react';

import { FORMATS } from '../shared/constants';

import './ControlPanel.css';

const ControlPanel = ({ onClick }) => (
    <div id="control-panel">
        <div id="format-actions">
            <button className="format-action" type="button" value={FORMATS.TEXT.b} onClick={onClick}><b>B</b></button>
            <button className="format-action" type="button" value={FORMATS.TEXT.i} onClick={onClick}><i>I</i></button>
            <button className="format-action" type="button" value={FORMATS.TEXT.u} onClick={onClick}><u>U</u></button>
        </div>
    </div>
)

export default ControlPanel;
