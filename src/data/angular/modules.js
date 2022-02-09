
let data =     {
    summary: 'angular modules',
    title: 'Angular modules',
    searchKeywords:`

    `,
    cathegory: 'angular',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Modules in angular'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    A module is something, that might be compared to a library. It consists of classes, services, 
                    pipes, components and directives, that are bound together to form some kind of a logical 
                    entity. 
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    A module should import all modules and components it uses. Module is made from a class with a 
                    <code>@NgModule</code> decorator. Such a module takes an object as an attribute. This object has, 
                    among the others, below properties:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>declarations</code>: a set of pipes, components and directives belonging to this module,`,
                        `<code>providers</code>: a set of injectable objects, that are available in the injector of the module.
                        This are the services. A service imported and listed in this field in the root module becomes <code>a
                        singleton</code> by default, and can be injected to a component by giving it as a argument for the
                        component constructor.`,
                        `<code>imports</code>: the set of NgModules whose exported declarables will be available to the 
                        module,
                        `,
                        `<code>exports</code>: the set of components, directives and pipes that the module wants to be public,
                        available in other modules using the module,`,
                        `<code>entryComponents</code>: the set of components that will be dynamicly loaded to the view, when 
                        the module compiles.`,
                        `<code>bootstrap</code>: the set of comonents that are bootstrapped when this module is bootstrapped.
                        These components are automatically added to the <code>entryComponents</code>`
                    ]
                },
                {
                    elementType: 'SmallHeadline',
                    content: `
                    Services
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Services provided in the root module, are by default singletons. There is a way not to create a 
                    singleton, but this requires lasy-loading the module. Lazy loaded services are scoped to teh lazy-loaded
                    module injectrl.
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
                    content:'angular.io',
                    href: 'https://angular.io/api/core/NgModule',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getTemplateData(){
    return data;
}