
let data =       {
    summary: 'inputs',
    title: 'inputs',
    cathegory: 'HTML',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Input elements'
                },
                {
                    elementType: 'Paragraph',
                    content: `
        
                    `
                }
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
                    href: '#',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getInputsData(){
    return data;
}