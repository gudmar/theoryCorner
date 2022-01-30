// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'abstract factory design pattern',
    title: 'abstract factory design pattern',
    searchKeywords:`
    `,
    cathegory: 'DesignPatterns',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Abstract factory'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    An abstract factory is more an interface than the factory itself. The word abstract means, that
                    there is no implementation, only interfaces. Using an abstract factory pattern allows one to 
                    make a more flexible application, as concrete factory implementations may be delivered later.
                    In case one implementation more is needed in the future, there will be just a need to create an additional
                    factory implementation without any changed to the legacy code.
                    `
                },

                {
                    elementType:'Headline-2',
                    content:'Understanding'
                },
                {
                    elementType:'Headline-3',
                    content:'Examples: paint application'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    There is a paint application allowing to sketch a vector graphic or a raster one. 
                    The application uses a factory responsible for constructing a figure. The factory has below 
                    set of products:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Circle`,'Triangle', 'Rectangle', 'Path', 'Line'
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Of course each product would be of a figure type, and each figure would have a set of methods 
                    allowing to draw, resize, change color, change fill and so on. However, bringing abstraction to the
                    structure of the factory product is not a bridge pattern.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    An abstract factory will not hold any product implementation, as this implementation may change.
                    For instance there will be a different implementation for the raster and different for the 
                    vector representation. 
                    `
                },
                {
                    elementType:'Code',
                    content:`
                    <pre>
                    <div class="note">
                        Below class has no implementation. Instead, it takes an object with implementation and
                        concrete interface, a type of the desired shape and returns a method capable of creating
                        the shape. A svg and canvas implementations of the shape drawer may be given to this 
                        factory as an argument and the factory will return the concrete method. Later a next
                        implementation: for example shapes drawn with ASCII symbols may be added with 
                        no additional legacy code refactoring.
                    </div>
function abstractShapeFactory(implementation, shapeType){
    let productStorage = {
        'circle': implementation.circle,
        'triangle': implementation.triangle,
        'rectangle': implementation.rectangle,
        'path': implementation.path,
        'line': implementation.line
    }
    return productStorage[shapeType];
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

export default function getAbstractFactoryData(){
    return data;
}