//Line Charts

var points = document.getElementById('traffic-chart').getContext('2d');
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
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });

//Bar Chart

var bars = document.getElementById('daily-chart').getContext('2d')
var anotherCharts = new Chart(bars, {
    type: 'bar',
    data: {
        labels:['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        datasets:[{
            data: [65, 100, 200, 175, 210, 190, 135],
            backgroundColor: [
            'rgba(54, 162, 235)'
            ],
            borderWidth: [
                1
            ]
        }]
    },

    options: {
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

//Doughnut Chart

    var pie = document.getElementById('mobile-chart').getContext('2d');
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
                            plugins: {
                                legend: true
                            }
                        }
                       
                    });


// Alert Banner

/** const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>5</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
}) **/
    