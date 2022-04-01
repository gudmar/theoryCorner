
let data =     {
    summary: 'redux with toolkit',
    title: 'Redux with toolkit',
    searchKeywords:`
        configureStore combineReducers createSlice useSelector useDispatch Provider bindActionCreators useActions(obsolete) useStore
    `,
    cathegory: 'redux',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Using react redux with toolkit'
                },



                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },


                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'configureStore', title: '<code>configureStore</code>'},
                        {id: 'combineReducers', title: '<code>combineReducers</code>'},
                        {id: 'createSlice', title: '<code>createSlice</code>'},
                        {id: 'provider', title: 'Providing store'},
                        {id: 'bindActionCreators', title: '<code>bindActionCreators</code>'},
                        {id: 'hooks', title: '<code>Hooks</code>'},
                        {id: 'example', title: '<code>Example</code>'},
                    ]
                },

                {
                    elementType:'Headline-2',
                    content:'Creational functions:'
                },


                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Argument','Type','Takes', 'Returns', 'Description'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'mapStateToProps',
                            [Symbol('code')]:`   

                            `,
                            Argument: '<span id="mapStateToProps"><code>mapStateToProps?: Object | (dispatch, ownProps?) => Object</code></span>',
                            Type: `function`,
                            Takes: `

                            `,
                            Returns: 'Object',
                            Description: `
                            Maps state (store) properties to the given component properties,
                            `
                        },           
                    ]
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

export default function getReduxToolkitData(){
    return data;
}