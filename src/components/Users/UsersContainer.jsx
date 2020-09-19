import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users-reducer";
import {compose} from "redux";
// import withAuthRedirect from "../../hoc/withAuthRedirect";
import {
    getCurrentPage, getFollowingProgress,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount(props) {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    setPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.pageSize, pageNumber)
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      setPage={this.setPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}
                      followingProgress={this.props.followingProgress}
                      toggleFollowingProgress={this.props.toggleFollowingProgress}
                      portionSize={this.props.portionSize}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
        portionSize: getPortionSize(state)
    }
}

export default compose(
    connect(mapStateToProps, {setCurrentPage, toggleFollowingProgress, getUsers, follow, unfollow}),
    // withAuthRedirect
)
(UsersContainer);
