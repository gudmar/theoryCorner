let data =     {
    summary: 'form validation api',
    title: 'form validation api',
    searchKeywords:"valid invalid required pattern long short range input pseudoclasses",
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Form validation API'
                },
                {
                    elementType: 'NoteWarning',
                    content: `
                        This article is an extention of a <a href="./#/theory/validation" target="_blank">HTML form validation article</a>,
                        where HTML input elements, validation related CSS pseudoclasses and HTML validation realted
                        attributes are introduced. If you did not get familiar with that topics please start reading from there.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                        HTML based validation is usable and in many cases is good enough. However not valid warning message
                        cannot be styled, or its language cannot be changed (browser default). In order to 
                        alter styling or message content JS <strong>Constraint Validation API</strong> may be used.
                        This API can be used on folowing elements:
                        <code>HTMLButtonElement</code> (<code>&lt;button&gt;</code>),
                        <code>HTMLFieldSetElement</code> (<code>&lt;fieldset&gt;</code>),
                        <code>HTMLInputElement</code> (<code>&lt;input&gt;</code>),
                        <code>HTMLOutputElement</code> (<code>&lt;output&gt;</code>),
                        <code>HTMLSelectElement</code> (<code>&lt;select&gt;</code>),
                        <code>HTMLTextAreaElement</code> (<code>&lt;textArea&gt;</code>).
                        <strong>Constraint Validatoin API</strong> makes below properties available on listed elements:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `
                    <code>validationMessage</code>: Message that will be displayed when input is invalid. In case
                    input is valid this will be empty string. This property needs to be set by <code>setCustomValidity()</code>
                    method
                    `,
                    `<code>willValidate</code>: <code>true</code> if element will be validated when form is submitted, 
                    <code>false</code> if not.`,
                    `<code>validity</code>: This will return validity state of element. This will return one of the following:
                    <ul>
                        <li><code>patternMismatch</code> corresponding to <code>pattern</code> property in HTML, validated with regExp,
                        <li><code>tooLong</code> corresponding to <code>max-length</code> property in HTML, will be true if length is 
                        longer than expected. If length is too short this will still be false</li>
                        <li><code>tooShort</code> corresponding to<code>min-length</code> property in HTML, will be true if length is
                        shorter than expected. If length is too great, this will still be false</li>
                        <li><code>rangeOverflow</code> corresponding to <code>max</code> property in HTML. Will be true if 
                        value in input field is greated than expected. If value is below expected value this will be false</li>
                        <li><code>rangeUnderflow</code> corresponding to <code>min</code> property in HTML. Will be true if 
                        value of corresponding input field is not large enough, but will be false if value is too great</li>
                        <li><code>typeMismatch</code> corresponds to HTML <code>type</code> property. 
                        will be true if value is in not proper syntax (eg. eMail or URL)</li>
                        <li><code>valueMissing</code> corresponds to HTML <code>required</code> property. Will be true if 
                        corresponding field is empty.
                        <li><code>valid</code> is true if all validation constraints are met</li>
                    </ul>
                    `
                    ]
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