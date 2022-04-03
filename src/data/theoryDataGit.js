import getGitData from './git/git.js';


let theoryDataHtml = [
    getGitData()
 
]

export function getTheoryDataGit(){
    return theoryDataHtml;
}