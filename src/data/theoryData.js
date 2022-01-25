import { getTheoryDataCss } from './theoryDataCss';
import { getTheoryDataHtml } from './theoryDataHtml';
import { getTheoryDataJs } from './theoryDataJs';
import { getTheoryDataTs } from './theoryDataTs';
import { getTheoryDataReact } from './theoryDataReact';
import { getPracticeComponents } from './practiceComponents';

export function getTheoryData(){
    // let allData = [].concat(getTheoryDataCss(), getTheoryDataHtml(), getTheoryDataJs(), getTheoryDataTs())
    let allData = [
        {
            category: 'Css',
            content: getTheoryDataCss()
        },
        {
            category: 'Html',
            content: getTheoryDataHtml()
        },
        {
            category: 'Js',
            content: getTheoryDataJs()
        },
        {
            category: 'Ts',
            content: getTheoryDataTs()
        },
        {
            category: 'React',
            content: getTheoryDataReact()
        },
        {
            category: 'Practice',
            content: getPracticeComponents()
        },
    ]
    return allData;
}