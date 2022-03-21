


const gridTemplateRowColumnContent =     {
    elementType: 'HiddenDescription',
    content: {
        showLegend: false,
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

            {
                type: 'Example',
                title: 'Center: target',
                maxHeight: '220rem',
                description: {
                    elementType:'Section',
                    content:[
                            {
                                elementType:'Paragraph',
                                content:`
                                Yes, this is done with grid.
                                `
                            },
                            {
                                elementType:'Code',
                                content:`
<pre>
.grid-parent{
    border-radius:'50%',
    grid-template-columns: 'repeat(20, 1fr)',
    grid-template-rows: 'repeat(20, 1fr)'
}
.grid-child{
    borderRadius: 50%,
    fontSize: 15px,
    lineHeight: unset,
    verticalAlign: top
}
.grid-child:nth-child(odd){
    background-color: 'black';
}
.grid-child:nth-child(even){
    background-color: 'white'; 
    color:'black'
}
.grid-child:nth-child(0) {
    grid-column-start: 1;
    grid-column-end: 21;
    grid-row-start:  1;
    grid-row-end: 21;
},
.grid-child:nth-child(1) {
    grid-column-start: 2;
    grid-column-end: 20; 
    grid-row-start:  2;
    grid-row-end: 20;
},
.grid-child:nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 19;
    grid-row-start:  3;
    grid-row-end: 19;
},
.grid-child:nth-child(3) {
    grid-column-start: 4;
    grid-column-end: 18;
    grid-row-start:  4;
    grid-row-end: 18;
},
.grid-child:nth-child(4) {
    grid-column-start: 5;
    grid-column-end: 17;
    grid-row-start:  5;
    grid-row-end: 17;
},
.grid-child:nth-child(5) {
    grid-column-start: 6;
    grid-column-end: 16;
    grid-row-start: 6;
    grid-row-end: 16;
},
.grid-child:nth-child(6) {
    grid-column-start: 7;
    grid-column-end: 15;
    grid-row-start:  7;
    grid-row-end: 15;
},
.grid-child:nth-child(7) {
    grid-column-start: 8;
    grid-column-end: 14;
    grid-row-start: 8;
    grid-row-end: 14;
},
.grid-child:nth-child(8) {
    grid-column-start: 9;  
    grid-column-end: 13; 
    grid-row-start: 9; 
    grid-row-end: 13;
},
.grid-child:nth-child(9) {
    grid-column-start: 10; 
    grid-column-end: 12, 
    grid-row-start: 10; 
    grid-row-end: 12;
},

</pre>                                    
                                `
                            },
                            {
                                elementType:'GridPresent',
                                parentWidth: undefined,
                                nrOfChildren: 10,
                                parentWidth: 400,
                                parentStyle: {
                                    borderRadius:'50%',
                                    gridTemplateColumns: 'repeat(20, 1fr)',
                                    gridTemplateRows: 'repeat(20, 1fr)'
                                },

                                childStyle:{
                                    borderRadius: '50%',
                                    fontSize: '15px',
                                    lineHeight:'unset',
                                    verticalAlign: 'top'
                                },
                                grandChildStyle:{
                                    position:'relative',
                                    top: '-12px'
                                },
                                childByIndexStyle:{
                                    0: {gridColumnStart: 1,  gridColumnEnd: 21, gridRowStart: 1, gridRowEnd:  21, backgroundColor: 'white', color:'black'},
                                    1: {gridColumnStart: 2,  gridColumnEnd: 20, gridRowStart:  2, gridRowEnd:  20, backgroundColor: 'black'},
                                    2: {gridColumnStart: 3,  gridColumnEnd: 19, gridRowStart:  3, gridRowEnd:  19, backgroundColor: 'white', color:'black'},
                                    3: {gridColumnStart: 4,  gridColumnEnd: 18, gridRowStart:  4, gridRowEnd:  18, backgroundColor: 'black'},
                                    4: {gridColumnStart: 5,  gridColumnEnd: 17, gridRowStart:  5, gridRowEnd:  17, backgroundColor: 'white', color:'black'},
                                    5: {gridColumnStart: 6,  gridColumnEnd: 16, gridRowStart:  6, gridRowEnd:  16, backgroundColor: 'black'},
                                    6: {gridColumnStart: 7,  gridColumnEnd: 15, gridRowStart:  7, gridRowEnd:  15, backgroundColor: 'white', color:'black'},
                                    7: {gridColumnStart: 8,  gridColumnEnd: 14, gridRowStart:  8, gridRowEnd:  14, backgroundColor: 'black'},
                                    8: {gridColumnStart: 9,  gridColumnEnd: 13, gridRowStart:  9, gridRowEnd:  13, backgroundColor: 'white', color:'black'},
                                    9: {gridColumnStart: 10, gridColumnEnd: 12, gridRowStart:  10, gridRowEnd: 12, backgroundColor: 'black'},

                                },
                            },  
                        ]
                    }
            },



            




        ] // items
    } // content
} //gridTemplateColumnContent





export default function getGridTemplateRowColumnContent(){
return gridTemplateRowColumnContent;
}