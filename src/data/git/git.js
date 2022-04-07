
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
                        {id: 'clone', title: 'Clone, fork'},
                        {id: 'newBranch', title: 'Creating a new branch'},
                        {id: 'addStagging', title: 'Adding to stagging area'},
                        {id: 'commit', title: 'Commit'},
                        {id: 'keepUpToDate', title: 'Keep up to date with master'},
                        {id: 'push', title: 'Push to the remote repository'},
                        {id: 'delete', title: 'Delete a branch'},
                        {id: 'conflicts', title: 'Resolving confilcts'},
                        {id: 'addRemote', title: 'Adding to remote repo'},
                        {id: 'unsavedChanges', title: 'Changes not commited and need to make something on a different branch'},
                        {id: 'files', title: 'Files'},
                    ]
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="clone">Clone, fork</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Should be done in order to have a copy of an alian repository to our computer and work with it. 
                    Such a repository may be later pushed to the remote repository, and merge request may be done. This is for repositories
                    that an user has no access rights,
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>git fork &lt;repository></code> is used in case I don't have any rights for a repo and I want to work with it`,
                        `<code>git clone &lt;repo</code> can be used to make copy of repo I have so I can work with it. It is cloned into pwd`,
                    ]
                },




                {
                    elementType:'Headline-3',
                    content:'<span id="newBranch">Creating a new branch</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Work should never happen on a master or a developement branch, as there should be no push of such a branch to the remote repository. 
                    Moreover the user should update his work-branch with an up-to-date remote dev or master branch in order to make merge request
                    simpler,
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>git checkout -b branchName</code>is used to create a local branch. This will automaticly switch to a new branch`,
                        `Above should be used on a target branch user wants to merge his/hers branch to, or from a child of the target branch in 
                        cases a child branch was still not merged to target branch, and if this child has important changes needed to develop new feature,`,
                        `Branch T is target, A is made from T and has some feature, but was still not merged, B is a branch having a feature that depents on 
                        feature implemented on branch A. In this case B should be created from A (not from T) and kept up to date with branch A.
                        Branch A should be kept up to date with branch T. Later branch B can be merged to branch T if only it is up to date with 
                        branch B and branch B was already merged.`
                    ]
                },


                {
                    elementType:'Headline-3',
                    content:'<span id="addStagging">Adding to stagging area</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Only changes added to the stagging area may be commited. So to commit a chagne it must be tracked by git and added to the stagging 
                    area
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `After some changes are made to a file on a local computer this file could be added to stagging area`,
                        `Only files from stagging area will be added during commit`,
                        `<code>git add file</code>, <code>git add .<code> for a whole directory) can be used to add file or dir to stagging area`,
                        `<code>git commit -am message(what, why)</code> can be used to add to stagging area and commit in one step, however this can be done only on existing files, not on new`,
                    ]
                },
                
                {
                    elementType:'Headline-3',
                    content:'<span id="commit">Commit</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Commited changes are saved localy to some branch. A branch may be switched only if changes made to files are commited, stashed or 
                    abandoned. Only commited changes may be pushed to remote repository and merged.
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>git commit -m shortMessage(what, why) -m longerDescription</code> instead only one m can be used in shorter version`,
                        
                    ]
                },
                


                {
                    elementType:'Headline-3',
                    content:'<span id="keepUpToDate">Keep up to date with master</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Current branch should be kept up to date in order to make later marge possible. If not kept up to date on daily basics, there may
                    be too many conflicts to resolve to merge it
                    `
                },
                {
                    elementType: 'SmallHeadline',
                    content: `Variant 1`
                },
                
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>git checkout master</code>: to local master`,
                        `<code>git pull</code>: update local master with remote repo,`,
                        `<code>checkout branchName</code>: back to work-branch,`,
                        `<code>git rebase master</code>`,
                        `This approach keeps the source (master) history. All commits from master will be moved to our branch`,
                        `<code>git push -f</code>: <b>note</b>, as history changed, it will not be possible to push changes to the remote repo without the 
                        <code>-f</code> flag.`,
                        `<code>git rebase</code> goes with conflict resolving through all branches from the earliest where conflicts occure. If there are 
                        30 branches difference between target and current branch, conflicts in all 30 branches have to be resolved,`,
                        `In case rebase is executed, the project is not at any explicid branch. Instead it is between branches, and if needed, has to be 
                        aborted with <code>git rebase --abort</code>`
                    ]
                },
                {
                    elementType: 'SmallHeadline',
                    content: `Variant 2`
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>git checkout master</code>: to local master`,
                        `<code>git pull</code>: update local master with remote repo,`,
                        `<code>checkout branchName</code>: back to work-branch,`,
                        `<code>git merge master</code>`,
                        `Does not keep history from target branch`,
                        `When conflicts are resolved, and there is need to bo back to the branch with unresolved conflicts, <code>git merge --abort</code>
                        or <code>git reset --merge</code> may be used,`,
                    ]
                },
                {
                    elementType:'Code',
                    content: `
<pre>
<div class="note">Starting point:</div>
1. There is a master branch as a starting point with 2 commits:
master:        A---B

2. After <code>git checkout -b featureBranch</code> from master:
master:        A---B
featureBranch: A---B

3. After the feature is implemented there are new commits to the master and featureBranch:
master:        A---B---C---D---E---F---G
featureBranch: A---B---c---d---e

<div class="note">A. Merge approach:</div>
1. <code>git checkout master</code>
2. <code>git pull</code>
3. <code>git checkout featureBranch</code>
4. <code>git merge master</code>

master:        A---B---C---D---E---F---G
featureBranch: A---B---c---d---e---M*
where M* is a merged version of G and e commits, so commits D, E, F are lost.
Now there may be a situation that branches c, d, e and G work fine, but after merging G and e together,
branch M has some bugs, thats source may lay in the D, E, F lost commits.


<div class="note">A. Merge approach:</div>
1. <code>git checkout master</code>
2. <code>git pull</code>
3. <code>git checkout featureBranch</code>
4. <code>git rebase master</code>

master:        A---B---C---D---E---F---G
featureBranch: A---B---C---D---E---F---G---c'---d'---e'---M*

featureBranch is being build on the top of current master branch. At the G (current master commit),
there all conflicts need resolving, that is why commits c, d, e become c', d', e'.
Now all commits are in the history of the current featureBranch, and in case something breaks it is easier 
to track errors.




</pre>                    
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Developers should work on different parts of project to make merges easier, but if not possible conflicts will happen. 
                    A conflict is in case a target (master or developement) branch have differnt code, that cannot be just added or deleted.
                    For example come code was altered, or deleted and there is new code in its place.
                    Such conflicts are quite easy to resolve from the text editor
                    `
                },



                {
                    elementType:'Headline-3',
                    content:'<span id="push">Push to the remote repository</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `

                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>git push origin myBranch</code> will work only if the remote repo is configured (see adding remote repo)`,
                        `<code>git push origin myBranch nameOfRemoteRepo</code>`,
                        `<code>git push --set-upstream origin master</code> === <code>git push -u origin master</code> - 
                        thanks to this this upstream or u origin master will not have to be written, and later only <code>git push branch</code> will do`,
                        `<code>git push -f</code>: should do, without branch name or remote repo. This should work for the current branch and currently set
                        remote repo.`
                    ]
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="delete">Delete a branch</span>'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `After bugFix or feature branch is merged to master or dev it should be deleted`,
                        `Only master and dev branches should remain untouched all through developement proces`,
                        `<code>git reset</code> will remove all stagget changes,`,
                        `<code>git reset file</code> will remove all stagged changes from certain file,`,
                        `<code>git reset HEAD~1</code> will remove wll changes made after commit -1, so 1 after head,`,
                        '<code>git log</code> lists all commits from latest to first',
                        `<code>git reset d65f7s65df876s5df76as</code> will drop all chagnes made to repository after commit wiht certain hash number`,
                        `Just removing an unwanted branch after merge: <code>git branch -d branchName</code>,`,
                    ]
                },


                {
                    elementType:'Headline-3',
                    content:'<span id="conflicts">Resolving conflicts</span>'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `Can be resolved in gitHub GUI`,
                        `Can be resolved from terminal`,
                        `Best way to resolve them is from good text editor. Just delete unwanted stuff and commit`,
                    ]
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="addRemote">Add to remote repo</span>'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>git remote add origin https://github.com/gudmar/somerepo.git</code>`,
                        `<code>git remote -b</code>: check if I have push rights,`,
                        `<code>git remote set-url origin https://github.com/gudmar/somerepo.git</code>`,
                        `now <code>git push -u orign someBranch</code> can be used to push a repo to github. No remote ropository name has to be given.`
                    ]
                },
                {
                    elementType: 'SmallHeadline',
                    content: `In case a remote repo settings have to be removed:`
                },
                {
                    elementType: 'Paragraph',
                    content: `<code>git remote remove origin</code> or <code>git remote rm origin</code>`
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="unsavedChanges">Changes not commited and need to make something on a different branch</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `Branch will not be switched in case changes are not commited. If there is a need to switch to a different branch anyway, and 
                    change something there and go back to work-branch changes should be stashed (saved) first:`
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>git stash save 'name-where-to-save'</code>`,
                        `<code>git checkout someOtherBranch</code>,`,
                        `<code>git checkout branchWithUnsavedChanges</code>,`,
                        `<code>git stash list</code>,`,
                        `<code>git stash pop</code>: this resumes last saved changes,`
                    ]
                },


                
                {
                    elementType:'Headline-3',
                    content:'<span id="files">Files</span>'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>.gitignore</code> list of filest that will be ignored by git commit. Like node-modules,`,
                        `<code>.gitkeep</code> Git will never add a folder if it is empty. If we want to keep an empty folder in our repo, 
                        we just need to ad any empty file to it. It may be hidden (begin with a dot). It is a good convensiont to call it <code>.gitkeep</code>. 
                        However, this is not a restricted name, and the file may be named in any oter way. 
                        It is important that some file exists in the repo.`
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