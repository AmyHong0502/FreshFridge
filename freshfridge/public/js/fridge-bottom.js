function writeFoodList(items) {
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.setAttribute("class", "ingredientLi");

        let food = items[i];

        if (food !== '') {
            let text = document.createTextNode(food);
            li.appendChild(text);
            document.getElementById("ingredientsUL").appendChild(li);

            let span = document.createElement("SPAN");
            let txt = document.createTextNode("\u00D7");

            span.className = "close";
            span.appendChild(txt);

            li.appendChild(span);
        }
    }
}
