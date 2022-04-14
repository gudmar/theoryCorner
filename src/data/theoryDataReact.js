import getReactLifecycleData from "./react/lifecycleMethods";
import getHooksData from "./react/hooks";
import getStylingReactData from "./react/stylingInReact";
import getReactInstallationData from "./react/installation";

// Component communication - pulling states, redux, mediator, useContext
// Routes
// Components: JSX, conditional rendering, not modyfying props, handling events, keys of lists
// lazy
// https://pl.reactjs.org/docs/render-props.html
// kontrolowane i nie kontrolowane
// komponent kontrolowany to taki, którego stan kontroluje react, a niekontrolowany to taki, ktorego stan zależy od 
// na przykład interacji użytkownika

// testowanie w react

let theoryDataReact = [

    getHooksData(),
    getReactLifecycleData(),
    getStylingReactData(),
    getReactInstallationData(),
    {
        summary: 'position',
        title: 'position',
        searchKeywords: 'react hooks lifecycle',
        cathegory: 'React',
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
                            React is ...          
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

export function getTheoryDataReact(){
    return theoryDataReact;
}