function Separate(props){
    const title = props.content;
    const style = {
        parent: {
            display: 'flex',

        },
        children: {
            display:'inline-block',
            flexGrow:1,
            transform: 'translateY(0rem)'
        },
        title: {
            display:'inline-block',
            fontStyle: 'italic',
            fontSize: '1.4rem',
            marginLeft:'1rem',
            marginRight:'1rem',
            color:'gray'
        }
        
    }
    return (
        <>
            <div style={{height:'1rem'}}></div>
                <div style={style.parent}>
                    <span style={style.children}>
                        <hr></hr>
                    </span>
                    <span style={style.title}>
                        {title}
                    </span>
                    <span style={style.children}>
                        <hr></hr>
                    </span>
                </div>
            <div style={{height:'1rem'}}></div>
        </>
    )
}

export default Separate;