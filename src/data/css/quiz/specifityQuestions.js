import {getUl} from '../../../services/toolbox'

const data = [
    {
        category: 'css',
        level: 'easy',
        subcategory:'specifity',
        question: `Calculate specifity for each selector:`,
        answers: [
            `<code>#body-section#nav.horizontal li:first-child</code> {{{}}}`,
            `<code>* body #header#navigation.horizontal li:not(.active)<code> {{{}}}`,
            `<code>body>html .container-fluid.col_8.alert.alert-success p b</code> {{{}}}`,
        ],
        correctAnswers: [['221'], ['222'], ['44']],
        type: 'fill-in',
        explanation:`
            ${getUl([
                `<code>#body-section#nav.horizontal li:first-child</code>: there are 2 id selectors, 
                1 class and one pseudo-class selector, and one tag selector. So 2*100 + 2*10 + 1 makes 221.`,
                `<code>*</code> adds no specifity, 2 id selectors, 
                2 class selectors: <code>.horizontal</code>, <code>.active</code> and a two tag selectors 
                <code>li</code> and <code>body</code>. A <code>not</code> pseudo-class adds no specifity. 
                So: 2*100 + 2*10 + 2*10 equals 222,
                `,
                `Class selectors: <code>.container-fluid</code>, <code>col_8</code>, <code>alert</code>,
                <code>alert-success</code>, tag selectors: <code>body</code>, <code>html</code>, <code>p</code>,
                <code>b</code>, so 4 class selectors and 4 tag selectors so 4*10 + 4 equals 44.`
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
        question: `<code>!important</code> keyword should be avoided, but in some circumstances it might be used. 
            Extract those circumstances from below answers.`,
        answers: [
            '<q>user stylesheets</q>', 
            `A complex project with a lot of complicated selectors`, 
            `As a temporary work-around`, 
            `For testing and debugging`, 
            `Rule really important, for example in media queries,
             an element must be hidden on smaller devices and no risk should be taken that something will interfere`,
             `Some complex html and css structure makes it really hard to find other solution`,
             `Customizing a third company element`
        ],
        correctAnswers: [0, 3, 4, 6],
        type: 'checkbox',
        explanation:`
            ${getUl([
                `User stylesheets are always overwritten by page css, so to change anything without an important 
                keyword would be not possible in many use cases,`,
                `Can be used for testing and debugging, as test code is used only in a specific test set and is separated
                from developement, in separate files,`,
                `If applied to some important rule in media queries, sometimes important usege might be justified`,
                `Can be justified for customizing third-party code`,
                `Never should be used as a temporary solution, as such solutions become permanent solutions,`,
                `Never should be used only because something is complex`
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
        question: `Inline styling is not the best practice. However it is left in web developement for some reasons. Mark
        situations where inline styling usage is justified:`,
        answers: [
            `A mouse-movable element on web page`,
            `Some animations`,
            `A temporary work-around`,
            `Overwrite just one rule, just change text background in a single place in a <code>setTimeout</code> function`,
            `When writing in a framework like <i>Angular</i>, because components are encapsulated anyway`,
            `In shadow DOM element, because a shadow DOM is only a small portion of encapsulated code, and it is easy to 
            change it anyway`
        ],
        correctAnswers: [0,1],
        type: 'checkbox',
        explanation:`
            To understand when inline styling is justified it is a good idea to work with a css framework, to see 
            how classes an related HTML structure can be build. There is a set of small reusable and generic 
            classes changing only one behaviour. That is why it is better to write some small classes having lets say
            a <i>background-color: red</i> and manipulate those classes. Then if a specific element needs to be changed, 
            it is done in one place. If the whole set of such elements needs changing, then it can also be done in only a
            single place.
            ${getUl([
                `Inline is perfect for implementing a mouse-movable element, as while mouse moves with the element, its 
                location on the page is changed a great number of times and it is not possible to do this with classes`,
                `Some animations, for the same reason mosue moved elements are allowed, but in case of animations it is 
                better to considerate using keyframes and transitions, as transition functions may be applied. It is alwasy
                better to use css based animations in the first place, and avoid JS as long as it can be avoided,`,
                `No temporary work-around solutions are allowed in programming ever, as they become permanent solutions, and
                later it is impossible to maintain such code. Remember, that a lot of people work with code at the same time,`,
                `Overwriting a single rule in setTimeout can be done with an use of a class that changes only this small 
                behaviour. If such small behaviour is used in more places later it is easier to maintain it when it is 
                in a class`,
                `In case of encapsulation it is also a better idea to keep rules in classes, as it is easier to maintain.`,
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
]

export default function specifityQuestions(){
    return data;
}