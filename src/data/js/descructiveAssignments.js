
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
                    elementType:'SmallHeadline',
                    content:'Unpacking an array to variables'
                },
                {
                    elementType:'Code',
                    content:`
<pre>                    
    let [a, b] = [0, 1];
    console.log(a); // 0;
    console.log(b); // 1

    let c, d, rest; // previous declaration;
    [c, d, ...rest] = [1, 2, 3, 4, 5, 6];
    console.log(c); // 1;
    console.log(d); // 2;
    console.log(rest); // [3, 4, 5, 6];

    let [e, f, g] = [1, 2, 3, 4, 5, 6];
    //e is 1, f is 2, g is 3. Values 4, 5, 6 are not assigned

    let [h, , i] = [1, 2, 3, 4];
    console.log(h); //1;
    console.log(i);// 3; 
    // 2 is omitted, as there is an empty space between h, ,i
    // 4 is omitted

    let arr = [1, 2]
    let [j, k, l, m] = arr;
    console.log(j); // 1;
    console.log(k); // 2;
    console.log(l); // undefined;
    console.log(m); // undefined;

    // DEFAULT VALUES
    let [n=5, m=7] = [1];
    // n is 1
    // m is 7, as it was not in assigned array, 
    // but had a default value


    // SWAPPING VARIABLES
    let o = 1; let p = 2;
    [p, o] = [o, p];
    console.log(o); // 2;
    console.log(p); // 1;
</pre>


                    `
                },
                {
                    elementType:'NoteWarning',
                    content:
                        `<code>const [a, ...b,] = [0, 2, 4]</code> is not correct, because of a coma after b,
                        the <strong>rest operator has to be the last one</strong>`
                },
                {
                    elementType:'SmallHeadline',
                    content:`Object assignment`,
                },
 
                {
                    elementType:'Code',
                    content:`
<pre>
    // Simplest assignment:
    const obj = {a: 1, b: 2, c: {e:3, f:4}};
    const {a, b, c} = obj;  // Will work ONLY with const
    // a === 1; b === 2; c === {e: 3, f: 4};

    // If we want to use let instead of const:
    const obj = {a: 1, b: 2, c: {e:3, f:4}};
    let a, b, c;   // Declaration first,
    ({a, b, c} = obj);  // Bracket is important,
    // Without the bracket {a, b, c} would be recognized as a block
    // and an error would occure;
    // let ({a, b, c} = obj) will not work either
    // a === 1; b === 2; c === {e: 3, f: 4};

    // Assignment to variables with different names, aliases:
    const obj = {a: 1, b: 2, c: {d: 3, e: 4}};
    const {a: newA, b: newB, c:newC} = obj;
    console.log(newA); // 1;
    console.log(newB); // 2;
    console.log(newC); // {d:3, e:4};
    
    // Default values
    const obj = {a: 1, b: 2};
    const {a = 0, b = 0, c = 0, d} = obj;
    console.log(a); // 1;
    console.log(b); // 2;
    console.log(c); // 0; this is the default value
    // used if we want to avoid the undefined value
    console.log(d); // undefined; no default value
    // was provided;

    // Default values with different names, aliases:
    const obj = {a: 1, b: 2};
    const {a: newA = 0, b: newB = 0, c: newC = 0} = obj;
    console.log(a); // error, a not defined;
    console.log(b); // error, b not defined;
    console.log(newA); // 1;
    console.log(newC); // 0

    // Getting into nested objects
    const obj = {a: 1, b: 2, c: {d: 3, e: 4}};
    const {a, b, c: {d, e}} = obj;
    console.log(a); // 1
    console.log(b); // 2
    //console.log(c); !!! NO c, it is not defined at all !!!
    console.log(d); // 3;
    console.log(e); // 4

</pre> 
                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:`Passing parameters to a function`,
                },
 
                {
                    elementType:'Code',
                    content:`
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
                    `

                },


                {
                    elementType:'Paragraph',
                    content:`Giving a function default values`,
                },
 
                {
                    elementType:'Code',
                    content:`
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
                    `

    },

                {
                    elementType:'SmallHeadline',
                    content:`Mutations`,
                },
                {
                    elementType:'Paragraph',
                    content:`In JS if we copy an object or an array, primitive balues are copied, but nested objects
                    are passed as a reference to the place in memory, where the nested object is situated, that is why
                    in destruction assignment nested objects and arrays are passed by the reference. Modification of 
                    such a property will cause a change in the original object.`,
                },
                {
                    elementType:'Paragraph',
                    content:`An array`,
                },
 
                {
                    elementType:'Code',
                    content:`
<pre>
let arr = [1, 2, 3, 4, 5, [6, 7]];
let [a, b, c, d, e, f] = arr;
console.log(a); // 1;
a += 10;
console.log(a); // 11;
console.log(arr[0]); // still 1, 
//was not mutated, as a is a copy of arr[0];

console.log(f); // [6, 7];
f[0] += 10;
console.log(f); // [16, 7];
console.log(arr[arr.length - 1]); // [16, 7];
// Changed, as last element of arr is a nested array, and
// nested objects are not copied in JS, they are passed by 
// a reference instead.
</pre> 
                    `
                },

                {
                    elementType:'Paragraph',
                    content:`An object`,
                },
 
                {
                    elementType:'Code',
                    content:`
<pre>
let obj = {a: 1, b: 2, c:{d:3, e:4}};
let a, b, c, d, e;
({a, b, c} = obj);
({d, e} = obj.c);
console.log(a); // 1;
a += 10; // a === 11;
console.log(obj.a); // 1;
// A copy, as this is a primitive, not a nested object;
console.log(d); // 3;
d += 10; // d === 13;
console.log(obj.c); // {d: 3, e: 4};
// Here still no change to the original nested object,
// as d was assigned as a primitive, obj.c.d is a primitive,
// not a nested object,

c.d += 20; // c.d === 23;
console.log(obj.c); // 23;
// c is a reference pointing to the original
// nested object being the property of obj,
// that is why the change on c.d is visible in obj.

console.log(d); // 13;
// This is still 13, as mentioned before, 
// this is a copy, so no changes were made.

</pre> 
                    `
                },



            ]
        },
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