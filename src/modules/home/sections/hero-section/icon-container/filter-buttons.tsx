import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'

const FilterButtons = () => {
  return (
    <div className="screen-filter-buttons-container">
      <button disabled>
        <FilterAltOutlinedIcon className="icon" />
        Filter
      </button>
      <button disabled className="screen-filter-add-button">
        <AddOutlinedIcon className="icon" />
        Add new
      </button>
    </div>
  )
}

export default FilterButtons
