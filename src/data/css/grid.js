import elementGenerator from '../../services/elementGenerator'
import getGridTemplateColumnContent from './gridFiles/gridTemplateColumn'
import getGridTemplateRowContent from './gridFiles/gridTemplateRow'

let data =     {
    summary: 'Grid',
    title: 'Grid',
    searchKeywords:`

    `,
    cathegory: 'css',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Grid'
                },

                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'template-columns', title: 'grid-template-columns'},
                        {id: 'template-rows', title: 'grid-template-rows'},
                        {id: 'template-areas', title: 'grid-template-areas'},
                        {id: 'template', title: 'grid-template'},
                        {id: 'await', title: 'Async with <code>await</code>'},
                    ]
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'<span="template-columns">grid-template-columns</span>'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>grid-auto-columns</code>`,
                        `<code>grid-column-start</code>`,
                        `<code>grid-column-end</code>`,
                        `<code>gap</code>`,`<code>column-gap</code>`,
                        `<code>span</code>`,`Line names`
                    ]
                    
                },

                {...getGridTemplateColumnContent()},


                {
                    elementType:'Headline-3',
                    content:'<span="template-rows">grid-template-rows</span>'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>grid-auto-rows</code>`,
                        `<code>grid-row-start</code>`,
                        `<code>grid-row-end</code>`,
                        `<code>gap</code>`,`<code>row-gap</code>`,
                        `<code>span</code>`,`Line names`
                    ]
                    
                },

                {...getGridTemplateRowContent()},

            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:''
                },
                {
                    elementType:'Paragraph',
                    content:`

                    `
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'References'
                },
                {
                    elementType:'Link',
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout',
                    description:'Index of elements'
                },
            ]
        }
    ]
};

export default function getGridData(){
    // eGenerator.addTask(id, nrOfElem, classes)
    // eGeneraotr.removeTask(id)
    // eGenerator.addEListener
    return data;
}