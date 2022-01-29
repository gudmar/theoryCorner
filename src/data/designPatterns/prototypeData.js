// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'prototype design pattern',
    title: 'prototype design pattern',
    searchKeywords:`
    `,
    cathegory: 'DesignPatterns',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Prototype'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    There is a prototype chain in JS, however this design pattern, except for name, has nothing in common 
                    with prototype inheritance.
                    `
                },


                {
                    elementType:'Headline-2',
                    content:'Description'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    This design pattern is a <b>constructional</b> design pattern. This means that its purpose is to 
                    create an object. In this meaning, a prototype is an object that is the prototype for other 
                    objects of its type. So the prototype is an object having information needed to create other 
                    objects of a certain type. Normally an object is created with a <code>new</code> operator, 
                    and properties of the created object can be set with attributes of the constructor.
                    However, if an object that needs to be created is complex and has many attributes that need
                    to be set, then passing them with attributes may not be comfortable. If there is only one 
                    default variation of the needed object, then default values may be hard-coded in the object itself.
                    In case there are a few variations of the needed object, then it would not be convenient
                    to hard-code all variations in the constructor. In general, hard-coding any variation of the
                    object in the constructor is not the best idea.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    In case there are a few variations of the object with a lot of attributes that need to be set needed,
                    it would be good to keep data related to those variations in recipes. These recipes are called 
                    prototypes.
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'Understanding: examples'
                },
                {
                    elementType:'Headline-3',
                    content:'Example 1: car dealer'
                },
                {
                    elementType:'SmallHeadline',
                    content:'A problem'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    A car dealer seals new cars. Lets considered a single model for simplicity. This car model can be described
                    with a set of parameters like: car-body type, engine type, engine power, engine torque, gearbox type,
                    color, electric or manual windows, air conditioning, climatronik, airbag for driver,
                    airbag for passengers, heated mirrors, electric or manual mirrors, etc. 
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    This car model comes in a few versions. Let us say: Basic, Comfort, Elegance and Prestige.
                    Each car version has some limitations. For example, the most powerful engine, will not be
                    available in the Basic version, and the manual windows and mirrors will not be available 
                    in the Prestige version. However, there are some things that may be customized in each version.
                    There are always a few engines to chose from, color may be selected, etc. 
                    A client selecting a Basic version will have a formula filled by default with the cheapest car
                    version for the start, and will be able to purchase more options. The customer that selected
                    Prestige version will start by default with the most expensive version possible, and will be 
                    able to reduce cost by selecting more reasonable equipment.
                    `
                },

                {
                    elementType:'SmallHeadline',
                    content:'Solution'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    There are four car model versions, and the order form for each of them has to start with 
                    different default settings. This is the great place for the prototype pattern.
                    `
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
class OrderForm extends HTMLElement{
    constructor(prototype){
        this.model = prototype.model ?? 'modelA';
        this.engine = prototype.engineType ?? '2.0 Boxer SOHC 136HP';
        this.drive = '4x4';
        this.color = prototype.color ?? 'silver';
        this.driverAirbag = true;
        this.passengerAirbag = prototype.passengerAirbag ?? false;
        this.electircMirrors = prototype.electricMirrors ?? false;
        ...
        this.shadowRoot = this.attachShadow({mode:'open'});
        ...
    }
    connectedCallback(){
        // logic
    }
    attributeChangedCallback(){}
    ...
}
</pre>
<div class="note">
    Now the prototypes:
</div>
basicPrototype = {
    model: 'modelA', engine: '2.0 Boxer SOHC 136HP', this.color = 'white',
    this.passengerAirbag = true, this.electricMirrors = true, ....
}
...
prestigePrototype = {
    model: 'modelA', engine: '3.0 Boxer 245HP 297Nm', this.color = 'blue',
    this.passengerAirbag = true, this.electricMirrors = true ...
}
                   `
                },
                {
                    elementType:'Headline-3',
                    content:'Example 2: web page building'
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
                        `There should be an object (component) that may be customized by the page content,`,
                        `Data may be passed in JSON notation. For example, an array of objects, each object in the
                        array has its type and content specified,`,
                        `The component object is customized with the data delivered in the JSON,`,
                        `Despite the factory pattern visible here, the JSON like object describing the 
                        page content will be the prototype.`
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

export default function getPrototypeData(){
    return data;
}