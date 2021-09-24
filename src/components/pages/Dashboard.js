import React from "react";
import AppBar from "../AppBar";
import { getSessions } from "../../selectors";
import { connect } from "react-redux";
import TestChart from "../dashboard/TestChart";
import SessionHistogram from "../dashboard/SessionHistogram";

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <AppBar />
                <TestChart />
                <SessionHistogram />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sessions: getSessions(state),
    };
};

export default connect(mapStateToProps, null)(Dashboard);
