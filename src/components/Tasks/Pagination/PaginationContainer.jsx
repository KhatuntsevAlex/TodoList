import React, { Component } from 'react'
import ReactPaginate from "react-paginate"
import { connect } from 'react-redux'
import { getTasks } from '../../../redux/tasksList-reduser';


class PaginationContainer extends Component {

    onPageChanged = (pageIndex) => {
        let page = pageIndex.selected + 1       
        this.props.getTasks(this.props.developer, page, this.props.sortData)           
    }

    render() {
        return (
            <>
                {
                    this.props.totalTaskCount > 3 ?
                        < ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            breakLinkClassName={"page-link"}
                            pageCount={Math.ceil(this.props.totalTasksCount / this.props.pageSize)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={this.onPageChanged}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            nextClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextLinkClassName={"page-link"}
                            disabledClassName={"page-item disabled"}
                        /> :
                        ''
                }
            </>
        )
    }
}

let mapStateToProps = state => (
    {
        developer: state.tasksData.developer,
        totalTasksCount: state.tasksData.total_task_count,
        pageSize: state.tasksData.pageSize,
        isFetching: state.tasksData.isFetching,
        sortData: state.tasksData.sortData,
        totalTaskCount: state.tasksData.total_task_count,
    }
)

let mapDispathToProps = { getTasks }

export default connect(mapStateToProps, mapDispathToProps)(PaginationContainer)