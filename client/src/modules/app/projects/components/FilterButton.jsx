export const FilterButton = ({ category, onClick }) => {
    return (
        <div 
            className="button filter"
            value={ category }
            onClick={ onClick }
        >
            <p>{ category }</p>
        </div>
    )
}