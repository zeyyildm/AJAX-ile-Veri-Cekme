//javascript senkron şekilde çalışır.

//bazı durumlarda asenkron çalışır
//1-timing 2-event 3-http istekleri

//callback-promise-async&await ile asenkron yapıları senkron yapılara çeviririz.

function prepareURL(url,id){
    if(id===null){
        return url;
    }
    return `${url}?postId=${id}`
}
function getComments(url, id){
    let newURL = prepareURL(url,id);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange" ,()=>{
        if(xhr.readyState === 4 && xhr.status===200){
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET", newURL)
    xhr.send();

}
getComments("https://jsonplaceholder.typicode.com/comments",1);
