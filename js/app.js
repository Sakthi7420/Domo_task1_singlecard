my_data = document.getElementById('data_set');
my_data.textContent = 'Top 5 Cities price'


domo.get('data/v1/chart?fields=customer_state,price&groupby=customer_state').then(function(data){
    console.log(data);
    data = data.sort((a,b) => b.price -a.price);

    const a = document.getElementById('mychart').getContext('2d');
    const mychart = new Chart(a, {
        type: 'bar',
        data: {
        labels: [data[0].customer_state,data[1].customer_state,data[2].customer_state,data[3].customer_state,data[4].customer_state],
        datasets: [{
            label: 'Top Five State by Price',
            data: [data[0].price,data[1].price,data[2].price,data[3].price,data[4].price],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
        }]
        },
            beginAtZero: true

    });
    });
