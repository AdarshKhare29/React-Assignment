const Button=(props)=>{
    const {title,color,value,setValue}=props
    return(
        <button className={`btn ${color} btn-sm`} onClick={()=>setValue(value+1)}>{title}</button>
    )
}
export default Button