
const gridPlaceContent =     {
    elementType: 'HiddenDescription',
    content: {
        showLegend: false,
        legend: [
            {
                type: 'Example',
                styleClasses: 'btn btn-secondary text-white m-4 mb-1 mt-1 hidden',
                description: ''
            },
        ],
        items:[
            {
                type: 'Example',
                title: 'align-items',
                description: {
                    elementType: 'Section',
                    content: [
                        {
                            elementType: 'Paragraph',
                            content: `
                            Placing item in the relation to the grid-cell, or a container indicated 
                            by a few cells in case item is stretched along a few grid cells. 
                            <code>grid-auto-flow</code> does not influence this property.
                            <code>flex-basis</code> may be set on the child items, but does nothing.
                            
                            Alowed values:
                            `
                        },
                        {
                            elementType: 'UnsignedList',
                            content: [
                                `<code>normal</code>: depends on the layout mode:
                                <ul>
                                    <li>absolutely-positioned layouts: like <code>start</code> or </code>stretch</code></li>
                                    <li>static-positioned: <code>stretch</code></li>
                                    <li>flex-items: <code>stretch</code></li>
                                    <li>grid-items: <code>stretch</code> or <code>start</code></li>
                                    <li>Does not apply to the block-level boxes or table cells</li>

                                </ul>
                                `,
                                `<code>flex-start</code>: possible, but use <code>start</code> instead, as this value is 
                                designed for the flex-box,`,
                                `<code>center</code>: place item in the middle of the grid-track in block direction`,
                                `<code>flex-end</code>: possible, but use <code>end</code> instead,`,
                                `<code>start</code>: place item at the start of the grid-track in the block direction,`,
                                `<code>end</code>: place item at the end of the grid-track in the block direction,`,
                                `<code>self-start</code>: possible, but better to use <code>start</code>,`,
                                `<code>self-end</code>: possible, but better to use <code>end</code>`,
                                `<code>stretch</code>: stretches the item in the block direction,`,
                            ]
                        },
                        {
                            elementType: "Code",
                            content:`
<pre>
.grid-parent{
    "a b c" 1fr
    ". b ." 1fr
    "d e f" 1fr / auto auto auto    
}
</pre>                    
                            `
                        },
                        {
                            elementType:'GridPresent',
                            parentWidth: undefined,
                            parentHeight: 400,
                            nrOfChildren: 9,
                            parentStyle: {
                                gridTemplate: `
                                    "a b c" 1fr
                                    ". b ." 1fr
                                    "d e f" 1fr / auto auto auto
                                `,
                                gap: '10px'
                            },
                            childStyle:{
                            },
                            childByIndexStyle:{
                                1: {gridArea: 'a', height: '50px'},
                                2: {gridArea: 'b', height: '60px'},
                                3: {gridArea: 'c', height: '70px'},
                                4: {gridArea: 'd'},
                                5: {gridArea: 'e'},
                                6: {gridArea: 'f'},
                            }
                        }, 







                        {
                            elementType: 'Code',
                            content: `
<pre>
grid-template:
    "a b c" heightOfFirstRow
    "d e f" heightOfSecondRow
    "g h i" heightOfThirdRow 
            / firstColumnWidth secondColumnWidth thirdColumnWidth 
</pre>                            
                            `
                        },
                    ]
                }
            },
            {
                type: 'Example',
                title: 'Example: rows and columns set',

                maxHeight: '60rem',
                description: {
                    elementType:'Section',
                    content:[
                            {
                                elementType:'Code',
                                content:`
<pre>
.grid-parent{
    "a b c" 1fr
    "a b c" 30px
    "d e f" 40px / 1fr 2fr 10%
}
.grid-child:nth-child(0){grid-area:"a";}
.grid-child:nth-child(1){grid-area:"b";}
.grid-child:nth-child(2){grid-area:"c";}
.grid-child:nth-child(3){grid-area:"d";}
.grid-child:nth-child(4){grid-area:"e";}
.grid-child:nth-child(5){grid-area:"f";}
<pre>                            
                                `
                            },
                            {
                                elementType:'GridPresent',
                                parentWidth: undefined,
                                parentHeight: 400,
                                nrOfChildren: 9,
                                parentStyle: {
                                    gridTemplate: `
                                        "a b c" 1fr
                                        "a b c" 1fr
                                        "d e f" 1fr / auto auto auto
                                    `
                                },
                                childStyle:{
                                },
                                childByIndexStyle:{
                                    1: {gridArea: 'a', flexBasis: '200px'},
                                    2: {gridArea: 'b', flexBasis: '250px'},
                                    3: {gridArea: 'c', flexBasis: '300px'},
                                    4: {gridArea: 'd'},
                                    5: {gridArea: 'e'},
                                    6: {gridArea: 'f'},
                                }
                            }, 
                            {
                                elementType:'Paragraph',
                                content:`

                                `
                            },
                        ]
                    }
            },

 




 


        ] // items
    } // content
} //gridTemplateColumnContent





export default function getGridPlaceContent(){
return gridPlaceContent;
}