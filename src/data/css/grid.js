import elementGenerator from '../../services/elementGenerator'
const eGenerator = new ElementGenerator();



let data =     {
    summary: 'Grid',
    title: 'Grid',
    searchKeywords:`

    `,
    cathegory: 'css',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Grid'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },

            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:''
                },
                {
                    elementType:'Paragraph',
                    content:`

                    `
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'References'
                },
                {
                    elementType:'Link',
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout',
                    description:'Index of elements'
                },
            ]
        }
    ]
};

export default function getGridData(){
    // eGenerator.addTask(id, nrOfElem, classes)
    // eGeneraotr.removeTask(id)
    // eGenerator.addEListener
    return data;
}