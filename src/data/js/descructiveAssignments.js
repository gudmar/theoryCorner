
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
                    from objects into distinct variables,
                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:'Unpacking an array to variables'
                },
                {
                    elementType:'Code',
                    content:`
                    let [a, b] = [0, 1];
                    console.log(a); // 0;
                    console.log(b); // 1

                    let c, d, rest; // previous declaration;
                    [c, d, ...rest] = [1, 2, 3, 4, 5, 6];
                    console.log(c); // 1;
                    console.log(d); // 2;
                    console.log(rest); // [3, 4, 5, 6];

                    let [e, f, g] = [1, 2, 3, 4, 5, 6];
                    //e is 1, f is 2, g is 3. Values 4, 5, 6 are not taken out

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



                    `
                },
                {
                    elementType:'NoteWarning',
                    content:
                        `<code>const [a, ...b,] = [0, 2, 4]</code> is not correct, because of a coma after b,
                        the <strong>rest operator has to be the last one</strong>`
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        ``
                    ]
                },
 
                {
                    elementType:'Code',
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