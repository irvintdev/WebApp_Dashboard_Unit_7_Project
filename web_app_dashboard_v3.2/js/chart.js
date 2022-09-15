
const trafficCanvas = document.getElementById('traffic-chart');
const dailyTrafficCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');


// Traffic Chart
const trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500],
        tension: 0.4
    }]
};

const trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 1.9,
    animation: {
        duration: 0
    },
    scales: {
        y : {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas , {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});


// Daily Chart

const dailyData = {
    labels: [ 'S', 'M', 'T' , 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [ 75, 115, 170, 120, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true,
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyTrafficCanvas , {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Mobile Chart


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
        aspectRatio: 1.9,
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