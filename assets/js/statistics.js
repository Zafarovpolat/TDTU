const ctx = document.getElementById('myChart');
const ctxNew = document.getElementById('myChartTwo');

new Chart(ctx, {
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

new Chart(ctxNew, {
    type: 'bar',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Oliy talim majmuasiga kirgan oquvchilar soni',
            data: [390, 371, 460, 413, 461, 359],
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