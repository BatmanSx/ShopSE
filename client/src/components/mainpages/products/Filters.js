import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                <span>Filtry: </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>Wszystkie Produkty</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="Wpisz czego szukasz!!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>Sortuj po: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Najnowsze</option>
                    <option value='sort=oldest'>Najstarsze</option>
                    <option value='sort=-sold'>Najlepsza cena</option>
                    <option value='sort=-price'>Cena: Rosnąca-Malejąca</option>
                    <option value='sort=price'>Price: Malejąca-Rosnąca</option>
                </select>
            </div>
        </div>
    )
}
export default Filters
