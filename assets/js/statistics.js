const ctx = document?.getElementById('myChart');
const ctxNew = document?.getElementById('myChartTwo');

if (ctx != null && ctxNew != null) {
    new Chart(ctxNew, {
        type: 'bar',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Bizning akademik litseyga qabul qilinga oquvchilar soni',
                data: [513, 469, 523, 481, 507, 423],
                borderWidth: 1,
                backgroundColor: '#0193dc8e',
                borderColor: '#00608F',
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

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Oliy talim majmuasiga kirgan oquvchilar soni',
                data: [390, 371, 460, 413, 461, 359],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
            }]
        },
        options: {
            animations: {
                tension: {
                    duration: 5000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            scales: {
                y: {
                    min: 350,
                    max: 500
                }
            }
        }
    });
}

const chartOne = document?.querySelector('.secondChart')
console.log(chartOne);
const chartTwo = document?.querySelector('.secondChartTwo')
const chartThree = document?.querySelector('.secondChartThree')
const chartFour = document?.querySelector('.secondChartFour')

if (chartOne != null && chartTwo != null && chartThree != null && chartFour != null) {
    new Chart(chartOne, {
        type: 'bar',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Bizning akademik litseyga qabul qilinga oquvchilar soni',
                data: [513, 469, 523, 481, 507, 423],
                borderWidth: 1,
                backgroundColor: '#0193dc8e',
                borderColor: '#00608F',
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

    new Chart(chartTwo, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Oliy talim majmuasiga kirgan oquvchilar soni',
                data: [390, 371, 460, 413, 461, 359],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
            }]
        },
        options: {
            animations: {
                tension: {
                    duration: 5000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            scales: {
                y: {
                    min: 350,
                    max: 500
                }
            }
        }
    });

    new Chart(chartThree, {
        type: 'bar',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Bizning akademik litseyga qabul qilinga oquvchilar soni',
                data: [513, 469, 523, 481, 507, 423],
                borderWidth: 1,
                backgroundColor: '#0193dc8e',
                borderColor: '#00608F',
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

    new Chart(chartFour, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Oliy talim majmuasiga kirgan oquvchilar soni',
                data: [390, 371, 460, 413, 461, 359],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
            }]
        },
        options: {
            animations: {
                tension: {
                    duration: 5000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            scales: {
                y: {
                    min: 350,
                    max: 500
                }
            }
        }
    });
}