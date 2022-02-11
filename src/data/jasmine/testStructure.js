
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
                                                <code>describe</code> is a function for running the test suit.
                                                It has:
                                                `
                                            },
                                            {
                                                elementType:'UnsignedList',
                                                content:[
                                                    `<code>beforeEach(cb)</code>: test case setup,`,
                                                    `<code>afterEach(cb)</code>: test case teardown,`,
                                                    `<code>beforeAll(cb)</code>: suite setup,`,
                                                    `<code>afterEach(cb)</code>: suite teardown,`,
                                                    `<code>it(description, cb)</code>: test case,`,
                                                ]
                                            },
                                        ]
                                    }
                            },


                            {
                                type: 'Nested',
                                title: 'beforeEach(cb)',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                <code>cb</code> callback will be called before each 
                                                <code>spec</code> from this <code>describe</code> block.
                                                This means, that this callback will be called even 
                                                before each <code>spec</code> (<code>it()</code>) from 
                                                the <code>describe</code> blocks that are nested in this block
                                                `
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                Is good for the setups. Due to documentation, custom
                                                matchers should ideally be added here:
                                                <code>jasmine.addMatchers(customMatchers)</code>
                                                })
                                                `
                                            },
                                        ]
                                    }
                            },  
                            {
                                type: 'Nested',
                                title: 'afterEach(cb)',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                <code>cb</code> callback will be called after each 
                                                <code>spec</code> from this <code>describe</code> block.
                                                This means, that this callback will be called even 
                                                after each <code>spec</code> (<code>it()</code>) from 
                                                the <code>describe</code> blocks that are nested in this block
                                                `
                                            },
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                Should be used for the test case teardown
                                                `
                                            },
                                        ]
                                    }
                            }, 
                            {
                                type: 'Nested',
                                title: 'beforeAll(cb)',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                Will be called before all spec from the hosting 
                                                <code>describe</code> block. May be used for the 
                                                test suite setup.
                                                `
                                            },
                                        ]
                                    }
                            }, 
                            {
                                type: 'Nested',
                                title: 'afterAll(cb)',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                Will be called after all test cases (it) from the hosting 
                                                <code>describe</code> block. May be used for the test 
                                                teardown.
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
                                type: 'Deeply nested',
                                title: 'beforeAll(cb)',
                                description: {
                                    elementType:'Section',
                                    content:[
                                            {
                                                elementType:'Paragraph',
                                                content:`
                                                <code>beforeAll</code>, <code>afterAll</code>, 
                                                <code>beforeEach</code> and <code>afterEach</code>
                                                may be nested in the nested describe blocks.
                                                In this cases will be executed only before or after 
                                                test cases from the host <code>describe</code> block
                                                (the nested one)
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
                    },


                },
                {
                    elementType: 'Headline-3',
                    content:'example'
                },


                {
                    elementType:'Code',
                    content:`
                    <div class="note">Lets test the following class</div>
<pre>
class MathOperations{
    add(a,b){return a + b;}
    substr(a,b){return a - b;}
    sort(arr){
        arr.sort((a,b)=>{
            if (a<b) return -1;
            if (a===b) return 0;
            return 1
        })
    }
}
</pre>           
                <div class="note">Tests</div>
<pre>
describe('Test MathOperations'){
    var testedClass = null; 
       // or testedClass = new MathOperations()
       // lets use beforeAll, to ilustrate this function
    beforeAll(()=>{
        testedClass = new MathOperations()
    })
    afterAll(()=>{
        delete testedClass;
            // would be garbage collected, but again
            // lest show the tardown :)
    })
    beforeEach(()=>{
        console.log('Running a MathOperations test')
    })

    describe('Test arithm. operations', ()=>{
        beforeEach(()=>{
            console.log('Running an arithm. test');
        })
        it('Should return 4 if 2 added to 2', ()=>{
            expect(testedClass.add(2, 2)).toBe(4);
        })
        it('Should return 5 if 3 substr. from 8', ()=>{
            expect(testedClass.substr(8, 5)).toBe(3);
        })

    })

    it('Should sort an array', ()=>{
        expect(testedClass.sort([4,2,3,1])).toEqual([1,2,3,4]);
    })
    xit('Should sort an array', ()=>{
        expect(testedClass.sort([4,2,3,{a: 9}])).toEqual([1,2,3,4]);
        // This will not fail, will be pending, no matter that this would
        // throw a TypeError. xit will not be called.
    })

}
</pre>                

                    `
                }




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