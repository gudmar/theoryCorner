import elementGenerator from '../../services/elementGenerator'
import getGridTemplateColumnContent from './gridFiles/gridTemplateColumn'
import getGridTemplateRowContent from './gridFiles/gridTemplateRow'
import getGridTemplateRowColumnContent from './gridFiles/girdTemplateRowAndColumn'
import getGridTemplateAreaContent from './gridFiles/gridTemplateArea'
import getGridTemplateContent from './gridFiles/gridTemplate'
import getGridPlaceContent from './gridFiles/gridPlace'

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
                        {id: 'template-rows-columns', title: 'grid-template-rows with grid-template-columns'},
                        {id: 'template-areas', title: 'grid-template-areas'},
                        {id: 'grid-area', title: 'grid-area'},
                        {id: 'grid-template', title: 'grid-template'},
                        {id: 'place-items', title: 'place-items, align-self, justify-items'},
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
                        grids.`,
                        `<code>grid-cell</code> is a single slot surrounded by neighbouring grid-lines`,
                        `<code>grid-area</code> is a set of grid-cells surrounded by two grid-row-lines and two
                        grid-column-lines,`,
                        `<code>gutters</code> are spacings between adjacent grid-tracks. Gutters or <code>alleys</code>
                        are gaps,`,
                        `<code>block-axis</code> or column axis: grid layout is 2-dimansional. If content is placed 
                        in <code>grid-auto-flow</code> column, elements will be placed along this axis: in top to 
                        bottom direction,`,
                        `<code>inline-axis</code> or row axis: if content is placed in <code>grid-auto-flow</code> row
                        direction, elements are placed along the inline-axis.`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <style>
                        .trackExample-grid-parent{
                            display:grid;
                            width: 370px;
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
                            font-size: 1.4rem;
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
                        .trackExample-spacing{
                            position:relative;
                            height:1rem;
                        }
                        .column{flex-direction:column;}
                    </style>
                    <div class="trackExample-grid-parent">
                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">Line-1-row</div>
                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">Line-1-row</div>
                        <div class="trackExample-grid-line-row-space"></div>

                        <div class="trackExample-grid-line-column">Line-1</div>
                        <div class="trackExample-grid-child">&larr;Grid track&rarr;</div>
                        <div class="trackExample-grid-line-column">Line-2</div>
                        <div class="trackExample-grid-child">&larr;Grid track&rarr;</div>
                        <div class="trackExample-grid-line-column">Line-3</div>

                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">Line-2</div>
                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">Line-2</div>
                        <div class="trackExample-grid-line-row-space"></div>

                        <div class="trackExample-grid-line-column">Line-1</div>
                        <div class="trackExample-grid-child column">
                            <div class="block">&uarr;</div>
                            <div class="block">&larr;Grid track&rarr;</div>
                            <div class="block">&darr;</div>
                        </div>
                        <div class="trackExample-grid-line-column">Line-2</div>
                        <div class="trackExample-grid-child">&larr;Grid track&rarr;</div>
                        <div class="trackExample-grid-line-column">Line-3</div>

                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">Line-3</div>
                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">Line-3</div>
                        <div class="trackExample-grid-line-row-space"></div>

                    </div>

                    <div class="trackExample-spacing"></div>

                    <div class="trackExample-grid-parent">
                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">inline-axis-row</div>
                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">inline-axis-row</div>
                        <div class="trackExample-grid-line-row-space"></div>

                        <div class="trackExample-grid-line-column">block-axis</div>
                        <div class="trackExample-grid-child">Grid cell</div>
                        <div class="trackExample-grid-line-column">gutter / alley</div>
                        <div class="trackExample-grid-child">Grid cell</div>
                        <div class="trackExample-grid-line-column">gutter / alley</div>

                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">gutter / alley</div>
                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">gutter / alley</div>
                        <div class="trackExample-grid-line-row-space"></div>

                        <div class="trackExample-grid-line-column">block-axis</div>
                        <div class="trackExample-grid-child">Grid cell</div>
                        <div class="trackExample-grid-line-column">gutter / alley</div>
                        <div class="trackExample-grid-child">Grid cell</div>
                        <div class="trackExample-grid-line-column">gutter / alley</div>

                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">gutter / alley</div>
                        <div class="trackExample-grid-line-row-space"></div>
                        <div class="trackExample-grid-line-row">gutter / alley</div>
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
                    content:'<span id="template-rows">grid-template-rows</span>'
                    
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>grid-auto-rows</code>: specifies the size of a newly created row. Put on parent element.
                        Instead of specifying the size of each row separatly, this may be used,`,
                        `<code>grid-row-start</code>: on child element, the number or name of the grid-line where 
                        the child will start`,
                        `<code>grid-row-end</code>: on child element, the number or name of the grid-line where the child 
                        will end`,
                        `<code>gap</code>`,`<code>row-gap</code>`,
                        `<code>span</code>`,`Line names`
                    ]
                    
                },

                {...getGridTemplateRowContent()},


                {
                    elementType:'Headline-3',
                    content:'<span id="template-rows-columns">grid-template-rows with grid-tempate-columns</span>'
                },
                {...getGridTemplateRowColumnContent()},

                {
                    elementType:'Headline-3',
                    content:'<span id="template-areas">grid-template-area</span>'
                },

                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>grid-template-area</code>: defines areas in a grid parent. Does position elements, but
                        this template may be referred to from the child elements,`,
                        `<code>grid-area</code>: a property of a child element, that defines to what part of the 
                        <code>grid-template-area</code> element will belong,`,
                        `Layout of the page may be changed by just change of the <code>grid-template-area</code>,`,
                        `A <code>grid-template-area</code> consists of a set of strings, each of them defines a 
                        single row of the temlate`,
                        `A grid area is a part of the grid layout surrounded by 2 grid block lines and 2 grid row lines,
                        so it will always be a rectangle of some sort`,
                    ] 
                },

                {...getGridTemplateAreaContent()},


                {
                    elementType:'Headline-3',
                    content:'<span id="grid-area">grid-area</span>'                    
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <code>grid-area</code> can be one of below:
                    `  
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>grid-area: area-name</code>: where <code>area-name</code> is specified 
                        in the <code>grid-template-area</code>. In this case the element will expand to the 
                        whole area that was defined with the <code>area-name</code> in the <code>grid-template-area</code>,`,
                        `<code>grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end</code>, 
                        where <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>,
                        <code>grid-column-end</code> are numbers indicating the grid line numbers, or are names given to the 
                        grid lines (eg. <code>grid-template-column: [someName] 1fr [someEndName]</code>,`,
                        `The <code>grid-template-area</code> does not have to be defined for the <code>grid-area</code> to
                        work. Only in this case <code>grid-area</code> property will have to be defined by the 
                        <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>,
                        <code>grid-column-end</code> pattern,`,
                        `A dot <code>.</code> in the <code>grid-template-area</code> indicates the area not taken by any
                        element, the element the is not occupied at all. However this refers to the <code>grid-area: area-name</code>
                        pattern only. If the some child of a grid container is place with the <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>,
                        <code>grid-column-end</code> pattern, it may be placed in the <i><q>forbidden zone</q></i>,`
                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:`
                        grid-area: image stale example
                    `
                },


                {
                    elementType: `exampleInIframe`,
                    title: 'Slot example',
                    src: 'https://gudmar.github.io/theoryCornerExamples/Grid/stalePhotoGrid.html',
                    width: '500',
                    height: '400'
                },

                {
                    elementType:'Code',
                    content:`
<pre>
&lt;style>
html{
    overflow: auto;
}
body{
    padding:0;
    margin:0;
    background-image: url('./staleBG.png');
    overflow: auto;
    position: relative;
    width: 100vw;
    height: 100vh;
}
.grid-parent{
    width: 100vw;
    position: relative;
    display: grid;
    grid-template-areas: "a a a a a"
                         "b . . . c"
                         "d . e . f"
                         "g . . . h"
                         "i i i i i";
}
.grid-child-a{
    grid-area: a;
    background-color: #777;
    position: relative;
    height: 20vh;
}
.grid-child-b{
    grid-area: b;
    background-color: #999;
    height: 10vh;
}
.grid-child-c{
    grid-area: c;
    background-color: #999;
}
.grid-child-d{
    grid-area: d;
    background-color: #ddd;
}
.grid-child-e{
    grid-area: e;
    background-color: green;
    height: 10vh;
}
.grid-child-f{
    grid-area: f;
    background-color: #ddd;
}
.grid-child-g{
    grid-area: g;
    background-color: #ddd;
    height: 10vh;
}
.grid-child-h{
    grid-area: h;
    background-color: #ddd;
}
.grid-child-i{
    grid-area: i;
    background-color: #444;
}

.child-of-grid-i{
    position: relative;
    height: 100vh;
}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
    /* align-content: center; */
}
.text{
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}
&lt;/style>

&lt;div class="grid-parent">
&lt;div class="grid-child-a center text">&lt;h1>Lawnmower&lt;/h1>&lt;/div>
&lt;div class="grid-child-b center text">b&lt;/div>
&lt;div class="grid-child-c center text">c&lt;/div>
&lt;div class="grid-child-f center text">f&lt;/div>
&lt;div class="grid-child-g center text">g&lt;/div>
&lt;div class="grid-child-h center text">h&lt;/div>
&lt;div class="grid-child-i center text">
    &lt;div class="child-of-grid-i center text">e-child&lt;/div>
&lt;/div>
&lt;div class="grid-child-d center text">d&lt;/div>
&lt;div class="grid-child-e center text">e&lt;/div>
&lt;/div>

</pre>                    

                    `
                },


                {
                    elementType: 'Headline-3',
                    content: '<span id="grid-template">grid-template</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `A shorthand property for defining <code>grid-columns</code>, 
                    <code>grid-rows</code>, <code>grid-areas</code>`
                },

                getGridTemplateContent(),

                {
                    elementType: 'Headline-3',
                    content: '<span id="place-items">place-items, align-items, justify-items, place-content, align-content, justify-content</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `Works with <code>grid</code> and <code>flexbox</code>, property of the <code>grid</code>
                    or <code>flex</code> container. Alows to align items along the <code>block</code> and <code>inline</code>
                    directions. If the item placed in the grid-cell is smaller then the grid-cell, it may be adjusted/aligned
                    with this properties inside the container. If the item does not have any size, it will be stratched, or 
                    located with this properties.`
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>align-items</code>: places items in the <b>block</b> direction.
                        `,
                        `<code>justify-items</code>: places items in the row direction in relation to the 
                        track,`,
                        `<code>place-items</code>: shorthand for the <code>align-items</code> and <code>justify-items</code>`,
                        `<code>align-content</code>: places items in the <b>block</b> direction, however places them in 
                        the relation to the parent container, not the track (so not the single item, but the whole content)`,
                        `<code>justify-content</code>: places items in the <b>row</b> direction, however places them in the
                        relation to the parent container, not the track (so not the single item, but the whole content)`,
                        `<code>place-content</code>: a shorthand property for the <code>align-content</code> and <code>
                        justify-content</code>,`,
                        `<code>align-self</code>: overwrites the <code>align-items</code> property for the 
                        specific child of a grid container it was set on. It should be applied to a grid-container 
                        child,`,
                        `<code>justify-self</code>: overwrittes the <code>justify-items</code> and sets the child of a 
                        grid parent in the row-direction. Is ignored on tables and in flex.`
                    ] 
                },

                getGridPlaceContent(),
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