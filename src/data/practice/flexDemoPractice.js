
let flexDemoData =     {
    summary: 'flexbox demo',
    title: 'flexbox demo',
    searchKeywords: '',
    cathegory: 'Test components',
    content: [
        {
            elementType:'Headline-2',
            content:'Flexbox sandbox'
        },
        {
            elementType:'Paragraph',
            content:`You may test how properties of the flexbox work`
            
        },
        {
            elementType:'FlexDemo',
            content:[
            ]
        },


    ]
};

export default function getFlexDemoData(){
    return flexDemoData;
}