
fetch('https://api.github.com/repos/islamshahil/AutonomousThreatSweep/git/trees/main?recursive=1')
   .then(response => response.text())
   .then(text => JSON.parse(text))
   .then(objectjson => {var jsonobject = objectjson['tree']
                        const arr = new Array() 
                        for (let j of jsonobject){
                          if(!(j['path']).includes("/")){
                            arr.push(j['path'])
                          }
                        }
                        console.log(arr)
                        var text = '<ul>';
                        for (i = 0; i <= arr.length - 1; i++) {
                          var li = document.createElement('li');     // create li element.
                          let url = "https://github.com/islamshahil/AutonomousThreatSweep/tree/main/";
                          var str = arr[i];
                          var res = url.concat(str);
                          text = text + "<li><a href='"+res+"' target='_blank'>" + str + "</a></li>";
                        }
                        text = text +'</ol>';
                        document.getElementById("container").innerHTML = text;
                       })

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("container");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


