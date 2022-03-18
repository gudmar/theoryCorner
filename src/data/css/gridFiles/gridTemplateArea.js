


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





            




        ] // items
    } // content
} //gridTemplateColumnContent





export default function getGridTemplateAreaContent(){
return gridTemplateAreaContent;
}