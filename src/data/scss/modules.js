
let data =     {
    summary: 'scss modules',
    title: 'scss modules',
    searchKeywords:`
    color list map math meta selector string
    `,
    cathegory: 'scss',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Scss build in modules'
                },

                {
                    elementType: 'UnsignedList',
                    content: [
                        `A module is a scss file that is loaded to current file with the <code>@use</code> at-rule,`,
                        `Module files (libraries) should start their name with an underscore. This undersocre informs 
                        scss compiler, that the file is a module file, so it shuld be provided to other files on demand, and
                        not be compiled on its own without demand,`,
                        `The underscore is <b>only</b> in the name of the file. It will not be written in the <code>
                        @use "./someModule" with (bg-color: green)</code> module import line, or in the 
                        call of the module function: <code>@include someModule.my-mixin;</code>. In this case 
                        the file name is <code>_someModule.scss</code>,`,
                    ]
                    
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

export default function getScssModulesData(){
    return data;
}