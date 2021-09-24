import HighCharts from "highcharts";
import HighChartsReact from "highcharts-react-official";
import { getSessions } from "../../selectors";
import { connect } from "react-redux";
import React from "react";
import histogram from "highcharts/modules/histogram-bellcurve";

class TestChart extends React.Component {
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
            <HighChartsReact highcharts={HighCharts} options={this.options} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sessions: getSessions(state),
    };
};

export default connect(mapStateToProps, null)(TestChart);
