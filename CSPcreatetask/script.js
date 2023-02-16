
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'PSCompPars_2023.02.02_22.22.21.csv', false);
        xhr.send();
        let exoplanetObjects = arrayFromCSV(xhr.responseText);
        function arrayFromCSV(csvRaw) {
                let temp = [];
                let columns = csvRaw.split("\n")[0].split(",");
                let rows = csvRaw.split("\n").splice(1);
                rows.splice(rows.length-1,1);
                console.log(rows);
                for(var i = 0; i<rows.length; i++){
                        temp.push(new Exoplanet(columns, rows[i].split(",")));
                }
                return temp;
        }
        function Exoplanet(columnDefinitions,columnValues){
                for(var i = 0; i<columnDefinitions.length; i++){
                        this[columnDefinitions[i]] = columnValues[i];
                }
        }

        function randomExoplanet(){
                let dist = parseInt(document.getElementById("distNum").value);
                dist = dist*0.306601;
                if(dist < 1.3 || isNaN(dist)){
                    console.log("invalid");
                    return
                }
                var exoplanetObject = exoplanetObjects[Math.floor(Math.random()*exoplanetObjects.length)];
                while(parseFloat(exoplanetObject.sy_dist)>dist||isNaN(parseFloat(exoplanetObject.sy_dist))){
                        exoplanetObject = exoplanetObjects[Math.floor(Math.random()*exoplanetObjects.length)];
                }
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
                tempDiv.appendChild(document.createTextNode(exoplanet.pl_name+
                                                            " was discovered in "+exoplanet.disc_year+
                                                            " at "+exoplanet.disc_facility+
                                                            " using the "+exoplanet.discoverymethod+" method"));
                tempDiv.appendChild(document.createElement("br"));
                tempDiv.appendChild(document.createTextNode("The radius of "+exoplanet.pl_name+
                                                            " is "+exoplanet.pl_rade+" times the radius of the Earth"));
                tempDiv.appendChild(document.createElement("br"));
                tempDiv.appendChild(document.createTextNode(exoplanet.pl_name+" is "+
                                                            (Math.round(
                                                            ((parseFloat(exoplanet.sy_dist)*3.26156) + Number.EPSILON) * 100
                                                            )/ 100).toString()+" light years away from our solar system."));
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
