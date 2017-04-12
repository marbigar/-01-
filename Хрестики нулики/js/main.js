/**
 * Created by Maryasha on 20.02.17.
 */
var game = (function () {
    var x = [0, 0, 0,
             0, 0, 0,
             0, 0, 0];

    var o = [0, 0, 0,
             0, 0, 0,
             0, 0, 0];

    var winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    var turn = 'x';
    var end = false;

    var boxes = [];

    function setEvents()
    {
        if ( end ) {
            return;
        }

        boxes = document.querySelectorAll('.box');
        for ( i = 0; i < boxes.length; i++ ) {
            splitted = boxes[i].className.split(' ');
            if ( splitted.indexOf('x') < 0 && splitted.indexOf('o') < 0 ) {
                (function (i) {
                    boxes[i].addEventListener('click', function () {
                        makeTurn(i, this);
                    });
                })(i);
            }
        }
    }

    function makeTurn(i, box)
    {
        console.log('t');
        box.className += ' ' + turn;

        if ( turn == 'x' ) {
            turn = 'o';
            x[i] = 1;
            checkWin('x');
            render();
        } else {
            turn = 'x';
            o[i] = 1;
            checkWin('o');
            render();
        }
    }

    function checkWin(player)
    {
        if ( player == 'x' ) {
            playerField = x;
        } else {
            playerField = o;
        }

        for ( i = 0; i < winCombinations.length; i++ ) {
            var found = 0;
            for ( j = 0; j < 3; j++ ) {
                if ( playerField[winCombinations[i][j]] == 1 ) {
                    found++;
                }
            }
            if ( found == 3 ) {
                alert('Гравець ' + player + ' переміг!');
                end = true;
                return;
            }
        }
    }

    function render() {
        block = document.querySelector('.block');
        while (block.hasChildNodes()) {
            block.removeChild(block.lastChild);
        }

        for ( i = 0; i < 9; i++ ) {
            var box = document.createElement('div');
            if ( x[i] == 1 ) {
                box.className = 'box x';
            } else if ( o[i] == 1 ) {
                box.className = 'box o';
            } else {
                box.className = 'box';
            }
            block.appendChild(box);
        }
        setEvents();
    }

    return {
        setEvents: setEvents
    }

})();

game.setEvents();