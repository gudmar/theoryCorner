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
                                    elementType: 'Paragraph',
                                    content:`
                                    Once the only chance to set a column as a part of the parent widths, was a 
                                    <code>%</code> unit. Back then it was difficult to handle situations with 
                                    gaps, a constant width column and the rest columns proportional to the parents 
                                    width (eg. <code>grid-template-column: 50px 20% 30% 50%; gap: 10px;</code>.
                                    In this example content would overflow the parent element due to the fact, that
                                percentages are counted from the parent total width, not the width that is left after
                                elements with concrete width are placed and gaps distributed.)
                                    `
                                },
                                {
                                    elementType: 'Paragraph',
                                    content:`
                                    Finally a fraction <code>fr</code> unit come with salvation. Fractions are 
                                    distributed after all concrete-width elements are placed, and after all gaps 
                                    are distributed, so above example could look like: 
                                    <code>grid-template-column: 50px 2fr 3fr 5fr; gap: 10px;</code>.
                                    `
                                },
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
                                    Percentage of the parent <b>total</b> width, so gaps and concrete-width elements 
                                    are not substracted from the grid parent widht before dividing the parent area.
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
                    title: 'grid-auto-flow',
                    description: {
                        elementType:'Section',
                        content:[
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    Direction in which grid children will be placed. <b>Default is row</b>.
                                    By default elements are placed in rows, untill no slots are available. Then
                                    next row is taken. If there is no row template available, there will be 
                                    new columns added.
                                    `
                                },
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    Normally after changing <code>grid-auto-flow</code> to the <code>column</code>
                                    value, if there is no <code>grid-template-row</code> defined, the elements 
                                    would stick to a single row overflowing the parent element. In below case 
                                    elements 0 and 1 start in line 0 and finish in the 4-th line, so this setting 
                                    determines elements being moved to next lines in case of the <code>column</code>
                                    value.
                                    `
                                },
                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-columns: 10% 20% 30% 40%;
    grid-auto-flow: row;
}
.grid-child:nth-child(1), .grid-child:nth-child(2){
    grid-column-start: 1;
    grid-column-end: 4;
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 8,
                                    parentStyle: {
                                        gridTemplateColumns: 'repeat(5, 1fr)',gridAutoFlow: 'column',
                                        // gridTemplateRows: '1fr 2fr 3fr 4fr'
                                    },
                                    childStyle:{},
                                    childByIndexStyle:{
                                        0: {gridColumnStart: 1, gridColumnEnd: 4},
                                        1: {gridColumnStart: 1, gridColumnEnd: 4},
                                    },
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
                                    `<code>grid-column-start</code> the grid-<b>line</b> where the child will start`, 
                                    `<code>column-end</code>: the grid-<b>line</b> where the element will end,`,
                                    `If <code>grid-column-start</code> and <code>grid-column-end</code> indicate 
                                    more then just a single column, the element will expand,`,
                                    `The way the elements that are not placed with the <code>grid-column-start</code>
                                    and <code>grid-column-end</code> properties are placed, depends on the <code>
                                    grid-auto-flow</code>,`,
                                    `In case <code>grid-auto-flow</code> is <code>row</code> elements adjacend to the 
                                    elements placed with <code>grid-column-start</code> and <code>grid-column-end</code>
                                    properties, are not take out of the flow, and do not fill gaps. They are placed 
                                    after the elements influenced by the <code>grid-column-start</code>/<code>end</code>
                                    properties,`,
                                    `In case of <code>grid-auto-flow</code> equal to <code>column</code> or having a 
                                    <code>dense</code> value siblings of the elements affected with <code>grid-column-start</code>
                                    and <code>grid-column-end</code> properties will be placed in gaps,`,
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
                                    parentHeight: 500,
                                    parentStyle: {gridTemplateColumns: '10% auto 1fr 40%'},
                                    childStyle:{},
                                    childByIndexStyle:{
                                        2: {gridColumnStart: 1},
                                        8: {gridColumnStart: 1, gridColumnEnd: 4},
                                        14: {gridColumnEnd: 5}
                                    }
                                }, 
                                
                                {
                                    elementType:'Separate',
                                    content:'A negative number'
                                },
                                {
                                    elementType:'Paragraph',
                                    content: `
                                    Grid start may be a negative number, then it starts from the 
                                    <code>nrOfChildren.lenght - gridColumnStart</code>
                                    `
                                },


                                {
                                    elementType:'Code',
                                    content:`
<pre>
.grid-parent{
    display: grid;
    grid-template-columns: repeat(auto, 4);
}
.grid-child:nth-child(2){grid-column-start: -1;};

</pre>                                    
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 7,
                                    parentStyle: {gridTemplateColumns: '10% auto 1fr 40%'},
                                    childStyle:{},
                                    childByIndexStyle:{
                                        0: {gridColumnStart: -1},
                                    }
                                }, 

                                {
                                    elementType:'Separate',
                                    content:'The same start and end position'
                                },
                                {
                                    elementType:'Paragraph',
                                    content:`
                                    In below case all elements start in first column-line and the first row-line. So they overlap.
                                    One is on the top of another.
                                    `
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 17,
                                    maxHeight: 240,
                                    parentStyle: {
                                        gridTemplateColumns: '[linename1] 100px [linename2 linename3] 150px [linename4] 170px',
                                        gridTemplateRows: '[ylinename1] 50px 60px 60px'

                                    },
                                    childStyle:{gridColumnStart:'linename1', gridRowStart:'ylinename1'},
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
                                    elementType:'UnsignedList',
                                    content:[
                                    `Each grid <b>line</b> may be given a custom name, or even a few names.`,
                                    `Grid-lines, not grid-trackes are named.`,
                                    `Lines may be referred in <code>grid-column-start</code> and <code>grid-column-end</code>
                                    with the name instead of the number:`
                                    
                                    ]
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
    grid-column-start:nth-child(1):{grid-column-start:linename1; grid-column-end:linename5;}
    grid-column-start:nth-child(2):{grid-column-start:linename1; grid-column-end:linename3;}
    grid-column-start:nth-child(3):{grid-column-start:linename1; grid-column-end:linename4;}
}
</pre>                                    
                                    `
                                },
                                {
                                    elementType:'UnsignedList',
                                    content:[
                                        `<code>linename3</code> is the same as <code>linename4</code>, so
                                         both elements end in the same place,`,
                                        `Lines may have more than one names,`,
                                        `Names are put in the square brackets,`
                                    ]
                                },
                                {
                                    elementType:'GridPresent',
                                    parentWidth: undefined,
                                    nrOfChildren: 7,
                                    
                                    parentStyle: {
                                        gridTemplateColumns: '[linename1] 100px [linename2] 150px [linename3 linename4] 170px [linename5]'

                                    },
                                    childByIndexStyle:{
                                        0:{gridColumnStart:'linename1', gridColumnEnd:'linename5'},
                                        1:{gridColumnStart:'linename1', gridColumnEnd:'linename3'},
                                        2:{gridColumnStart:'linename1', gridColumnEnd:'linename4'},
                                    },
                                    childStyle:{},
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