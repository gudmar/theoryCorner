// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'custom web components',
    title: 'Custom web components',
    searchKeywords:` cwc slot template slotted host :host :slotted :defined
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Custom web components'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    Encapsulation: closing some functionalities in one class or function. Test this class, and be
                    sure it works as expected. This is a powerful tool for keeping the code clean. 
                    One of the approaches to encapsulation is building web components. They are pieces of code 
                    having their view representation bound to some logic. This could be compared to html
                    <code>input</code> button. We cannot access its internal, but it works good, its behavior 
                    may be changed with properties.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Pure JS makes it possible to close a component in a single class. It not only has an HTML
                    structure and logic bound. It closes its CSS so it will not interfere with the rest pages 
                    CSS. It may use something called a <strong>shadow DOM</code>, a part of the DOM that is closed
                    for the outsie word. Its internals can not be found with simple DOM searching methods, and
                    its CSS is separated from the outside world. 
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    The developer just selects a custom HTML tag (having at least 2 words separated with a dash), and
                    may use this tag in HTML to insert a custom web component.
                    `
                },

                {
                    elementType: 'SmallHeadline',
                    content: `A glosary
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>CWC</code>: a Custom Web Component, technology allowing the definition of such a component,`,
                        `<code>host</code> or <code>CWC host</code>: an element that is registered with 
                        the <code>window.customElements.define</code> method, and is the host of the shadow-DOM,`,
                        `<code>shadow-DOM</code> the part of the DOM that is separated from the <q>light</q> DOM
                        and cannot be easily accessed with the document.getElementById or document.querySelector methods.
                        CSS inside the shadow root does not impact outside world, and this CSS from the outside world does
                        not infuence the shadow DOM CSS,`
                    ]
                },

                {
                    elementType:'Headline-2',
                    content:'Structure'
                },

                {
                    elementType:'UnsignedList',
                    content:[
                        `Is a class that extends an <code>HTMLElement{}</code> or any build-in element like 
                        <code>HTMLParagraphElement</code>, <code>HTMLDivElement</code>, 
                        <code>HTMLCanvasElement</code>, <code>HTMLBodyElement</code>, <code>HTMLFormElement</code>`,
                        `The custom web component needs to be registered in the <code>window.customElements</code> register
                        with the <code>window.customElements.define('element-tag', className[, {extends: 'p'}], where 
                        the extends takes the tag name of the element that is extended, if the web component does 
                        extend a concrete element, not an <code>HTMLElement</code>`,
                        `Has lifecycle methods, like the <code>constructor</code>, <code>connectedCallback</code>,
                        <code>attributeChangedCallback(attrName, oldVal, newVal)</code>, <code>disconnectedCallback</code>,
                        <code>adoptedCallback</code>`,
                        `Can use a template with styling and HTML structure to describe the view of the component`,
                        `Can use <code>&lt;slot></code> elements to input some content from the outside world,`
                    ]
                },

                {
                    elementType:'Headline-3',
                    content:'Lifecycle methods'
                },
                {
                    elementType:'SmallHeadline',
                    content:'constructor()'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `An instance is upgraded or created`, `use <code>super()</code>`,
                        `Initializing state,`, `setting up event listeners`, `Creating a shadow DOM`,
                        `The <code>return</code> should not be used except for an early return of <code>this</code>`,
                        `Actual work should be placed in the <code>connedtedCallback</code>`,
                        `<code>document.open()</code> or <code>document.write()</code> should not be called here`
                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:'connectedCallback'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Invoked every time the component is added to the DOM,`,
                        `It is called if an element is moved to another parent with an <code>element.appendChild(newParent)</code>
                        method,`,
                        `Communication with server or web workers here,`,
                        `Computations and work here,`, 
                        `Rendering,`,
                        `attributes and children should not be used here, to match <code>createElement()</code> or
                        <code>createElementNS()</code>`,
                        `The best place for accessing attributes to passed in the HTML tag,`,
                        `All operations referring to the DOM structure of creating web element here, as DOM becomes
                        available here,`
                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:'disconnectedCallback'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Called each time an element is removed from the DOM,`,
                        `Notify all other parts of the application that the element is being removed,`,
                        `Free resources that will not be cleared automatically,`,
                        `Unsubscribe from the DOM events,`,
                        `Stop interval timers,`,
                        `Unsubscribe, unregistered callbacks for global application services,`,
                        `This hook is not called if a user closes the tab`
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:'attributeChangedCallback(attrName, oldVal, newVal)'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Will be invoked each time a registered attribute (for example passed in the HTML) changes,`,
                        `Uses a <code>static get observedAttributes</code> getter to learn what attributes will be 
                        observed. This method returns an array of attributes: <code>return ['prop1, 'prop2']</code>`,
                        `BEWARE :). This should not be used together with a proxy or a mutation observer 
                        APIS, as a reaction to the same change will appear multiple times,`
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:'adoptedCallback'
                },

                {
                    elementType:'UnsignedList',
                    content:[
                        `This callback is triggered when the node is moved to another document object. This may 
                        take place when working with <code>iframe</code> objects,`
                    ]
                },
                {
                    elementType:'Code',
                    content:`
<pre>
const iframe = document.querySelector('#someFrame');
const elementToBeMoved = iframe.contentDocument.querySelector('#elementToBeMoved');
document.querySelector('#newParent').appendChild(document.adoptNode(elementToBeMoved))
</pre>                    
                    `
                    
                },




                {
                    elementType:'Headline-3',
                    content:'Setting the HTML and CSS content'
                },
                {
                    elementType:'Paragraph',
                    content:
                    `
                    The content should be set in the <code>connectedCallback</code>. The best way is to use a 
                    <code>template</code> element. This element is rendered only once and is not visible when placed in the 
                    main HTML file. It may be a good practice to create a separate HTML file for the template,
                    and separate from the logic, and place them in one (separate) folder, just like Angular does.
                    The template may have a <code>style</code> element with the CSS.
                    It is possible to add the template content in a <code>shadowRoot</code> element.
                    The shadow root should be attached in the constructor.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:
                    `
                    Usage of the custom web elements host inner HTML for setting content can be done with <code>&lt;slot></code>
                    elements. 
                    `
                },
                {
                    elementType:'Paragraph',
                    content:
                    `
                    Using the innerHTML of the custom web component host (like li elements inside ul) is not 
                    encouraged, because the custom web component API was not designed for that, but it is possible.
                    To do this:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `A <code>MutationObserver</code> should be used to watch for the changes in the custom 
                        web component innerHTML,`,
                        `<code>this.innerHTML</code> inside the custom web components class refers to the 
                        main element of the component (the registered HTML tag)`
                    ]
                },
                {
                    elementType:'Code',
                    content:`
<pre>
class CustomElement extends HTMLElement {
    constructor(){
        const observer = new MutationObserver(this.onInnerHTMLChange.bind(this))
        observer.observe(this, 
            {
                subtree: false, // no nested elements are observed
                childList: true // for inner HTML
            }
        )
    }
    onInnerHTMLChange() {
        this.message = this.innerHTML;
        try {
            // here this.innerHTML is available
        } catch (e) {
            // expected - at this moment modalMessageHolder is null;
        }
    }
}
</pre>                    
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:'HTML template example'
                },
                {
                    elementType:'Code',
                    content:`
                    <b>HTML</b>
<pre>
&lt;template id="sectionTemplate">
    &lt;style>
       h3{font-family:arial;}
       p{margin:5px;} 
    &lt;/style>
    &lt;div class="section">
        &lt;slot name="title">&lt;/slot>
        &lt;slot name="content">&lt;/slot>
    &lt;/div>
&lt;/template>
</pre>   

<b>JS</b>
<pre>
class SectionElement extends HTMLElement(){
    constructor(){
        super();
        this.shadowRoot = this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        let template = document.querySelector('#sectionTemplate');
        this.shadowRoot.appendChild(template.cloneNode(true)); // true for clonning with child elements;
    }
}

window.customElements.define('section-element', SectionElement)
</pre>  


<b>usage in HTML</b>
<pre>
&lt;section-element>
  &lt;h3 slot="title">Article section title&lt;/h3>
  &lt;p slot="title">Article section title&lt;/p>
&lt;/section-element>
</pre>   
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'Slots'
                }, 
                

                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>&lt;slot></code> is an element placed inside the shadow DOM of the CWC,`,
                        `<code>&lt;slot></code> will receive content of the light DOM element that's <code>slot</code> attribute
                        matches the shadow DOM <code>&lt;slot></code> elements <code>name</code> attribute,`,
                        `It is important to state that attaching shadow root to the element hides all other HTML content, that 
                        was present inside this shadow host. The light DOM content is still available in the DOM, 
                        however it is not visible on the page,`,
                        `A <strong>slotted</code> element is the element that is placed inside the <code>&lt;slot></code> 
                        tag in the shadow DOM, so <code>::slotted(selector)</code> pseudo-class refers to the shadow DOM element,`,
                        `The HTML content corresponding to the slotted content is placed in the light DOM, in the place where 
                        an element with the <code>slot</code> attribute is defined. That is why the css matching the slot 
                        provider element will not target that element if placed in the shadow DOM`,
                        `Slots are elements that can be used only with the CWC`
                    ]
                }, 
                {
                    elementType: 'Image',
                    name: 'slot_outsideShadow.png',
                    alt: 'Slot source is placed outside shadow DOM'
                },
                {
                    elementType: 'SmallHeadline',
                    content:`Slot example`
                },

                {
                    elementType: 'Paragraph',
                    content:`Below example illustrates how slots work. There is a simple CWC with a function, that changes
                    its content once 2s`
                },

                {
                    elementType: `exampleInIframe`,
                    title: 'Slot example',
                    src: 'https://gudmar.github.io/theoryCornerExamples/slotExample.html'
                },

                {
                    elementType: 'Code',
                    content:`
                    <div class="note">
                    A HTML template for the CWC:
                    </div>
<pre>
&lt;template id="personData">
&lt;style>
    .not-shadow-list{
        background-color: yellow;
        color:black;
    }
    .wrapper{
        background-color:white;
        color:black;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 5px;
        width: 300px;
    }
    ::slotted(span){
        background-color:green;
        color:white;
        border-radius: 5px;
        padding: 3px;
        margin: 5px;
        font-weight: lighter;
    }
    .row{
        margin: 15px;
        font-weight: bold;
        background-color: lightgreen;
    }
&lt;/style>
&lt;div class="wrapper">
    &lt;div class="row">
        &lt;span class="label">Name: &lt;/span>
        &lt;slot name="name">John&lt;/slot>
    &lt;/div>
    &lt;div class="row">
        &lt;span class="label">Family name: &lt;/span>
        &lt;slot name="family-name">John&lt;/slot>
    &lt;/div>
    &lt;div class="row">
        &lt;span class="label">Data: &lt;/span>
        &lt;slot name="data">Na&lt;/slot>
    &lt;/div>
&lt;/div>
&lt;/template>
</pre>


                    <div class="note">
                    A CWC element:
                    </div>


<pre>
class PersonData extends HTMLElement{
    constructor(){
        super();
        let templ = document.querySelector('#personData');
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templ.content.cloneNode(true));
    }
}
window.customElements.define('person-data', PersonData);
</pre>
                    <div class="note">
                    A content generator:
                    </div>
<pre>

function replaceData(){
    let name = document.querySelector('[slot="name"]');
    let famName = document.querySelector('[slot="family-name"]');
    let data = document.querySelector('[slot="data"]');
    let newDataSetGetter = nextDataSetGetter();
    function replace(){
        // console.log(data.childNodes)
        
        
        let newDataSet = newDataSetGetter.nextValue();
        console.log(newDataSet.data)
        name.innerHTML = newDataSet.name;
        famName.innerHTML = newDataSet.familName;
        try{data.removeChild(data.childNodes[0]);}
        catch{};
        data.appendChild(newDataSet.data);
    }
    const int = setInterval(replace, 2000);
}

const dataSet = [
    {name: 'Genowefa', familName:'Bąk', data:getDataElement(0)},
    {name: 'Janusz', familName:'Bąkiewicz', data:getDataElement(1)},
    {name: 'Eleonora', familName:'Bąkowska', data:getDataElement(2)},
]
function getDataElement(nr){
    const data = [
        ['Age: 32', 'ShoeSize: 43', 'EyeColor: blue', 'Height: 168cm'],
        ['Age: 59', 'ShoeSize: 52', 'EyeColor: gray', 'Height: 188cm'],
        ['Age: 25', 'ShoeSize: 40', 'EyeColor: green'],
    ]
    let list = document.createElement('ul');
    list.classList.add('not-shadow-list')
    let dataSet = data[nr];
    for(let dataBit of dataSet){
        let li = document.createElement('li');
        li.innerHTML = dataBit;
        list.appendChild(li);
    }
    console.log(list)
    return list;
}
function nextDataSetGetter(arr = dataSet){
    let iterator = function(){
        let nextIndex = -1;
        return {
            next: ()=>{
                nextIndex++;
                if (nextIndex >= arr.length) nextIndex = 0;
                console.log(nextIndex)
                return{
                    value: arr[nextIndex],
                    done: false
                }
            }
        }
    };
    let iteratorInstance = iterator();
    function getNext(){return iteratorInstance.next().value}
    return {
        nextValue: getNext
    } 
}
replaceData();
</pre>                    
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'Styling'
                }, 

                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>:host</code> for selecting the CWC host,`,
                        `<code>:host:hover</code> for selecting a hovered CWC host`,
                        `<code>:host([disabled])</code> for selecting a hovered CWC host with the disabled attribute set to true`,
                        `<code>:host-context(.dark-theme)</code> the <code>:host-context</code> makes it possible to select a 
                        host element of the shadow DOM only, if it is the descendant of the element matching a selector given in brackets,
                        in this case if the ancestor of the host has class <code>dark-theme</code>. This is the right way to apply dark 
                        themes to the shadow DOM.`,
                        `The shadow-DOM host elements may be styled from the outside (but no influence on the interiors of the shadow DOM),
                        with a normal class or tag selectors: <code>my-custom-web-component{position...}</code>`,
                        `<code>custom-web-component:defined</code> will select a custom-web-component element if it is registered with the
                        <code>window.customElements.define</code> method. This element may appear in the HTML, but may be defined later with CSS,`,
                        `<code>custom-web-component:not(:defined)</code> this selects a custom-web-component if it is not defined. This is 
                        a good solution for hiding elements until they are registered with the <code>window.customElements.define</code>`,
                        `<code>::slotted(selector)</code> placed in the shadow root style. Will affect slotted elements,`,
                    ]
                },             

            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Clean code'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        There are some antipattens and patterns. Here the proper usage of the lifecycle methods
                        will not be repeated, but just some general rules regarding clean code will be reminded.
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `CWC should not touch elements that are outside it, no DOM modifications outside the host, 
                        no CSS modifications to elements outside the host,`,
                        `CWC should accept inputs <b>only<b> with the attributes, or optionaly with a mediator pattern, 
                        no other modifications to the CWC from the outside world,`,
                        `A component should never modify its attributes, so CWC should not modify its attributes,`,
                        `The proper way to communicate from CWC to the outside world is with the events dispatched on
                        the host element. Optionally the mediator pattern may be used,`,
                        `The CWC host CSS should not be manipulated from the outside, as it kills the encapsulation.
                        The exceptions could be to hide the CWC,`,
                        `Before using an attribute, check if it does not already exist, do not override,`,
                        `Before using a method name check if a property with the same name does not exist, do not override,`,
                        `A component should never apply classes to its self, so do not apply classes to a CWC element 
                        from the inside,`,
                        `Methods and variable names should be descriptive,`,
                        `Comments in the code should be newer used, code should speak of its self, comments get outdated and it
                        is difficult to track if they are still up to date,`,
                        `Methods short, doing one thing,`,
                        `No <i>if</i> or <i>or</i> or <i>and</i> used in method naming, as those tell that a method does more 
                        than one thing,`
                    ]
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
                    content:'GitHub',
                    href: 'https://github.com/mdn/web-components-examples/blob/master/element-details/index.html',
                    description:'slot example'
                },
                {
                    elementType:'Link',
                    content:'html spec whatwg org',
                    href: 'https://html.spec.whatwg.org/multipage/custom-elements.html',
                    description:'specification'
                },
                {
                    elementType:'Link',
                    content:'developers.google',
                    href: 'https://developers.google.com/web/fundamentals/web-components/customelements',
                    description:'Like a home web page'
                },
                {
                    elementType:'Link',
                    content:'custom-web-component.net',
                    href: 'https://custom-web-component.net/',
                    description:'Like a home web page'
                },
            ]
        }
    ]
};

export default function getCWCData(){
    return data;
}