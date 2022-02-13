

// TestBed - configures and initializes environment for unit testing and provides methods for creating 
// components and services
    // initTestEnvironment(): initialize the environtmant for testing with a compiler factory. Should be called
    // only once, to set up the common providers for the current test suit and currnet platform. 
    // If called later, resetTestEnvironment should be used instead

    //configureTestingModule()
    // compileComponents()
    // inject(token, notFoundValue?, flags?)
    // get(token)
    // execute(tokens, fn)
    /// overrideModule(module, overrideMedatata), overrideComponent, overrideDirective, overrideProvider(token, providers)
    // createComponent(component)
    

    // https://angular.io/api/core/testing/TestBed





// Mock everything not related



// COMPONENTS
// Lifecycle methods are not called by default, an user has to call them


// beforeEach(() => {
//     TestBed.configureTestingModule({
//       // provide the component-under-test and dependent service
//       providers: [
//         WelcomeComponent,
//         { provide: UserService, useClass: MockUserService }
//       ]
//     });
//     // inject both the component and the dependent service.
//     comp = TestBed.inject(WelcomeComponent);
//     userService = TestBed.inject(UserService);
//   });

// it( '', ()=>{
//     comp.ngOnInit();
// })


// https://angular.io/guide/testing-components-basics





let data =     {
    summary: 'jasmine angular',
    title: 'Jasmine Angular',
    searchKeywords:`

    `,
    cathegory: 'jasmine',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Testing Angular with Jasmine'
                },


                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'dictionary', title: 'Dictionary'},
                        {id: 'service', title: 'Testing a service,'},
                        // {id: 'pipes', title: 'Testing pipes,'},
                        {id: 'simpleComponent', title: 'Testing a component without dependencies,'},
                        {id: 'serviceComponent', title: 'Testing a component with service,'},
                        {id: 'DOM', title: 'Testing component with DOM,'},
                        {id: 'directives', title: 'Testing directives,'},
                        {id: 'private', title: 'What about private members of the class,'},
                    ]
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },

                {
                    elementType:'Headline',
                    content:'Dictionary'
                },

                {
                    elementType: 'HiddenDescription',
                    content: {
                        // legend should be hidden
                        legend: [
                            {
                                type: 'Item',
                                styleClasses: 'btn bg-dark text-white ',
                                description: 'Describe block.'
                            },
                        ],
                        items:[
                            {
                                type: 'Item',
                                title: 'TestBed',
                                description: {
                                    elementType:'Section',
                                    content:[
                                        {
                                            elementType: 'Paragraph',
                                            content: `
                                            <code>TestBed</code>: ATB: Angular TestBed is the API for writing unit test in agular
                                            `
                                        },
                                        ]
                                    }
                                },

                                {
                                type: 'Item',
                                title: 'TestBed.configureTestingModule',
                                description: {
                                    elementType:'Section',
                                    content:[
                                        {
                                            elementType: 'Code',
                                            content: `
<pre>
TestBed.configureTestingModule({
    declarations: [ LoadChangeContentComponent ],
    providers: [{provide: RandomDataProviderService, useClass: MockRandomDataService}]
})

//or

beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadChangeContentComponent ],
      providers: [{provide: RandomDataProviderService, useClass: MockRandomDataService}]
    })
    .compileComponents();
  });
</pre>                                            
                                            `
                                        },
                                        {
                                            elementType: 'Paragraph',
                                            content:`
                                            Should be done if there are dependecies.
                                            This operation reminds about configurating an angular module with the 
                                            decorator. This should be done in <code>beforeEach</code>, and 
                                            only once.
                                            `
                                        },
                                        ]
                                    }
                                },

                               {
                                type: 'Item',
                                title: 'Fixture',
                                description: {
                                    elementType:'Section',
                                    content:[
                                        {
                                            elementType: 'Paragraph',
                                            content:`<code>Fixture</code>: The <code>ComponentFixture</code> 
                                            <a href="https://angular.io/guide/testing-components-basics#componentfixture" target="blank">
                                            [angular.io]</a> is a test harness for interacting with the created component and its 
                                            corresponding element.
                                            `
                                        },
                                        {
                                            elementType: 'Paragraph',
                                            content:`Below example explains a lot:
                                            `
                                        },
                                        {
                                            elementType: 'Code',
                                            content:`
                                            <pre>
describe('LoadChangeContentComponent', () => {
  let component: LoadChangeContentComponent;
  let fixture: ComponentFixture<LoadChangeContentComponent>;

  beforeEach(async () => {
      // The service is an async function, so the before each 
      // should be async 
    await TestBed.configureTestingModule({
        // configureTestingModule is because of the dependancy
      declarations: [ LoadChangeContentComponent ],
      providers: [
          RealService, //if a need to use one
          {
              provide: RandomDataProviderService, 
              useClass: MockRandomDataService
          }
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadChangeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // No auto changes will be detected,
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
                                            </pre>

                                            `
                                        },
                                    ]
                                }
                            },

                                        {
                                            type: 'Item',
                                            title: 'fixture.nativeElement',
                                            description: {
                                                elementType:'Section',
                                                content:[
                                                    {
                                                        elementType: 'Paragraph',
                                                        content: `
                                                        Or <code>ComponentFixture.nativeElement</code> or
                                                        <code>ComponentFixture.DebugElement.nativeElement</code>
                                                        The <code>fixture.nativeElement</code> is the short version that
                                                        may be used. The longer one is due to the fact that jasmine tests
                                                        with Angular may be done on the server side, and with web workers,
                                                        so must be kept more general because of the fact, that there
                                                        is no DOM on the server or in the web worker.
                                                        `
                                                    },
                                                    {
                                                        elementType: 'Paragraph',
                                                        content: `
                                                        <code>fixture.nativeElement</code> may be used with the <code>querySelector</code>
                                                        methods.
                                                        `
                                                    },
                                                    {
                                                        elementType: 'Code',
                                                        content: `
                                                        <pre>
fixture.nativeElement.querySelector('div');
// or the same
fixture.DebugElement.nativeElement.querySelector('div');
                                                        </pre>
                                                        `
                                                    },
                                                    {
                                                        elementType: 'Paragraph',
                                                        content: `
                                                        There is a way to get to the desired element with a <code>By.css</code>
                                                        api. This is useful in case of non browser environments, where 
                                                        is no DOM (like a server).
                                                        `
                                                    },
                                                    {
                                                        elementType: 'Code',
                                                        content: `
                                                        <pre>
import { By } from '@angular/platform-browser';    

it('should find <div> with fixture.debugElement.query(By.css)', () => {
    const dE: DebugElement = fixture.debugElement;
    const divDe = dE.query(By.css('div'));
    const div: HTMLElement = divDe.nativeElement;
    expect(div.textContent).toEqual('some innerText');
  });

                                                        </pre>
                                                        `
                                                    },

                                                    ]
                                                }
                                            },


                                            {
                                                type: 'Item',
                                                title: 'fixture.componentInstance',
                                                description: {
                                                    elementType:'Section',
                                                    content:[
                                                        {
                                                            elementType: 'Paragraph',
                                                            content: `
                                                            <code>fixture.nativeElement</code> provides access to DOM, and
                                                            <code>fixture.componentInstance</code> 
                                                            gives access to the component internals. This makes it possible 
                                                            to call lifecycle methods on the component and get to 
                                                            internal component variables:

                                                            `
                                                        },
                                                        {
                                                            elementType: 'Paragraph',
                                                            content: `
                                                            Without dependencies, fixture might not be needed

                                                            `
                                                        },
                                                        {
                                                            elementType: 'Code',
                                                            content: `
                                                            <div class="note">Firstly lets declare the fixture and the 
                                                            component</div>
                                                            <pre>
describe('',()=>{
    let component: MyTestedClass = new MyTestedClass();
})                                                            
                                                            </pre>
                                                            <div class="note">Now for the it block</div>
<pre>
    it('should pass', ()=>{
        expect(component.someProp).toBe('');
        component.onInit
    })
</pre>                                                            
                                                            `
                                                        },
                                                        {
                                                            elementType: 'Paragraph',
                                                            content: `
                                                            There is a way to get to the desired element with a <code>By.css</code>
                                                            api. This is useful in case of non browser environments, where 
                                                            is no DOM (like a server).
                                                            `
                                                        },
                                                        {
                                                            elementType: 'Code',
                                                            content: `
                                                            <pre>

    
                                                            </pre>
                                                            `
                                                        },
    
                                                        ]
                                                    }
                                                },



                                        ]
                                    }
                                }
                            ]
                        },

        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Testing a component'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Entity tests should test elements in isolation. This meens, that a component should be tested 
                    on its own. Testing a component is not testing related services, directives or pipes. 
                    Everything has to be stubbed or mocked. If there is a service fetching data from the 
                    server, the server communication is not allowed in ET. The service should be mocked with
                    a class having methods named in the same way, and returning hardcoded values. 
                    If a mocked service contains too much logic, then bugs may occure in the mocked service, and
                    this is unwanted.
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'No dependencies'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Let's take a simple component for exercising
                    `
                },
                {
                    elementType:'Code',
                    content:`
<div class="note">HTML</div>                    
<pre>
&lt;div class="alert alert-warning">
    {{content}}
&lt;/div>
</pre>
<div class="note">ts</div>                    
<pre>
@Component({
    selector: 'my-component',
    templateUrl: '...',
    styleUrls: ['...']
  })
export class MyComponent implements OnInit {

    constructor() { }
    content: string = '';
    ngOnInit(): void {
      this.content = "This content was set by the ngOnInit"
    }
  }
</pre>
                    `
                },

                {
                    elementType:'Paragraph',
                    content:`
                    The easiest way to create and test a component class is with the <code>new</code> operator
                    usage:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
fdescribe('Setting test with new operator', ()=>{
    let component = new MyComponent();
    it('should be filled with data onInit',()=>{
      expect(component.content).toBe('');
      component.ngOnInit();
      console.info('COMPONENT', component)
      expect(component.content.length).toBeGreaterThan(4);
    })
  })
</pre>
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Above code allows to test the component class, even to invoke lifecycle methods on it.
                    However, the Angular component consists of the ts class, that is binded with the HTML
                    template. When the component is tested, the bindings should be tested. 
                    So access to the DOM is needed, and the <code>detectChanges</code> method would be necessary.
                    Because of this, the fixture is inevitable.
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
describe('Test with the fixture', () => {
    let component: MyComponent;
    let fixture: ComponentFixture<MyComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ MyComponent ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(MyComponent);
      component = fixture.componentInstance;
    });
  
    it('should fill the content property after ngOnInit', () => {
      let domElement = fixture.debugElement.nativeElement.querySelector('div');
      expect(component.content).toBe('');
      // empty, as ngOnInit has to be invoked manualy
      component.ngOnInit();
      expect(component.content.length).toBeGreaterThan(5);
      // after ngOnInit content has to be not empty
      expect(domElement.innerHTML).toBe('');
      // innerHTML is still empty, as changes are not detected automatically
      fixture.detectChanges();
      // After detecting chagnges, DOM content should be updated
      expect(domElement.innerHTML).not.toBe('');
    });
  });
</pre>
                    `
                },

                {
                    elementType:'SmallHeadline',
                    content:'Testing a component with the service dependency'
                },
                {
                    elementType:'Paragraph',
                    content:`Lets take a simle component having a headline and a paragraph. Both values are
                    set in ngOnInit by an async service:`
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note">The service giving random strings</div>
<pre>
export class RandomDataProviderService {
    getData(len:number){
      let output = '';
      let count = 0;
      return new Promise((resolve)=>{
        let int = setInterval(()=>{
          let d = Date.now() * Math.random();
          output += ` ` + d.toString(32);
          count++;
          if (count >= len) {
            clearTimeout(int);
            resolve(output);
          }
        },1)  
      })
    }
  }
</pre>               
                <div class="note">And the components HTML</div>
                <pre>                
&lt;h5>{{headline}}&lt;/h5>
&lt;p>{{content}}&lt;/p>
&lt;button class="btn btn-info" (click)="update()">Update&lt;/button>
                </pre>
                <div class="note">And components ts</div>     
<pre>
export class LoadChangeContentComponent implements OnInit {
    headline:string = '';
    content:string = '';
    constructor(private dataProvider: RandomDataProviderService) { }
  
    ngOnInit(): void {
      this.setNewContent();
    }
  
    setNewContent(){
      let that = this;
      this.dataProvider.getData(2).
            then(function(value){that.headline = <string>value});;
      this.dataProvider.getData(80).
            then(function(value){that.content = <string>value});;
    }
  
    update(){
      console.log('Button clicked')
      this.setNewContent();
    }
  }
</pre>                
                    `
                },

                {
                    elementType:'Paragraph',
                    content:`The service gives random values. For tests it is better to have 
                    deterministic values. Service class has to be mocked:`
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="note">Mocked service</div>
<pre>
class MockRandomDataService {
    nrOfRuns: number = 0;
    getData(nr:number){
      let output = '';
      nr = 5 + this.nrOfRuns;
      for (let i = 0; i < nr; i++){
        output += i.toString(32);
      }
      return new Promise((resolve)=>{
        setTimeout(()=>{
          console.log(output)
          resolve(output);
        },5)
      })
    }
  
    increaseCounter(){
      this.nrOfRuns++;
    }
  }
</pre>`
                },
                {
                    elementType:'Paragraph',
                    content:`The <code>increaseCounter()</code> method will manualy change the data that the 
                    mock is providing, but in a deterministic way. We are testing a component, not the service!`
                },
                
                {
                    elementType:'Paragraph',
                    content:`Now for the tests`
                },
                {
                    elementType:'Code',
                    content:`
<pre>
describe('LoadChangeContentComponent', () => {
    let component: LoadChangeContentComponent;
    let fixture: ComponentFixture<LoadChangeContentComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ LoadChangeContentComponent ],
        providers: [{provide: RandomDataProviderService, useClass: MockRandomDataService}]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(LoadChangeContentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should component be empty before onInit', ()=>{
       let p = fixture.nativeElement.querySelector('p');
       let h = fixture.debugElement.nativeElement.querySelector('h5');
       expect(p.innerText).toBe('');
       expect(h.innerText).toBe('');
    })
  
    it('should have content after onInit and promise resolve', fakeAsync(()=>{
      let p = fixture.nativeElement.querySelector('p');
      let h = fixture.debugElement.nativeElement.querySelector('h5');
      component.ngOnInit();
      tick(80);
      fixture.detectChanges();
      console.log(p)
      expect(p.innerText).toBe('01234');
      expect(h.innerText).toBe('01234');
   }))
  
   it('should fill headline with data after ngOnInit', fakeAsync(()=>{
     expect(component.headline).toBe('');
     component.ngOnInit();
     tick(80);
     expect(component.headline).toBe('01234');
   }))
  
   it('should update value after click', fakeAsync(()=>{
    let p = fixture.nativeElement.querySelector('p');
    let h = fixture.debugElement.nativeElement.querySelector('h5');
    let b = fixture.nativeElement.querySelector('button');
    let serv = TestBed.get(RandomDataProviderService);
    component.ngOnInit();
    tick(80);
    fixture.detectChanges();
    expect(p.innerText).toBe('01234');
    expect(h.innerText).toBe('01234');
    serv.increaseCounter();
    b.click();
    tick(80);
    fixture.detectChanges();
    expect(p.innerText).toBe('012345');
    expect(h.innerText).toBe('012345');
  }))
  });
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

export default function getJusmineAngularData(){
    return data;
}