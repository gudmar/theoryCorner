
let data =     {
    summary: 'angular bootstrapping',
    title: 'Angular bootstrapping',
    searchKeywords:`

    `,
    cathegory: 'angular',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Bootstrapping'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    Bootstrapping is a process of creating an Angular application from the code. The building process
                    may have two forms. A developement server creation, and compilation of the 
                    code to a production version.
                    `
                },
                {
                    elementType: 'SmallHeadline',
                    content: `index.html
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    There is a <code>index.html</code> file in the <code>src</code> folder. It is not a great secret, that it
                    contains no reference to a single file with any script that could change this html content.
                    `
                },
                {
                    elementType: 'SmallHeadline',
                    content: 'The entry point'
                    
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    <code>src/angular.json</code> file has a <code>projects/appName/architect/build/options/main</code>
                    path, where is a .ts file that is the entry point for the application. It is the <code>main.ts</code>
                    by default. This file is started when we run <code>ng serve</code>/<code>npm start</code> command, 
                    and this file imports the <code>app.module</code>, <code>environment</code> and some libraries 
                    relevant to the bootstrapping process. 
                    `
                },
                {
                    elementType: 'SmallHeadline',
                    content: `Bootstrapping`
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    A process of creating the firs component is called bootstrapping ?
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
                    href: ' ',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getBootstrappingData(){
    return data;
}