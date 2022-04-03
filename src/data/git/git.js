
let data =     {
    summary: 'git',
    title: 'git',
    searchKeywords:`

    `,
    cathegory: 'git',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Git'
                },



                {
                    elementType: 'Paragraph',
                    content: `
                    A version control system.
                    `
                },


                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'clone', title: 'Clone'},
                        {id: 'newBranch', title: 'Creating a new branch'},
                        {id: 'addStagging', title: 'Adding to stagging area'},
                        {id: 'commit', title: 'Commit'},
                        {id: 'keepUpToDate', title: 'Keep up to date with master'},
                        {id: 'push', title: 'Push to the remote repository'},
                        {id: 'delete', title: 'Delete a branch'},
                        {id: 'conflicts', title: 'Resolving confilcts'},
                        {id: 'addRemote', title: 'Adding to remote repo'},
                        {id: 'files', title: 'Files'},
                    ]
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="clone">Clone</span>'
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="newBranch">Creating a new branch</span>'
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="addStagging">Adding to stagging area</span>'
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="commit">Commit</span>'
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="keepUpToDate">Keep up to date with master</span>'
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="push">Push to the remote repository</span>'
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="delete">Delete a branch</span>'
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="conflicts">Resolving conflicts</span>'
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="addRemote">Add to remote repo</span>'
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="files">Files</span>'
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
                    content:'git-scm.com',
                    href: 'https://git-scm.com/',
                    description:'source page'
                },
            ]
        }
    ]
};

export default function getGitData(){
    return data;
}