const js = {
    index : function (){
        document.write(`<li><h3><a href="index.html">Kook</a></li></h3>`);
        let arr1d = ["Javascript","Etc","Plan"];
        for(index in arr1d){
            document.write(`<li><h3><a href="${arr1d[index]}.html">${arr1d[index]}</a></li></h3>`);
        }
    }
}