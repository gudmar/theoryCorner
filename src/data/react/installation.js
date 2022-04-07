
let data =     {
    summary: 'react installation',
    title: 'React installation',
    searchKeywords:`

    `,
    cathegory: 'react',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Setting up a react project with some useful extentions:'
                },



                {
                    elementType: 'Paragraph',
                    content: `
                    Setting up a react application is an easy task thanks to <code>npx create-react-app</code>,
                    however there are some usefull libraries that may be set up on the occasion
                    `
                },


                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'mui', title: 'material-ui'},
                        {id: 'propTypes', title: '<code>PropTypes</code>'},
                        {id: 'redux', title: 'Redux'},
                        {id: 'scss', title: 'scss'},

                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:'<span id="mui">material-ui</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    This library (or framework) takes css frameworks like bootstrap to the next level. This is not just a set of classes with js
                    to controll them. This are complete, ready to use components created in React. 
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>npm install @material-ui/core</code>: for installing most components,`,
                        `<code>npm install @material-ui/icons</code>: for installing handy icons that may be used with components,`,
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    And then in target component:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>import Container from '@material-ui/core/Container'</code> for importing a container comopnent,`,
                        `<code>import { Button, Paper } from '@material-ui/core</code>,`,
                        
                    ]
                },




                {
                    elementType:'SmallHeadline',
                    content:'<span id="propTypes"><code>PropTypes</code></span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    A tool that will print warnings to the console when property types of the component do not match defined at the begining in a 
                    PropTypes object,
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>npm install prop-types --save</code> for importing a container comopnent,`,
                        `<code>import PropTypes from 'prop-types';</code>`,
                        
                    ]
                },


                {
                    elementType:'SmallHeadline',
                    content:'<span id="redux">Redux</span>'
                },

                {
                    elementType:'SmallHeadline',
                    content:'<span id="scss">scss</span>'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                    `<code>npm install scss</code>`,`<code>npm install sass</code>`,

                    ]
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
                    content:'medium.com',
                    href: 'https://medium.com/@martink_rsa/creating-a-react-app-with-create-react-app-and-material-ui-380985fc2b19',
                    description:'create-react-app with material-ui'
                },
                {
                    elementType:'Link',
                    content:'blog.logrocket.com',
                    href: 'https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/',
                    description:'PropTypes'
                },
            ]
        }
    ]
};

export default function getReactInstallationData(){
    return data;
}