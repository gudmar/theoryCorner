
let data = { summary: 'semantic elements',
title: 'semantic elements',
cathegory: 'HTML',
content: [
    {
        elementType:'Article',
        content:[
            {
                elementType:'Headline',
                content:'Semantic elements'
            },
            {
                elementType: 'Paragraph',
                content: `
    
                `
            }
        ]
    },
]
};

export default function getSemanticData(){
    return data;
}