import {getUl} from '../../../services/toolbox'

const data = [
    {
        category: 'css',
        level: 'easy',
        subcategory:'pseudo-classes',
        question: `Fill in pseudoclasses matching below definitions`,
        answers: [
            `<code>:</code>{{{}}} - select each element that has no children`,
            `<code>:</code>{{{}}} - select each second child of any parent`,
            `<code>:</code>{{{}}} - select each penultimate element of any parent`,
        ],
        correctAnswers: [['empty'], ['nth-child(2)'], ['nth-last-child(2)']],
        type: 'fill-in',
        points: 3,
        explanation:`
            ${getUl([
                `<code>:empty</code>: selects all elements having no children,`,
                `<code>:nth-child(2)</code> selects each second child of each element,`,
                `<code>:nth-last-child(2)</code> selects each penultimate child`
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'css',
        level: 'easy',
        subcategory:'selectors',
        question: `
        Which element would be chosen with <code>#outlet div:nth-child(1)</code>
<pre class="alert alert-dark">
    &lt;div id="outlet">
        &lt;p>Some elements&lt;/p>
        &lt;div>1&lt;/div>
        &lt;div>2&lt;/div>
        &lt;div>3&lt;/div>
    &lt;/div>
</pre>`
        ,
        answers: [
            'None of elements',
            `The div with innerText '1'`,
            `The div with innerText '2'`,
            `Parent div element with id equal to outlet`,
        ],
        points: 1,
        correctAnswers: [0],
        type: 'radio',
        explanation:`
            None element will be selected, as above selector selects a first child element if it is a 'div' element, and 
            in this case first child is a 'p' element. Interesting thing here is the fact, that in case of 
            <code>element.childNodes</code> in above case there would be listed empty text elements, that would appear 
            due to next-line signs after each html line. But if nth-child pseudo-class is used this empty text nodes
            are not visible at all.
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'css',
        level: 'easy',
        subcategory:'pseudo-classes',
        question: `
        Which of below would select all odd child elements?`
        ,
        answers: [
            '<code>nth-child(odd)</code>',
            `<code>nth-child(2n-1)</code>`,
            `<code>nth-child(2n+1)</code>`,
            `<code>nth-child(n+1)</code>`,
            `<code>odd-child</code>`,
            `<code>nth-last-child(2n-1)</code>`,
        ],
        points: 2,
        correctAnswers: [0, 1],
        type: 'checkbox',
        explanation:`
        ${getUl([
            `<code>nth-child(odd)</code> and <code>nth-child(2n-1)</code>: are correct answers,`,
            `<code>:nth-child(2n+1)</code> would ommit the first element, so would list 3, 5, 7 ...`,
            `<code>:nth-child(n+1)</code> selects 2, 3, 4,.... so not correct at all`,
            `<code>:odd-child</code> this pseudo-class does not exist at all,`,
            `<code>:nth-last-child(2n-1)</code> this element will select either odd or event elements, depending on
            number of children, so not correct.`
        ]
        )}`,
        links: [
            '',''
        ]
    },
    {
        category: 'css',
        level: 'easy',
        subcategory:'pseudo-classes',
        question: `Fill in pseudoclasses matching below definitions`,
        answers: [
            `<code>:</code>{{{}}} - selects all mandatory fields`,
            `<code>:</code>{{{}}} - all elements that are not out or allowed range`,
            `<code>:</code>{{{}}} - all elements that have not valid input, but only if user interacted with it`,
            `<code>:</code>{{{}}} - all elements that have too great or too small value`,
        ],
        correctAnswers: [['required'], ['in-range'], ['user-invalid'], ['out-of-range']],
        type: 'fill-in',
        points: 4,
        explanation:`
            ${getUl([
                `<code>:required</code>: selects all mandatory fields,`,
                `<code>:in-range</code>: not outside required range, so in range,`,
                `<code>:user-invalid</code> selects all invalid inputs when user interacted with them`,
                `<code>:out-of-range</code> if value is too great or too small, than it is out of range`
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'css',
        level: 'easy',
        subcategory:'pseudo-classes',
        question: `Fill in pseudoclasses matching below definitions`,
        answers: [
            `<code>:</code>{{{}}} - used on a parent element to style it if its descendant element has foucs`,
            `<code>:</code>{{{}}} - styles a selected element`,
            `<code>:</code>{{{}}} - user agent dependant focused element. 
                Different bahaviour when tab pressed and different when mouse selected,`,
            `<code>:</code>{{{}}} - for example button between mouse left button down and left button up`,
        ],
        correctAnswers: [['focus-within'], ['selection'], ['focus-visible'], ['active']],
        type: 'fill-in',
        points: 4,
        explanation:`
            ${getUl([
                `<code>:focus-whithin</code>: should be use on a parent to style it if descendent element is focused,`,
                `<code>:selection</code>: should be used to style a highlighted element,`,
                `<code>:focus-visible</code> to differ styling on mouse click and on tab key select`,
                `<code>:active</code> this styling will be applied for element that is activated, so between left mouse up and 
                left mouse down`
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'css',
        level: 'easy',
        subcategory:'pseudo-classes',
        question: `Fill in pseudoclasses matching below definitions`,
        answers: [
            `<code>:</code>{{{}}} - selects all not visited links`,
            `<code>:</code>{{{}}} - styles an already seen link`,
            `<code>:</code>{{{}}} - an element that is a destination of the link`,
        ],
        correctAnswers: [['link'], ['visited'], ['target']],
        type: 'fill-in',
        points: 3,
        explanation:`
            ${getUl([
                `<code>:link</code>: styles all not visited links,`,
                `<code>:visited</code>: styles all not visited links,`,
                `<code>:target</code> styles an element that is the target of the link. May be used for example to 
                style a link destination that is on the same page, <code>&lt;a href="#samePageId"></code>`,
                `Interesting thing is the fact, that there is no possiblity to get information of what links were 
                visited with js. This is due to security reasons.`
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'css',
        level: 'easy',
        subcategory:'pseudo-classes',
        question: `Fill in pseudoclasses matching below definitions`,
        answers: [
            `<code>:</code>{{{}}}<code>(.someClass)</code> - select all elements that do not have 'someClass' in their
            classList`,
            `<code>:</code>{{{}}}(div, p, span):hover - short hand for <code>div:hover</code>, <code>p:hover</code>, <code>span:hover</code>, 
            adds extra class specifity.`,
            `<code>:</code>{{{}}} - select the element that has the shadow-root attached, from inside this shadow-root`,
        ],
        correctAnswers: [['not'], ['is'], ['host']],
        type: 'fill-in',
        points: 3,
        explanation:`
            ${getUl([
                `<code>:not(selector)</code>: styles all elements not matched by the 'selector',`,
                `<code>:is(list-of-selectors)</code>: takes each selector from the list and applies styling on the right
                . <code>is</code> also adds class specifity. There is a <code>with</code> pseudo-class, that works in
                similar way, with the difference, that id does not add any specifity,`,
                `<code>:host</code> should be used to match shadow-root host from inside this shadow-root.`
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
]

export default function pseudoclassesQuestions(){
    return data;
}