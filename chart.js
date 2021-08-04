//Line Charts

/* var points = document.getElementById('traffic-chart').getContext('2d');
                    var myChart = new Chart(points, {
                        type: 'line',
                        data: {
                            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-23', '4-10', '11-17', '18-24', '25-31'],
                            datasets: [{
                                label: 'Visits per Hour',
                                data: [750, 1400, 2000, 1000, 1750, 800, 2300, 550, 1100, 1900, 2100],
                                backgroundColor: [
                                    'rgba(54, 162, 235)'
                                ],
                                borderColor: [
                                    'rgba(54, 162, 235)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            layout: {
                                padding: {
                                    left: 50,
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });
                    */

var trafficCanvas = document.getElementById('traffic-chart').getContext('2d');
                    let trafficData = {
                        labels: ["12-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
                        datasets: [{
                            data: [700, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
                            backgroundColor :"rgba(116, 119, 191, .3)",
                            borderWidth: 1,
                        }]
                    };

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duartion: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let traffiChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});




//Bar Chart

/* var bars = document.getElementById('daily-chart').getContext('2d')
var anotherCharts = new Chart(bars, {
    type: 'bar',
    data: {
        labels:['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        datasets:[{
            data: [65, 100, 200, 175, 210, 190, 135],
            backgroundColor: [
            'rgba(162, 54, 235)'
            ],
            borderWidth: [
                1
            ]
        }]
    },

    options: {
        layout: {
            padding: {
                left: 60,
            }
        },

        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: false
        }
    }
});

*/

const dailyCanvas = document.getElementById('daily-chart').getContext('2d');
            const dailyData = {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [{
            label: "# of hits",
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: "#7477BF",
            borderWidth: 1,
        }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: "bar",
    data: dailyData,
    options: dailyOptions
});

//Doughnut Chart

   /*var pie = document.getElementById('mobile-chart').getContext('2d');
                    var myChart = new Chart(pie, {
                        type: 'doughnut',
                        data: {
                            labels: ['Desktop', 'Tablet', 'Phone'],
                            datasets: [{
                                label: 'Visits per Hour',
                                data: [25, 25, 50],
                                backgroundColor: [
                                    'rgba(54, 162, 235)',
                                    'rgba(129, 108, 249)',
                                    'rgba(216, 0, 238)'
                                ],
                                borderColor: [
                                    'rgba(54, 162, 235)'
                                ],
                                borderWidth: 1
                            }]
                        },

                        options: {
                            aspectRatio: 1.9,
                            plugins: {
                                legend: true
                            }
                        }
                       
                    });
                    */

const mobileCanvas = document.getElementById("mobile-chart").getContext('2d');

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: "# of users",
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            "#7477BF",
            "#78CF82",
            "#51B6C8"
        ]
    }]
};

const mobileOptions = {
    plugins: {
        legend: {
            position: "right",
            labels: {
                boxWidth: 20,
                fontStyle: "bold"
            }
            
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: "doughnut",
    data: mobileData,
    options: mobileOptions
});