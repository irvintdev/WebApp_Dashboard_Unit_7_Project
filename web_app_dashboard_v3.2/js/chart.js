const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: [
        'Desktop',
        'Tablet',
        'Phones'
    ],

    datasets: [{
        label: 'Mobile Users',
        data: [300, 125, 125],
        backgroundColor: [
            'rgb(116, 120, 186)',
            'rgb(145, 199, 148)',
            'rgb(108, 180, 198)'   
        ],
        hoverOffset: 4
    }]
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: {
        // aspectRatio: 1.9,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    fontWeight: 'bolder',
                }
            }
        }
    }
});