import { platform } from "os";

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