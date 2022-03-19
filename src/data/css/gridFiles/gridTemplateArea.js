


const gridTemplateAreaContent =     {
    elementType: 'HiddenDescription',
    content: {
        showLegend: false,
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
                title: 'Area',

                maxHeight: '60rem',
                description: {
                    elementType:'Section',
                    content:[
                            {
                                elementType:'UnsignedList',
                                content:[

                                ]
                            },
                            {
                                elementType:'Code',
                                content:`
<pre>
<pre>                            
                                `
                            },
                            {
                                elementType:'GridPresent',
                                parentWidth: undefined,
                                parentHeight: 700,
                                nrOfChildren: 10,
                                parentStyle: {
                                    gridTemplateAreas: `
                                    "a a b b . . . d e"
                                    "c c b b . . . d e"
                                    "f f . . . . . g g"
                                    `
                                },
                                childStyle:{
                                    opacity: 0.5
                                },
                                childByIndexStyle:{
                                    0: {gridArea:'a'},
                                    1: {gridArea: '2 / 6 / 3 / 7'},
                                    2: {gridArea:'b'},
                                    3: {gridArea:'c'},
                                    4: {gridArea:'d'},
                                    5: {gridArea:'e'},
                                    6: {gridArea:'f'},
                                    7: {gridArea:'g'},
                                    8: {gridArea:'1 / 1 / 3 / 4', border: 'solid medium green'},
                                    9: {gridArea: 'a / b'}
                                    // 9: {gridArea: '2 / 3 / 4 / 5', border: 'solid medium red'},
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
                title: 'Layouts: same children, different template',

                maxHeight: '200rem',
                description: {
                    elementType:'Section',
                    content:[
                            {
                                elementType:'Separate',
                                content:`
                                    Example 1
                                `
                            },
                            {
                                elementType:'Paragraph',
                                content:`
                                Thanks to the <code>grid-tamplate-area</code>, changing just one property
                                of the grid-parent element will result in changing the whole page layout.
                                `
                            },
                            {
                                elementType:'Code',
                                content:`
<pre>
.grid-parent{
    display:grid,
    gird-template-areas:
        "head head head head head"
        "nav  cont cont cont side"
        "nav  cont cont cont side"
        "nav  cont cont cont side"
        "nav  cont cont cont side"
        "nav  cont cont cont side"
        "nav  cont cont cont side"
        "foot foot foot foot foot"
}
.grid-child:nth-child(0){
    grid-area: 'head'; background-color: black;
}
.grid-child:nth-child(1){
    grid-area: 'nav'; background-color: gray;
}
.grid-child:nth-child(2){
    grid-area: 'cont'; background-color: blut;
}
.grid-child:nth-child(3){
    grid-area: 'side'; background-color: gray;
}
.grid-child:nth-child(4){
    grid-area: 'foot'; background-color: brown;
}
<pre>                            
                                `
                            },
                            {
                                elementType:'GridPresent',
                                parentWidth: undefined,
                                parentHeight: 500,
                                parentWidth: 500,
                                nrOfChildren: 5,
                                parentStyle: {
                                    gridTemplateAreas: `
                                    "head head head head head"
                                    "nav  cont cont cont side"
                                    "nav  cont cont cont side"
                                    "nav  cont cont cont side"
                                    "nav  cont cont cont side"
                                    "nav  cont cont cont side"
                                    "nav  cont cont cont side"
                                    "foot foot foot foot foot "
                                    `
                                },
                                childStyle:{
                                },
                                childByIndexStyle:{
                                    0: {gridArea:'head', backgroundColor:   "black"},
                                    1: {gridArea: 'nav', backgroundColor: "gray "},
                                    2: {gridArea:'cont', backgroundColor:  "blue "},
                                    3: {gridArea:'side', backgroundColor: "gray "},
                                    4: {gridArea:'foot', backgroundColor:  "brown"},
                                }
                            },
                            
                            {
                                elementType:'Separate',
                                content:`
                                    Example 2
                                `
                            },
                            {
                                elementType:'Paragraph',
                                content:`
                                    A sort of a mobile version
                                `
                            },





                            {
                                elementType:'Code',
                                content:`
<pre>
.grid-parent{
    display:grid,
    gird-template-areas:
        "nav  head head "
        "cont cont cont"
        "cont cont cont"
        "cont cont cont"
        "cont cont cont"
        "cont cont cont"
        "cont cont cont"
        "cont cont cont"
        "side side side"
        "foot foot foot"
}
.grid-child:nth-child(0){
    grid-area: 'head'; background-color: black;
}
.grid-child:nth-child(1){
    grid-area: 'nav'; background-color: gray;
}
.grid-child:nth-child(2){
    grid-area: 'cont'; background-color: blut;
}
.grid-child:nth-child(3){
    grid-area: 'side'; background-color: gray;
}
.grid-child:nth-child(4){
    grid-area: 'foot'; background-color: brown;
}
<pre>                            
                                `
                            },
                            {
                                elementType:'GridPresent',
                                parentWidth: undefined,
                                parentHeight: 500,
                                parentWidth: 300,
                                nrOfChildren: 5,
                                parentStyle: {
                                    gridTemplateAreas: `
                                    "nav  head head "
                                    "cont cont cont"
                                    "cont cont cont"
                                    "cont cont cont"
                                    "cont cont cont"
                                    "cont cont cont"
                                    "cont cont cont"
                                    "cont cont cont"
                                    "side side side"
                                    "foot foot foot"
                                    `
                                },
                                childStyle:{
                                },
                                childByIndexStyle:{
                                    0: {gridArea:'head', backgroundColor:   "black"},
                                    1: {gridArea: 'nav', backgroundColor: "gray "},
                                    2: {gridArea:'cont', backgroundColor:  "blue "},
                                    3: {gridArea:'side', backgroundColor: "gray "},
                                    4: {gridArea:'foot', backgroundColor:  "brown"},
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





export default function getGridTemplateAreaContent(){
return gridTemplateAreaContent;
}