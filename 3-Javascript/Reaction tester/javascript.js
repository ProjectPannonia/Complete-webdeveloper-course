var startTime, endTime;
            
            startGame();
            
            document.getElementById("randomFormation").onclick = function() {
                
                var elpasedTime = end();
                
                document.getElementById("randomFormation").style.display = "none";
                
                document.getElementById("time").innerHTML = elpasedTime + " s";
                
            }
            
            function startGame() {
                
                createRandomFormation();
                
                start();
                
            }
            
            function start() {
                
                startTime = new Date();
                
            }
            
            function end() {
                
                endTime = new Date();
                
                var timeDiff = endTime - startTime;
                
                timeDiff /= 1000;
                
                return timeDiff;
            }
            
            function createRandomFormation() {
                
                var formation = document.createElement("div");
                formation.setAttribute("id","randomFormation");
                formation.style.cssText = styleCreator();
                
                document.getElementById("playground").appendChild(formation);
                
            }
            
            function styleCreator() {
                
                var widthStyle =
                        "width:" + getRandomNumber(200,30) + ";";
                
                var heightStyle = 
                        "height:" + getRandomNumber(200, 30) + ";";
                
                var borderRadiusStyle = 
                        "border-radius:" + getRandomNumber(100,1) + "px;";
                
                var rgbStyle =  
                    "background-color: rgb(" + getRandomRgbCode() + 
                    "," + getRandomRgbCode() + "," + getRandomRgbCode() + ");";
                
                var leftMarginStyle = 
                    "margin-left:" + getRandomNumber(500,0) +"px;";
                
                var topMarginStyle = 
                    "margin-top:" + getRandomNumber(500,0) + "px";
                
                return  widthStyle + heightStyle + borderRadiusStyle + 
                        rgbStyle + leftMarginStyle +topMarginStyle;
            }
            
            function getRandomRgbCode() {
                return getRandomNumber(255,0);
            }
            
            function getRandomNumber(max, from) {
                
                if(from == 0) {
                    return Math.floor(Math.random() * max);
                } else {
                    return Math.floor(Math.random() * max) + from;
                }
            }