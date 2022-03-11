function elementGenerator(){
    if (elementGenerator.instance !== undefined) return this;
    if (elementGenerator.instance === undefined) {
        elementGenerator.instance = this
    }

    var tasks = [];
    var isEventListenerPlaced = false;
    const addTask = (id, nrOfItems, classes) => {
        tasks.push({id:id,nrOfItems:nrOfItems, classes:classes})
    }
    const removeConcreteTask  = (id, nrOfItems, classes) => {
        let index = tasks.findIndex((item)=>{
            return (id === item.id && nrOfItems === item.nrOfItems && hasArraySameElements(classes, item.classes))
        })
        if (index >= 0) {tasks.splice(index,1)}
        else {console.warn(`elementGenerator: {id:${id}, nrOfItems:${nrOfItems}, classes=${classes}} not found`)}
    }
    const removeAllTasksRelatedToId = (id) => {
        let counter = 0;
        for (let i = tasks.length - 1; i >= 0; i--){
            if (tasks[i].id === id) {tasks.splice(i, 1); counter++}
        }
        console.log(`ElementGenerator: ${counter} items removed`)
    }
    const hasArraySameElements = (arr1, arr2) =>{
        if (arr1.length !== arr2.length) return false;
        let arrCp1 = [...arr1];
        let arrCp2 = [...arr2];
        let nrOfMatches = 0;
        arr1.forEach((item, index) => {
            let indexInArr2Cp = arrCp2.findIndex((element)=>{return item === element})
            if (indexInArr2Cp < 0) return false;
            arrCp2.splice(indexInArr2Cp, 1);
            nrOfMatches++;
        })
        return nrOfMatches === arr1.length;
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
    const insertItemsWhenReady = (isVerbose) => {
        window.onload((e)=>{
            tasks.forEach((item)=>{
                try{
                    insertItemsToId(item.id, item.nrOfItems, item.classes);
                } catch(err) {
                    if (isVerbose) console.warn(`elementGenerator: ${item.id} not found`)
                }
            })
        })
    }
    const addEListener = () => {
        if (!isEventListenerPlaced) {insertItemsWhenReady(false); isEventListenerPlaced = true;}
    }

    return {
        removeAllTasksRelatedToId:removeAllTasksRelatedToId,
        removeConcreteTask:removeConcreteTask,
        addTask:addTask,
        addEListener: addEListener
    }

}

export default elementGenerator;