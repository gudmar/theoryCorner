
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
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'done', title: 'Async with <code>done</code> callback,'},
                        {id: 'clock', title: 'Async with clock'},
                        {id: 'fakeAsync', title: 'fakeAsync'},
                        {id: 'then', title: 'Async with <code>then</code>'},
                        {id: 'await', title: 'Async with <code>await</code>'},
                    ]
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },


                {
                    elementType:'Headline-3',
                    content:'<span id="done">Handling async with <code>done</code></span>'
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
                    content:'<span id="clock">Handling async with <code>clock</code></span>'
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
                    <div class="note">Testing clock</div>
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




                {
                    elementType:'Headline-3',
                    content:'<span id="fakeAsync">Handling async with <code>fakeAsync</code></span>'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    <code>fakeAsync</code> is for sure available in Angular. This is the special time zone, 
                    that allows to fake async behaviour. It is similar to the previous example with the 
                    <code>clock</code>, but there is a <code>fakeAsync</code> function that wrappes the 
                    <code>it</code> callback and exposes the <code>tick</code> function. No need to 
                    use the <code>jasmine.clock().install</code> or <code>jasmine.clock()</code> before the 
                    <code>tick</code>. The <code>tick</code> function symulates time passage, and takes 
                    one argument, that is time in ms.
                    `
                },
                {
                    elementType: 'Code',
                    content: `
                    <div class="note">Testing fakeAsync</div>
<pre>
describe('fakeAsync',()=>{
    let lock = true;
    function unlock(){
      setTimeout(()=>{
        lock = false; 
      }, 1000);
    }
  
    afterEach(()=>{jasmine.clock().uninstall()})
    it('Should pass when unlocked', fakeAsync(function(){
      unlock();
      tick(1001);
      expect(lock).toBeFalse();
    }))
  })
</pre>                
                    `
                },



                {
                    elementType:'Headline-3',
                    content:'<span id="then">Async with <code>then</code></span>'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    The sercet here is that the functions <code>beforeEach</code>, <code>beforeAll</code>,
                    <code>afterEach</code>, <code>afterAll</code> and <code>it</code> should return the 
                    promise: the chain with <code>then</code>, or just return something.
                    `
                },
                {
                    elementType: 'Code',
                    content: `
                    <div class="note">Tested class</div>
<pre>
export class AsyncService {
    data:any = {
      a:1, b:2
    }
  
    async getData(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(this.data)
        }, 100);
      })
    }
  
    async transformWithWebWorder(data:any){
        // A fake operation with web worker
      return new Promise((resolve)=>{
        setTimeout(()=>{
          let transformedData:any = {};
          for(let key of Object.getOwnPropertyNames(data)){
            transformedData[key] = data[key] ** 2;
          }
          resolve(transformedData)
        }, 100)
      })
    }
  }
</pre>                
            <div class='note'>And the testing code</div>
<pre>
describe('A promise with then', ()=>{
    let s : AsyncService;
    
    beforeEach(function (this:any){
      s = new AsyncService();
      let that = this;
      return s.getData().then(function(val) {that.data=val});
       // !!!! This is the return statement,
    })
    it('should process data', function (this:any){
      let that = this;
      // !!!! And returning the promise
      return s.transformWithWebWorder(this.data).then(
        function(val){
          expect(val).toEqual({a:that.data.a**2, b:that.data.b**2})
        }
      )
    })
  })
</pre>            
                    `
                },



                {
                    elementType:'Headline-3',
                    content:'<span id="await">Async with <code>await</code></span>'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    The same example as before but with <code>async await</code>. 
                    The class to be tested is the same as above, so no need to duplicate it here.
                    The <code>beforeEach</code>, <code>beforeAll</code>,
                    <code>afterEach</code>, <code>afterAll</code> and <code>it</code> functions do not 
                    return a promise. Instead the callback passed to those functions is an <code>async</code>
                    one, and there is an <code>await</code> operator used to wait until the promise resolves.
                    The rest of the code is the same as it would be in the synchronous example
                    `
                },
                {
                    elementType: 'Code',
                    content: `

<pre>
describe('A async function', function(){
    let s : AsyncService;
    beforeEach(async function (this:any){
      s = new AsyncService();
      this.data = await s.getData();
    })
    it('should process data', async function (this:any){
      let processedData = await s.transformWithWebWorder(this.data);
      expect(processedData).toEqual({a:this.data.a**2, b:this.data.b**2})
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