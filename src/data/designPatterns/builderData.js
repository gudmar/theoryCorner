// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'Builder',
    title: 'Builder',
    searchKeywords:`
    `,
    cathegory: 'DesignPatterns',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Builder'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    A construction design pattern. Target object is being constructed in stages. When class from which target
                    object will be constructed is designed, it is not known how the final instance will look like. 
                    The structure of the final product is rather complicated. A good example of such a design pattern would be a 
                    web-page. 
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'Example : web page building'
                },
                {
                    elementType:'SmallHeadline',
                    content:'Problem'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    A web page should have some content displayed in a consistent way. In other words,
                    a paragraphs should have the similar look and behavior, the same with headlines,
                    images, cards and other components. Web page content should be easy to modify or add.

                    `
                },

                {
                    elementType:'SmallHeadline',
                    content:'Solution'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `There should be an object (component) that may be customized by the page content data,`,
                        `Data may be passed in JSON notation. For example, an array of objects, each object in the
                        array has its type and content specified,`,
                        `The component object is customized with the data delivered in the JSON,`,
                        `Page content may be modified, added later when user interacts with the page,`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Below example demonstrates how DOM elements may be created in pure JS to make a web page 
                    from a JavaScript object. The side you are reading at the moment is pure SPA front end
                    web page served only by a static file server. It is created in React, but works 
                    in the similar way. There is an JS object holding the page content, and a component 
                    capable of adjusting itself to the prototype content. 
                    As there is an array of articles, each array element may be considered a prototype.
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
class ContentCreator{
    getParagraph(content){
        let element = document.createElement('p');
        element.classList.add('someClass');
        element.innerHTML = content;
        return element;
    }
    getHeadline(content){
        let element = document.createElement('h1');
        element.classList.add('someClass_2');
        element.innerHTML = content;
        return element;
    }
    getImage(content){
        let element = document.createElement('img');
        element.setAttribute('src', content.src);
        element.setAttribute('alt', content.alt);
        element.classList.add('someClass_3');
        return element;
    }
    getArticle(content){
        let element = document.createElement('article');
        this.fillWrapperWithElements(element, content);
        return element;
    }
    getSection(content){
        let element = document.createElement('section');
        this.fillWrapperWithElements(element, content);
        return element;
    }
    fillWrapperWithElements(wrappingElement, contentAsArray){
        for (let item of contentAsArray){
            let element = elementFactory(item.type, item.content);
            wrappingElement.appendChild(element);
        }
    }
    elementFactory(type, content){
        if (type === 'paragraph') return this.getParagraph(content);
        if (type === 'headline') return this.getHeadline(content);
        if (type === 'image') return this.getImage(content);
        if (type === 'section') return this.getSection(content);
        if (type === 'article') return this.getArticle(content);
        throw new Error(type + ' is not supported');
    }
    placeContentInOutlet(outletCssSelector, content){
        let outlet = document.querySelector(outletCssSelector);
        this.fillWrapperWithElements(outlet, content);
    }
}
</pre>                    
<div class="note">
Now for some prototypes:
</div>
<pre>
let contentExample = [
    {
        type:'article',
        content:[
            {
                type:'section',
                content:[
                    {
                        type:'headline',
                        content: 'Lorem ipsum:'
                    },                    
                    {
                        type:'paragraph',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },
                    {
                        type:'image',
                        content: {
                            src: '../public/lorem.jpg',
                            alt: 'ipsum ipsum'
                        }
                    }

                ]
            }
        ]
    }
]
</pre>
<div class="note">
And usage
</div>
<pre>
let creator = new ContentCreator();
creator.placeContentInOutlet('#outlet', contentExample1)
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

export default function getBuilderData(){
    return data;
}