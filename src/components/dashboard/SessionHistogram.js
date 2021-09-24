import HighCharts from "highcharts";
import HighChartsReact from "highcharts-react-official";
import { getSessions } from "../../selectors";
import { connect } from "react-redux";
import React from "react";
import histogram from "highcharts/modules/histogram-bellcurve";
import { useState } from "react";
histogram(HighCharts);

class SessionHistogram extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.sessions
            .valueSeq()
            .map((x) => parseInt(x.duration))
            .toJS();
        this.chartOptions = {
            title: {
                text: "Bell curve",
            },

            xAxis: [
                {
                    title: {
                        text: "Data",
                    },
                    alignTicks: false,
                },
                {
                    title: {
                        text: "Bell curve",
                    },
                    alignTicks: false,
                    opposite: true,
                },
            ],

            yAxis: [
                {
                    title: { text: "Data" },
                },
                {
                    title: { text: "Bell curve" },
                    opposite: true,
                },
            ],

            series: [
                {
                    name: "Data",
                    type: "histogram",
                    data: this.data,
                    accessibility: {
                        exposeAsGroupOnly: true,
                    },
                    marker: {
                        radius: 1.5,
                    },
                    binWidth: 10,
                },
            ],
        };
    }
    render() {
        return (
            <div>
                <HighChartsReact
                    highcharts={HighCharts}
                    options={this.chartOptions}
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

export default connect(mapStateToProps, null)(SessionHistogram);
