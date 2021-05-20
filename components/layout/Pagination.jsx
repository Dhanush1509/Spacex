import React,{ useContext} from 'react'
import styles from '../../styles/Pagination.module.css'
import ReactPaginate from "react-paginate";
import AiOutlineLeft from "react-icons/ai"
import missionContext from "../../context/mission/missionContext"

const Pagination = () => {
  const {page,setPage,launch}=useContext(missionContext);
  const handlePageClick = (e) => {
    setPage(e.selected+1);
  };
  const pageCount=launch===3?9:launch===2?1:launch===4?1:10;
    return (
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={"active"}
        pageClassName={styles.list}
        previousClassName={styles.marginpages}
        nextClassName={styles.marginpages}
        breakClassName={styles.breakpages}
        pageLinkClassName={styles.refpages}
        previousLinkClassName={styles.refpages}
        nextLinkClassName={styles.refpages}
        breakLinkClassName={styles.refpages}
        activeLinkClassName={styles.active}
        disabledClassName={styles.disabled}
      />
    );
}

export default Pagination
