let data =     {
    summary: 'DOM access methods',
    title: 'DOM access methods',
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'What is DOM?'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                        DOM stands for <strong>Document Object Model</strong> and is a tree based representation of 
                        XML and HTML documents. In HTML DOM consists of a root Document object, that has 
                        a &lt;html> child, and &lt;html> has &lt;head> section and &lt;body> section. All elements
                        visible on web page are situated in DOM. Each browser gives a set of useful methods that 
                        can be used to find and access elements in DOM. 
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'Getting to DOM elements'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `
                    <code>getElementById('someId')</code>: id is a html attribute, that should be unique in whole document.
                    This method returns an element with specified Id.
                    `,
                    `<code>getElementsByTagName('someTag')</code>: allows to find an NodeList of all elements with specified
                    tag name in subtree. Example tags in HTML are: <code>p</code>, <code>html</code>, <code>div</code>,
                    <code>span</code>, <code>form</code>. There is no necessity to search whole tree, as 
                    <code>document.getElementById('someId').getElementsByTagName('p')</code> will find all <code>p</code>
                    elements that are nested in element with id equal to 'someId'`,
                    `<code>querySelector('.css-selector')</code>: this method allows user to find a NodeList with
                     <b>first element</b> matching specified <a href="./selectors">css selector</a>.`,
                    `<code>querySelectorAll('.css-selector')</code>: this method returns a NodeList of elements matching
                    specified <a href="./selectors">css selector</a> in whole subtree.`,
                    `<code>getElementsByClassName('class-name')</code>: will return a NodeList of all elements having 
                    specified class`,
                    `<code>getElementsByName('name')</code>: will return a NodeList of all elements having name attribute
                    equal to name speficied as argument passed to this method`,
                    `<code>document.forms['someFormId']</code>: forms is a read only HTMLCollection of all forms in the document`,
                    `<code>document.images</code>: readonly collection of all <code>img</code> elements in a document.`,
                    `<code>document.title</code>: title element in head document. This is displayed in browser tab. Can be 
                    changed with this attribute`,
                    `<code>document.cookie</code>: perhaps not related to DOM, but useful, all cookies related to this page,`,
                    `<code>document.referrer</code>: also not DOM related, but returns a page that linked to current page, or null
                    if page was accessed directly.`
                    ]
                },
                {
                    elementType:'Headline-2',
                    content:'Creating, removing, adding DOM elements'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `
                    <code>document.createElement('tagName')</code>: will create an element specified by a tag.
                    This will not add element to DOM.
                    `,
                    `<code>someElement.appendChild(createdElement)</code>: will add already created element as a last
                    child of someElement`,
                    `<code>someElement.prepent(setOfNodeObjects)</code>: inserts a set of Node objects before first child
                    of <i>someElement</i>`
                    `<code>someElement.removeElement()</code>: removes element.`
                    ]
                },
                {
                    elementType:'Headline-2',
                    content:'Node - abstract class'
                },
                {
                    elementType:'Paragraph',
                    content: `
                        This is an abscract class, so has no instances. However other classes may extend Node class.
                        For example HTMLElement extends Node class and inherits its behavoiurs and methods.
                        Node has following properties:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>Node.baseURI</code>: returns a string containing a base URL of document`,
                        `<code>Node.childNodes</code>: returns a NodeList containing children of node or null.
                        This returns also text and comments, and as this is a live node, all changes will ba updated`,
                        `<code>Node.firstChild</code> returns a first direct child node of target element,  or null
                        in case there are no children.`,
                        `<code>Node.lastChild</code> returns a last child of target node`,
                        `<code>Node.nextSibling</code> returns a next to current node child of parent node`,
                        `<code>Node.previousSibling</code> returns a previous child node of current nodes parent, or null.`,
                        `<code>Node.nodeName</code>: returns either node name in capital letters ('DIV') or <code>#document</code>,
                        or <code>#text</code in case of text node.`,
                        `<code>Node.value</code>: returns a value under <code>value</code> attribute of target node, or null if element
                         has no value attribute.`,
                        `<code>Node.type</code>: returns a number representing what is the type of current node: 
                            <ul>
                            <li><code>ELEMENT_NODE</code>: 1</li><li><code>ATTRIBUTE_NODE</code>:2</li>
                            <li><code>TEXT_NODE</code>: 3</li><li><code>CDATA_SECTION_NODE</code>: 4</li>
                            <li><code>PROCESSING_INSTRUNCTION_NODE</code>: 7</li><li><code>COMMENT_NODE</code>: 8</li>
                            <li><code>DOCUMENT_NODE</code>: 8</li><li><code>DOCUMENT_TLYPE_NODE</code>: 10</li>
                            <li><code>DOCUMENT_FRAGMENT_NODE</code>: 11</li>
                            </ul>
                        `,
                        `<code>Node.parentNode</code>: returns a parent <strong>Node</strong> of current node, or null in case there is no parent.`,
                        `<code>Node.parentElement</code>: returns a parent <strong>Element</strong> of current node, or null in case no parent.`,
                        `<code>Node.textContent</code>: returns/<strong>sets</strong> text content of element and descendants. <strong>
                        This will set text content, so <code>element.textContent = '&lt;div>'some content&lt;/div>'<code> will not
                        create a div, but insert this text literaly.</strong>`,
                        `<code>Node.cloneNode(deep)</code>, deep is an optional parameter. If true node and its content will be clonde 
                        recursively with all descendants, if false then sahllow clone of current node will be made. <strong>Beware, 
                        as id attributes will be cloned</strong>. New clonded node will be returned.`,
                        `<code>Node.hasChildNodes()</code>: true if node has child nodes, else false.`,
                        `<code>Node.appendChild()</code>: known from previous section, adds target node as last child of current node.
                        <strong>If target node points to a node attached to DOM, this node will be detached from previous position and
                        attached to new one</strong>
                        `,
                        `<code>Node.insertBefore()</code> inserts node given as argument before current node under current nodes parent.`,
                        `<code>Node.isEqualNode()</code> compares current node with given target node. Compares types and defining data.`,
                        `<code>Node.isSameNode()</code> true if target node given as argument and current node are the same nodes`,
                        `<code>Node.replaceNode()</code> swaps current node with target node`,
                        `<code>Node.removeChildNode()</code> removes target node if it is a child of current node.`
                    ]
                                    
                },
                {
                    elementType: 'Headline-2',
                    content: `
                    Shadow DOM
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Usualy css rules apply to all elements in document. But if encapsulation is needed (for
                    example a reusable component working with many pages and not interfering with existing css) is 
                    , there is a possiblity to create a <q>shadow DOM</p> inside DOM.
                    Shadow DOM will be encapsulated. CSS inside shadow DOM will not affect DOM css rules,
                    and css rules from document will not be applied to shadow DOM elements. Moreover it will not 
                    be possible to find elements inside a shadowRoot with DOM searching methods launched on 
                    <code>document</code>. To search a shadow DOM <code>shadowHost.shadowRoot.querySelectorAll...</code>
                    needs to be used. So all DOM searching methods will have to be called from <code>shadowHost.shadowRoot</code>
                     where shadowHost is a element hosting shadow DOM. To learn more about encapsulation and how to use shadow
                     best way is to read about <strong>custom web components</code> - please go to references section.
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: 
                    [
                        `<code>let shadow = element.attachShadow({mode: 'open'/'close'})</code> to create a shadow DOM element.
                        `,
                        `With mode open there is a possiblity to acces shadowDOM with <code>hostElement.shadowRoot</code>,
                        when mode is closed there will be no possiblity to manipulate shadow DOM. Of course there is a way around
                        it, but it is not straight forward.`
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Creating shadow DOM.
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
const someElement = document.createElement('div');
const shadowRoot = someElement.attachShadow({mode:'open'});
shadowRoot.innerHTML = \`&lt;style>...&lt;style>&lt;div> ... &lt;/div>\`
</pre>                    
                    `
                },
                {
                    elementType:'WarningNote',
                    content:'Not every node can host a shadow root. For example an input cannot.'
                },
                {
                    elementType:'Headline-2',
                    content:'Creating a element from a HTML string'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>element.innerHTML=stringWithHTML</code>`,
                        `<code>element.insertAdjacentHTML('beforeend', stringWithHTML)`,
                        `create a document fragment and append it to the DOM`
                    ]
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let elementToAdd = docuemnt.createRange().createContextualFragment(strHTML);
hostElement.appendChild(elementToAdd)
</pre>                    
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'Document fragment'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    In case a part of document (a component) needs to be created and added to DOM it is good to 
                    create this document part outside DOM, and add it at once. This is due to fact, that 
                    DOM manipulation is not cheap. In this case it is good to create a <i>document fragment</i> and
                    attach its content to DOM when finished. Document fargment is similar to DOM, the difference is
                    it will not be visible untill not attached to DOM, and it has less manipulation methods.
                    `
                },
                {
                    elementType:'UnsignedList',
                    content: [
                        `<code>DocumentFragment()</code> creates and returns a new DocumentFragment object,`,
                        `<code>DocumentFragment.childElementCount</code> returns the ammount of children`,
                        `<code>DocumentFragment.children</code> returns a HTMLCollection of children`,
                        `<code>DocumentFragment.firstElementCHild</code> returns first child,`,
                        `<code>DocumentFragment.lastElementChild</code> returns last child`,
                        `<code>DocumentFragment.append(element)</code> inserts element after last document fragment child`,
                        `<code>DocumentFragment.prepend(element)</code> inserts element before first document fragment child`,
                        `<code>DocumentFragment.querySelector()</code> returns first node matching css selector,`,
                        `<code>DocumentFragment.querySelectorAll()</code> returns a NodeList of all nodes from 
                        document fragment matching css selector`,
                        `<code>DocumentFragment.replaceChildren()</code> replaces all children of the document fragment
                        with new set of elements`,
                        `<code>DocumentFragment.getElementById()</code> returns element with matched id`
                    ]
                }
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
                    content:'w3.org',
                    href: 'https://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-1689064',
                    description:'Description of some DOM interfaces'
                },
                {
                    elementType:'Link',
                    content:'developer mozilla',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode',
                    description:'Node abstract class description'
                },
                
                {
                    elementType:'Link',
                    content:'developers google',
                    href: 'https://developers.google.com/web/fundamentals/web-components/customelements',
                    description:'About custom web components'
                },
            ]
        }
    ]
};

export default function getDomAccessMethods(){
    return data;
}