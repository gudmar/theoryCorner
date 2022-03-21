


const gridTemplateRowContent =     {
        elementType: 'HiddenDescription',
        content: {
            showLegend:false,
            legend: [
                {
                    type: 'Example',
                    styleClasses: 'btn btn-secondary text-white m-4 mb-1 mt-1',
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
                                    childStyle:{},
                                },  
                            ]
                        }
                },

                {
                    type: 'Example',
                    title: 'Fractions',
                    maxHeight: '120rem',
                    description: {
                        elementType:'Section',
                        content:[
                            {
                                elementType:'UnsignedList',
                                content:[
                                    `Takes the <b>remaining</b> space, after substraction of all gaps and already 
                                    fixed row sizes, and divides this space among units with <code>fr</code> unit,`,
                                    `This is more comfortable to use then the <code>%</code> unit, as on does not 
                                    have to worry about the (for exapmle) gaps.`,
                                    `<a target="_blank" href="https://css-tricks.com/introduction-fr-css-unit/">
                                    Here</a> one may read about the example with a full screen width element 
                                    divided to four 25% elements, and a 10px gap, in this case there is an 
                                    overflow problem, so the gap should be substracted manualy,
                                    `,
                                    `Note, that in case of more elements, and no space left for division, all
                                    elements will stay the same size, so this property may be compared with the 
                                    <code>flex-growth</code>`,
                                    `<code>fr</code> may be fractions themselves, so <code>1.85fr</code> is a correct 
                                    value and will work.`
                                ]
                            },                            
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-rows: 50px, 1fr, 2fr, 3fr;
    gap: 10px;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 4,
                                    parentStyle: {gridTemplateRows: '50px 1fr 2fr 3fr', gap: '10px',padding:'5px'},
                                    childStyle:{},
                                },  
                                {
                                    elementType:'Separate',
                                    content:'The same example with % instead of <code>fr</code>'
                                },
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    Here the 50px first elements width, padding and 10px gap should be taken into account
                                    for the same effect that with fractions. This is not easy with css, and desires not 
                                    readable calculations. If those calculations are not considered, we will have a below 
                                    effect, where items overflow the parent,
                                    `
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-rows: 50px 16.67% 33.33% 50%;
    gap: 10px;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 4,
                                    parentStyle: {
                                        gridTemplateRows: ` 50px 16.67% 33.33% 50%`, 
                                        gap: '10px',padding:'5px'
                                    },
                                    childStyle:{},
                                },  



                            ]
                        }
                },

                {
                    type: 'Example',
                    title: 'minmax',
                    description: {
                        elementType:'Section',
                        
                        content:[
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    <code>minmax(a, b)</code> works exect the same way as in the <code>grid-tempate-column</code>
                                    case: so creates a range, where the minimum element size is a, and maximum is b.
                                    Works with grids. Please refer to the <code>grid-template-column</code> section for more
                                    `
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
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    <code>repeat(nr, pattern)</code> works the exect same way as in the 
                                    <code>grid-template-column</code> example, so please refer to this section.
                                    It takes the <code>pattern</code> and repeteats it <code>nr</code> of times.
                                    `
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
                                    Percentage of the parent height. Does not take the paddings, 
                                    gaps and elements having concrete height values (like 50px), 
                                    so <code>fr</code> units should be considerated.
                                    <code>%<code> made more sense in times, when <code>fr</code> did not have 
                                    a wide support in most browsers.
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

                                {
                    type: 'Example',
                    title: 'grid-row',
                    description: {
                        elementType:'Section',
                        content:[
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    An abbreviation for <code>grid-row-start</code> / <code>grid-row-end</code>
                                    properties.
                                    `
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-rows: repeat(5, 1fr);
}
.grid-child:nth-child(1){
    grid-row: 2 / 5;
}
.grid-child:nth-child(4){
    grid-row: 1 / 3;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 8,
                                    parentStyle: {gridTemplateRows: 'repeat(5, 1fr)'},
                                    childStyle:{},
                                    childByIndexStyle:{
                                        0:{gridRow: '2 / 5'},
                                        4:{gridRow: '1 / 3'},
                                    },
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