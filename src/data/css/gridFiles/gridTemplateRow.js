


const gridTemplateRowContent =     {
        elementType: 'HiddenDescription',
        content: {
            legend: [
                {
                    type: 'Example',
                    styleClasses: 'btn btn-secondary text-white m-4 mb-1 mt-1 hidden',
                    description: 'Example of grid usage'
                },
            ],
            items:[
                {
                    type: 'Example',
                    title: 'grid-template-rows: three rows defined',

                    maxHeight: '220rem',
                    description: {
                        elementType:'Section',
                        content:[
                                {
                                    elementType:'UnsignedList',
                                    content:[
                                    `In case no template for columns is defined, <b>all elements will be placed in the 
                                    first column</b>,`,
                                    `
                                        Areas having their height set to 80px are:
                                        <ul>
                                            <li>Between row line 1 and 2</li>
                                            <li>Between row line 2 and 3</li>
                                            <li>Between row line 3 and 4</li>
                                        </ul>
                                        All above rows have their height set to 80px,
                                    `,
                                    `All not defined rows will have default behaviour, and will grow proportionaly to the 
                                    space left after placing the elements with defined row heights,`,
                                    `By default if elements don't fit into the parent, the <code>overflow</code> mechanism
                                    is applied.`

                                    ]
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-rows: 80px 80px 80px;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    parentHeight: 500,
                                    nrOfChildren: 7,
                                    parentStyle: {
                                        gridTemplateRows: '80px 80px 80px',
                                    },
                                    childStyle:{width: '60px'},
                                },  
                            ]
                        }
                },


                {
                    type: 'Example',
                    title: 'Auto height',
                    description: {
                        elementType:'Section',
                        content:[
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    The hight of the grid-child element is determined by the inner text node (2rem),
                                    and the padding property.
                                    `
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-rows: auto auto auto auto
}
.grid-child{
    padding:10px;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 4,
                                    parentStyle: {gridTemplateRows: 'auto auto auto auto'},
                                    childStyle:{height:'unset'},
                                },  
                            ]
                        }
                },

                {
                    type: 'Example',
                    title: 'Fractions',
                    description: {
                        elementType:'Section',
                        content:[
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-rows: 50px, 1fr, 2fr, 3fr;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    parentStyle: {gridTemplateRows: '50px 1fr 2fr 3fr'},
                                    childStyle:{},
                                },  
                            ]
                        }
                },

                {
                    type: 'Example',
                    title: 'minmax',
                    maxHeight: '120rem',
                    description: {
                        elementType:'Section',
                        
                        content:[
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    <code>minmax(a, b)</code> creates a range of sizes, not smaller then <code>a</code>,
                                    and not greater then <code>b</code>. For useage height <code>grid</code>. Will
                                    adjust automatically, in case of content greater then the parent container, 
                                    content will overflow. 
                                    `
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-rows: minmax(120px, 200px) minmax(120px, 200px) minmax(120px, 200px);
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    parentStyle: {gridTemplateRows: 'minmax(120px, 200px) minmax(120px, 200px) minmax(120px, 200px'},
                                    childStyle:{},
                                },
                                {
                                    elementType:'SmallHeadline',
                                    content:'Fractions'
                                },
                                // {
                                //     elementType:'Code',
                                //     content:`
                                //     <code>fr</code> is a fraction unit, so the parent is divided to the number of 
                                //     elements equal to the number of fractions, and columns will resize keeping the 
                                //     fraction order defined in the template. In below case the minimum size of 
                                //     the column will be 100px, and there is no maximum size. Important is to keep 
                                //     the defined division.
                                //     `
                                // },
                                // {
                                //     elementType:'NoteWarning',
                                //     content:`
                                //     This example shows, that the fraction may be a <i>fraction</i>: <code>1.85fr</code>
                                //     works fine
                                //     `
                                // },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-rows: minmax(100px, 1fr) minmax(100px, 1.5fr) minmax(100px, 2fr);
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    parentStyle: {gridTemplateRows: 'minmax(100px, 1fr) minmax(100px, 1.5fr) minmax(100px, 1.85fr)'},
                                    childStyle:{},
                                },    
                            ]
                        }
                },



                {
                    type: 'Example',
                    title: 'repeat',
                    description: {
                        elementType:'Section',
                        content:[
                                // {
                                //     elementType:'Paragraph',
                                //     content:`
                                //     <code>repeat(nr, pattern)</code> is a css function to be used with the 
                                //     grid layout, that repeats the <code>pattern</code> a <code>nr</code> times
                                //     so if there is the same column grid-track to be repeted, it does not have to be 
                                //     repeted in code.
                                //     `
                                // },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-rows: repeat(8, 50px);
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    parentStyle: {gridTemplateRows: 'repeat(8, 50px)'},
                                    childStyle:{},
                                },  
                            ]
                        }
                },


                {
                    type: 'Example',
                    title: '%',
                    description: {
                        elementType:'Section',
                        content:[
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    Percentage of the parent height.
                                    `
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-rows: 10% 20% 30% 40%;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    parentStyle: {gridTemplateRows: '10% 20% 30% 40%'},
                                    childStyle:{},
                                },  
                            ]
                        }
                },


//                 {
//                     type: 'Example',
//                     title: 'names',
//                     maxHeight: '240rem',
//                     description: {
//                         elementType:'Section',
//                         content:[
//                                 {
//                                     elementType:'Paragraph',
//                                     content:`
//                                     Each grid line may be given a custom name, or even may be given different.
//                                     A grid line is a line between tracks.
//                                     names.
//                                     `
//                                 },
//                                 {
//                                     elementType:'Code',
//                                     content:`
// <pre>
// .grid-parent{
//     display: grid;
//     gird-template-columns: [linename1] 100px [linename2 linename3] 150px, [linename4] 170px;
// }
// .grid-child{
//     grid-column-start:'linename1';
// }
// </pre>                                    
//                                     `
//                                 },
//                                 {
//                                     elementType:'Paragraph',
//                                     content:`
//                                     In this case all elements start in first column,
//                                     `
//                                 },
//                                 {
//                                     elementType:'GridPresent',
//                                     parentWidth: undefined,
//                                     nrOfChildren: 17,
                                    
//                                     parentStyle: {
//                                         gridTemplateColumns: '[linename1] 100px [linename2 linename3] 150px, [linename4] 170px'

//                                     },
//                                     childStyle:{gridColumnStart:'linename1'},
//                                 },  


//                                 {
//                                     elementType:'Code',
//                                     content:`
// <pre>
// .grid-parent{
//     display: grid;
//     gird-template-columns: [linename1] 100px [linename2 linename3] 150px, [linename4] 170px;
// }
// .grid-child{
//     grid-column-start: linename1;
//     grid-row-start: linename2;
// }
// </pre>                                    
//                                     `
//                                 },
//                                 {
//                                     elementType:'Paragraph',
//                                     content:`
//                                     In this case all elements start in first column and first row. So they overlap.
//                                     One is on the top of another.
//                                     `
//                                 },
//                                 {
//                                     elementType:'GridPresent',
//                                     parentWidth: undefined,
//                                     nrOfChildren: 17,
//                                     maxHeight: 240,
//                                     parentStyle: {
//                                         gridTemplateColumns: '[linename1] 100px [linename2 linename3] 150px, [linename4] 170px'

//                                     },
//                                     childStyle:{gridColumnStart:'linename1', gridRowStart:'linename1'},
//                                 },
//                             ]
//                         }
//                 },





                




            ] // items
        } // content
    } //gridTemplateColumnContent





export default function getGridTemplateRowContent(){
    return gridTemplateRowContent;
}