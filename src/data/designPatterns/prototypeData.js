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
                    with the prototype inheritance.
                    `
                },


                {
                    elementType:'Headline-2',
                    content:'Description'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    A creational design pattern.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    In the literature, a prototype is an object capable of replicating itself.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    If there is a need to have an exact copy of an object, it may be not possible to clone it 
                    with an external function, as the object may have some private properties, not available to
                    external functions. That is why creating an object and filling it with data may not be possible
                    due to the internal state of the object.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    That is why a <code>clone</code> method is introduced. A prototype has an implementation of such 
                    a method, and this method returns an exact copy of the object that it was called on. Thanks to that
                    approach the returned object will have a copy of the internal state of the original object.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    An interesting use case of this approach would be a component visible on a screen.
                    This component would have a <code>clone</code> method allowing to copy it with its current
                    internal state. It may be comfortable, as user may interact with object on the screen, and
                    cloning such an object, with all event listeners and attributes applied to it with a <code>
                    clone</code> method seems an interesting option. (Please see the second example)
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    However, there are situations (example 1), when the exact copy of an object is not needed. 
                    The exact copy of the internal state is not needed. Just an object created from a predefined
                    data set is desired. In this situation the object instance would be created from a recipe (a 
                    large set of attributes for instance). The created object has not <code>clone</code> method
                    allowing replication, but it is possible to create a set of predefined instances from blueprint 
                    objects. Just like a factory allowing to make standard products from blueprints. These standard 
                    products may  be customized in the future.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Creating objects form blueprints seems similar in a way to the prototype based approach, so I decided
                    to show it in this article.
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
                    elementType:'Paragraph',
                    content:`
                    This example is a bit different from one described in the literature. According to 
                    the references, the prototype is an object having a <code>clone</code> method, allowing to 
                    create an exact copy of the object instance. In case of this example, a prototype is 
                    a different object: a recipe for creating an instance of the needed object. 
                    The desired object is created by the constructor, with a recipe passed as an argument.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    It may be considered wrong. Having a <code>clone</code> method may be comfortable, as shown in the
                    second example. However. in case of a car ordering form, it will not be needed. Holding the whole 
                    <code>HTMLElement</code> somewhere in the background just for having a possibility to clone it 
                    in this case seems a lost of resources. All four form types will most probably not be needed in 
                    one session. Even if the user uses all form types in one session, it may reasonable to keep a recipe 
                    objects in that background and create an instance out of them.
                    `
                },

                {
                    elementType:'Paragraph',
                    content:`
                    It may seem, this example is not different from a simple calling a constructor funcition 
                    with the arguments. The only difference is, the set of needed arguments is quite large, and
                    ready recipes for needed form objects should be kept in the memory just like prototypes are stored 
                    in a prototype managing object. In this way, storing object from which objects are created, this 
                    pattern is similar to the prototype one.
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:'A problem'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    A car dealer seals new cars. Let's considered a single model for simplicity. This car model can be described
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
                    elementType:'NoteWarning',
                    content:`
                    In literature it is stated, that a prototype object is an object capable of deep cloning itsself.
                    In other words a prototype would be an object having a class <code>clone()</code> returning an 
                    an exact copy of itself. Then an application would have a prototype manager holding all needed
                    prototypes, and would be able to create new objects with clinning prototypes from the manager storage.'
                    `
                },


                {
                    elementType:'Headline-3',
                    content:'Example 2: Components as prototypes'
                },
                {
                    elementType:'SmallHeadline',
                    content:'Description'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Components seem to be good candidates for the pattern of self cloning components.
                    Below there is a sample <code>custom-table</code> component that may be stored 
                    in the memory, with all events and attributes attached. Then, there is a method 
                    <code>clone</code> allowing to create an exact copy of the element with all
                    events and attributes (if they were registered in the prototype).
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    However, more interesting would be to keep components in the DOM, use them, and if there is a
                    need to create an exact copy of such a component, it is easy, as it just needs to be found in the
                    DOM, and a method <code>clone</code> should be called on the DOM element to return an exact copy.
                    No need to store elements in the application state
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Below example could use methods to remove attributes or events from registers of elements to clone, 
                    but this example is already quite long.
                    `
                },
                {
                    elementType:'Code',
                    content:`
        <div class="note">A HTML for this example. <b>prototype.js</b> contains a component with 
        prototype extending functions, <b>script.js</b> is given at the bottom of the example. It only
        attaches an event listener to the component.</div>
<pre>
&lt;head>
    &lt;script src="./prototype.js" defer>&lt;/script>
    &lt;script src="./script.js" defer>&lt;/script>
&lt;/head>
&lt;body>
    &lt;custom-table 
    table-data='{"head": ["col1", "col2", "col3"],"body": [["data1","data2","data3"],["data4","data5","data6"],["data7","data8","data9"]]}'
    >&lt;/custom-table>
&lt;/body>
&lt;/html>
</pre>

    <div class="note">
        Now a component. Table data is passed as a stringified attribute <code>table-data</code>.
        The component has no <code>connectedCallback</code> method, and no content is added on element
        mount. Whole content is added when element is created and later when an attribute 
        <code>table-data</code> is modified. This way an instance of TableComponent may be 
        kept somewhere in memory, and exact copies of it may be created with a clone method.
    </div>
<pre>
class TableComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.data = JSON.parse(this.getAttribute('table-data'));
        if (this.data !== null){
            this.recreateTable();
        }
        console.log('Table component constructed')
    }
    attributeChangedCallback(attrName, oldVal, newVal){
        if (attrName==='table-data'){
            this.data = JSON.parse(newVal);
            this.recreateTable();
        }
    }
    static get observedAttributes(){
        return ['table-data']
    }
    recreateTable(){
        this.shadowRoot.innerHTML = ''; // delete previous table content
        this.shadowRoot.appendChild(this.createTable())
    }
    createTable(){
        let head = this.createHead(this.data.head);
        let body = this.createBody(this.data.body);
        let table = document.createElement('table');
        table.appendChild(head); table.appendChild(body);
        return table;
    }
    createHead(headData){
        let row = document.createElement('tr');
        for(let item of headData){
            let th = document.createElement('th');
            th.innerHTML = item;
            row.appendChild(th)
        }
        return row;
    }
    createBody(bodyData){
        let body = document.createElement('tbody');
        for (let r of bodyData){
            let row = this.createTRow(r);
            body.appendChild(row);
        }
        return body
    }
    createTRow(rowDataAsArr){
        let row = document.createElement('tr');
        for(let d of rowDataAsArr){
            let td = document.createElement('td');
            td.innerHTML = d;
            row.appendChild(td)
        }
        return row;
    }
}
window.customElements.define('custom-table', TableComponent)
</pre>    


            <div class="note">
                Custom tables attributes may also require cloning.
                Let's create a method for registering attributes that will be cloned with the 
                prototype:
            </div>
<pre>
TableComponent.prototype.registerAttribute = function(attr){
    if (this.attributesToClone === undefined){
        this.attributesToClone = [];
    }
    this.attributesToClone.push(attr)
}
</pre>            

            <div class="note">
                Let's create methods allowing making a copy of registered event listeners
            </div>
<pre>
TableComponent.prototype.attachEventListener = function(eventType, cbFunction){
    this.addEventListener(eventType, cbFunction);
    if (this.eventListenresRegister === undefined){
        this.eventListenersRegister = [];
    }
    this.eventListenersRegister.push({eventType: eventType, cb: cbFunction})
    console.log('attach Event Listener added')
}
    // We could create a disconnectedCallback to remove all events attached to the component,
    // but detaching element from the DOM would cause events to be removed, and we do not want this.
    // If the element is destoryed (unaccessable from the global scope) all event listeners will be 
    // garbage collected anyway.
</pre>  

            <div class="note">
                Let's create a deep copy object function. Note. Deep cloning objects in JS is a complex task, 
                and a lot of code is needed to support all edge cases. Here, we will simplify deep cloning 
                with a <code>JSON.stringify</code>, <code>JSON.parse</code> pattern. In this case, a lot of 
                meta-data will be lost (like object descriptor, and all properties that keys are the type of a symbol)
            </div>
<pre>
    TableComponent.prototype.cloneObject(obj){
        return JSON.parse(JSON.stringify(obj));
    }
</pre> 

<div class="note">
                Let's clone the whole table object
            </div>
<pre>
TableComponent.prototype.clone = function(){
    let outputElement = document.createElement('custom-table');
    outputElement.setAttribute('table-data', JSON.stringify(this.cloneObject(this.data)));
    if (this.attributesToClone) {
        outputElement.attributesToClone = this.cloneObject(this.attributesToClone);
        this.setAttributesToClone(outputElement);
    }
    if (this.eventListenersRegister) {
        this.attachEventsToClone(outputElement);
    }
    return outputElement;
}
TableComponent.prototype.setAttributesToClone = function(targetElement){
    for (let attr of this.attributesToClone){
        let attrVal = this.getAttribute(attr);
        targetElement.setAttribute(attr, attrVal);
    }
}
TableComponent.prototype.attachEventsToClone = function(targetElement){
    console.log(targetElement.eventListenersRegister);
    for (let event of this.eventListenersRegister){
        targetElement.attachEventListener(event.eventType, event.cb)
    }
}
</pre> 
            <div class="note">
                Now table component is capable of self reproducing. It clones registered event listeners and 
                attributes. It may be stored in the memory, not attached to the view, and it may be kept 
                in the DOM, and cloned from the DOM (as in this example).
            </div>

            <div class="note">
                Now for the <code>script.js</code> file:
            </div>
<pre>
let table = document.querySelector('custom-table');
table.attachEventListener('click',(e)=>{
    let copy = e.target.clone();
    document.body.appendChild(copy);
})
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