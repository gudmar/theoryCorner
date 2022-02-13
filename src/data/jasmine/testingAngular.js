

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