function tinyHttp(){
    this.http =  new XMLHttpRequest();
}
tinyHttp.prototype.get = function(url,callback){
    this.http.open('GET', url, true);
    this.http.onload=()=>{
        if(this.http.status === 200){
            callback(null,this.http.responseText);
        }
        else{
            callback ("Error : "+this.http.status);
        }
    }
    this.http.send();
}

tinyHttp.prototype.post = function(url,data,callback){


    this.http.open('POST', url, true);
    this.http.setRequestHeader("Content-type","application/json");
    this.http.onload=()=>{
        if(this.http.status === 201){
            callback(null,this.http.responseText);
        }
        else{
            callback ("Error : "+this.http.status);
        }
    }
    this.http.send(JSON.stringify(data));

}