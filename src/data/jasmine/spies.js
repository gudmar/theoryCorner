
let data =     {
    summary: 'jasmine spy',
    title: 'Jasmine spy',
    searchKeywords:`
    spy spies spying function mocking matcher matchers
    `,
    cathegory: 'jasmine',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'A spy'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    A <code>spy</code> is a dummy function, that will be invoked instead of the real function when
                    the real function is invoked. There are matchers for finding out if the function that is spied on 
                    was called, how many times it was called and with what parameters it was called.
                    There is a possiblity to invoke the real function with the spy (so it is executed in reality), 
                    or to invoke a false function with the spy instead, or the spy call may return a value.
                    `
                },

                {
                    elementType:'SmallHeadline',
                    content:'Matchers'
                },

                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>expect(aSpy).toHaveBeenCalled()</code>: if the function was called at least once,`,
                        `<code>expect(aSpy).toHaveBeenCalledBefore(bSpy)</code>: 
                         if the <code>aSpy</code> was called before the <code>bSpy</code>,`,
                        `<code>expect(aSpy).toHaveBeenCalledTimes(nr)</code>: if the <code>aSpy</code> was called the 
                        specified number of times,`,
                        `<code>expect(aSpy).toHaveBeenCalledWith(arg1[, arg2[, ...]])</code> to check if the 
                        spy was called with specified set of arguments.`
                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:'Creating a spy'
                },
                {
                    elementType:'Paragraph',
                    content:`Firstly, lets create an instance of the object, that is going to be spied on:
                    <code>let s = new SomeService()</code>. Now:`
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>let someSpy = spyOn<any, any>(s, 'methodName')</code>: 
                        this creates a dummy method. The real one will not be called. The <code>any, any</code>
                        part is for typeScript. There may ocure an error
                         <i>Argument of type '"methodName"' is not assignable to parameter of type 'never'</i>, and by 
                         specifying types we aviod this error.`,
                        `<code>let someSpy = spyOn<any, any>(s, 'methodName').and.callThrough()</code>: this creates a spy,
                        and calls the real function,`,
                        `<code>let someSpy = spyOn<any, any>(s, 'methodName').and.callFake(()=>{console.log('I am fake')})</code>:
                        calls the fake function given as the <code>callFake</code> argument,`,
                        `<code>let someSpy = spyOn<any, any>(s, 'methodName').and.returnValue('someVal')</code>:
                        will not call the real function, only the dummy one, and then return the value given to the <code>returnValue</code>
                        as an argument.`
                    ]

                    
                },

                {
                    elementType:'SmallHeadline',
                    content:'The simple example'
                },

                {
                    elementType: 'Code',
                    content: `
                    <div class="note">A class to test</div>
<pre>
class SpyTester {
    callFunctionTimes(n:number){
        for (let i=0; i < n; i++){
          this.functionToBeCalled(i)
          // if this.secondFunctionToBeCalled(2) was here, the 
          // expect(this.spy1).toHaveBeenCalledBefore(spy2); 
          // would fail
        }
        this.secondFunctionToBeCalled(2)
        
      }
    functionToBeCalled(x:any){}
     secondFunctionToBeCalled(x:any){}
}
</pre> 
            <div class="note">Now the test</div>
<pre>
describe('Spy', ()=>{
    let  service: SpyTester = new SpyTester();
    let spy1 =spyOn(service, 'functionToBeCalled');
    // WRONG way to create a spy !

    beforeEach(function(this:any){
      this.spy1 =spyOn(service, 'functionToBeCalled');
      // passing a spy with this
    })
    
    it('Should call functionToBeCalled', function(this:any){
      let spy2 = spyOn(service, 'secondFunctionToBeCalled')
      // The other way to create a spy
      service.callFunctionTimes(5);
      expect(this.spy1).toHaveBeenCalled();
      expect(this.spy1).toHaveBeenCalledTimes(5);
      expect(this.spy1).toHaveBeenCalledBefore(spy2);
      expect(this.spy1).toHaveBeenCalledWith(2);
    })
  })
</pre>
    <div class="note">Creating a false spy</div>
<pre>
it('Should create a mock spy object', function(this:any){
    let objSpy = jasmine.createSpyObj('multiSpy', ['sp1', 'sp2', 'sp3'])
    objSpy.sp1();
    objSpy.sp2();
    expect(objSpy.sp1).toHaveBeenCalled();
    expect(objSpy.sp2).toHaveBeenCalled();
  })

  it('Should create a mock single spy', function(this:any){
    let spy = jasmine.createSpy('singleSpy')
    spy();
    expect(spy).toHaveBeenCalled();
  })
</pre>             
                    `
                },
                

            ]
        },

        {
            elementType:'SmallHeadline',
            content:'Example with calling functions'
        },

        {
            elementType:'Code',
            content:`
            <div class="note">A class to be tested:</div>
<pre>
class DummyClass{
    callDummy(){
        this.dummy();
    }
    dummy(){
        this.nextDummy();
        console.log('Dummy');
    }
    nextDummy(){
        console.log('nextDummy');
    }
}
</pre>            
            <div class="note">Now the test</div>
<pre>
describe('Test callThrough, callFake and returnValue' ()=>{
    let s: DummyClass;
    beforeEach(()=>{s = new DummyClass()});

    it('should call nextDummy spy', ()=>{
        let spyA = spyOn<any,any>(s, 'dummy').and.callThrough();
        // the real dummy will be called,
        let spyB = spyOn<any, any>(s, 'nextDummy').and.callFake(()=>{
            console.log('I am a fake nextDummy, the real will not be called')
        })
        s.callDummy();
        expect(spyA).toHaveBeenCalledBefore(spyB);
        //spyA called the real method, so spyB was called instead of the 
        // nextDummy method.
        // Instead of nextDummy, a fake function was invoked.
        // Will pass, as spyA was called before spyB
    })
})
</pre>
            `
        },

        {
            elementType:'SmallHeadline',
            content:'Example with <code>returnValue</code>'
        },

        {
            elementType:'Code',
            content:`
            <div class="note">Class to test</code>
<pre>
class DummyClass{

    testIf3(){
        return (this.dummyIs3() === 3)
        // returns false, as dummyIs3 returns 2
    }

    dummyIs3(){return 2}
}
</pre>                        
            <div class="note">The spy will return 3, so the test will pass</code>
<pre>
describe('Testing returnValue', ()=>{
    let s: DummyClass;

    beforeEach(()=>{s = new DummyClass()});
    it('should pass', ()=>{
        let spy = spyOn<any,any>(s, 'dummyIs3').and.returnValue(3);
        let result = s.testIf3();
        expect(result).toBe(3);
        // pass
    })
})
</pre>            
            `
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
                    content:'scriptverse.academy',
                    href: 'https://scriptverse.academy/tutorials/jasmine-spyon.html',
                    description:'callThorough, callFake and returnValue explained'
                },
                {
                    elementType:'Link',
                    content:'codecraft.tv',
                    href: 'https://codecraft.tv/courses/angular/unit-testing/asynchronous/',
                    description:'Good side about testing in Angular. Done explained'
                },
            ]
        }
    ]
};

export default function getSpyData(){
    return data;
}