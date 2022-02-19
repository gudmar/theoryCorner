import { getTheoryDataCss } from './theoryDataCss';
import { getTheoryDataHtml } from './theoryDataHtml';
import { getTheoryDataJs } from './theoryDataJs';
import { getTheoryDataTs } from './theoryDataTs';
import { getTheoryDataReact } from './theoryDataReact';
import { getPracticeComponents } from './practiceComponents';
import { getTheoryDataDesignPatterns } from './theoryDataDesignPatterns';
import { getTheoryDataAngular } from './theoryDataAngular';
import { getTheoryDataJasmine } from './theoryDataJasmine';
import { getTheoryDataScss } from './theoryDataScss';
import { getTheoryDataPython } from './theoryDataPython';

export function getTheoryData(){
    // let allData = [].concat(getTheoryDataCss(), getTheoryDataHtml(), getTheoryDataJs(), getTheoryDataTs())
    let allData = [
        {
            category: 'Css',
            content: getTheoryDataCss()
        },
        {
            category: 'Scss',
            content: getTheoryDataScss()
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
        {
            category: 'DesignPatterns',
            content: getTheoryDataDesignPatterns()
        },
        {
            category: 'Angular',
            content: getTheoryDataAngular()
        },
        {
            category: 'Jasmine',
            content: getTheoryDataJasmine()
        },
        {
            category: 'Python',
            content: getTheoryDataPython()
        }
    ]
    return allData;
}