let data =     {
    summary: 'DOM access methods',
    title: 'DOM access methods',
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'What is DOM?'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                        DOM stands for <strong>Document Object Model</strong> and is a tree based representation of 
                        XML and HTML based documents. In HTML DOM consists of a root Document object, that has 
                        a &lt;html> child, and &lt;html> has &lt;head> section and &lt;body> section. All elements
                        visible on web page are situated in DOM. Each browser gives a set of useful methods that 
                        can be used to find and access elements in DOM. 
                    `
                },
                {
                    elementType:'Headline',
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
                    <code>span</code>, <code>form</code>. There is no necessity to search wohole tree, as 
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
                    `<code>document.forms['someFormId']</code>: forms is a read only HTMLCollection of all forms in the document`
                    `
                        <code>someElement.node
                    `
                    ]
                },
                {
                    elementType:'Headline',
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
                    `<code>someElement.removeElement()</code>: removes element.`
                    ]
                },

                {
                    elementType: 'Shadow DOM',
                    content: `
                        CSS rules normally efect all DOM elements in the same name space. If there is a need of
                        encapsulation (lets say third party component), and 
                    `
                },

                {
                    elementType:'Paragraph',
                    content:`
                    There is a set of methods that can be used with a <code>&lt;form&gt;</code> element:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>checkValidity()</code>: forces validity check, returns true if field is valid, false if not.
                        Can be used for example in input event listener`,
                        `<code>reportValidity()</code>: returns true if all form input fields are valid, or false if at
                        least one of them is not valid`,
                        `<code>setCustomValidity(message)</code>: if message is a not empty string this will make
                        validation error custom message appear on screen. This may be used to customize error message.
                        If message is an empty string then message will not show up on the screen`
                    ]
                },
                {
                    elementType:'Code',
                    content:`
<pre>
  &lt;form>
    &lt;input type="number" id="number" min="5">
    &lt;button>Submit</button>
 &lt;/form>

 const nrBox = document.querySelector('#number');
 const submitButton = document.querySelector('button');
 submitButton.addEventListener('click', (e)={
     if(nrBox.vlidity.rangeUnderflow) e.target.setCustomValidity('Number is too small')
     else e.target.setCustomValidity('');
 })
</pre>                        
                    `
                        
                    
                }
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'<form nonvalidate>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    This property set on a form element will prevent build in validity check, and will prevent 
                    messages from informing what box is invalid. Hovewer css pseudoclasses like <code>:invalid</code> 
                    will still function. This allows user to customize not only messages, but also their form.
                    Elements for displaying validation results may be placed in DOM, and filled in event listeners
                    with customized code. For example please refer to references section of this article.
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
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getJSFormValidationData(){
    return data;
}