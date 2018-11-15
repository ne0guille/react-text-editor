import { contains, isEmpty } from 'ramda';

import {FORMATS} from './constants';

export const formatWord = (word = {}, newStyle = '') => {
    if(isEmpty(word)) return ''; 

   const hasFormat = findStyle(word.style, newStyle);
   const { text, style: wordStyle = [] } = word;
    debugger;
    const updatedFormat = hasFormat ? word.style.filter(e => e !== newStyle) : [ ...wordStyle, newStyle ];
    return {
        ...word,
        style: updatedFormat
    }
}

export const getSelection = event => 
document.getSelection ? document.getSelection().toString() :  document.selection.createRange().toString() ;

const findStyle = (currentStyle = [], newStyle = '') => {
    if(!currentStyle.length) return false;

    return contains(newStyle, currentStyle)
}

// todo implement
export const getFormat = selection => FORMATS.TEXT['b'];