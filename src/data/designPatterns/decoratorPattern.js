// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'decorator',
    title: 'Decorator design pattern',
    searchKeywords:`
    `,
    cathegory: 'DesignPatterns',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Decorator design pattern'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    The decorator design pattern is a <strong>structural</strong> type of a design pattern. 
                    Sturctural patterns make it possible to bind, communicate objects in a most possible flexible way.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    The decorator is often referred to as a <strong>wrapper</strong> because it wraps the given 
                    element. Without changing the original object, it adds some extra functionality.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    It may be used for:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `Wrapping a HTMLElement (component) in another HTML wrapper (example 1),`,
                        `Adding a functionality to a function (example 2),`,
                        `Extending a class, changing class in some way,`,
                        `Adding some functionality to a parameter or attribute. For example, it could change 
                        a parameter descriptor (sealing an object given as an argument),`,
                        `Great for extracting a functionality that may be applied to a lot of functions, classes etc.
                        Please see example 2. There is a performance measurement functionality that may be applied to 
                        a lot of functions. A good example of a decorator, as it does not change measured object, but
                        adds extra performance measurement. Thanks to usage of the decorator pattern, this may be applied
                        to a lot more functions without repeating the code.`
                    ]
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    In JS there is no support for decorators at the moment (like in TS, Python). There is only 
                    an experimental feature that may not be safely used in the production. However, the 
                    design pattern may be used without a decorator syntax (<code>@someDecorator wrappedObject</code>), as 
                    any function or parameter may be wrapped in a function in JS (<code>someDecorator(wrappedObject)</code>).
                    `
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    There is a decorator syntax support in TS. It is still described as experimental (01.02.2022). However,
                    a lot of production code already uses it (for example Angular). It may be assumed that it is already
                    safe to use.
                    `
                },

                {
                    elementType:'Headline-2',
                    content:'Understanding'
                },
                {
                    elementType:'Headline-3',
                    content:'Example 1: HTML element wrapper.'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        It is common to wrap an HTMLElement inside another element. For example, 
                        put an element inside a modal, or in a wrapper that would limit large elements size and add
                        overflow to them. Sometimes it is needed to wrap an element inside different wrappers 
                        with different behavior.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Below solution uses custom web components to create a wrapper. A slot may be used to 
                        display one element inside another. However, if slot is used, the actual element will be 
                        in DOM tree not directly where the slot outlet is placed, but in the neighbourhood.
                        Wrapped element may be placed as a child of the wrapper, 
                        (<code>&lt;wrapper>&lt;wrapped>&lt;/wrapped>&lt;wrapper></code>), the inner html of the 
                        wrapper would be taken by the CWC logic, and placed inside shadow DOM. Then a mutation
                        observer may be used to watch for innerHTML of the CWC change. However, this solution 
                        is not described in any tutorial, and would be probably not recommended.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        In most cases however JS is used anyway to place the content, so an <code>addWrappedContent</code>
                        method was added to the Modal class. It is given one argument, and element that will be wrapped.
                    `
                },

                 {
                    elementType:"Code",
                    content:`
                    <div class='note'>
                        Let's create a dummy element that will be wrapped in the modal element
                    </div>
<pre>
class WrappedComponent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        let template = document.createElement('template');
        template.innerHTML = this.getWrappedContent(this.getText());
        let content = template.content.cloneNode(true);
        this.shadowRoot.appendChild(content);
    }
    getWrappedContent(text){
        return \`
        &lt;style>
            .wrapped-wrapper{
                position:relative;
                width:200px;
                padding: 10px;
                background-color:#999;
                color:white;
            }
        &lt;/style>
        &lt;div class="wrapped-wrapper">
            \${text}
        &lt;/div>
        \`
    }
    getText(nrOfRepetitions = 100){
        let output = '';
        for (let i = 0; i < nrOfRepetitions; i++){
            output += 'Lorem ipsum'
        }
        return output;
    }
}

window.customElements.define('wrapped-element', WrappedComponent);
</pre>                   

<div class='note'>
    Now let's create a <code>element-wrapper</code> - a modal that displays the wrapped content
</div>
<pre>
class Modal extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        let template = document.createElement('template');
        template.innerHTML = this.getHTMLAsString();
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    getHTMLAsString(){
        return \`
        &lt;style>
            .shutter{
                position:absolute;
                width: 100vw;
                height: 100vh;
                background-color: rgba(50,100,50,0.5);
                left:0; top:0;
            }
            .content-outlet{
                position:relative;
                display: inline-block;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                height: 200px;
                overflow: auto;
            }
        &lt;/style>
        &lt;div class="shutter">
            &lt;div class="content-outlet">
                
            &lt;/div>
        &lt;/div>
        \`
    }
    addWrappedContent(htmlElement, uniqueId = null){
        let outlet = this.shadowRoot.querySelector('.content-outlet');
        if (uniqueId !== null) htmlElement.id = uniqueId;
        outlet.appendChild(htmlElement);
    }
    removeWrappedContent(uniqueId){
        let element = this.shadowRoot.querySelector('#' + uniqueId);
        this.shadowRoot.removeChild(element);
    }
}

window.customElements.define('element-wrapper', Modal);
</pre>
<div class="note">
    And functions placing the element in the element with class <code>outlet</code>
</div>
<pre>
function getElementInModal(itemToWrap){
    
    let modal = document.createElement('element-wrapper');
    modal.addWrappedContent(itemToWrap);
    return modal;
}

function placeWrappedElement(){
    let wrappedElement = document.createElement('wrapped-element');
    let outlet = document.querySelector('.outlet');
    let modal = getElementInModal(wrappedElement);
    outlet.appendChild(modal);
    outlet.appendChild
}
placeWrappedElement();
</pre>
                    `
                    
                },
           
           
                {
                    elementType:'Headline-3',
                    content:'Example 2: Wrapping a function'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        If there is a common functionality such as calculating function performance, or logging 
                        something before  and after the function execution, it is a good idea to extract this 
                        functionality to a decorator class. In this way the original class will not be modified, and 
                        the functionality may be applied to more than just one function.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Below example shows a <code>decorateClass</code>, taking a target class and a 
                        function that is the decorator. It returns an extended class that has the 
                        decorator function applied to each prototype method.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        The <code>decoratorFunction</code> should return a result.
                    `
                },
                {
                    elementType:'Code',
                    content:`
<div class="note">
    Below is a sample test class that will be wrapped (a target of the decorator). The target class creates an array
    of elements from 1 to the number given as a constructor argument, and supports methods for calculating a 
    multiplication of all number from the array, sum of all elements in array and the rest of all elements of the array.
    Perhaps not a very practical example, but does a lot of operations, so the measured performance is greater than 0.
</div>             
<pre>
class decoratorTest{
    constructor(nr){
          this._createArray(nr);
    }
    _createArray(nr){
        let outlet = [];
        for(let i = 1; i <= nr; i++){
            outlet.push(i);
        }
        this.arr = outlet;
    }
    operationFacotry(){
        return {
            sum: function(prevItem, item, index){
                return prevItem += item;
            },
            multiply: function(prevItem, item, index){
                return prevItem *= item;
            },
            rest: function(prevItem, item, index){
                return prevItem %= item;
            },
        }
    }
    makeOperation(type){
        let fun = this.operationFacotry()[type];
        return this.arr.reduce(fun)
    }
    multiply(){return this.makeOperation('multiply')}
    sum(){return this.makeOperation('sum')}
    rest(){return this.makeOperation('rest')}
}
</pre>           
<div class="note">
Now the generic <code>decorateClass</code> function, taking a class that methods will be decorated, and a 
function that will wrap each target class method:
</div>
<pre>
function decorateClass(target, decoratorFunction = (targetMethod)=>{return targetMethod}){
    class Extended extends target{
        constructor(props){
            super(props);
        }
    }
    let targetProto = Object.getPrototypeOf(Extended.prototype);
    let keys = Object.getOwnPropertyNames(targetProto);
    let targetMethods = [];
    for (let key of keys){
        if (key !== '__proto__'){
            targetMethods.push({
                name: key,
                body: targetProto[key]
            })
        }
    }
    for(let method of targetMethods){
        Extended.prototype[method.name] = decoratorFunction(method.body);
    }
    return Extended;
}
</pre>
<div class="note">
    And the decorator function: calculates performance of wrapped function:
</div>
<pre>
function measurePerformance(method){
    let startTime = performance.now();
    let methodResult = method
    let endTime = performance.now();
    console.log(\`performance of : \${method.name} = \${endTime - startTime}\`);
    return methodResult;
}
</pre>
<div class="note">
    Let's call decorated class:
</div>
<pre>
let calssWithPerformance = decorateClass(decoratorTest, measurePerformance);
let testInstance = new calssWithPerformance(100);
console.log(testInstance.multiply());
console.log(testInstance.sum());
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

export default function getDecoraotrData(){
    return data;
}