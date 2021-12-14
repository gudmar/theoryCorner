import {getUl} from '../../../services/toolbox'

const data = [
    {
        category: 'js',
        level: 'easy',
        subcategory:'data types',
        question: `
            Which are the proper ways of creating a new object
        `,
        answers: [
            `<code>var obj = {prop: 'val'}</code>`,
            `<code>var obj = Object.create()</code>`,
            `<code>
<pre>
    function SomeObject(property){
        this.property = property;
    }
    let obj = new SomeObject(3);
</pre>            
            </code>
            `,
            `
            <code>
<pre>
    class SomeObject{
        constructor(property){this.someProperty = property}
    }
    let obj = new SomeObject(4)
</pre>            
            </code>
            `,

            `<code>var obj = {prop = 'val'}</code>`,
            `<code>
<pre>
    function SomeObject(property){
        this.property = property;
        return this.propery
    }
    let obj = new SomeObject(3);
</pre>            
            </code>
            `,
            `
            <code>
<pre>
    class SomeObject() {
        constructor(property){this.someProperty = property}
    }
    let obj = new SomeObject(4)
</pre>            
            </code>
            `,
        ],
        points: 1,
        correctAnswers: [0, 1, 2, 3],
        type: 'checkbox',
        explanation:`
            Correct syntaxes:`+
            getUl([
                `<code>var obj = {prop: 'val'}</code>`,
                `<code>var obj = Object.create()</code>`,
                `<code>
    <pre>
        function SomeObject(property){
            this.property = property;
        }
        let obj = new SomeObject(3);
    </pre>            
                </code>
                `,
                `
                <code>
    <pre>
        class SomeObject{
            constructor(property){this.someProperty = property}
        }
        let obj = new SomeObject(4)
    </pre>            
                </code>
                `
            ]),
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'object',
        question: `
            What is the right way to access a property descriptor?
        `,
        answers: [
            `<code>Object.getOwnPropertyDescriptor(someObject,'someProperty')</code>`,
            `<code>someObject.getOwnPropertyDescriptor('someProperty')</code>`,
            `<code>someObject['someProperty'].descriptor</code>`,
            `<code>someObject.getPropertyDescriptor('someProperty')</code>,`,
            `<code>Object.getPropertyDescriptro(someProperty)</code>`
        ],
        points: 1,
        correctAnswers: [0],
        type: 'radio',
        explanation:`
        <code>Object.getOwnPropertyDescriptor(someObject, 'someProperty')</code>, a static method of the Object
        is used to retrieve the property descriptor.
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'easy',
        subcategory:'object',
        question: `
            Which statements are true?
        `,
        answers: [
            `The right order of prototype search chain is: 
            <ol>
                <li>Object own properties,</li>
                <li>Object prototype,</li>
                <li>Objects prototypes prototype,</li>
                <li>null, as it is the value last prototype points to</li>
            </ol>
            `,
            `<code>Object.getOwnPropertyNames()</code> does not search in prototypes`,
            `<code>__proto__</code> should be used to set and get an object prototype, it should be used for 
            inheritance,`,
            `<code>Object.setPrototypeOf()</code> may be used for extending an object`,
            `Thanks to prototype each object has access to its ancestors properties`
        ],
        points: 1,
        correctAnswers: [0, 1, 3, 4],
        type: 'checkbox',
        explanation:`
        The only incorrect answer is related to <code>__proto__</code>. <code>__proto__</code> is an object 
        that holds elements prototype setter and getter, and it may be used for inheritance (set the prototype to
        another object), however it <strong>should not</strong> be used, as it is depreciated. <code>Object.setPrototypeOf()</code>
        and <code>Object.getPrototypeOf()</code> should be used for above purposes.
        `,
        links: [
            '',''
        ]
    },
    {
        category: 'js',
        level: 'medium',
        subcategory:'objects',
        question: `Fill correct attributes to their object descriptor definitions. Pleas use only small letters`,
        answers: [
            `{{{}}}: indicates if the property value will be allowed to be changed with an assignment operator,`,
            `{{{}}}: indicates if the property will be allowed to be listed with a <code>for..in</code> or with a 
            <code>Object.getOwnPropertyNames()</code> or <code>Object.getOwnPropertySymbols()</code>,`,
            `{{{}}}: indicates if the property descriptor will be allowed to be changed,`,
            `{{{}}}(){}: a method that will be called if there is an attempt to write a new value under property key,`,
            `{{{}}}(){}: a method that will be called each time a value is retrieved from the key,`
        ],
        correctAnswers: [['writable'],['enumerable'],['configurable'],['set'],['get']],
        type: 'fill-in',
        points: 5,
        explanation:`
            ${getUl([
                `<strong>writable</strong> attribute indicates if the value will be allowed to be set with an assignment operator,`,
                `<strong>enumerable</strong> attribute indicates if the property will be listed with a <code>for..in</code>,
                <code>Object.getOwnPropertyNames()</code> or <code>Object.getOwnPropertySymboes()</code> methods,`,
                `<strong>configurable</code> is an attribute allowing reconfiguration of property descriptor. Note. Once set to 
                true it might be difficult to alter target property, as <code>configurable</code> will not be allowed to change,`,
                `<strong>get(), set()</strong> are a getter and a setter, so methods used to put a new value and retireve the 
                value from the key`
            ]
            )}
        `,
        links: [
            '',''
        ]
    },
]

export default function getObjectsQuestions(){
    return data;
}