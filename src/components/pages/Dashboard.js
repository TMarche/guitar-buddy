import React from "react";
import AppBar from "../AppBar";
import Typography from "@mui/material/Typography";
import HighCharts from "highcharts";
import histogram from "highcharts/modules/histogram-bellcurve";
import HighchartsReact from "highcharts-react-official";
import { getSessions } from "../../selectors";
import { connect } from "react-redux";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.options = {
            title: {
                text: "Test",
            },
            series: [
                {
                    name: "Time",
                    data: this.props.sessions
                        .valueSeq()
                        .map((x) => parseInt(x.duration))
                        .toJS(),
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <AppBar />
                <HighchartsReact
                    highcharts={HighCharts}
                    options={this.options}
                />
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
