/**
 * Created by Maryasha on 15.02.17.
 */
var people = (function () {
    var names = [
        'Ivan', 'Taras', 'Marjana', 'Luda'
    ];

    var wrap;
    var addBtn;
    var nameField;
    var listElem = [];

    function init(selector) {
        return document.querySelectorAll(selector);
    }

    function cacheDom() {
        wrap = init('#list');
        addBtn = init('#addBtn');
        nameField = init('#nameField');
        listElem = init('#list li');
    }

    function bindAdd() {
        addBtn[0].addEventListener('click', function(e){
            e.preventDefault();
            addPersonName( nameField[0].value );
            nameField[0].value = '';
            render();
        });
    }

    function bindList() {
        for ( var i = 0; i < listElem.length; i++ ) {
            (function(i) {
                listElem[i].addEventListener('click', function() {
                    delPersonName(i);
                    render();
                });
            })(i);
        }
    }

    function render() {
        wrap[0].innerHTML = '';
        for ( var i = 0; i < names.length; i++ ) {
            var li = document.createElement('li');
            li.innerHTML = names[i];
            wrap[0].appendChild(li);
        }
        cacheDom();
        bindList();
    }

    function addPersonName(name) {
        names.push( name );
    }

    function delPersonName(num) {
        names.splice(num, 1);
    }

    return {
        cacheDom: cacheDom,
        bindAdd: bindAdd,
        bindList: bindList,
        render: render,
    }
})();


