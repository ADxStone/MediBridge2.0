const HealthDataCard =({title,children}) =>{
    return (
        <div className="bg-white rounded-2xl shadow-sm mb-2"
        >
            <h3 className="text-left text-xs font-semibold mb-1 ">{title}</h3>
            {children}
            
        </div>
    )
}

export default HealthDataCard