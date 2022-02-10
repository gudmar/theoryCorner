// import getReactLifecycleData from "./react/lifecycleMethods";
import getAngularFilesystemData from "./angular/installation";
import getComponentData from './angular/components';
import getBindingsData from './angular/bindings';
import getFormsData from './angular/forms';
import getLivecycleAngularData from  './angular/livecycleInAngular'
import getTemplateData from './angular/modules'

// + Inatalation, basic CLI commands
// + Filesystem
// + Binding data
// Lifecycle hooks
// Change detection
// Services and dependency injection
// Modules
// + Components
// Referencing the component from its self
// DIrectives
// Pipes
// Communication between components
// Routing
// Lazy loading
// Tests
// Animations?

let theoryDataAngular = [
    getAngularFilesystemData(),
    getComponentData(),
    getBindingsData(),
    getFormsData(),
    getLivecycleAngularData(),
    getTemplateData(),

    {
        summary: 'position',
        title: 'position',
        searchKeywords: 'angular',
        cathegory: 'Angular',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'About position'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            Angular is ...          
                        `
                    }
                ]
            },
        ]
    },
    {
        summary: 'tables',
        title: 'tables',
        cathegory: 'js',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'Tables'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum et lacinia arcu, ut tempor lacus. Integer euismod, est et pharetra eleifend, 
                            magna nibh congue nulla, eu ornare lacus sem eu leo. Sed aliquet tincidunt neque non tempor. 
                            Sed feugiat, massa at tempus tincidunt, tortor turpis rhoncus orci, nec cursus purus dui vel ipsum. 
                            Sed pellentesque sem nec dictum auctor. Morbi tempus lectus vitae ultrices volutpat. 
                            Vivamus convallis mauris urna. Phasellus rhoncus felis eget mi tincidunt malesuada. 
                            Pellentesque in velit viverra nunc ultrices maximus. Duis in leo dolor.             
                        `
                    }
                ]
            },
        ]
    },
]

export function getTheoryDataAngular(){
    return theoryDataAngular;
}