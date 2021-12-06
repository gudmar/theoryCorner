import specifityQuestions from "./css/quiz/specifityQuestions";
import selectorsQuestions from "./css/quiz/selectors";
import pseudoclassesQuestions from "./css/quiz/pseudoclasses";
import pseudoElementsQuestions from "./css/quiz/pseudoElements";

// category: 'js'|'css'|'html'|'ts'|'angular'|'react'|'npm'
// subcategory: 'variables','this','strict mode','DOM',
// level:'hard'|'medium'|'easy'
// question: string
// answers: [{id:'a, b,...', content:string},...],
// type: 'radio' | 'checkbox',
// correctAnswers: ['a','b',....],
// explanation:string
// links:[string]
function getUl(itemArray){
    return <ul>{itemArray.map((element)=>{return <li key="element">element</li>}) }</ul>
}

let questions = [
    // {
    //     category: 'css',
    //     level: 'easy',
    //     subcategory:'',
    //     question: '',
    //     answers: [
    //         '',
    //     ],
    //     correctAnswers: [0],
    //     type: 'checkbox',
    //     explanation:`
    //         ${getUl([
    //             '',''
    //         ]
    //         )}
    //     `,
    //     links: [
    //         '',''
    //     ]
    // },
    {
        category: 'css',
        level: 'medium',
        subcategory:'box-model',
        question: `What size (not including margins, so width and height returned by 
            document.querySelector('.test-div').getBoundingClientRect()
        ) will element described with below code have
        <pre class="alert alert-dark">
&lt;style>
    *{box-sizing: padding-box;}
    .test-div{
        position: relative;
        display: inline-block;
        width: 100px;
        height: 100px;
        margin-top: 10px;
        margin-bottom: 15px;
        margin-left: 20px;
        margin-right: 25px;
        outline: solid transparent 5px;
        border-top: solid transparent 10px;
        border-bottom: solid transparent 15px;
        border-left: solid transparent 20px;
        border-right: solid transparent 25px;
        padding: 10px;
    }
&lt;/style>
&lt;div class="test-div">&lt;/div>
        </pre>
        `,
        answers: [
            'width: 165px, height: 145px;','width: 185px, height: 165px;','width: 175px, height: 155px;',
            'width: 195px, height: 175px;','width: 180px, height: 160px;','none, as element is transparent, and will not be visible at all'
        ],
        correctAnswers: [0],
        type: 'radio',
        explanation:`
            ${getUl([
                `<code>box-sizing: padding-box</code>, so padding already included in <code>width: 100px;</code> 
                and <code>height: 100px;</code>`,
                `As <b>not</b> <code>border-box</code> border size has to be added to width and height, so 
                <code>width = 100px + border-left + border-right = 145px;</code>, <code>height = 100px 
                + border-top + border-bottom = 165px</code>`,
                'Outline is never taken into account, moreover it will overlap marign so it never adds any extra space',
                `Color transparency has nothing to do with element size on page. It will be invisible, but as position 
                is relative it will take space in layout and affect other elements position.`,
                `This solution is based on <a hfer="https://developer.mozilla.org/pl/docs/Web/CSS/box-sizing" target="_blank"
                developer mozilla</a>, however due to <a href="https://css-tricks.com/almanac/properties/b/box-sizing/">css-tricks</a>
                padding-box works only on firefox. In my case every browser I have does not support this value, even firefox. However
                default behaviour (content-box) in all browsers behave like padding box.`
            ]
            )}
        `,
        links: [
            'https://developer.mozilla.org/pl/docs/Web/CSS/box-sizing','https://css-tricks.com/almanac/properties/b/box-sizing/'
        ]
    },

    {
        category: 'css',
        level: 'medium',
        subcategory:'',
        question: `What will be vertical distance between divs from below code:
        <pre class="alert alert-dark">
&lt;style>
    .test-div{
        position:relative;
        height: 50px;
        width: 30px;
        margin-top: 30px;
        margin-bottom: 150px;
        margin-left: 40px;
        margin-right: 50px;
        padding-top: 40px;
        padding-bottom: 50px;
        border: 5px solid black;
        outline: 10px solid transparent;
    }        
&lt;/style>
&lt;div class = "test-div">&lt;/div>
&lt;div class = "test-div">&lt;/div>
        </pre>
        `,
        answers: [
            '150px','180px','270px','280px','300px'
        ],
        correctAnswers: [0],
        type: 'radio',
        explanation:`
            ${getUl([
                'Divs are block elements, so will be placed one below another',
                'Margins will collapse, so biggest of vertical margins between elements will be taken, 150px',
                'Div actual height will be 50px + paddings + borders so 150px, but spacing is created only by margins',
                'No outline is taken into accunt in calculating spacing'
            ]
            )}
        `,
        links: [
            '',''
        ]
    },


    {
        category: 'css',
        level: 'medium',
        subcategory:'',
        question: `What will be .test-div actual height, returned by <code>document.querySelector('.test-div').getBoundingClientRect().height?
        <pre class="alert alert-dark">
&lt;style>
    .test-div{
        position:relative;
        height: 50px;
        width: 30px;
        margin-top: 30px;
        margin-bottom: 150px;
        margin-left: 40px;
        margin-right: 50px;
        padding-top: 40px;
        padding-bottom: 50px;
        border: 5px solid black;
        outline: 10px solid transparent;
    }        
&lt;/style>
&lt;div class = "test-div">&lt;/div>
&lt;div class = "test-div">&lt;/div>
        </pre>
        `,
        answers: [
            '150px','50px','140px','170px','260px','240px'
        ],
        correctAnswers: [0],
        type: 'radio',
        explanation:`
            ${getUl([
                'Div actual height will be 50px + paddings + borders so 150px, but spacing is created only by margins',
                'No outline is taken into accunt in calculating element size',
                'Margin is not element size, it is spacing between elements'
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
        subcategory:'',
        question: 'What paris: propery value are valid',
        answers: [
            'margin-top: 30px;','outline-bottom: 20px;', 'outline-bottom: 20px solid white;', 
            'border-radius: 5px;', 'outline-radius: 4px;', 'padding-left: 4px;',
        ],
        correctAnswers: [0, 3, 4],
        type: 'checkbox',
        explanation:`
            ${getUl([
                'No possiblity to set outline-bottom, top, left or right sizes, outline size is constatn on all edges',
                'No possiblity to set outline-radius'
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
        subcategory:'form-validation',
        question: `Mandatory fields should have red outline, fields with correct value should have green background,
            fields with not proper value should have red background. Use proper pseudo classes`,
        answers: [
            `<code>input:</code>{{{}}}<code>{background-color:red;}</code>`,
            `<code>input:</code>{{{}}}<code>{background-color:green;}</code>`,
            `<code>input:</code>{{{}}}<code>{outline: red solid thin;}</code>`,
        ],
        correctAnswers: [[':invalid'], [':valid'], [':required']],
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
    selectorsQuestions(),
    pseudoclassesQuestions(),
    pseudoElementsQuestions(),
]

export function getCssQuestions(){
    let output = questions.concat(specifityQuestions());
    return output;
}
