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






            ] // items
        } // content
    } //gridTemplateColumnContent





export default function getGridTemplateColumnContent(){
    return gridTemplateColumnContent;
}