/**
 * Created by Maryasha on 15.02.17.
 */
var user = (function (name, age) {
    var name = name;
    var age = age;

    function getName() {
        return name;
    }

    function getAge() {
        return age;
    }

    function setName(newName) {
        name = newName;
    }

    return {
        getName: getName,
        getAge: getAge,
        setName: setName
    };

})('Petro', 27);