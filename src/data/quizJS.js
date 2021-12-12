// category: 'js'|'css'|'html'|'ts'|'angular'|'react'|'npm'
// subcategory: 'variables','this','strict mode','DOM',
// level:'hard'|'medium'|'easy'
// question: string
// answers: [{id:'a, b,...', content:string},...],
// type: 'radio' | 'checkbox',
// correctAnswersIds: ['a','b',....],
// explanation:string
// links:[string]
import getServerCommunicationQuestions from './js/quiz/serverCommunication'
import getDataTypeQuestions from './js/quiz/dataTypes'
function getUl(itemArray){
    return <ul>{itemArray.map((element)=>{return <li key="element">element</li>}) }</ul>
}

let questions = [
    {
        category: 'js',
        level: 'easy',
        subcategory:'variables',
        question: 'Select all <b>correct</b> variable names for JS',
        answers: [
            '$someVariable, _someOtherVariable',
            '$32someVariable, _someOtherVariable',
            '3circleInARow, some_variable',
            'circle#, some_variable',
            'some-variable, _someOtherVariable',
            'some_variable, _some_Other_Variable',
        ],
        correctAnswersIds: [0,1,5],
        type: 'checkbox',
        explanation:`
            Correct means in this question that there will be no error if a certain name is used, it does not mean that
            this name should be used. Some variable names make code dirty.
            Variables in JS must follow rules:<br>
            ${getUl([
                'names contain of letters, digits, underscores and dolar signs',
                'names cannot start with a letter, must start with a letter, $ or _',
                'names are case sensitive (x != X)',
                'names cannot be JS reserved keywords',
                `names should be written in camel case (
                    thisIsACamelCase, ThisIsPascalCase, this-is-kebab-case this_is_snake_case). This is not a must and 
                    there will be no error if not followed, however this is a good practice.`,
                `names should be meaningfull, so <q>asdf</q> is correct name, but means nothing and should not be used,
                 where <q>isQuizModeActive</q> seems a better name, as it indicates what variable does, moreover it indicates
                 that variable is a boolean.`
            ])}
        `,
        links: [
            'https://www.w3schools.com/js/js_variables.asp',
            'https://en.wikipedia.org/wiki/Naming_convention_(programming)'
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'variables',
        question: `
            What will below code produce?
            <pre class="alert alert-dark">
    console.log(a)
    for(let i = 0; i < 10; i++){
        if (a = 0) var a = 0;
        a = i;
    }
    console.log(a)
            </pre>
        `,
        answers: [
            '9',
            '10',
            'undefined',
            'null',
            'Uncaught ReferenceError: a is not defined',
            
        ],
        correctAnswersIds: [2], //starting from 0
        type: 'radio',
        explanation:`
            As <q>a</q> is declaired with a <q>var</q> keyword, its definition will be hoisted: brought to the top of 
            this code. Definition means <code>var a;</code>, so it will automaticly be undefined from the begining of code.
            If a <q>let</q> keyword would be used, then code would produce an error, as <q>a</q> variable definition
            would not be konwn
            ${getUl([
                `<code>var</code>, a keyword for defining variables, if used anywhere in a function makes this variable 
                known in whole function scope, as variable is hoisted.`,
                `<code>let</code>, a keyword for defining variables, but this variable would be known only in local block
                scope, so inside {} where this variable was defined. Its scope is visible in child blocks, but not visible in parent scope`,
                `<code>const</code>, a keyword similar to <code>let</code>, with the difference that once asigned, cannot
                be changed. Its scope is visible in child blocks, but not visible in parent scope`
            ])}
        `,
        links: [
        ]
    }
    ,
    {
        category: 'js',
        level: 'easy',
        subcategory:'variables',
        question: `
            What will below code produce?
            <pre class="alert alert-dark">
    console.log(b)
    {
        let b = 2;
        {
            console.log(b)
        }
    }
            </pre>
        `,
        answers: [
            '2',
            'undefined',
            'null',
            'Uncaught ReferenceError: b is not defined',
            
        ],
        correctAnswersIds: ['3'], // indexing form 0
        type: 'radio',
        explanation:`
            Let creates only a local, block scope. It is invisible in parent scope, will be visible in child, but 
            declaration is only for current block.
            ${getUl([
                `<code>var</code>, a keyword for defining variables, if used anywhere in a function makes this variable 
                known in whole function scope, as variable is hoisted.`,
                `<code>let</code>, a keyword for defining variables, but this variable would be known only in local block
                scope, so inside {} where this variable was defined. Its scope is visible in child blocks, but not visible in parent scope`,
                `<code>const</code>, a keyword similar to <code>let</code>, with the difference that once asigned, cannot
                be changed. Its scope is visible in child blocks, but not visible in parent scope`
            ])}
        `,
        links: [
        ]
    }    ,
    {
        category: 'js',
        level: 'easy',
        subcategory:'variables',
        question: `
            What will below code produce?
            <pre class="alert alert-dark">
            console.log(b)
    {
        const b = 2;
        {
            console.log(b)
        }
    }
            </pre>
        `,
        answers: [
            '2',
            'undefined',
            'null',
            'Uncaught ReferenceError: b is not defined',
            
        ],
        correctAnswersIds: ['3'], // indexing from 0
        type: 'radio',
        explanation:`
            Const creates only a local, block scope. It is invisible in parent scope, will be visible in child, but 
            declaration is only for current block.
            ${getUl([
                `<code>var</code>, a keyword for defining variables, if used anywhere in a function makes this variable 
                known in whole function scope, as variable is hoisted.`,
                `<code>let</code>, a keyword for defining variables, but this variable would be known only in local block
                scope, so inside {} where this variable was defined. Its scope is visible in child blocks, but not visible in parent scope`,
                `<code>const</code>, a keyword similar to <code>let</code>, with the difference that once asigned, cannot
                be changed. Its scope is visible in child blocks, but not visible in parent scope`
            ])}
        `,
        links: [
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'form-validation',
        question: 'Please complete below statements',
        answers: [
            `<b>Prevent default form validation to implement custom one:</b> <br>
            <code>&lt;form {{{}}}></code>
            ` ,
            `<b>Check if form is valid:</b> <br>
            <code>if (document.querySelector('form').</code>{{{}}}<code>)...</code>`,
            `<b>Check if field has not too great value:</b> <br>
            <code>if (document.querySelector('#someInput').</code>{{{}}}<code>)...</code>`
        ],
        correctAnswers: [['nonvalidate'], ['validity.valid'], ['validity.rangeOverflow']],
        type: 'fill-in',
        explanation:`
            ${getUl([
                `<code>&lt;form nonvalidate></code> prevents whole form from default validation, leaving css pseudoclasses
                and Constraint Validation API to work with`,
                `<code>validity</code> is a property delivered with Constraint Validation API, that allows to check
                &lt;rangeOverflow> for too great values, &lt;vlid> for checking if whole form is valid, and many more.`
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'form-validation',
        question: 'Please complete below statements',
        answers: [
            `<b>Make validity error message: 'wrong input' appear on form</b> <br>
            <code>document.querySelector('form').{{{}}}('wrong input')></code>
            ` ,
            `<b>Check if pattern in input box is not too long</b> <br>
            <code>if (document.querySelector('#input').</code>{{{}}}<code>)...</code>`,
            `<b>Check if mandatory field is filled:</b> <br>
            <code>if (document.querySelector('#someInput').</code>{{{}}}<code>)...</code>`
        ],
        correctAnswers: [['setCustomValidity'], ['validity.tooLong'], ['validity.valueMissing']],
        type: 'fill-in',
        explanation:`
            ${getUl([
                `<code>&lt;form nonvalidate></code> prevents whole form from default validation, leaving css pseudoclasses
                and Constraint Validation API to work with`,
                `<code>validity</code> is a property delivered with Constraint Validation API, that allows to check
                &lt;rangeOverflow> for too great values, &lt;vlid> for checking if whole form is valid, and many more.`
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'DOM-access',
        question: 'Please complete below statements',
        answers: [
            `<b>Find element with specified Id</b> <br>
            <code>let found = document.{{{}}}('someId')</code>
            `,
            `<b>Find all elements with class 'my-class'</b> <br>
            <code>let found = document.{{{}}}('.my-class')</code>
            `,
            `<b>Find all 'p' elements in document</b> <br>
            <code>let found = {{{}}}.('p')</code>
            `,
        ],
        correctAnswers: [['getElementById'], ['querySelectorAll'], ['document.getElementsByTagName']],
        type: 'fill-in',
        explanation:`
            ${getUl([
                `<code>getElementById</code> for accessing element by unique Id`,
                `<code>getElementsByTagName</code> for accessing NodeList of elements with specific tag,`,
                `<code>getElementsByClassName</code> can be used to access NodeList of elements with specified class name,
                however in this case there is a dot before class name, and this is a css selector, so <code>querySelectorAll</code>
                will be a right solution. `
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'DOM-access',
        question: 'Please complete below statements',
        answers: [
            `<b>get all forms from document</b> <br>
            <code>let forms = document.{{{}}}</code>
            `,
            `<b>Set page title to 'my new title'</b> <br>
            <code>{{{}}} = 'my new title</code>
            `,
            `<b>Find all elements in document with name 'someName'</b> <br>
            <code>let found = {{{}}}.('someName')</code>
            `,
        ],
        correctAnswers: [['forms'], ['document.title'], ['document.getElementsByName']],
        type: 'fill-in',
        explanation:`
            ${getUl([
                `<code>getElementById</code> for accessing element by unique Id`,
                `<code>getElementsByTagName</code> for accessing NodeList of elements with specific tag,`,
                `<code>getElementsByClassName</code> can be used to access NodeList of elements with specified class name,
                however in this case there is a dot before class name, and this is a css selector, so <code>querySelectorAll</code>
                will be a right solution. `
            ]
            )}
        `,
        links: [
            '',''
        ]
    },

    {
        category: 'js',
        level: 'easy',
        subcategory:'DOM-access',
        question: 'Please complete below statements',
        answers: [
            `<b>get parent element</b> <br>
            <code>let parent = element.{{{}}}</code>
            `,
            `<b>Clone node with its children</b> <br>
            <code>let cloned = element.{{{}}}</code>
            `,
            `<b>Insert an element before element'</b> <br>
            <code>element.{{{}}}()</code>
            `,
        ],
        correctAnswers: [['parentNode'], ['cloneNode(true)'], ['insertBefore()']],
        type: 'fill-in',
        explanation:`
            ${getUl([
                `<code>parentNode</code> will access a parent component`,
                `<code>element.cloneNode</code> makes exect copy of an element. Beware -> Ids that are supposed to be 
                unique will be cloned aswell`,
                `<code>insertBefore </code> inserts an element before given node. `
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'DOM-access',
        question: `
            What will be the effect of below code
            <pre class="alert alert-dark">
&lt;div id="grand-parent">            
    &lt;div id="parent">
        &lt;div id="child-1">&lt;/div>
        &lt;div id="child-2">&lt;/div>
        &lt;div id="child-3">&lt;/div>
    &lt;div>
&lt;div>
&lt;script>
    let child1 = document.getElementById('child-1');
    let newElement = document.createElement('div');
    child1.parentNode.insertBefore(newElement);
&lt;/script>
            </pre>
        `,
        answers: [
            `<code>newElement</code> will be inserted before the <code>#parent</code> element, and will be a direct child
            of <code>#grand-parent</code>`,
            `<code>newElement</code> will be inserted before the <code>#child-1</code> element as a direct child of 
            <code>#parent</code> element`,
            '<code>newElement</code> will be inserted as a sibling of the <code>#grandparent</code> node',
            'Will not be inserted at all, as there is no possiblity to get to a parent element in css.',
            
        ],
        correctAnswersIds: ['0'], // indexing from 0
        type: 'radio',
        explanation:`
            Const creates only a local, block scope. It is invisible in parent scope, will be visible in child, but 
            declaration is only for current block.
            ${getUl([
                `A <code>parentNode</code> property of <code>Node</code> reaches parent of element on the left`,
                `<code>someElement.insertBefore(element)</code> method of <code>Node</code> inserts a element as a sibling of 
                someElement, before <code>someElement</code>`,
                `There is no possiblity to reach a parent element in css, but that has nothing to do with this question`,
                `Correct answer will be that <code>newElement</code> will be inserted as a child of <code>grand-parent</code>
                before <code>#parent</code> node`
            ])}
        `,
        links: [
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'DOM-access',
        question: 'What are potential drawbacks of creating new elements with a <code>innerHTML</code>?',
        answers: [
            'It is potentilay dangerous, someone may inject a different code',
            `DOM operatoins are exepnsive, it is better to change only necessary elements in DOM, 
             and with <code>innerHTML</code> too many elements get recreated`,
            'No drawbacks, this solutions is easy for a developer',
            'event listeners get lost if were attached to recreated elements',
            `No drawbacks, recreation of more elements that intended is good, because it is good to restart some 
            elements, thanks to this they will not get frozen`,
            '<code>innerHTML</code> accepts a string, and string is not validated, so easy to commit a mistake',
        ],
        correctAnswersIds: [0,1,3,5],
        type: 'checkbox',
        explanation:`
            DOM operations are slow, so frameworks like React or Angular are designed to change only necessary elements,
            but in pure JS whole content under <code>innerHTML</code> gets recreated, so this is slow. As a string 
            is being injected it is possible to inject some dangerous code. Moreover this string will not be 
            validated, so it is possible to commit a mistake. Event listeners get lost if there were any attached
            to recreated elements. Ofcourse someone may intend to clear event listeners, but this is not the proper
            way to do so.
            ${getUl([
                ''
            ])}
        `,
        links: [
            'https://www.w3schools.com/js/js_variables.asp',
            'https://en.wikipedia.org/wiki/Naming_convention_(programming)'
        ]
    },   
    {
        category: 'js',
        level: 'medium',
        subcategory:'DOM-access',
        question: `Please complete below statements
<pre class="alert alert-dark">
    &lt;div id="grand-parent">            
        &lt;div id="parent">
            &lt;div id="child-1">&lt;/div>
            &lt;div id="child-2">&lt;/div>
            &lt;div id="child-3">&lt;/div>
        &lt;div>
    &lt;div>
    &lt;script>
        var parent = document.getElementById('parent');
        var grandparent = document.querySelector('#grand-parent');
        var child1 = document.getElementById('child-1');
        var child2 = document.getElementById('child-2');
        var child3 = document.getElementById('child-3');
        ...
</pre>
        `,
        answers: [
            `<b>To remove <code>#child-2</code> element</b> <br>
            <code>parent.{{{}}}(child2)</code>
            `,
            `<b>To remove <code>#child-1</code> element'</b> <br>
            <code>parent.{{{}}}(child2, child1)</code>
            `,
            `<b>Get <code>#child-2</code> node</b> <br>
            <code>let ch2 = child1.{{{}}};</code>
            `,
        ],
        correctAnswers: [['removeChildNode'], ['replaceNode'], ['nextSibling.nextSibling']],
        type: 'fill-in',
        explanation:`
            ${getUl([
                `<code>parentElement.remove(targetChild)</code> removes a child element`,
                `<code>parentElement.replace(child2, child1)</code> replaces the <code>child1</code> element with 
                 the <code>child2</code> element, and as <code>child2</code> already exists in DOM it is remved from previous position,
                 so final effect in this case is that <code>child1</code> is removed from DOM`,
                `This is tricky. As there is a new line symbol after a child 1 element, there will be an extra
                text node generated after child 1 element, so to get from it to child 2 we need to put <code>nextSibling</code>
                two times.`
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'DOM-access',
        question: 'What statements are ture about shadow DOM elements',
        answers: [
            'Their great adventage is encapsulation',
            `css rules from inside shadow-root will not effect elements outside shadow-root`,
            'css rules from outside shadow-root will influence elements inside shadow-root',
            `When shadow root is created in <code>{mode:'open'}</code>, it is possible to acces its components with
            <code>document.getElementById('someElementInsideShadowRootId')</code>`,
            `When shadow root mode is closed, it is not possible to access its content without some sophisticated hacks`,
            'It is not possible to inspect a shadow root element with dev tools',
        ],
        correctAnswersIds: [0,1,4],
        type: 'checkbox',
        explanation:`
            ${getUl([
                'Shadow components are created to provide encapsulation, this is thei main purpose,',
                'css from inside a shadow element will not affect rest of DOM, this is purpose of encapsulation',
                'css from outside of a shadow element will not affect inside of a shadow element, because of encapsulation',
                `To access inside of a shadow DOM component it is needed to find its host, and access it with a <code>shadowRoot</code>,
                like this <code>someShadowHost.shadowRoot.getElementById('someId')</code>, accessing shadow root just with a document is 
                not possible`,
                `It is not possible to access closed mode shadow DOM without sophisticated hacking`,
                `It is possible to right-click on a shadow element and inspect it with dev tools. May be tested with an input element
                as html input elements are shadow elements.`
            ])}
        `,
        links: [
            'https://www.w3schools.com/js/js_variables.asp',
            'https://en.wikipedia.org/wiki/Naming_convention_(programming)'
        ]
    }, 
    {
        category: 'js',
        level: 'easy',
        subcategory:'DOM-access',
        question: 'What statements are ture about document fragment',
        answers: [
            'Document fragment is a minimal document object not attached to DOM tree',
            'Document fragment is perfect for preparing a part of component before adding it as a whole to DOM',
            'Thanks to preparing a document fragment before adding it to DOM, code is faster due to less DOM operations',
            'Preparation of a document fragment instead of adding a lot of elements one by one to DOM improves user experience',
            `Methods like <code>append(element)</code>, <code>prepend(element)</code>, <code>querySelectorAll</code>, 
            <code>getElementById(element)</code> work with a <code>DocumentFragment</code>`
        ],
        correctAnswersIds: [0,1,2,3,4],
        type: 'checkbox',
        explanation:`
            All statements are true. Document fragment is a no DOM attached object, minimal document version with no parent.
            Good usage of a document fragment is to prepare a part of a document before adding it to DOM, to speed up 
            operations, and improve user experience. Some DOM access methods work with a <code>DocumentFragment</code>
            ${getUl([
            ])}
        `,
        links: [
            'https://www.w3schools.com/js/js_variables.asp',
            'https://en.wikipedia.org/wiki/Naming_convention_(programming)'
        ]
    },   
    getServerCommunicationQuestions(),
    getDataTypeQuestions(),
]

export function getJsQuestions(){
    return questions
}
