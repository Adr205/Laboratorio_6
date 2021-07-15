var add = $(".agregar").on("click", addItem);

function addItem(e){
    e.preventDefault();
    var lista = $(".Lista");
    var txt = $("#newText").val();
    //alert(txt)

    var div = $("<div>");
    var label = $("<p>")
    var li = $("<li>");
    var pCheck = $("<p>");
    var bCheck = $("<button>")
    var pDel = $("<p>");
    var bDel = $("<button>")

    //div.html(txt);
    bCheck.text("Check")
    bDel.text("Delete");
    label.html(txt);
    
    div.addClass("lis");
    bCheck.addClass("checar");
    bDel.addClass("del");
    
    li.append(bCheck);
    li.append(bDel);
    div.append(label);
    div.append(li);
    lista.append(div);
}

$(".Lista").on("click", ".checar", function(){
    $(this).parent().parent().toggleClass("chec");

})

$(".Lista").on("click", ".del", function(){
    $(this).parent().parent().remove();

})

