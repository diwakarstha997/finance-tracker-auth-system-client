const CustomTag = (props) => {
    const { label, className } = props

    return(
        <div className={`tag ${className}`}>
            <span>
                {label}
            </span>
        </div>
    )
}

export default CustomTag;