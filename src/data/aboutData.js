let aboutData = [
    {
        elementType: 'Article',
        content: [
            {
                elementType: 'Headline',
                content: 'Welcome to theory corner'
            },
            {
                elementType: 'Title',
                content: 'By Marek Gudalewicz'
            },
            {
                elementType: 'Paragraph',
                content:`
                    This is a set of articles I prepared as a repetition during my interview preparation. This is also my first
                    react project. You may read a short description of a few topics related to frontend, and take a test in quiz 
                    section. Enjoy.
                `
            },
            {
                elementType: 'Paragraph',
                content:`
                A DictionaryComponent may be usefull, with a seartch feature,
                `
            },
            {
                elementType: 'UnsignedList',
                content:[
                    `webkit: an opensource browser engine used mainly in apple apps: https://webkit.org/`,
                    `webpack: a buldler, packing all modules and files into a single file when the application is build,`,
                    `babel: a translator. Translates the code to make it compatible with older browsers. Translates 
                    JSX to JS,`,
                    `browserlist: may be found in package.json, indicates what browsers should be supported: 
                    https://github.com/browserslist/browserslist`,
                ]
            }
        ]
    }
]

export function getAboutData(){
    return aboutData;
}