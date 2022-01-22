
let data =     {
    summary: 'custom web components',
    title: 'Custom web components',
    searchKeywords:`
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
                    sure it works as expected. This is a powerful tool for keeping code clean. 
                    One of approaches to encapsulation is building web components. They are pieces of code 
                    having their view representation binded to some logic. This could be compared to html
                    <code>input</code> button. We cannot access its internal, but it works good, its behavour 
                    may be changed with properties.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Pure JS makes it possible to close an component in a single class. It not only has a HTML
                    sturcture and logic binded. It closes its CSS so it will not interfere with the rest pages 
                    css. It may use something called a <strong>shadow DOM</code>, a part of DOM that is closed
                    for the outsied word. Its internals can not be found with simple DOM searching methods, and
                    its CSS is separated form the outside world. 
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
                        `<code>CWC</code>: a Custom Web Component, technolodgy allowint the definition of such a component,`,
                        `<code>host</code> or <code>CWC host</code>: an element that is registered with 
                        the <code>window.customElements.define</code> method, and is the host of the shadow-DOM,`,
                        `<code>shadow-DOM</code> the part of the DOM that is separated from the <q>light</q> DOM
                        and cannot be easly accessed with the document.getElementById or document.querySelector methods.
                        CSS inside shadow root does not impact outside world, and ths CSS from the outside world does
                        not infuance the shadow DOM css,`
                    ]
                },

                {
                    elementType:'Headline-2',
                    content:'Structure'
                },

                {
                    elementType:'UnsignedList',
                    content:[
                        `Is a class that extends a <code>HTMLElement{}</code> or any build-in element like 
                        <code>HTMLParagraphElement</code>, <code>HTMLDivElement</code>, 
                        <code>HTMLCanvasElement</code>, <code>HTMLBodyElement</code>, <code>HTMLFormElement</code>`,
                        `The custom web component needs to be registered in the <code>window.customElements</code> register
                        with the <code>window.customElements.define('element-tag', className[, {extends: 'p'}], where 
                        the extends takes the tag name of the element that is extended, if the web component does 
                        extend a concrete element, not a <code>HTMLElement</code>`,
                        `Has lifecycle methods, like <code>constructor</code>, <code>connectedCallback</code>,
                        <code>attributeChangedCallback(attrName, oldVal, newVal)</code>, <code>disconnectedCallback</code>,
                        <code>adoptedCallback</code>`,
                        `Can use a template with styling and HTML structure to describe the view of the component`,
                        `Can use &lt;slot> elements to input some content from the outside world,`
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
                        `<code>document.open()</code> or <code>document.write()</code> should not be caled here`
                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:'connectedCallback'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Invoced every time the component is added to the DOM,`,
                        `It is called if an element is moved to another parent with an <code>element.appendChild(newParent)</code>
                        method,`,
                        `Communication with server or web workers here,`,
                        `Computations and work here,`, 
                        `Rendering,`,
                        `attributes and children should not be used here, to match <code>createElement()</code> or
                        <code>createElementNS()</code>`,
                        `The good place for accessing attributes passed in the HTML tag,`,
                        `All operations referring to the DOM structure of created web element here, as DOM becomes
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
                        `Unsubscribe, unregister callbacks from global application services,`,
                        `This hook is not called if an user closes the tab`
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
                        `Uses a <code>static get observed attributes</code> method to learn what attributes will be 
                        observed. This method returns an array of attribs: <code>return ['prop1, 'prop2']</code>`,
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
                    and separate for the logic, and place them in one (separate) folder, just like Angular does.
                    The template may have a <code>style</code> element with the CSS.
                    It is possible to add the template content inside a <code>shadowRoot</code> element.
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
        this.shadowRoot = this.attachShadoe({mode:'open'});
    }
    connectedCallback(){
        let template = document.querySelector('#sectionTemplate');
        this.shadowRoot.appendChild(template.cloneNode(true)); // true for clonning with child elements;
    }
}

customElements.define('section-element', SectionElement)
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
                        `<code>custom-web-component:defined<code> will select a custom-web-component element if it is registered with the
                        <code>customElements.define</code> method. This element may appear in the HTML, but may be defined later with CSS,`,
                        `<code>custom-web-component:not(:defined)</code> this selects a custom-web-component if it is not defined. This is 
                        a good solution for hiding elements until they are registered with the <code>customElements.define</code>`
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
                        will not be repeted, but just some general rules regarding clean code will be reminded.
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `CWC should not touch elements that are outside it, no DOM modifications outside the host, 
                        no CSS modifications to elements outside the host,`,
                        `CWC should accept inputs <b>only<b> with the attributes, or optionaly with a mediator pattern, 
                        no other modifications to the CWC from the outside world,`,
                        `A component shuld never modify its attributes, so CWC should not modify its attributes,`,
                        `The proper way to communicate from CWC to the outside world is with the events dispatched on
                        the host element. Optionaly the mediator pattern may be used,`,
                        `The CWC host CSS should not be manipulated from the outside, as it kills the encapsulation.
                        Thie execptions could be to hide the CWC,`,
                        `Before using an attribute, check if it does not already exist, do not override,`,
                        `Before using a method name check if a property with the same name does not exist, do not override,`,
                        `A comopnent should never apply classes to its self, so do not apply classes to a CWC element 
                        from the inside,`,
                        `Methods and variable names should be descriptive,`,
                        `Comments in the code should be newer used, code should speak of its self, commens get outdated and it
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