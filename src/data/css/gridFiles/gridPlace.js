
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
                            Placing an item in the relation to the grid-cell, or a container indicated 
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
                                `<s><code>flex-start</code>: possible, but use <code>start</code> instead, as this value is 
                                designed for the flex-box,</s>`,
                                `<code>center</code>: place item in the middle of the grid-track in block direction`,
                                `<s><code>flex-end</code>: possible, but use <code>end</code> instead,</s>`,
                                `<code>start</code>: place item at the start of the grid-track in the block direction,`,
                                `<code>end</code>: place item at the end of the grid-track in the block direction,`,
                                `<s><code>self-start</code>: possible, but better to use <code>start</code>,</s>`,
                                `<s><code>self-end</code>: possible, but better to use <code>end</code></s>`,
                                `<code>stretch</code>: stretches the item in the block direction,`,
                                `<code>safe</code>: makes sure that the content is never unreachable (may not be supppreted by
                                    some browsers</code>,`,
                                `<code>unsafe</code>: data may not be available, outside the overflow,`
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
                            },
                            startingPoints: {
                                alignItems: 'end'
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
                title: 'justify-items',

                maxHeight: '60rem',
                description: {
                    elementType:'Section',
                    content:[
                            {
                                elementType: 'Paragraph',
                                content: `
                                Adjusts each grid parent childs row-direction position,
                                `
                            },

                            {
                                elementType: 'UnsignedList',
                                content: [
                                    `<code>normal</code>: depends on the layout mode. For more details see <code>
                                    align-items section</code>
                                    `,
                                    `<s><code>flex-start</code>: treated as <code>start</code> if not a flex-container,</s>`,
                                    `<code>center</code>: place all items in the middle of the grid-container in the block direction,`,


                                    `<s><code>flex-end</code>: possible, but use <code>end</code> instead,</s>`,
                                    `<code>start</code>: place item at the start of the grid-track in the row direction,`,
                                    `<code>end</code>: place item at the end of the grid-track in the row direction,`,
                                    `<s><code>self-start</code>: possible, but better to use <code>start</code>,</s>`,
                                    `<s><code>self-end</code>: possible, but better to use <code>end</code></s>`,
                                    `<code>stretch</code>: stretches the item in the row direction,`,
                                    `<code>safe</code>: makes sure that the content is never unreachable (may not be supppreted by
                                        some browsers</code>,`,
                                    `<code>unsafe</code>: data may not be available, outside the overflow,`
                                ]
                            },
                            // {
                            //     elementType: 'NoteWarning',
                            //     content: `Below example does not show how align-content `
                            // },
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
                                },
                                startingPoints: {
                                    justifyItems: 'end'
                                }
                            }, 
    


                        ]
                    }
            },

            {
                type: 'Example',
                title: 'align-content',

                maxHeight: '60rem',
                description: {
                    elementType:'Section',
                    content:[
                            {
                                elementType: 'Paragraph',
                                content: `
                                Distributes space between and around content items along a flexbox cross-axis or a 
                                grid block axis

                                `
                            },

                            {
                                elementType: 'UnsignedList',
                                content: [
                                    `<code>normal</code>: default position, <code>
                                    align-items section</code>
                                    `,
                                    `<s><code>flex-start</code>: the same as <code>start</code> for the 
                                    grid parent,</s>`,
                                    `<code>center</code>: place item in the middle of the grid-track in row direction`,
                                    `<s><code>flex-end</code>: the same as <code>end</code> for the grid parent,</s>`,
                                    `<code>start</code>: places all items at the start of the grid-parent in block direction,`,
                                    `<code>end</code>: places all items at the end of the grid-parent in the block direction,`,
                                    `<s><code>self-start</code>: the same as <code>start</code>,</s>`,
                                    `<s><code>self-end</code>: the same as end <code>end</code></s>`,
                                    `<code>space-between</code>: Items are distributed evenly within the alignment container, 
                                    along the block direction. First row and last row of items is aligned with the start edge of 
                                    the parent container, 
                                    ,`,
                                    `<code>space-around</code>: Items are distributed evenly within the alignment container,
                                    along the block dircetion. The spacing between the first row and the container start, the 
                                    spacing between the last row and the container end are equal to the spacings applied to
                                    any other row,`,
                                    `<code>space-evenly</code>: spacings between rows and between the first row and the
                                    container start and between the last row and the container end are exectly the same,`
                                    `<code>stretch</code>: all elements are stretched in the block direction,`,
                                    `<code>safe</code>: makes sure the content is always available with the scrolling, 
                                    may not be supported by some browsers,`,
                                    `<code>unsafe</code>: content may be not available with scrolling,`
                                ]
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