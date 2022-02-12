
let data =     {
    summary: 'jasmine async',
    title: 'Jasmine async',
    searchKeywords:`
        timeout setTimeout setInterval async then await callback promisses clock 
    `,
    cathegory: 'jasmine',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Jasmine async'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },


                {
                    elementType:'Headline-3',
                    content:'Handling async with <code>done</code>'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    A <code>beforeAll</code>, <code>beforeEach</code>, <code>afterAll</code>, <code>afterEach</code> and
                    <code>it</code> functions may take an optional argument. This argument is by custom
                    called <code>done</code> (but may be called in any different way), and is a function.
                    When this attibute is given, this means that the callback function is an async function, and 
                    the execution of all other functions in the test suit will be paused as long as this <code>done</code>
                    function in the previous function is not called.
                    `
                },
                {
                    elementType: 'NoteWarning',
                    content: `
                    In case <code>done</code> is passed as the parameter to the function, it <b>has</b> to be 
                    invoked inside, or else the function will be forever pending. In reality this <i>forever</i>
                    is 5s, and then this test will fail. Moreover this <code>done</code> has to be 
                    passed to each function in the test suit, as the whole suite may be async.
                    `
                },
                {
                    elementType: 'Code',
                    content: `
                    <div class="note">Testing done</div>
<pre>
describe('Using a timeout in beforeEach and done argument',()=>{
    let lock = true;
    beforeEach((done1)=>{
      setTimeout(()=>{
        lock = false; 
        done1();
      }, 1000);
      
    })
    it('Should pass when unlocked', function(done){
      expect(lock).toBeFalse();
      done();
    })
  })
</pre>                
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'Handling async with <code>clock</code>'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    There is a clock in jasmine, that has a tick method. This method simulates time passage:
                    `
                },
                {
                    elementType: 'Code',
                    content: `
                    <div class="note">Testing done</div>
<pre>
describe('Using a timeout in beforeEach and done argument',()=>{
    let lock = true;
    beforeEach(()=>{
      jasmine.clock().install()
      setTimeout(()=>{
        lock = false; 
      }, 1000);
      
    })
    afterEach(()=>{jasmine.clock().uninstall()})
    it('Should pass when unlocked', function(){
      jasmine.clock().tick(1001);
      expect(lock).toBeFalse();
    })
  })
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
                    content:'jasmine.github.io',
                    href: 'https://jasmine.github.io/tutorials/your_first_suite',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getJasmineAsyncData(){
    return data;
}