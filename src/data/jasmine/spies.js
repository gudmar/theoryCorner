
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
                    A spy is a function that may be bound to another function in order to measure the  
                    number of calls of the spied on function. Later there is a possiblity to match:
                    `
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
                    href: ' ',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getSpyData(){
    return data;
}