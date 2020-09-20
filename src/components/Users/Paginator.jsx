import React, {useState} from "react";
import styles from './users.module.css'

const Paginator = (props) => {
    let { currentPage, totalUsersCount, pageSize, setPage, portionSize} = props
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    // let portionSize = 10;
    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={ () => {setPortionNumber(portionNumber - 1)}} >Prev</button>}
            {pages.filter( p => ( p >= leftPortionPageNumber && p <= rightPortionPageNumber)).map(p => {
                return <span className={(currentPage === p && styles.currentPage) || styles.pagination} onClick={ () => {setPage(p)} }>{p}</span>
            })}
            {portionCount > portionNumber &&
            <button onClick={ () => {setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>)
}

export default Paginator;