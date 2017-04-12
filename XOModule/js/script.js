(function () {
    var xo = {
        b: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],


        init: function () {
            this.createPlayer();
            this.render();
        }
        , createPlayer: function () {
            this.x = [];
            this.o = [];
            this.tdCol = document.getElementsByTagName('td');
            this.player = true;
        }
        , render: function () {
            $("table").on("click", "td", this.movePl.bind(this));
        }
        , movePl: function (e) {

            if (this.player) {
                $(e.target).addClass('coverCross');
                $('.player1').hide();
                $('.player2').show();
                this.player = false;
                var i=$('table').find('td').index(e.target);
                this.x.push(i);
                this.chek(this.x);
            } else if (!this.player) {
                $(e.target).addClass('coverCircle');
                $('.player2').hide();
                $('.player1').show();
                this.player = true;
                var i=$('table').find('td').index(e.target);
                this.o.push(i);
                this.chek(this.o);
            }
        }
        , chek: function (mas) {
            for (var i = 0; i < this.b.length; i++) {
                if (this.findet(this.b[i][1], mas) && this.findet(this.b[i][2], mas) && this.findet(this.b[i][0], mas)) {
                    if (this.x[1] == mas[1]) {
                        this.win("x");
                    } else {
                        this.win("o");
                    }
                }
            }
        },

        win: function (q) {
            if (q == 'x') {
                $('.player1').show();
                $('.player2').hide();
                $('.player1>b').text('I am the BEST!!!');
            } else {
                $('.player2').show();
                $('.player1').hide();
                $('.player2>b').text('I am the BEST!!!');
            }
            alert("winer " + q)
        },

        findet: function (a, mas) {
            for (var i = 0; i < mas.length; i++) {
                if (a == mas[i])
                    return true;
            }
            return false;
        }




    }

    xo.init();
    console.log(xo);
})();
