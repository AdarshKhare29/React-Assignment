import { Bar } from "react-chartjs-2"
const BarChart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: "Revenue",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: [4215, 5312, 6251, 7841, 9821, 14984],
        }],
    }
    const options = {
        title: {
            display: true,
        },
        scales: {
            xAxes: [{
                time: {
                    unit: 'month'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 6
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 5
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: false
        }
    }
    return (
        <div className="col-xl-6">
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-chart-area"></i>
                    Bar Chart Example
                </div>
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}
export default BarChart