function ElementGenerator(){
    if  (ElementGenerator.instance !== undefined) return this;
    if  (ElementGenerator.instance === undefined) {
         ElementGenerator.instance = this
    }

    var tasks = {};
    var isEventListenerPlaced = false;
    const addTask = (id, nrOfItems, classes) => {
        tasks[id] = {nrOfItems:nrOfItems, classes:classes}
    }
    const removeTask = (id) => {if(tasks[id]) delete tasks.id}
    // const removeConcreteTask  = (id, nrOfItems, classes) => {
    //     let index = tasks.findIndex((item)=>{
    //         return (id === item.id && nrOfItems === item.nrOfItems && hasArraySameElements(classes, item.classes))
    //     })
    //     if (index >= 0) {tasks.splice(index,1)}
    //     else {console.warn(`elementGenerator: {id:${id}, nrOfItems:${nrOfItems}, classes=${classes}} not found`)}
    // }
    // const removeAllTasksRelatedToId = (id) => {
    //     let counter = 0;
    //     for (let i = tasks.length - 1; i >= 0; i--){
    //         if (tasks[i].id === id) {tasks.splice(i, 1); counter++}
    //     }
    //     console.log(`ElementGenerator: ${counter} items removed`)
    // }
    // const hasArraySameElements = (arr1, arr2) =>{
    //     if (arr1.length !== arr2.length) return false;
    //     let arrCp1 = [...arr1];
    //     let arrCp2 = [...arr2];
    //     let nrOfMatches = 0;
    //     arr1.forEach((item, index) => {
    //         let indexInArr2Cp = arrCp2.findIndex((element)=>{return item === element})
    //         if (indexInArr2Cp < 0) return false;
    //         arrCp2.splice(indexInArr2Cp, 1);
    //         nrOfMatches++;
    //     })
    //     return nrOfMatches === arr1.length;
    // }
    const getItemElement = (label, classes) => {
        let item = document.createElement('div');
        item.innerText = label;
        for (let c of classes){
            item.classList.add(c);
        }
        return item;
    };
    const insertItemsToId = (id, nrOfItems, classes) => {
        let outlet = document.getElementById(id);
        for (let i = 0; i<nrOfItems; i++){
            outlet.appendChild(getItemElement(i, classes))
        }
    }
    const insertItemsWhenReady = (isVerbose) => {
        window.onload((e)=>{
            Object.getOwnPropertyNames(tasks).forEach((key)=>{
                try{
                    insertItemsToId(tasks[key].id, tasks[key].nrOfItems, tasks[key].classes);
                } catch(err) {
                    if (isVerbose) console.warn(`elementGenerator: ${tasks[key].id} not found`)
                }
            })
        })
    }
    const addEListener = () => {
        if (!isEventListenerPlaced) {insertItemsWhenReady(false); isEventListenerPlaced = true;}
    }

    return {
        // removeAllTasksRelatedToId:removeAllTasksRelatedToId,
        // removeConcreteTask:removeConcreteTask,
        addTask:addTask,
        removeTask:removeTask,
        addEListener: addEListener
    }

}

const getItemElement = (label, classes) => {
    let item = document.createElement('div');
    item.innerText = label;
    for (let c of classes){
        item.classList.add(c);
    }
    return item;
};
const insertItemsToId = (id, nrOfItems, classes) => {
    let outlet = document.getElementById(id);
    for (let i = 0; i<nrOfItems; i++){
        outlet.appendChild(getItemElement(i, classes))
    }
}

export {ElementGenerator, getItemElement, insertItemsToId};