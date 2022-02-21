import  getTsDecoratorData  from './ts/decorators'

let theoryDataTs = [
    getTsDecoratorData(),
    {
        summary: 'types',
        title: 'types',
        cathegory: 'TS',
        searchKeywords: 'boolean number string array tuple enum unknown any void null undefined never object array',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'Validating a form with HTML'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
            
                        `
                    }
                ]
            },
        ]
    },
    {
        summary: 'unions',
        title: 'unions',
        cathegory: 'TS',
        searchKeywords: 'unions',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'Unions'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
            
                        `
                    }
                ]
            },
        ]
    },
    {
        summary: 'interfaces',
        title: 'interfaces',
        cathegory: 'TS',
        searchKeywords: 'interfaces',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'Interfaces'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
            
                        `
                    }
                ]
            },
        ]
    },
    {
        summary: 'decorators',
        title: 'decorators',
        cathegory: 'TS',
        searchKeywords: 'decorators',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'Decorators'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
            
                        `
                    }
                ]
            },
        ]
    },
]
export function getTheoryDataTs(){
    return theoryDataTs;
}
