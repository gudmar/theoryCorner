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
                    elementType: 'UnsignedList',
                    content: [
                        `<code>grid-line</code> is between grid columns or between grid rows. Lines are palces where
                        gaps are places,`,
                        `<code>grid-track</code> are where elements are placed. These are the columns and rows of the 
                        grids.`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <style>
                        .trackExample-grid-parent{
                            display:grid;
                            width: 350px;
                            background-color:gray;
                            color: black;
                            border-radius: 7px;
                            grid-template-columns: 1.4rem 1fr 1.4rem 1fr 1.4rem;
                            grid-template-rows: 1.4rem 1fr 1.4rem 1fr 1.4rem;
                            font-family:arial;
                            
                        }
                        .trackExample-grid-line-column{
                            width: 1.4rem;
                            writing-mode: vertical-rl;
                            text-align:center;
                            text-orientation: mixed;
                            transform:rotate(180deg);
                            line-height: 1.4rem;
                            color:white;
                            background-color:black;
                            opacity:0.5;
                        }
                        .trackExample-grid-child{
                            background-color: white;
                            border-radius: 7px;
                            color:black;
                            position: relative;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            font-size: 1.5rem;
                            height: 100%
                            margin:3px;
                        }
                        .trackExample-grid-line-row{
                            height: 1.4rem;
                            color:white;
                            line-height: 1.4rem;
                            text-align: center;
                            background-color:black;
                            opacity:0.5;
                        }
                        .trackExample-grid-line-row-space{
                            background-color:black;
                            opacity:0.5;
                        }
                    </style>
                    <div class="trackExample-grid-parent">
                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">Line-1-row</div>
                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">Line-1-row</div>
                        <div class="trackExample-grid-line-row-space"></div>

                        <div class="trackExample-grid-line-column">Line-1</div>
                        <div class="trackExample-grid-child">Grid track</div>
                        <div class="trackExample-grid-line-column">Line-2</div>
                        <div class="trackExample-grid-child">Grid track</div>
                        <div class="trackExample-grid-line-column">Line-3</div>

                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">Line-2</div>
                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">Line-2</div>
                        <div class="trackExample-grid-line-row-space"></div>

                        <div class="trackExample-grid-line-column">Line-1</div>
                        <div class="trackExample-grid-child">Grid track</div>
                        <div class="trackExample-grid-line-column">Line-2</div>
                        <div class="trackExample-grid-child">Grid track</div>
                        <div class="trackExample-grid-line-column">Line-3</div>

                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">Line-3</div>
                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">Line-3</div>
                        <div class="trackExample-grid-line-row-space"></div>

                    </div>
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
                {
                    elementType:'Link',
                    content:'gridbyexample',
                    href: 'https://gridbyexample.com/',
                    description:'Good grid examples'
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