
// import { useEffect, useRef, useState } from "react"
// import { utilService } from "../services/util.service.js"
// import { LabelPicker } from "./filters/LabelPicker.jsx"
// import { Link } from "react-router-dom"
// import SelectFilter from "./filters/SelectFilter.jsx"
// import SearchBar from "./filters/SearchBar.jsx"
// import { useSelector } from "react-redux"

// export function ToyFilter({ filterBy, onSetFilter }) {
//     const user = useSelector(storeState => storeState.userModule.loggedinUser)
//     const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

//     onSetFilter = useRef(utilService.debounce(onSetFilter))

//     useEffect(() => {
//         onSetFilter.current(filterByToEdit)
//     }, [filterByToEdit])

//     function handleChange({ target }) {
//         console.log(target);
//         const field = target.name
//         let value = target.value

//         switch (target.type) {
//             case 'number':
//             case 'range':
//                 value = +value || ''
//                 break;

//             case 'checkbox':
//                 value = target.checked
//                 break

//             default:
//                 break;
//         }

//         setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
//     }

//     return (
//         <section className="toy-filter">
//             {user?.isAdmin && <Link className='add-toy-btn' to='/toy/Edit'>Add Toy 🧸</Link>}
//             <form >
//                 <SelectFilter handleChange={handleChange} />
//                 <LabelPicker handleChange={handleChange} />
//                 <SearchBar handleChange={handleChange}/>
//             </form>

//         </section>
//     )
// }

