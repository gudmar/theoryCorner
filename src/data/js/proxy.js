let data =     {
    summary: 'proxy',
    title: 'Proxy',
    searchKeywords:`getPrototypeOf setPrototypeOf isExtensible preventExtensions getOwnPropertyDescriptor 
    defineProperty has get set deleteProperty ownKeys apply constructor
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Reflect'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    <code>Proxy</code> is an api allowing user to wrap existing object to make some additional 
                    operations when Object methods are being called on this object. In particular 
                    this may be used to make some additional operations on an object, when ist properties are
                    being set or getted. There is a banch of methods that proxy allows to use. Proxy takes 2 
                    arguments: a <code>target</code> object, and a <code>handler</code> - an object having 
                    traps. Traps are functions that will allow to implement specific behaviour on object operations.
                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:'<code>Reflect.apply(target, thisArg, argList)</code>'
                },
                {
                    elementType:'Paragraph',
                    content:`like the 
                    <code>Function.prototype.apply()</code>, where <code>target</code> is a function that will be
                    called with the apply call.`
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
                    href: 'https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Proxy',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getProxyData(){
    return data;
}