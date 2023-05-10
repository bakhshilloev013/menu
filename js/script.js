"use strict";

document.addEventListener("DOMContentLoaded", function() {
    // Elements from html
    const tabs = document.querySelector(".main_tabs"),
          btns = document.querySelectorAll(".tab_btn"),
          catalogs = document.querySelectorAll(".main_catalog"),
          cards = document.querySelectorAll(".card");

    tabs.addEventListener("click", (e) => {
        e.preventDefault();
        const {target} = e;
        onTabClickHandler(target);
    });

    btns.forEach(btn => {
        btn.addEventListener("mouseenter", e => {
            btn.classList.add("btn_hover");
        });
        btn.addEventListener("mouseleave", e => {
            btn.classList.remove("btn_hover");
        })
    })

    function onTabClickHandler(target) {
        if (target.tagName == "BUTTON" || target.tagName == "SPAN") {
            btns.forEach(btn => {
                btn.classList.remove("btn_active")
            })
            if (target.tagName == "SPAN") {
                target.parentElement.classList.add("btn_active");
                // setTimeout(()=>{target.parentElement.classList.remove("btn_active")}, 100);
                checkClasslist(target.parentElement);
            } else {
                target.classList.add("btn_active");
                // setTimeout(()=>{target.classList.remove("btn_active")}, 100);
                checkClasslist(target);
            }
        }
    }

    function checkClasslist(target) {
        const id = target.getAttribute("id");
        showMenu(id);
    };

    function showMenu(id) {
        catalogs.forEach(item => {
            item.classList.remove("main_catalog-active");
        });
        catalogs.forEach(item => {
            if (item.classList.contains(id)) {
                item.classList.toggle("main_catalog-active");
            };
        });
    };
    

});