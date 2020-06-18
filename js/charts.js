
    google.charts.load('current', {'packages':['corechart', 'line', 'timeline', 'geochart']});
    google.charts.setOnLoadCallback(drawFirstChart);
    google.charts.setOnLoadCallback(drawSecondChart);


      function drawFirstChart() {
        var container = document.getElementById('chart1');
        var linearChart = new google.visualization.LineChart(container);
        var data = new google.visualization.DataTable();
        var parentwidth = container.parentNode.clientWidth;

        var linearOptions = {
          title: 'Orders (1-15 february)',
          allowHtml: true,
          legend: 'none', 
          pointSize: 5,
          height: 400,
          width: parentwidth,
          hAxis: {
            title: 'Orders',
            titleTextStyle: { color: '#010101', fontName: 'Roboto', fontSize: '12', bold: true},
            textStyle: { color: '#373737', fontName: 'Roboto', fontSize: '12', bold: true}
          },
          vAxis: {
            title: 'Quantity of orders',
            textStyle: { color: '#373737', fontName: 'Roboto', fontSize: '12', bold: true}
          },
        };

      
      data.addColumn('date', 'Date');
      data.addColumn('number', 'Orders');

      data.addRows([
        [new Date(2020, 1, 1),  374],
        [new Date(2020, 1, 2),  455],
        [new Date(2020, 1, 3),  366],
        [new Date(2020, 1, 4),  125],
        [new Date(2020, 1, 5),  145],
        [new Date(2020, 1, 6),  458],
        [new Date(2020, 1, 7),  365],
        [new Date(2020, 1, 8),  102],
        [new Date(2020, 1, 9),  92],
        [new Date(2020, 1, 10),  545],
        [new Date(2020, 1, 11),  325],
        [new Date(2020, 1, 12),  214],
        [new Date(2020, 1, 13),  415],
        [new Date(2020, 1, 14),  314],
        [new Date(2020, 1, 15),  203]
      ]);

       linearChart.draw(data, linearOptions);
      

      }


      function drawSecondChart() {
        var container = document.getElementById('chart2');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();
        var parentwidth = container.parentNode.clientWidth;
        var starts = [];
        var durations = [];
        //randomize scheduled hours
        for (var i = 0; i < 7; i++) {
            starts[i] = Math.round(Math.floor(Math.random() * 12) + 5);
            if (starts[i] < 8) {starts[i] = 8}
            durations[i] = Math.round(Math.floor(Math.random() * 14)+4);
            if (starts[i]+durations[i]>22) { durations[i]=22-starts[i]}
        }
        dataTable.addColumn({ type: 'string', id: 'Name' });
        dataTable.addColumn({ type: 'string', id: 'Duration' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
      [ 'Monday',  durations[0].toString()+" h",  new Date(0,0,0,starts[0],0,0),  new Date(0,0,0,starts[0]+durations[0],0,0) ],
      [ 'Tuesday',  durations[1].toString()+" h",  new Date(0,0,0,starts[1],0,0),  new Date(0,0,0,starts[1]+durations[1],0,0) ],
      [ 'Wednesday',  durations[2].toString()+" h",  new Date(0,0,0,starts[2],0,0),  new Date(0,0,0,starts[2]+durations[2],0,0) ],
      [ 'Thursday', durations[3].toString()+" h",   new Date(0,0,0,starts[3],0,0),  new Date(0,0,0,starts[3]+durations[3],0,0) ],
      [ 'Friday',  durations[4].toString()+" h",  new Date(0,0,0,starts[4],0,0),  new Date(0,0,0,starts[4]+durations[4],0,0) ],
      [ 'Saturday', durations[5].toString()+" h",   new Date(0,0,0,starts[5],0,0),  new Date(0,0,0,starts[5]+durations[5],0,0) ],
      [ 'Sunday',  durations[6].toString()+" h",  new Date(0,0,0,starts[6],0,0), new Date(0,0,0,starts[6]+durations[6],0,0) ]]);
        
        var options = {
          title: "Michael",
          width: parentwidth,
          height: 350,
          hAxis: { 
            format: 'HH:mm',
            minValue: new Date(0,0,0,8,0,0),
            maxValue: new Date(0,0,0,22,0,0),
            textStyle: { color: 'fff', fontName: 'Roboto', fontSize: '12', bold: true}         
        },
        timeline: { singleColor: '#317eeb'},
        animation: {
           startup:true,
           duration: 1000,
           easing: 'out'
        }
      }

      google.visualization.events.addListener(chart, 'ready', function () {

          var labels = container.getElementsByTagName('text');

          Array.prototype.forEach.call(labels, function(label) {
            if (label.getAttribute('text-anchor') === 'middle') {
              
              label.setAttribute('fill', '#fff');
            }
          });
        });

        chart.draw(dataTable, options);
      }