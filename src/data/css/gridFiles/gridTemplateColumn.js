import { func } from "prop-types";


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





                




            ] // items
        } // content
    } //gridTemplateColumnContent





export default function getGridTemplateColumnContent(){
    return gridTemplateColumnContent;
}