function Select(props){
    const name=props.name;
    const values = props.values;
    const currentValues = props.currentValues;
    const changeHandler = props.changeHandler;
    function getOptions(){
        return values.map((item, index, arr)=>{
            return (<option key={item} value={item}>{item}</option>)
        })
    }
    return (
        <div className="mb-3 mt-3">
            <label htmlFor={name}><b>{name}: &nbsp;
            </b></label>
            <select name = {name} id={name} value={currentValues[name]} onChange={changeHandler}>
                {getOptions()}
            </select>
        </div>
    )
}

export default Select;