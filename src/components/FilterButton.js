const FilterButton = ({onClick,name,className}) => {
    return(
        <div className='filter-Btn'>
            <button className={className} onClick={onClick}>{name}</button>
        </div>
    )
}

export default FilterButton