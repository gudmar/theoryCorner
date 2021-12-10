let data =     {
    summary: 'data types',
    title: 'data types',
    searchKeywords:`object array set map null undefined boolean number BigInt string symbol basic types variable`,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Data types, mutability'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    There are 7 primitive data types in JS: <code>null</code>, <code>undefined</code>,
                    <code>boolean</code>, <code>number</code>, <code>string</code>, <code>symbol</code>,
                    <code>BigInt</code>. A primitive value is unmutable, so it cannot be changed. Instead an
                    expression <code>someVariable = 'new value'</code> does not modify a variable. It instead
                    creates a new variable with a new value in a new place in memory, and puts it into a 
                    <code>someVariable</code> container. So <code>someVariable</code> points to a different
                    place in memory after this operation.<br>
                    The only other data type in JS is an <code>object</code>. All types like an <code>Array</code>, a
                    <code>Set</code>, a <code>Map</code>, a <code>Function</code>, a <code>Date</code> and so on are
                    <code>typeof(...) -> "object"</code>.
                    `
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Primitive data types'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>null</code> has only one value, that is <code>null</code>. It represents an intentional absence
                        of any object value. It is treated as <strong>falsy</strong><br>
                        <a href ="#nullUseCases" class="btn btn-primary m-3" data-bs-toggle="collapse" data-bs-target="#nullUseCases">
                            Difference from undefined
                        </a>
                        <div id="nullUseCases" class="collapse">
                            <ul>
                                <li><code>typeof null</code> "object", not "null" as every object derives from null,</li>
                                <li><code>typeof undefined</code> "undefined",</li>
                                <li><code>null === undefined</code> false</li>
                                <li><code>null == undefined</code> true</li>
                                <li><code>null === null</code> true</li>
                                <li><code>null == null</code> true</li>
                                <li><code>!null</code> true</li>
                                <li><code>isNaN(1 + null)</code> false</li>
                                <li><code>isNaN(1 + undefined</code> true</li>
                            </ul>
                        </div>
                        `,

                        `
                        <code>undefined</code> is automaticly assigned to variables that have just been declaired but not
                        defined. Undefined is not writable, enumerable or configurable. However it may be used as a variable name,
                        in this case it gets overwritten. Nevertheless overwritting undefined seems a very bad idea and should be
                        never done. Undefined should be compared with a <i>strict equality</i> operator <code>===</code>. 
                        In case an object key does not exist its returned value will be undefined. <strong>It is better to use </storng>
                        <code>typeof x === 'undefined'</code> in stead of <code>x === undefined</code> to avoid an error if x id not declaired.
                        `,


                        `<code>boolean</code>: has only two values: <code>true</code> or <code>false</code><br>
                        <a href ="#booleanUseCases" class="btn btn-primary m-3" data-bs-toggle="collapse" data-bs-target="#booleanUseCases">
                            Boolean detailes
                        </a>
                        <div id="booleanUseCases" class="collapse">
                            <ul>
                                <li><code>let x = false</code> declaration and definition of a boolean primitive</li>
                                <li><code>let y = new Boolean(false)</code> creates a new <code>typeof y == 'object'</code>,
                                    so in this case it is <strong>not a primitive</strong>. So 
                                    <code>y === true</code>, despite it was constructed with a false value. <code>y</code>
                                    is a not empty object, and not empty objects are evaluated to true.
                                </li>
                                <li><code>let z = Boolean(false)</code> does not create an object anymore, 
                                as it is a call of the function, not a constructor. 
                                It casts value given as an argument to a boolean primitive value,
                                    so <code>z != y</code>, <code>z === false</code>
                                </li>
                                <li><code>Boolean(undefined)==false</code></li>
                                <li><code>Boolean(null)==false </code></li>
                                <li><code>Boolean('')==false </code></li>
                                <li><code>Boolean(0)==false </code></li>
                                <li><code>Boolean({})==true </code></li>
                                <li><code>Boolean([])==true </code></li>
                                <li><code>!!(false)</code> does the same as <code>Boolean(false)</code>, it casts an
                                expression to a boolean primitive</li>
                            </ul>
                        </div>
                        `,                   
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
                            href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null',
                            description:'null'
                        },
                    ]
                }
            ]
        },
    ]
};

export default function getDataTypes(){
    return data;
}