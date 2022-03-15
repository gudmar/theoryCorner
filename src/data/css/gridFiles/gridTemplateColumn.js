import { func } from "prop-types";
import { start } from "@popperjs/core";


const gridTemplateColumnContent =     {
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
                    title: 'Constant widths',
                    description: {
                        elementType:'Section',
                        content:[
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-columns: 80px 80px 80px;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 7,
                                    parentStyle: {gridTemplateColumns: '80px 80px 80px'},
                                    childStyle:{width: '60px'},
                                },  
                            ]
                        }
                },


                {
                    type: 'Example',
                    title: 'Constant widths with column-gap & row-gap',
                    description: {
                        elementType:'Section',
                        content:[
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    There is a <code>gap</code> property combining both: the <code>column-gap</code>
                                    and the <code>row-gap</code> properties.
                                    `
                                },
                                {
                                    elementType:'NoteWarning',
                                    content:`
                                    In case the parent element is smaller then the content, the content will overflow.
                                    `
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-columns: 80px 80px 80px;
    column-gap: 40px;
    row-gap: 60px;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 7,
                                    parentStyle: {gridTemplateColumns: '80px 80px 80px',columnGap:'40px',rowGap:'60px'},
                                    childStyle:{},
                                },  
                            ]
                        }
                },

                {
                    type: 'Example',
                    title: 'Auto width',
                    description: {
                        elementType:'Section',
                        content:[
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-columns: auto auto auto auto
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 13,
                                    parentStyle: {gridTemplateColumns: 'auto auto auto auto'},
                                    childStyle:{},
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
    grid-template-columns: 50px, 1fr, 2fr, 3fr;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    parentStyle: {gridTemplateColumns: '50px 1fr 2fr 3fr'},
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
                                    and not greater then <code>b</code>. For useage with <code>grid</code>. Will
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
    grid-template-columns: minmax(120px, 200px) minmax(120px, 200px) minmax(120px, 200px);
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    parentStyle: {gridTemplateColumns: 'minmax(120px, 200px) minmax(120px, 200px) minmax(120px, 200px'},
                                    childStyle:{},
                                },
                                {
                                    elementType:'SmallHeadline',
                                    content:'Fractions'
                                },
                                {
                                    elementType:'Code',
                                    content:`
                                    <code>fr</code> is a fraction unit, so the parent is divided to the number of 
                                    elements equal to the number of fractions, and columns will resize keeping the 
                                    fraction order defined in the template. In below case the minimum size of 
                                    the column will be 100px, and there is no maximum size. Important is to keep 
                                    the defined division.
                                    `
                                },
                                {
                                    elementType:'NoteWarning',
                                    content:`
                                    This example shows, that the fraction may be a <i>fraction</i>: <code>1.85fr</code>
                                    works fine
                                    `
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-columns: minmax(100px, 1fr) minmax(100px, 1.5fr) minmax(100px, 2fr);
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    parentStyle: {gridTemplateColumns: 'minmax(100px, 1fr) minmax(100px, 1.5fr) minmax(100px, 1.85fr)'},
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
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    <code>repeat(nr, pattern)</code> is a css function to be used with the 
                                    grid layout, that repeats the <code>pattern</code> a <code>nr</code> times
                                    so if there is the same column grid-track to be repeted, it does not have to be 
                                    repeted in code.
                                    `
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-columns: repeat(8, 50px);
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    parentStyle: {gridTemplateColumns: 'repeat(8, 50px)'},
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
                                    Percentage of the parent width.
                                    `
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-columns: 10% 20% 30% 40%;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    parentStyle: {gridTemplateColumns: '10% 20% 30% 40%'},
                                    childStyle:{},
                                },  
                            ]
                        }
                },



                {
                    type: 'Example',
                    title: 'column-start, column-end (child property)',
                    maxHeight: '200rem',
                    description: {
                        elementType:'Section',
                        content:[
                                {
                                    elementType:'UnsignedList',
                                    content:[
                                    `<code>grid-column-start</code> the grid-line where the child will start`, 
                                    `<code>column-end</code>: the grid-<b>line</b> where the element will end,`,
                                    `If <code>grid-column-start</code> and <code>grid-column-end</code> indicate 
                                    more then just a single column, the element will expand,`,
                                    `Elements after the <code>grid-column-start</code> are placed after the adjacent
                                    sibling, and are not taken out of the flow,`,
                                    `Elements after the <code>grid-column-end</code> are placed after the adjacent sibling,
                                    and are not taken out of the flow,`,
                                    `Lines are numerated from 1, not from 0.`
                                    ]
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-columns: 10% auto 1fr 40%;
}
.grid-child:nth-child(2){grid-column-start: 1;};
.grid-child:nth-child(8){grid-column-start: 1; grid-column-end: 3};
.grid-child:nth-child(14){grid-column-end: 5};
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    parentStyle: {gridTemplateColumns: '10% auto 1fr 40%'},
                                    childStyle:{},
                                    childByIndexStyle:{
                                        2: {gridColumnStart: 1},
                                        8: {gridColumnStart: 1, gridColumnEnd: 4},
                                        14: {gridColumnEnd: 5}
                                    }
                                },  
                            ]
                        }
                },





                {
                    type: 'Example',
                    title: 'names',
                    maxHeight: '240rem',
                    description: {
                        elementType:'Section',
                        content:[
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    Each grid line may be given a custom name, or even may be given different.
                                    A grid line is a line between tracks.
                                    names.
                                    `
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    gird-template-columns: [linename1] 100px [linename2 linename3] 150px, [linename4] 170px;
}
.grid-child{
    grid-column-start:'linename1';
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    In this case all elements start in first column,
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    
                                    parentStyle: {
                                        gridTemplateColumns: '[linename1] 100px [linename2 linename3] 150px, [linename4] 170px'

                                    },
                                    childStyle:{gridColumnStart:'linename1'},
                                },  


                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    gird-template-columns: [linename1] 100px [linename2 linename3] 150px, [linename4] 170px;
}
.grid-child{
    grid-column-start: linename1;
    grid-row-start: linename2;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    In this case all elements start in first column and first row. So they overlap.
                                    One is on the top of another.
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    maxHeight: 240,
                                    parentStyle: {
                                        gridTemplateColumns: '[linename1] 100px [linename2 linename3] 150px, [linename4] 170px'

                                    },
                                    childStyle:{gridColumnStart:'linename1', gridRowStart:'linename1'},
                                },
                            ]
                        }
                },





                




            ] // items
        } // content
    } //gridTemplateColumnContent





export default function getGridTemplateColumnContent(){
    return gridTemplateColumnContent;
}