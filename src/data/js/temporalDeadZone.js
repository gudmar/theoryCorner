
// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'Temporal dead zone',
    title: 'Temporal Dead Zone (TDZ)',
    searchKeywords:`
    let var const declaration definition defined declared hoisting
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Temporal Dead Zone'
                },
                {
                    elementType:'SmallHeadline',
                    content:'var'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>var</code> declares a <strong>function or global</strong> scoped variable,`,
                        `The variable declared with 
                        <code>var</code> is hoisted (see explanation below) if already is not at the beginning of the 
                        scope,`,
                        `In case the variable is hoisted it is initialized with the <code>undefined</code> value until
                        an assignment operation is met,`,
                        `In case the variable is not assigned with any value var initializes it with the <code>undefined</code>
                        value`
                    ]
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note">
                    As <code>a</code> was not declered inside of any function, it will be available everywhere
                    </div>
<pre>
console.log(a); // undefined
// as a is hoisted, but initialized with undefined
{
    {
        var a = 6; // no matter the declaration is in
        // block, it will be global as a is not declared 
        // in any function
    }
}
(function test(){
    console.log(a); // 6, as a is global
    // it is available in all functions
})()
</pre>         
<div class="note">
                    In below example <code>a</code> is declared in a nested function, and will be 
                    available <b>only</b> in the function it was ceclared
                    </div>
<pre>
(function test(){
    function test2(){
        console.log(a);
        // a is available here, it is undefined;
        {
            var a = 3;
        }
    }
    console.log(a);
    //<span style="background-color:red; color:white">ReferenceError</span>,
    //as a is known only in the test2 function.
    // In this case it is function scoped
})()
</pre>               
                    `
                },
                
                {
                    elementType:'SmallHeadline',
                    content:'let'
                },
                {
                            elementType:'UnsignedList',
                            content:[                    
                        `<code>let</code> declares a local (block scope) variable, the variable declared this way
                        will be available in the block it is declared, and child blocks,`, 
                        `It is hoisted, but it is not initialized by default, so cannot be used until 
                        fully initialized (see below TDZ),`,
                        `Declaration shadows previous declarations,`  
                        ]
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note">
                    <code>a</code> will be available inside the nested block
                    </div>
<pre>
// Here a is unknown,
{
    //Here a is declared (hoisted) but not available as initialization is not moved
    //here, before the let keyword, is the Temporary Dead Zone
    let a = 4;
    {
        console.log(a);
    }
}
</pre>         
                    <div class="note">
                    Here <code>a</code> is hoisted, but initialization not moved, so
                    <code>a</code> cannot be used and there will be an error
                    </div>
<pre>
// Here a is unknown,
{   
    console.log(a)
    //Here a is declared (hoisted) but not available as initialization is not moved
    //here, before the let keyword, is the Temporary Dead Zone
    let a = 4;
    {
        console.log(a);
    }
}
</pre>   
                    <div class="note">
                    Next declaration shadows the previous one
                    </div>
<pre>
{   
    let a = 4;
    {   
        let a = 3;
        console.log(a); //3
    }
}
</pre>   

                    <div class="note">
                    An error, as var attempts to define <code>a</code> variable in the global scope, and
                    <code>a</code> is already there because of the declaration with <code>let</code>
                    </div>
<pre>
{   
    let a = 4;
    {   
        var a = 3; // error
    }
}
</pre>  

                    <div class="note">
                    Below code will result with printing <code>undefined</code> to the console, as 
                    a is initialized in place it is declared with <code>let</code> with default
                    <code>undefined</code> value, as there is not assignment.
                    </div>
<pre>
// Here a is unknown,
{   
    let a;
    {
        console.log(a);
        a = 4;
    }
}
</pre>   

`
                },


                {
                    elementType:'SmallHeadline',
                    content:'const'
                },
                {
                            elementType:'UnsignedList',
                            content:[                    

                        `<code>const</code> behaves the same way that <code>let</code> does, with the difference that 
                        if a value is once assigned to the const variable, it may not be re-assigned, so will cause 
                        a <code>typeError</code>`
                    ]
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note">
                    This will result with an error, as const cannot be re-assigned
                    </div>
<pre>
const a = 'Assignment';
a = 'Attempt to assign for the second time';
// TypeError
</pre>         

`
                },
                {
                    elementType:'SmallHeadline',
                    content:'Hoisting'
                },

                {
                    elementType: 'UnsignedList',
                    content: [
                        `<strong>Hoisting</strong> is the process of moving the 
                        <b>declarations</b> of functions, classes and variables, to the beginning of their scope, 
                        so they may be used before they are declared. Only declarations or hoisted variables are 
                        moved. Initialization is not moved,`,
                        `When <code>var</code> is used, the hoisted variable is initialized with the default <code>
                        undefined</code> value. In case of <code>let</code> and </code>const</code> keywords this 
                        will not happen, and variables will not be available until they are initialized (assignment)`,
                        `Functions can be used before they are defined, but classes should be declared before usage.
                        Classes are hoisted, but <strong>not initialized</code>`
                    ]
                },


                {
                    elementType:'SmallHeadline',
                    content:'Temporary dead zone'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    The area between the beginning of the scope, and the place where a variable or a class is initialized,
                    is called a Temporary Dead Zone (TDZ). A variable may not be used before it is initialized, or
                    an attempt to do so will cause a ReferenceError.
                    `
                },

                {
                    elementType:'Code',
                    content:`
                    <div class="note">
                    In below example <code>a</code> is declared with a <code>var</code> keyword, and is declared inside a
                    function so it will be function scoped. Because variables declared with <code>var</code> when 
                    hoisted are by default initialized with <code>undefined</code>, undefined will be printed to the 
                    console.
                    
                    </div>
                    <pre>
(function testVar(){
    console.log(a);
    {
        var a = 1;
    }
})()
                    </pre>

                    <div class="note">Below the <code>a</code> variable is declared before it is used. In this case it is 
                    <code>undefined</code> by default</div>
                    <pre>
(function testLet(){
    let a;
    console.log(a);
    a = 1;
})();
                    </pre>
                    <div class="note">Below there a is hoisted to the beginning of the function, but its initialization is not moved, 
                    so running this code cause the <code>ReferenceError</code>. The temporal dead zone is from the 
                    beginning of the function till the let keyword.</div>
                    <pre>
(function testLet(){
    console.log(a);
    let a;
    a = 1;
})();
                    </pre>
                    <div class="note">Below code will result in printing 'printed' to the console without any error, as 
                    functions are hoisted to the beginning of their scope</div>
                    <pre>
(function testFunction(){
    print();
    function print(){console.log('printed')}
})()
                    </pre>


                    <div class="note">Below code will result in the <code>ReferenceError</code>. Classes are hoisted, but this is 
                    risky to use them before declaration. Here initialization of the class was not moved to the top
                    of the scope.</div>
                    <pre>
(function testClass(){
    let p = new Printer();
    p.print();
    class Printer{
        print(){console.log('printed')}
    }
})()
                    </pre>

                   
                    `
                },

                {
                    elementType:'SmallHeadline',
                    content:'More tricky examples'
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note"> Below code will result in the <code>ReferenceError</code>
                    <ul>
                        <li><code>a</code> is declared with <code>var a = 1</code></li>
                        <li><code>if(a)</code> resolves to a true value, as it is assigned 1</li>
                        <li>The <code>if</code> creates a new code block with new local scope, 
                        in this scope the <code>a</code> is declared with <code>let</code>, and is 
                        still not assigned any value (not initialized). So the global <coda>a</code>
                        is already shadowed with the <code>let</code> declaration, but still is not 
                        initialized, and there is an attempt to use it before initialization.</li>
                    </ul>
                    </div>
<pre>
(function testRefError(){
    var a = 1;
    if(a){
        let a = (a + 9);
    }
})()
</pre>                    
                    <div class="note"> Below code will result in the <code>ReferenceError</code>
                    Redeclaration: var creates a global variable, so it is hoisted to the global scope and this 
                    results with an error, as there is an <code>a</code> variable already there
                    </div>
<pre>
let a = 1;
{
  var a = 2;
}
</pre>       

                    <div class="note"> In below example <code>a</code> and <code>b</code> variables inside the arrow function are 
                    function scoped, so first console.log should produce 1, and the second will result in error, as
                    b is not know to the global scope.
                    </div>
<pre>
let a = 1;
(()=>{
  var a = 2;
  var b = 2;
})()
console.log(a); // 1
console.log(b); // error
</pre>       
 
                    `
                },

            ]},

        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:''
                },
                {
                    elementType:'Paragraph',
                    content:`

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
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getTDZData(){
    return data;
}