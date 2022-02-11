
let data =     {
    summary: 'jasmine test scructure',
    title: 'Jasmine, test structure',
    searchKeywords:`
        describe it expect expectation beforeEach afterEach beforeAll afterAll  fail 
        xdescribe xit pending 
    `,
    cathegory: 'jasmine',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Jasmine, the structure of tests'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },




                {
                    elementType: 'HiddenDescription',
                    content: {
                        // legend should be hidden
                        legend: [
                            {
                                type: 'Not nested',
                                styleClasses: 'btn bg-dark text-white ',
                                description: 'Describe block.'
                            },
                            {
                                type: 'Nested',
                                styleClasses:'btn btn-secondary ml-2rem text-white ',
                                description: 'Nested in the describe block: it, describe, xit expect'
                            },
                            {
                                type: 'Deeply nested',
                                styleClasses:'btn btn-light border border-dark ml-4rem ',
                                description: 'describe may be nested in the describe, it may be nested, etc'
                            }

                        ],
                        items:[
                            {
                                type: 'Not nested',
                                title: 'describe(testSuiteName: string, callback: function)',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                `
                                            },
                                        ]
                                    }
                            },

                            {
                                type: 'Nested',
                                title: 'it(testCaseName: string, callback: function)',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                    This function is to describe a test case, so an atomic
                                                    test bit testing a single use case. This function takes:
                                                `
                                            },
                                            {
                                                elementType:'UnsignedList',
                                                content:[
                                                    `<code>testCaseName</code>: a string value that describes the test 
                                                    name. Should start with the <i>should</i> word, so it sounds in a 
                                                    natural language form`,
                                                    `<code>callback</code>: a function that will be wrapped by the 
                                                    <code>it</code> decorator-function.`
                                                ]
                                            },
                                            {
                                                elementType:'Code',
                                                content:`
                                                
                                                `
                                            },
                                        ]
                                    }
                            },  


                            {
                                type: 'Nested',
                                title: 'xit(testCaseName: string, callback: function)',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                    This function is exactly the same as the <code>it</code> function
                                                    but the test does not resolve to either pass or fail. Instead it 
                                                    becomes <i>pending</i>, not influencing the parent test set/suite
                                                `
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                May be used to skip tests.
                                                `
                                            },
                                        ]
                                    }
                            },  


                            {
                                type: 'Deeply nested',
                                title: 'expect(value: any).matcher(value:any)',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                    <code>expect</code> is a function taking a value, or an expression that 
                                                    evaluates to a value. This function chains with a <i>matcher</i>: a 
                                                    function that compares the value returned by the <code>expect</code> 
                                                    function, and passes the test in case the values are equal, or fails it.
                                                `
                                            },
                                            {
                                                elementType:'Code',
                                                content:`

                                               `
                                            },


                                        ]
                                    }
                            },                


                            {
                                type: 'Nested',
                                title: 'describe(testSetName: string, callback: function)',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                The <code>describe</code> function may be nested, to extract a 
                                                logical set of tests
                                                `
                                            },
                                        ]
                                    }
                            },

                            {
                                type: 'Deeply nested',
                                title: 'it(testCaseName: string, callback: function)',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                
                                                `
                                            },
                                        ]
                                    }
                            },        
                            
                            

                            {
                                type: 'Not nested',
                                title: 'xdescribe(testSuiteName: string, callback: function)',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                This is the same as the <code>describe</code> with the difference, that 
                                                the test suite will not be executed, and the test result will not pass
                                                or fail, but will resolve to the pending state.
                                                `
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                May be used to skip tests.
                                                `
                                            },
                                        ]
                                    }
                            },


                        ]
                    }

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
                    content:'jasmine.github.io',
                    href: 'https://jasmine.github.io/tutorials/your_first_suite',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getJasmineTestStructureData(){
    return data;
}