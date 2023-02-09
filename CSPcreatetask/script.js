
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
                let dist = parseInt(document.getElementById("distNum").value);
                console.log(dist)
                dist = dist*0.306601;
                if(dist < 1.3 || isNaN(dist)){
                    console.log("invalid");
                    return
                }
                console.log(dist)
                var exoplanetObject = exoplanetObjects[Math.floor(Math.random()*exoplanetObjects.length)];
                while(exoplanetObject.sy_dist>dist||exoplanetObject.sy_dist.isNaN()){
                        console.log(exoplanetObject.sy_dist);
                        exoplanetObject = exoplanetObjects[Math.floor(Math.random()*exoplanetObjects.length)];
                }
                console.log(exoplanetObject);
                console.log(exoplanetObject.pl_name);
                console.log(exoplanetObject.sy_dist);
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
                tempDiv.appendChild(document.createTextNode(exoplanet.pl_name+" was discovered in "+exoplanet.disc_year+" at "+exoplanet.disc_facility+" using the "+exoplanet.discoverymethod+" method"));
                tempDiv.appendChild(document.createElement("br"));
                tempDiv.appendChild(document.createTextNode("The radius of "+exoplanet.pl_name+" is "+exoplanet.pl_rade+" times the radius of the Earth"));
                tempDiv.appendChild(document.createElement("br"));
                tempDiv.appendChild(document.createTextNode(exoplanet.pl_name+" is "+(Math.round(((parseFloat(exoplanet.sy_dist)*3.26156) + Number.EPSILON) * 100) / 100).toString()+" light years away from our solar system."));
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
