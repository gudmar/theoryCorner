


const gridTemplateRowColumnContent =     {
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
                title: 'Layout example',

                maxHeight: '220rem',
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
.grid-parent{
    display: grid;
    grid-template-rows: 
        [navStart] 50px 
        [navEnd contentStart] auto 
        [contentEnd footerStart] 100px 
        [footerEnd],
    grid-template-columns: 
        [leftStart] 1fr 
        [leftEnd contentStart] 5fr 
        [contentEnd rightStart] 1fr 
        [rightEnd]
}
.grid-child:nth-child(1){
    grid-row-start: 'navStart';
    grid-row-end: 'navEnd'; 
    grid-column-start: 'leftStart';
    grid-column-end:'rightEnd';
}
.grid-child:nth-child(2){
    grid-row-start: 'contentStart';
    grid-row-end: 'contentEnd'; 
    grid-column-start: 'leftStart';
    grid-column-end: 'leftEnd'
}
.grid-child:nth-child(3){
    grid-row-start: 'contentStart';
    grid-row-end: 'contentEnd';
    grid-column-start: 'contentStart';
    grid-column-end: 'contentEnd'
}
.grid-child:nth-child(4){
    grid-row-start: 'contentStart';
    grid-row-end: 'contentEnd';
    grid-column-start: 'rightStart';
    grid-column-end: 'rightEnd'
}
.grid-child:nth-child(5){
    grid-row-start: 'footerStart';
    grid-row-end: 'footerEnd';
    grid-column-start: 'leftStart';
    grid-column-end:'rightEnd'
}

</pre>                                    
                                `
                            },
                            {
                                elementType:'GridPresent',
                                parentWidth: undefined,
                                parentHeight: 700,
                                nrOfChildren: 5,
                                parentStyle: {
                                    gridTemplateRows: 
                                        `[navStart] 50px [navEnd contentStart] auto 
                                        [contentEnd footerStart] 100px [footerEnd]`,
                                    gridTemplateColumns: `[leftStart] 1fr [leftEnd contentStart] 5fr 
                                        [contentEnd rightStart] 1fr [rightEnd]`
                                },
                                childStyle:{},
                                childByIndexStyle:{
                                    0: {gridRowStart: 'navStart', gridRowEnd: 'navEnd', gridColumnStart: 'leftStart', gridColumnEnd:'rightEnd'},
                                    1: {gridRowStart: 'contentStart', gridRowEnd: 'contentEnd', gridColumnStart: 'leftStart', gridColumnEnd: 'leftEnd'},
                                    2: {gridRowStart: 'contentStart', gridRowEnd: 'contentEnd', gridColumnStart: 'contentStart', gridColumnEnd: 'contentEnd'},
                                    3: {gridRowStart: 'contentStart', gridRowEnd: 'contentEnd', gridColumnStart: 'rightStart', gridColumnEnd: 'rightEnd'},
                                    4: {gridRowStart: 'footerStart', gridRowEnd: 'footerEnd', gridColumnStart: 'leftStart', gridColumnEnd:'rightEnd'},
                                }
                            }, 
                            {
                                elementType:'Paragraph',
                                content:`
                                This is not the case for <code>@media</code> and making this layout 
                                responisive. When resizing, the layout seems to work, however 
                                the structure is quite complicated and could be more readable.
                                And here <code>grid-area</code>s come to the rescue.
                                `
                            } 
                        ]
                    }
            },





            




        ] // items
    } // content
} //gridTemplateColumnContent





export default function getGridTemplateRowColumnContent(){
return gridTemplateRowColumnContent;
}