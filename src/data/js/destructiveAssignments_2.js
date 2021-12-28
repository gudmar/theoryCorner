let data =     {
    summary: 'destructing assignment',
    title: 'Destructing assignment',
    searchKeywords:`

    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Destructive assignments'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    The destruction assignment makes it possible to unpack values from arrays and properties 
                    from objects into distinct variables. Important fact is, that both, destructive object and
                    destructive arrays assignments create copies of properties only if we do not take out the nested 
                    property
                    `
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    Click a table row for an example,
                    `
                },

                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Target', 'Use case', 'Description'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'Unpacking array variables',
                            [Symbol('code')]:`                            
<pre>
let [a, b] = [0, 1];
console.log(a); // 0;
console.log(b); // 1
</pre>                                                        
                            `,
                            Target: 'Array',
                            Name: `Unpacking an array variables,`,
                            'Use case': 'Basic syntax',
                            Description: '<code>let [a, b] = [0, 1];</code>'
                        },

                        {
                            [Symbol('title')]:'Unpacking array variables',
                            [Symbol('code')]:`                            
<pre>
let c, d, rest; // previous declaration;
[c, d, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(c); // 1;
console.log(d); // 2;
console.log(rest); // [3, 4, 5, 6];</pre>    


let [e, f, g] = [1, 2, 3, 4, 5, 6];
//e is 1, f is 2, g is 3. Values 4, 5, 6 are not assigned
                            `,
                            Target: 'Array',
                            Name: `Unpacking an array variables,`,
                            'Use case': 'Rest',
                            Description: '<code>let [a, b, ...rest] = [0, 1, 2, 3];</code>'
                        },


                        {
                            [Symbol('title')]:'Unpacking array variables',
                            [Symbol('code')]:`                            
<pre>
let [h, , i] = [1, 2, 3, 4];
console.log(h); //1;
console.log(i);// 3; 
// 2 is omitted, as there is an empty space between h, ,i
// 4 is omitted

</pre>
                            `,
                            Target: 'Array',
                            Name: `Unpacking an array variables,`,
                            'Use case': 'Ommitting array values',
                            Description: '<code>let [a, , , c] = [0, 1, 2, 3];</code>'
                        },


                        {
                            [Symbol('title')]:'Unpacking array variables',
                            [Symbol('code')]:`                            
<pre>
let arr = [1, 2]
let [j, k, l, m] = arr;
console.log(j); // 1;
console.log(k); // 2;
console.log(l); // undefined;
console.log(m); // undefined;

</pre>
                            `,
                            Target: 'Array',
                            Name: `Unpacking an array variables,`,
                            'Use case': 'Too many variables in the left side operator,',
                            Description: `<code>let let [a, b, c, d] = [0, 1];
                            </code>`
                        },

                        {
                            [Symbol('title')]:'Unpacking array variables',
                            [Symbol('code')]:`                            
<pre>
let [n=5, m=7] = [1];
// n is 1
// m is 7, as it was not in assigned array, 
// but had a default value
</pre>
                            `,
                            Target: 'Array',
                            Name: `Unpacking an array variables,`,
                            'Use case': 'Default values',
                            Description: '<code>let [a = 0, b = 0] = [0, 1]</code>'
                        },

                        {
                            [Symbol('title')]:'Unpacking array variables',
                            [Symbol('code')]:`                            
<pre>
let o = 1; let p = 2;
[p, o] = [o, p];
console.log(o); // 2;
console.log(p); // 1;
</pre>
                            `,
                            Target: 'Array',
                            Name: `Unpacking an array variables,`,
                            'Use case': 'Swapping variables',
                            Description: '<code>[p, o] = [o, p];</code>'
                        },


                        {
                            [Symbol('title')]:'Unpacking object variables',
                            [Symbol('code')]:`                            
<pre>
const obj = {a: 1, b: 2, c: {e:3, f:4}};
const {a, b, c} = obj;  // Will work ONLY with const
// a === 1; b === 2; c === {e: 3, f: 4};
</pre>
                            `,
                            Target: 'Object',
                            Name: `Unpacking an object variables,`,
                            'Use case': 'Basic case',
                            Description: '<code>const {a, b} = {a:0, b:1};</code>'
                        },

                        {
                            [Symbol('title')]:'Unpacking object variables',
                            [Symbol('code')]:`                            
<pre>
// If we want to use let instead of const:
const obj = {a: 1, b: 2, c: {e:3, f:4}};
let a, b, c;   // Declaration first,
({a, b, c} = obj);  // Bracket is important,
// Without the bracket {a, b, c} would be recognized as a block
// and an error would occure;
// let ({a, b, c} = obj) will not work either
// a === 1; b === 2; c === {e: 3, f: 4};
</pre>
                            `,
                            Target: 'Object',
                            Name: `Unpacking an object variables,`,
                            'Use case': 'Basic case with let',
                            Description: '<code>({a, b, c} = obj);</code>'
                        },

                        {
                            [Symbol('title')]:'Unpacking object variables',
                            [Symbol('code')]:`                            
<pre>
const obj = {a: 1, b: 2, c: {d: 3, e: 4}};
const {a: newA, b: newB, c:newC} = obj;
console.log(newA); // 1;
console.log(newB); // 2;
console.log(newC); // {d:3, e:4};
</pre>
                            `,
                            Target: 'Object',
                            Name: `Unpacking an object variables,`,
                            'Use case': 'Object with aliases',
                            Description: '<code>({a: aliasA, b: aliasB, c: aliasC} = obj);</code>'
                        },

                        {
                            [Symbol('title')]:'Unpacking object variables',
                            [Symbol('code')]:`                            
<pre>
let obj = {
    a: 0, b: 1, c: 3
}
let key = 'c';
let {[key]: alias, a, b} = obj;
console.log(alias); // 3;
console.log(a); // 0;
</pre>
                            `,
                            Target: 'Object',
                            Name: `Unpacking an object variables,`,
                            'Use case': 'Computed values',
                            Description: '<code>({[key]: aliasA} = obj);</code>'
                        },

                        {
                            [Symbol('title')]:'Unpacking object variables',
                            [Symbol('code')]:`                            
<pre>
// Default values
const obj = {a: 1, b: 2};
const {a = 0, b = 0, c = 0, d} = obj;
console.log(a); // 1;
console.log(b); // 2;
console.log(c); // 0; this is the default value
// used if we want to avoid the undefined value
console.log(d); // undefined; no default value
// was provided;
</pre>
                            `,
                            Target: 'Object',
                            Name: `Unpacking an object variables,`,
                            'Use case': 'Object with default values',
                            Description: '<code>({a = 0, b = 1} = obj);</code>'
                        },

                        {
                            [Symbol('title')]:'Unpacking object variables',
                            [Symbol('code')]:`                            
<pre>
// Default values
const obj = {a: 1, b: 2};
const {a: newA = 0, b: newB = 0, c: newC = 0} = obj;
console.log(a); // error, a not defined;
console.log(b); // error, b not defined;
console.log(newA); // 1;
console.log(newC); // 0
</pre>
                            `,
                            Target: 'Object',
                            Name: `Unpacking an object variables,`,
                            'Use case': 'Object with aliases and default values',
                            Description: '<code>({a: aliasA = 0, b: aliasB = 1} = obj);</code>'
                        },


                        {
                            [Symbol('title')]:'Unpacking object variables',
                            [Symbol('code')]:`                            
<pre>
const obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let  {a: aliasA, b, ...rest} = obj;
console.log(aliasA); // 1
console.log(rest); // {c: 3, d: 4, e: 5}
rest.c += 30;
console.log(rest.c) // 33;
console.log(obj.c); // 3; this is just a copy;
</pre>
                            `,
                            Target: 'Object',
                            Name: `Unpacking an object variables,`,
                            'Use case': 'Object with rest',
                            Description: '<code>({a: aliasA = 0, ...rest} = obj);</code>'
                        },                       

                        {
                            [Symbol('title')]:'Unpacking object variables',
                            [Symbol('code')]:`                            
<pre>
// Getting into nested objects
const obj = {a: 1, b: 2, c: {d: 3, e: 4}};
const {a, b, c: {d, e}} = obj;
console.log(a); // 1
console.log(b); // 2
//console.log(c); !!! NO c, it is not defined at all !!!
console.log(d); // 3;
console.log(e); // 4



</pre>
                            `,
                            Target: 'Object',
                            Name: `Unpacking an object variables,`,
                            'Use case': 'Getting into nested objects',
                            Description: '<code>({a: aliasA = 0, b: aliasB = 1} = obj);</code>'
                        },



                        {
                            [Symbol('title')]:'Unpacking object variables',
                            [Symbol('code')]:`                            
<pre>
let person = {
    id: 0,
    credentials:{
        login: 'j_doe',
        password: 'start_123'
    }
}

async function checkIfCredentialsValid({id, credentials: {login, password}}){
    return await askServerIfLoginSuccess(id, login, password)
}

console.log(checkIfCredentialsValid(person))
</pre>
                            `,
                            Target: 'Object',
                            Name: `Unpacking an object variables,`,
                            'Use case': 'Passing object parameters to a function',
                            Description: '<code>f({a, nested:{b, c}}</code>'
                        },


                        {
                            [Symbol('title')]:'Unpacking object variables',
                            [Symbol('code')]:`                            
<pre>
let drawing = {
    shape: 'circle',
    stroke: {
        sColor: '#aaa',
        sStyle: 'solid'
    },
    fill: {
        fColor: '#aaa',
        fStyle: 'solid'
    }
}

function draw(
    {
        shape = 'rectangle', 
        stroke: {sColor = 'red', sStyle = 'solid'}, 
        fill: {fColor:'green', fStyle:'solid}
    }){
        if (mode === 'svg) drawSvgShape(shape, sColor, sStyle, fColor, fStyle)
        ...
    }
</pre>
                            `,
                            Target: 'Object',
                            Name: `Unpacking an object variables,`,
                            'Use case': 'Passing object parameters with default values to a function',
                            Description: '<code>f({a=1, nested={b=0, c=0}}</code>'
                        },


                        {
                            [Symbol('title')]:'Unpacking object and array variables',
                            [Symbol('code')]:`                            
<pre>
const schoolClass = {
    id: '2b',
    superviser:'John Doe',
    members:[
        {firstName: 'Alfred', familyName: 'Smith'},
        {firstName: 'Margaret', familyName: 'Willson'},
        {firstName: 'Edgar', familyName: 'Brown'},
        {firstName: 'Anna', familyName: 'Windsor'},
    ]

}

let {
    id: classId,
    members: [
        {firstName: fName1, familyName: famName1},
        {firstName: fName2, familyName: famName2},
        {firstName: fName3, familyName: famName3},
        {firstName: fName4, familyName: famName4},
    ]
} = schoolClass;
console.log(classId); // '2b';
// console.log(supervisor); // error, not defined
console.log(fName1); // 'Alfred'
console.log(fName3); // 'Edgar'

</pre>
                            `,
                            Target: 'Object and Array',
                            Name: `Unpacking an array and object variables,`,
                            'Use case': 'Nested object and array destructuring',
                            Description: 'Click this row to see'
                        },



                        {
                            [Symbol('title')]:'Unpacking object and array variables',
                            [Symbol('code')]:`                            
<pre>
const schoolClass = {
    id: '2b',
    superviser:'John Doe',
    members:[
        {firstName: 'Alfred', familyName: 'Smith'},
        {firstName: 'Margaret', familyName: 'Willson'},
        {firstName: 'Edgar', familyName: 'Brown'},
        {firstName: 'Anna', familyName: 'Windsor'},
    ]

}

for (const {firstName: fName, familyName: famName} of schoolClass.members){
    console.log('Frist name: ' + fName);
    console.log('Family name: ' + famName);
}
// prints properly

</pre>
                            `,
                            Target: 'Object and Array',
                            Name: `Unpacking an array and object variables,`,
                            'Use case': 'For loop decomposition',
                            Description: 'Click this row to see'
                        },


                        {
                            [Symbol('title')]:'Unpacking object and array variables',
                            [Symbol('code')]:`                            
<pre>
function getSymbolByKey(obj, key){
    let symbols = Object.getOwnPropertySymbols(obj);
    function finder(item){
        if (item.toString() === 'Symbol('+key+')') return true;
        return false;
    }
    return symbols.find(finder);
}

let obj = {
    a: 0, b: 2, [Symbol('ex')]: 3
}

let exSymbol = getSymbolByKey(obj, 'ex');
// this is the tricky part, as simple
// obj[Symbol.for('ex')] will not work, 
// Symbol.for('ex') returns a typeof symbol, but
// when searched in obj, there is an undefined,
// so working with symbols is not that easy, they have to be 
// remembered somewhere, as if there were more symbols with 
// 'ex' key under obj, there would be no possiblity to tell them
// apart without keeping a registry

const {a, b, [exSymbol]: ex} = obj;
console.log(a); //0
console.log(b); //2
console.log(ex);//3

</pre>
                            `,
                            Target: 'Object',
                            Name: `Unpacking an object variables,`,
                            'Use case': 'Symbol decomposition',
                            Description: 'Click this row to see'
                        },
                    


                        {
                            [Symbol('title')]:'Unpacking object and array variables',
                            [Symbol('code')]:`                            
Properties and methods are searched for in objects prototype chain 
as ilustrated below:                            
<pre>

function ObjConstructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
}
ObjConstructor.prototype.z = 'inherited';
function NextObjConstructor(a, b, c, d, e){
    ObjConstructor.call(this,a,b,c);
    this.d = d;
    this.e = e;
}
NextObjConstructor.prototype = Object.create(ObjConstructor.prototype);
NextObjConstructor.prototype.constructor = NextObjConstructor

let nextInstance = new NextObjConstructor(1, 2, 3, 4, 5);
console.log(nextInstance); // {a:1, b:2, c:3, d:4, e:5};
console.log(nextInstance.z); // 'inherited'

let {a, z, ...rest} = nextInstance;
console.log(z); // 'inherited'


</pre>
                            `,
                            Target: 'Object',
                            Name: `Unpacking an object variables,`,
                            'Use case': 'Searching the prototype',
                            Description: 'Click this row to see'
                        },

                        
                ]

            },
            {
                elementType:'NoteWarning',
                content: `When using object destructing, if a property 
                is not the own property of the object, the prototype 
                chain is searched for the desired property,`
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
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getDestructionAssignmentData(){
    return data;
}