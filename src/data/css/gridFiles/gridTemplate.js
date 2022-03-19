
const gridTemplateContent =     {
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
                title: 'About',
                description: {
                    elementType: 'Section',
                    content: [
                        {
                            elementType: 'Paragraph',
                            content: `
                            The pattern is:
                            `
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
                                        "a b c" 30px
                                        "d e f" 40px / 1fr 2fr 10%
                                    `
                                },
                                childStyle:{
                                },
                                childByIndexStyle:{
                                    1: {gridArea: 'a'},
                                    2: {gridArea: 'b'},
                                    3: {gridArea: 'c'},
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

            {
                type: 'Example',
                title: 'Example: only row height set',
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
    "d e f" 40px
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
                                        "a b c" 30px
                                        "d e f" 40px
                                    `
                                },
                                childStyle:{
                                },
                                childByIndexStyle:{
                                    1: {gridArea: 'a'},
                                    2: {gridArea: 'b'},
                                    3: {gridArea: 'c'},
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

            {
                type: 'Example',
                title: 'Example: only column width set',
                description: {
                    elementType:'Section',
                    content:[
                            {
                                elementType:'Code',
                                content:`
<pre>
.grid-parent{
    "a b c"
    "a b c"
    "d e f" / 1fr 10px 30%
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
                                        "a b c" 
                                        "a b c" 
                                        "d e f" / 1fr 10px 30%
                                    `
                                },
                                childStyle:{
                                },
                                childByIndexStyle:{
                                    1: {gridArea: 'a'},
                                    2: {gridArea: 'b'},
                                    3: {gridArea: 'c'},
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





export default function getGridTemplateContent(){
return gridTemplateContent;
}