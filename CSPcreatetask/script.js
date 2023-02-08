
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'PSCompPars_2023.02.02_22.22.21.csv', false);
        xhr.send();
        let exoplanetObjects = csvToArray(xhr.responseText);
        function csvToArray(str, delimiter = ",") {
          const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
          const rows = str.slice(str.indexOf("\n") + 1).split("\n");
          const arr = rows.map(function (row) {
            const values = row.split(delimiter);
            const el = headers.reduce(function (object, header, index) {
              object[header] = values[index];
              return object;
            }, {});
            return el;
          });
          return arr;
        }
        function randomExoplanet(){
                var exoplanetObject = exoplanetObjects[Math.floor(Math.random()*exoplanetObjects.length)];
                console.log(exoplanetObject);
                console.log(exoplanetObject.pl_name);
                const newDiv = document.createElement("div");
                newDiv.appendChild(document.createTextNode("Planet Name"+exoplanetObject.pl_name));
                newDiv.appendChild(document.createElement("div"));
                newDiv.appendChild(document.createTextNode("Discovery Method" + exoplanetObject.discoverymethod));
                newDiv.setAttribute("class", "outputDiv");
                newDiv.setAttribute("id", "planetDiv");
                const outputsDiv = document.getElementById("outputsDiv");
                outputsDiv.appendChild(newDiv);
        }
