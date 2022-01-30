// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'factory design pattern',
    title: 'factory design pattern',
    searchKeywords:`
    `,
    cathegory: 'DesignPatterns',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'A factory'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    A creational design pattern. Means that its purpose is to create objects.
                    A factory is an object, allowing to construct one of a few objects supported by the factory.
                    Like in a real world, if there is a musical instrument factory, it will most likely 
                    be capable of producing an acoustic guitar, an electric guitar, a dobro guitar, a bass guitar, a 
                    ukulele and some other items, depending on the order.
                    `
                },


                {
                    elementType:'Headline-2',
                    content:'Understanding'
                },
                {
                    elementType:'Headline-3',
                    content:'Example: building a web page'
                },
                {
                    elementType:'paragraph',
                    content:`
                    As described in the prototype design pattern article, a web page must present content in the consistent
                    way. In other words paragraphs, headlines, image presentation should be done in the similar manner.
                    That is why such a page will most likely consist of a few components that may be repeated over the 
                    page. Example components are: a paragraph, a headline, an image, an article, a section element.
                    Article and section elements are wrappers for paragraphs, images and headlines. The content would
                    be described with a JS object having a type and a content properties.
                    `
                },
                {
                    elementType:'paragraph',
                    content:`
                    In above example there will be an array of JS objects. Each object would have a type property.
                    This type property would be passed to the factory, and the object depending on the type would be 
                    returned.
                    `
                },
                {
                    elementType:'paragraph',
                    content:`
                    Please refer to the prototype design pattern article to see an example.
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'Example: function factory'
                },
                {
                    elementType:'paragraph',
                    content:`
                    Let's suppose there is some data presented in a table. This data may be saved by the user to 
                    one of filetypes: csv, xlsx, html, xml, json. The function factory is a function 
                    returning funcions, that will be capable of converting the data to the desired type.
                    Let's not worry with the functions implementation, just lets see how the factory structure
                    may look like:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
function tableDataToCsv(tableData){}

function tableDataToXlsx(tableData){}

function tableDataTohtml(tableData){}

function tableDataToXml(tableData){}

function tableDataToJSON(tableData){}

function getDataFromTable(cssSelector){}

function saveDataToAFile(data) {}

function tableDataConversionFunction(targetDataType){
    let functionStorage = {
        'csv': tableDataToCsv,
        'xlsx':tableDataToXlsx,
        'html':tableDataToHtml,
        'xml' :tableDataToXlsx,
        'JSON':tableDataToJSON
    }
    return functionStorage[targetDataType];
}

saveDataOnclick(tableCssSelector){
    let data = getDataFromTable(tableCssSelector);
    let targetDataType = document.querySelector('#dataTypeInput').value;
    let convertedData = tableDataConversionFunction(targetDataType);
    saveDataToFile(data);
}
</pre>                    
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
                    content:'refactoring guru',
                    href: 'https://refactoring.guru/pl',
                    description:'Tutorial'
                },
                {
                    elementType:'Paragraph',
                    content:'<i>Design patterns</i> by Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides'
                },
                
            ]
        }
    ]
};

export default function getFactoryData(){
    return data;
}