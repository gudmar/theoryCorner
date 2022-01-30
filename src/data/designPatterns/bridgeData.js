// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'bridge design pattern',
    title: 'bridge design pattern',
    searchKeywords:`
    `,
    cathegory: 'DesignPatterns',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Bridge'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    A structural design pattern. Means it shows a way to combine objects into bigger structures without
                    losing flexibility. This pattern is similar to an abstract factory object in a way. It is abstract in
                    the same way. It will not create an object, but will provide an abstract interface to use an object 
                    of the certain type. Consider a car. No matter what car you are driving, most of them have 
                    similar interfaces. So if you drove one, you most probably be able to use more of them.
                    `
                },

                {
                    elementType:'Headline-2',
                    content:'Understanding'
                },
                {
                    elementType:'Headline-3',
                    content:'Paint application'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    A paint application can draw: circles, triangles, lines, rectangles and paths. All those 
                    objects are figures, and have a lot of functionalities in common. A figure will have below methods:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>draw</code>`, `<code>redraw</code> in case it is resized, old figure must be erased, and 
                        new will be created,`,
                        `<code>delete</code> used by the redraw,`, `<code>changeFill</code>`, `<code>changeStroke</code>`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    All those methods will be similar to all shapes. The path will have to have redraw altered,
                    it will not delete older objects, just add next points to the path, but this is nothing 
                    to worry about while implementing a bridge pattern, as bridge itself is an abstract 
                    class, not knowing the implementation details.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Now more figures may be added only by creating the implementation. No need to 
                    change the legacy code.
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

export default function getBridgeData(){
    return data;
}