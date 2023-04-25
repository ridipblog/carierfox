// var typed_strings = $(".text-slider-items").text();
var text = "arierfox";
var typed = new Typed("#header_text", {
    strings: text.split(","),
    typeSpeed: 50,
    loop: true,
    backDelay: 900,
    backSpeed: 50,
    showCursor: false
});
function nav_fun1() {
    var header_1 = document.getElementsByClassName("header_1")[0];
    var navbar_1 = document.getElementsByClassName("navbar_div_1")[0];
    var nav_logo = document.getElementById("navbar_logo");
    if (header_1.style.display == "none") {
        header_1.style.display = "flex";
        navbar_1.style.display = "flex";
        nav_logo.style.transform = "rotate(-20deg)";

    }
    else {
        header_1.style.display = "none";
        navbar_1.style.display = "none";
        nav_logo.style.transform = "rotate(0deg)";
    }
}
function private_search_fun(json_data, key_name, div_index, class_name, crose_index, fun_name) {
    var json_len = Object.keys(json_data).length;
    var text = document.getElementsByClassName("private_search_input")[div_index].value;
    var temp = "";
    var list_1 = [];
    for (var i = 0; i < json_len; i++) {
        temp = "";
        var tempList = [json_data[i][key_name]];
        if (tempList[0].length >= text.length) {
            for (var j = 0; j < text.length; j++) {
                temp += tempList[0][j];
            }
            if (temp !== "" && text.toLowerCase() === temp.toLowerCase()) {
                list_1.push(tempList[0]);
            }
        }
    }
    var private_div_1 = document.getElementsByClassName("private_search_1")[div_index];
    var private_div_2 = document.getElementsByClassName(class_name)[0];
    var private_search_3 = document.getElementsByClassName("private_search_3")[div_index];
    private_search_3.style = "display:none;";
    if (private_div_2) {
        document.getElementsByClassName("crose")[crose_index].style = "display:none";
        private_div_2.remove();
    }
    var new_div = document.createElement("div");
    new_div.setAttribute("class", "flex_div private_search_2 " + class_name);
    private_div_1.appendChild(new_div);
    document.getElementsByClassName("crose")[crose_index].style = "display:inline-block";
    if (list_1.length === 0) {
        var new_button = document.createElement("button");
        new_button.setAttribute("class", "font_style private_btn private_search_btn");
        new_button.style = "background:red;font-weight:blod;";
        new_button.innerHTML = "No Tilte Found ";
        new_div.appendChild(new_button);
    }
    else {
        for (var i = 0; i < list_1.length; i++) {
            var new_button = document.createElement("button");
            new_button.innerHTML = list_1[i];
            new_button.value = list_1[i];
            new_button.setAttribute("class", "font_style private_btn private_search_btn");
            new_button.addEventListener("click", fun_name);
            new_div.appendChild(new_button);
        }
    }
}
function government_search_fun(json_data,key_name,div_index,class_name,crose_index,fun_name){
    var json_len=Object.keys(json_data).length;
    var text=document.getElementsByClassName("government_search_input")[0].value;
    var temp="";
    var list_1=[]
    for(var i=0;i<json_len;i++){
        temp="";
        var tempList=[json_data[i][key_name]];
        if(tempList[0].length>=text.length){
            for(var j=0;j<text.length;j++){
                temp+=tempList[0][j];
            }
            if(temp !=="" && text.toLowerCase()===temp.toLowerCase()){
                list_1.push(tempList[0]);
            }
        }
    }
    var government_div_1=document.getElementsByClassName("government_search_1")[div_index];
    var government_div_2=document.getElementsByClassName(class_name)[0];
    var government_search_3=document.getElementsByClassName("government_search_3")[div_index];
    government_search_3.style="display:none;";
    if(government_div_2){
        document.getElementsByClassName("crose_1")[crose_index].style="display:none;";
        government_div_2.remove();
    }
    var new_div=document.createElement("div");
    new_div.setAttribute("class","flex_div government_search_3 "+class_name);
    government_div_1.appendChild(new_div);
    document.getElementsByClassName("crose_1")[crose_index].style="display:inline-block";
    if(list_1.length===0){
        var new_button=document.createElement("button");
        new_button.setAttribute("class","font_style government_btn government_search_btn");
        new_button.style="background:red;font-weight:blod;";
        new_button.innerHTML="No Category Found !";
        new_div.appendChild(new_button);
    }
    else{
        for(var i=0;i<list_1.length;i++){
            var new_button=document.createElement("button");
            new_button.innerHTML=list_1[i];
            new_button.value=list_1[i];
            new_button.setAttribute("class","font_style government_btn government_search_btn");
            new_button.addEventListener("click",fun_name);
            new_div.appendChild(new_button);
        }
    }

}
function privare_title_fun_1() {
    var json_data = JSON.parse(private_title);
    private_search_fun(json_data, 'title', 0, "private_title_div", 0, private_title_fun);
}
function private_location_fun_1() {
    var json_data = JSON.parse(private_location);
    private_search_fun(json_data, 'location', 1, "private_location_div", 1, private_location_fun);
}
function government_title_fun_1(){
    var json_data=JSON.parse(government_title);
    government_search_fun(json_data,'title',0,'government_title_div',0,government_title_fun);
}
function close_private(class_name, div_index, crose_index) {
    var private_div_2 = document.getElementsByClassName(class_name)[0];
    if (private_div_2) {
        document.getElementsByClassName("crose")[crose_index].style = "display:none;";
        document.getElementsByClassName("private_search_3")[div_index].style = "display:flex;";
        document.getElementsByClassName("private_search_input")[div_index].value = "";
        private_div_2.remove();
    }
}
function close_government(class_name,div_index,crose_index){
    var government_div_2=document.getElementsByClassName(class_name)[0];
    if(government_div_2){
        document.getElementsByClassName("crose_1")[crose_index].style="display:none;";
        document.getElementsByClassName("government_search_3")[div_index].style="display:flex;";
        document.getElementsByClassName("government_search_input")[div_index].value="";
        government_div_2.remove();
    }
}
function close_private_title() {
    close_private("private_title_div", 0, 0);
}
function close_private_location() {
    close_private("private_location_div", 1, 1);
}
function close_government_title(){
    close_government("government_title_div",0,0);
}
function call_private(json_data, key_name, div_index, fun_name) {
    var json_len = Object.keys(json_data).length;
    var private_search_3 = document.getElementsByClassName("private_search_3")[div_index];
    for (var i = 0; i < json_len; i++) {
        var new_button = document.createElement("button");
        new_button.setAttribute("class", "font_style private_btn private_search_btn_1");
        new_button.innerHTML = json_data[i][key_name];
        new_button.value = json_data[i][key_name];
        new_button.addEventListener("click", fun_name);
        private_search_3.appendChild(new_button);
    }
}
function call_government(json_data,key_name,div_index,fun_name){
    var json_len=Object.keys(json_data).length;
    var government_search_3=document.getElementsByClassName("government_search_3")[div_index];
    for(var i=0;i<json_len;i++){
        var new_button=document.createElement("button");
        new_button.setAttribute("class","font_style government_btn government_search_btn_1");
        new_button.innerHTML=json_data[i][key_name];
        new_button.value=json_data[i][key_name];
        new_button.addEventListener("click",fun_name);
        government_search_3.appendChild(new_button);
    }
}
function call_private_title() {
    var json_data = JSON.parse(private_title)
    call_private(json_data, 'title', 0, private_title_fun);
}
function call_private_location() {
    var json_data = JSON.parse(private_location);
    call_private(json_data, 'location', 1, private_location_fun);
}
function call_government_title(){
    var json_data=JSON.parse(government_title);
    call_government(json_data,'title',0,government_title_fun);
}
function call_government_qualification(){
    var json_data=JSON.parse(government_qualification);
    call_government(json_data,'qualification',1,government_qualification_fun);
}
var key_name = ["job_title", "description", "job_location", "start_date", "end_data"];
function private_job_short_fun(btn_val,json_data,job_filter,input_index){
    document.getElementsByClassName("private_search_input")[input_index].value=btn_val;
    var json_len=Object.keys(json_data).length;
    var all_data=[];
    for(var i=0;i<json_len;i++){
        var data=[];
        if(btn_val===json_data[i][job_filter]){
            for(var j=0;j<Object.keys(json_data[i]).length;j++){
                data.push(json_data[i][key_name[j]]);
            }
            all_data.push(data);
        }
    }
    var private_div=document.getElementsByClassName("private_div")[0];
    var private_div_2=document.getElementsByClassName("private_div_2")[0];
    var private_div_3=document.getElementsByClassName("private_div_3")[0];
    private_div_2.style="display:none;";
    if(private_div_3){
        private_div_3.remove();
    }
    var main_div=document.createElement("div");
    main_div.setAttribute("class","flex_div private_div_3");
    private_div.appendChild(main_div);
    if(all_data.length===0){
        var new_div=document.createElement("div");
        new_div.setAttribute("class","font_style flex_div private_div_1");
        main_div.appendChild(new_div);
        var new_h=document.createElement("h1");
        new_h.innerHTML="No Result Found !";
        new_div.appendChild(new_h);
    }
    else{
        var all_len=all_data.length;
        var temp_len=all_len-1;
        while(all_len!=0){
            var new_div=document.createElement("div");
            new_div.setAttribute("class","font_style flex_div private_div_1");
            main_div.appendChild(new_div);
            var new_h=document.createElement("h1");
            new_h.innerHTML=all_data[temp_len][0];
            new_div.appendChild(new_h);
            for(var j=0;j<2;j++){
                var new_p=document.createElement("p");
                new_p.innerHTML=all_data[temp_len][j+1];
                new_div.appendChild(new_p);
            }
            for(var j=0;j<2;j++){
                var new_span=document.createElement("span");
                new_span.innerHTML=all_data[temp_len][j+3];
                new_div.appendChild(new_span);
            }
            var new_link=document.createElement("a");
            new_link.setAttribute("href","");
            new_link.innerHTML="View Details";
            new_div.appendChild(new_link);
            all_len--;
            temp_len--;
        }
    }
}
var key_name_1=['job_title','description','job_qualification','start_date','end_data'];
function government_job_short_fun(btn_val,json_data,job_filter,input_index){
    if(input_index!=1){
        document.getElementsByClassName("government_search_input")[input_index].value=btn_val;
    }
    var json_len=Object.keys(json_data).length;
    var all_data=[];
    for(var i=0;i<json_len;i++){
        var data=[];
        if(btn_val===json_data[i][job_filter]){
            for(var j=0;j<Object.keys(json_data[i]).length;j++){
                data.push(json_data[i][key_name_1[j]]);
            }
            all_data.push(data);
        }
    }
    var government_div=document.getElementsByClassName("government_div")[0];
    var government_div_2=document.getElementsByClassName("government_div_2")[0];
    var government_div_3=document.getElementsByClassName("government_div_3")[0];
    government_div_2.style="display:none;";
    if(government_div_3){
        government_div_3.remove();
    }
    var main_div=document.createElement("div");
    main_div.setAttribute("class","government_div_3");
    government_div.appendChild(main_div);
    if(all_data.length===0){
        var new_div=document.createElement("div");
        new_div.setAttribute("class","word_break font_style government_div_1");
        main_div.appendChild(new_div);
        var new_h=document.createElement("h1");
        new_h.innerHTML="No Result Found !";
        new_div.appendChild(new_h);
    }
    else{
        var all_len=all_data.length;
        var temp_len=all_len-1;
        while(all_len!=0){
            var new_div=document.createElement("div");
            new_div.setAttribute("class","word_break font_style government_div_1");
            main_div.appendChild(new_div);
            var new_h=document.createElement("h1");
            new_h.innerHTML=all_data[temp_len][0];
            new_div.appendChild(new_h);
            for(var j=0;j<2;j++){
                var json_text=all_data[temp_len][j+1];
                var new_p=document.createElement("p");
                if(j==0){
                    json_text=json_text.substring(0,120)+"...";
                    new_p.setAttribute("class","government_overflow");
                }
                new_p.innerHTML=json_text;
                new_div.appendChild(new_p);
            }
            var new_p=document.createElement("p");
            new_div.appendChild(new_p);
            for(var j=0;j<2;j++){
                var new_span=document.createElement("span");
                new_span.innerHTML=all_data[temp_len][j+3];
                new_p.appendChild(new_span);
            }
            var new_link=document.createElement("a");
            new_link.setAttribute("href","");
            new_link.innerHTML="View Details";
            new_div.appendChild(new_link);
            all_len--;
            temp_len--;
        }
    }
}
function private_title_fun() {
    var btn_val = event.target.value;
    var json_data = JSON.parse(private_job_short);
    private_job_short_fun(btn_val,json_data,'job_title',0)
}
function private_location_fun() {
    var btn_val=event.target.value;
    var json_data=JSON.parse(private_job_short);
    private_job_short_fun(btn_val,json_data,'job_location',1);
}
function government_title_fun(){
    var btn_val=event.target.value;
    var json_data=JSON.parse(government_job_short);
    government_job_short_fun(btn_val,json_data,'job_title',0);
}
function government_qualification_fun(){
    var btn_val=event.target.value;
    var json_data=JSON.parse(government_job_short);
    government_job_short_fun(btn_val,json_data,'job_qualification',1);
}
function call_private_job_short() {
    var json_data = JSON.parse(private_job_short);
    var json_len = Object.keys(json_data).length;
    var private_job_2 = document.getElementsByClassName("private_div_2")[0];
    var i = 6;
    var len = json_len - 1;
    while (i != 0) {
        var new_div = document.createElement("div");
        new_div.setAttribute("class", "font_style flex_div private_div_1");
        private_job_2.appendChild(new_div);
        var new_h = document.createElement("h1");
        new_h.innerHTML = json_data[len]['job_title'];
        new_div.appendChild(new_h);
        for (var j = 0; j < 2; j++) {
            var new_p = document.createElement("p");
            new_p.innerHTML = json_data[len][key_name[j + 1]];
            new_div.appendChild(new_p);
        }
        for (var j = 0; j < 2; j++) {
            var new_span = document.createElement("span");
            new_span.innerHTML = json_data[len][key_name[j + 3]];
            new_div.appendChild(new_span);
        }
        var new_link = document.createElement("a");
        new_link.setAttribute("href", "");
        new_link.innerHTML = "View Details";
        new_div.appendChild(new_link);
        i--;
        len--;
    }
}
function call_government_job_short(){
    var json_data=JSON.parse(government_job_short);
    var json_len=Object.keys(json_data).length;
    var government_job_2=document.getElementsByClassName("government_div_2")[0];
    var i=6;
    var len=json_len-1;
    while(i!=0){
        var new_div=document.createElement("div");
        new_div.setAttribute("class","word_break font_style government_div_1");
        government_job_2.appendChild(new_div);
        var new_h=document.createElement("h1");
        new_h.innerHTML=json_data[len]['job_title'];
        new_div.appendChild(new_h);
        for(var j=0;j<2;j++){
            var json_text=json_data[len][key_name_1[j+1]];
            var new_p=document.createElement("p");
            if(j==0){
                json_text=json_text.substring(0,120)+"...";
                new_p.setAttribute("class","government_overflow");
            }
            new_p.innerHTML=json_text;
            new_div.appendChild(new_p);
        }
        var new_p=document.createElement("p");
        new_div.appendChild(new_p);
        for(var j=0;j<2;j++){
            var new_span=document.createElement("span");
            new_span.innerHTML=json_data[len][key_name_1[j+3]];
            new_p.appendChild(new_span);
        }
        new_link=document.createElement("a");
        new_link.setAttribute("href","");
        new_link.innerHTML="View Details";
        new_div.appendChild(new_link);
        i--;
        len--;
    }
}
function reset_short_job(div_index,class_name){
    document.getElementsByClassName("private_div_2")[0].style="display:flex;";
    var private_search=document.getElementsByClassName(class_name)[0];
    if(private_search){
        private_search.remove();
    }
    var private_div_3=document.getElementsByClassName("private_div_3")[0];
    if(private_div_3){
        private_div_3.remove();
    }
    var close=document.getElementsByClassName("crose")[div_index].style="display:none;";
    document.getElementsByClassName("private_search_3")[div_index].style="display:flex;";
    document.getElementsByClassName("private_search_input")[div_index].value="";
}
function reset_short_job_1(div_index,class_name){
    document.getElementsByClassName("government_div_2")[0].style="display:block";
    var government_search=document.getElementsByClassName(class_name)[0];
    if(government_search){
        government_search.remove();
    }
    var government_div_3=document.getElementsByClassName("government_div_3")[0];
    if(government_div_3){
        government_div_3.remove();
    }
    var close=document.getElementsByClassName("crose_1")[div_index].style="display:none;";
    document.getElementsByClassName("government_search_3")[div_index].style="display:flex;";
    if(div_index!=1){
        document.getElementsByClassName("government_search_input")[div_index].value="";
    }
}
function reset_private_short_1(){
    reset_short_job(0,"private_title_div");
}
function reset_private_short_2(){
    reset_short_job(1,"private_location_div");
}
function reset_government_short_1(){
    reset_short_job_1(0,"government_title_div");
}
function reset_government_short_2(){
    reset_short_job_1(1,"default");
}
call_private_job_short();
call_private_title();
call_private_location();
call_government_job_short();
call_government_title();
call_government_qualification();
nav_fun1();
