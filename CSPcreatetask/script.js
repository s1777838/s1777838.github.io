
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
                const outputsDiv = document.getElementById("outputsDiv");
                outputsDiv.innerHTML = "";
                for (var i=0;i<findNeighbors(exoplanetObject).length; i++){
                        let newDiv = generateDiv(findNeighbors(exoplanetObject)[i],i);
                        outputsDiv.appendChild(newDiv);
                }
        }
        function generateDiv(exoplanet,index){
                const tempDiv = document.createElement("div");
                tempDiv.appendChild(document.createTextNode("Planet Name: "+exoplanet.pl_name));
                tempDiv.appendChild(document.createElement("br"));
                tempDiv.appendChild(document.createTextNode("Discovered " + exoplanet.disc_year + " at " +exoplanet.disc_facility " using " + exoplanet.discoverymethod));
                tempDiv.appendChild(document.createElement("br"));
                tempDiv.appendChild(document.createTextNode(exoplanet.pl_rade + "times the radius of the Earth"));
                tempDiv.appendChild(document.createElement("br"));
                tempDiv.appendChild(document.createTextNode((parseFloat(exoplanet.sy_dist)*3.26156).toString()+"light years away."));
                tempDiv.setAttribute("class", "outputDiv");
                tempDiv.setAttribute("id", "planet"+index+"Div");
                return tempDiv
        }
        function findNeighbors(exoplanet){
                let temp = [];
                for(var i=0;i<exoplanetObjects.length; i++){
                        if(exoplanetObjects[i].hostname==exoplanet.hostname){
                                temp.push(exoplanetObjects[i]);
                        }
                }
                return temp;
        }
