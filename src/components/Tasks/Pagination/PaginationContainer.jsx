import React, { Component } from 'react'
import ReactPaginate from "react-paginate"
import { connect } from 'react-redux'
import { setTasks, setTotalTaskCount, setCurrentPage, loadingStart } from '../../../redux/tasksList-reduser';
import { getTasks } from '../../../api/api';

class PaginationContainer extends Component {
   
    onPageChanged = (pageIndex) => {
        let page = pageIndex.selected + 1
        let { sortField, sortDirection } = this.props.sortData
/*         this.props.loadingStart()
 */        getTasks(this.props.developer, page, sortField, sortDirection)
            .then(data => {
                if (data.status === 'ok') {
                    this.props.setCurrentPage(page);
                    this.props.setTasks(data.message.tasks);
                    this.props.setTotalTaskCount(data.message.total_task_count);
                }

            });
    }

    render() {
        return (
            <ReactPaginate
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
            />
        )
    }
}

let mapStateToProps = state => (
    {
        developer: state.tasksData.developer,
        totalTasksCount: state.tasksData.total_task_count,
        pageSize: state.tasksData.pageSize,
        isFetching: state.tasksData.isFetching,
        sortData: state.tasksData.sortData
    }
)

let mapDispathToProps = { setTasks, setTotalTaskCount, setCurrentPage, loadingStart }

export default connect(mapStateToProps, mapDispathToProps)(PaginationContainer)