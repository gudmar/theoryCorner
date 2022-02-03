// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'angular start',
    title: 'start',
    searchKeywords:`angular filesystem e2e src .editorconfig .tigignore angular.json browserlslist karma.conf.js package-lock.json package.json
    README.md tsconfig.app.json tsconfig.json tsfoncig.spec.json app-routing.module.js component.css spec favicon index.html
    mailn.ts pol.ifills.js sytles.css test.ts install serve start ng generate component g c d p s service
    `,
    cathegory: 'angular',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Angular how to start'
                },
                {
                    elementType:'Headline-3',
                    content:'What is Angular'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    
                    `
                },

            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-3',
                    content:'Installation and basic commands'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>npm install -g @angular/cli@latest</code> a node package manager needs to be installed to
                        run this, a global (-g) installation of the angular cli (command line interface). Global installation
                        means, that it will be available everywhere on our machine, not just in a project folder,`,
                        `<code>ng -version</code>: the version of the angular CLI,`,
                        `<code>ng new myFirstApp</code> creates a proect folder, arranges the filesystem ,installs and configures
                        typeScript, installs librarios and dependencies, install Karma and Protractor for testing,`,
                        `<code>ng serve</code>: this runs a server and lauches the project. It is being observerd if files are saved. 
                        Every change saved to a file
                        makes browser view change to line up with this change. Available under http://localhost:4200/`,
                        `<code>ng generate </code> an angular CLI command for generating objects. 
                        <ul>
                        Adds dependencies to the 
                            app.modules.ts. To have a new component in a folder, input path before the component name,</li>

                        <li><code>path/pipe</code>: creates a new pipeline file and its test .spec.pipe.ts file in the directory described as path</li>
                        <li><code>app-shell</code></li>
                        <li><code>application</code></li>
                        <li><code>class path/className</code>: creates a new class file, and a .spec.ts file for testing the created class.
                            The class is not added to any dependencies,
                        </li>
                        <li><code>path/component</code>: creates a new component: a .component.html, .component.css, .componentts and .component.spec.ts. 
                        <li><code>path/directive</code>: 
                            creates a new directive file, a spec.ts file, adds dependencies to the app.modules.ts. To have the directive in a 
                            specified folder, give a <code>path/</code> before its name like in the example.
                        </li>                        
                        <li><code>enum</code></li>
                        <li><code>guard</code></li>
                        <li><code>interceptor</code></li>
                        <li><code>interface</code></li>
                        <li><code>library</code></li>
                        <li><code>module moduleName</code> generates a new folder for the module and its .module.ts file</li>
                        <li><code>resolver</code></li>
                        <li><code>service</code> generates a new service .service.ts file and its .servicespec.ts test file, 
                            injects dependencies (will be listed in the app.component.ts)</li>
                        <li><code>service worker</code>: is for creating a new service worker, will also install the service mosule if needed
                        and create a ngsw-config.json configuration file</li>

                        <li><code>web-worker</code></li>
                        </ul>
                        `,
                        `<code>ng g c</code>: short for <code>ng g component</code>, <code>ng generate component</code>`,
                        `<code>ng g s</code>: short for <code>ng generate service</code>`,
                        `<code>ng g p</code>: short for <code>ng generate pipe</code>`,
                        `<code>ng g d</code>: short for <code>ng generate directive</code>`,
                    ]
                },
            ]
        },

        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-3',
                    content:'Filesystem'
                },
                {
                    elementType:'HiddenList',
                    content:[
                        {
                            title: 'e2e',
                            label: 'end to end tests',
                            content: [
                                {
                                    title: 'src',
                                    label: 'developed application',
                                    content: [
                                        {
                                            title: 'app.e2e-spec.ts',
                                            label: '',
                                            content:[]
                                        },
                                        {
                                            title: 'app.po.ts',
                                            label: '',
                                            content:[]
                                        },                                                                          
                                    ]
                                },
                                {
                                    title:'protractor.conf.json',
                                    label: 'protractor e2e testing tool configuration file,',
                                    content:[]
                                },
                                {
                                    title:'tsconfig.e2e.json',
                                    label: 'e2e tests configuration file,',
                                    content:[]
                                },
                                
                            ]
                        },
                        {
                            title:'src',
                            label: 'source - actual application that is being developed',
                            content: [
                                {
                                    title: 'app',
                                    label: `application. All components, classes, modules, pipes, directives, services 
                                    used in the application will be here`,
                                    content: [
                                        {
                                            title: 'app-routing.module.ts',
                                            label: 'angular module that is responsible for routing,',
                                            content: []
                                        },
                                        {
                                            title: 'app.component.ts',
                                            label: 'the main application component .ts file. Contains variables that are binded, Should not containing any logic',
                                            content: []
                                        },
                                        {
                                            title: 'app.component.html',
                                            label: 'the component markup, a html that is recognized only by angular (due to directives), describes the component content,',
                                            content: []
                                        },
                                        {
                                            title: `app.component.spec.ts`,
                                            label: `component tests`,
                                            content: []
                                        },
                                        {
                                            title: `app.component.css`,
                                            label: `the extension may be different, as it may be scss for instance. This is the styling applied <b>only</b> to this component, no child components, no other components`,
                                            content: []
                                        },
                                        {
                                            title: `app.module.ts`,
                                            label: 'The main application moudle',
                                            content: []
                                        }
                                    ]
                                },
                                {
                                    title:'assets',
                                    label: 'Here all the files that need to be publicly available like images, audio files are stored.',
                                    content: [
                                        {
                                            title: '.gitkeep',
                                            label: `This file should exist only if assets is an empty folder, in 
                                            order to keep it in the git repository. GIT will keep a folder in repo only if it is
                                            not empty`,
                                            content: []
                                        }
                                    ]
                                },
                                {
                                    title:'environments',
                                    label: `Angular app may be build using different environmental settings. For example, a development environment, 
                                    a production, or some custom one. The <code>ng build</code> command may create a ready for deployment 
                                    version using a specified environment settings. The <code>envName</code> may be imported to the app component
                                    and used for different application behavior. Environment names should be mapped to specific files form the environment
                                    folder in the <code>.angular.cli.json</code> file`,
                                    content: [
                                        {
                                            title: 'environment.ts',
                                            label: `This is the file with the development environment specific variables,`,
                                            content: []
                                        },
                                        {
                                            title: 'environment.prod.ts',
                                            label: `This is the file with the production environment specific variables,`,
                                            content: []
                                        },
                                        {
                                            title: 'environment.custom.ts',
                                            label: `This is the file with the custom environment specific variables.
                                            It may not exist.`,
                                            content: []
                                        }                                        
                                    ]
                                },
                                {
                                    title:'favicon.ico',
                                    label:'icon that will be displayed in the borwser tab,',
                                    content:[]
                                },
                                {
                                    title: 'index.html',
                                    label: `An html file that has an <code>&lt;app-root>&lt;/app-root></code> tag, for loading the main app component`,
                                    content: []
                                },
                                {
                                    title: `main.ts`,
                                    label: `A file for bootstraping the application,`
                                },
                                {
                                    title: `polyfills.ts`,
                                    label: `A file with polyfills,`
                                },
                                {
                                    title: `styles.scss`,
                                    label: `A file for global styling, available in the whole application,`
                                },
                                {
                                    title: `test.ts`,
                                    label: `A required by karma file that loads recursively all the .spec and 
                                    framework files.`
                                }

                            ]
                        },
                        {
                            title: 'dist',
                            label: 'A destination folder, where the complied version of our application will be placed,',
                            content: []
                        },
                        {
                            title: 'node_modules',
                            label: `All files that are needed for angular to create our application, build it and run the server.
                            They should never be added to the git repository`,
                            content: []
                        },
                        {
                            title: '.browserlistrc',
                            label: `A list of browsers that our application will support. It may be significant to add some polifills and 
                            css browser specific stylings`,
                            content: []
                        },
                        {
                            title: '.editorconfig',
                            label: `A file for IDE configuration (for example VSC). Indention sized, charsets, type of quotes,
                            trimming white spaces, etc.`,
                            content: []
                        },
                        {
                            title: '.gitignore',
                            label: `A git specific file. A list of all folders and files that will not be the part of the repository,`,
                            content: []
                        },
                        {
                            title: 'angular.json',
                            label: `Angular specific settings: file location, component styling warning and error sizes, test configuration 
                            (location of karma config file, ts config file for tests, polifills for tests...)`,
                            content: []
                        },
                        {
                            title: 'karma.conf.js',
                            label: `Module for configuring karma testing environment, importing plugins ...`,
                            content: []
                        },
                        {
                            title: 'ngsw-config.json',
                            label: `service worker configuration`,
                            content: []
                        },
                        {
                            title: 'package.json',
                            label: `Stores information about npm command aliases used to start, build, watch, test application. 
                            Stores information about versions of packages needed to compile and run the application. Should be kept in the
                            git repository, as this file is necessary to recreate the application development environment.`,
                            content: []
                        },
                        {
                            title: 'package-lock.json',
                            label: `Keeps the complete tree of dependencies needed to recreate the application development
                            environment, when it is pulled from the repository. Each package needed for the application to run
                            may have its own list of dependencies, and may require exact version of some other package. 
                            This file is needed to be sure all dependencies are met. It should be kept in the git repository.`,
                            content: []
                        },
                        {
                            title: 'README.md',
                            label: `A project documentation, a mark down format document that describes the project,`,
                            content: []
                        },
                        {
                            title: 'tsconfig.json',
                            label: `A typeScript configuration file, describing all the ts compiler specific behavior`,
                            content: []
                        },
                        {
                            title: 'tsconfig.spec.json',
                            label: `A typeScirpt configuration file, with settings specific for tests`,
                            content: []
                        },

                    ]

                    
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
                    content:'angular.io',
                    href: 'https://angular.io/cli/generate',
                    description:'ng generate command documentation'
                },
                {
                    elementType:'Link',
                    content:'tattoocoder.com',
                    href: 'https://tattoocoder.com/angular-cli-using-the-environment-option/',
                    description:'environments'
                },
            ]
        }
    ]
};

export default function getAngularFilesystemData(){
    return data;
}