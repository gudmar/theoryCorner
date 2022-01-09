// 


let data =     {
    summary: 'async',
    title: 'Async',
    searchKeywords:`async asynchronous functions promise race resolve reject handler then finally catch await then
    all
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Asynchronous functions'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                 Not every value is known, due to communication with the server. Some data will be delivered after a time
                 is passed, and some will not be delivered at all. When a button is clicked and data has to be 
                 downloaded from the server, the whole page and the browser should not be blocked by the fact that 
                 the application is waiting for the data it is not guaranteed to receive at all. That is why asynchronous
                 functions were introduced to JS. Such a function runs in the same thread the rest of code does (as JS
                is mainly a single thread language, one exception is for the web workers) and returns a promise.
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:'The promise'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    The promise is an object, that may be returned instatnly, when some assignment with a asymchronous
                    value takes place. However this object holds no value at the time it is returned. Instead it is in
                    <strong>pending</strong> state. Finally it will change its state to <strong>fulfilled</strong>
                    or <strong>rejected</strong>. Meanwhile the whole application code is not blocked, so user may scroll, interact
                    with the page until the promise is finalized. A promise may depend on other asynchronous functions,
                    so it may not be <strong>settled</code> untill other promises are finalized. In this case there is a promise
                    chain.
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:'The promise chain'
                },
                {
                    elementType: 'Paragraph',
                    content: `

                    `
                },



                {
                    elementType:'SmallHeadline',
                    content:''
                },
                {
                    elementType:'UnsignedList',
                    content:[
              
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:''
                },

                {
                    elementType:'UnsignedList',
                    content:[
     
                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:'Example'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                       
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
                    content:'Promise',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise',
                    description:'Constructor'
                },
            ]
        }
    ]
};

export default function getPromiseData(){
    return data;
}