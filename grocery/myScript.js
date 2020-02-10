for (i in groceries) {
    $(".item").append(
        `<div id="items${groceries[i].id}">
            <p>Name: ${groceries[i].name}</p>
            <p>Price: ${groceries[i].price}</p>
            <p>Status: ${groceries[i].status}</p>
            <p>${groceries[i].img}</p>
        </div>
        <hr>`
        );



    if (groceries[i].status < 100){
        $(`#items${groceries[i].id}`).css({"background-color": "red"});
    } else {
        $(`#items${groceries[i].id}`).css({"background-color": "green"});
    }
}

