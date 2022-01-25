document.addEventListener("DOMContentLoaded", function (event) {
    var x = document.getElementById("content")


        setTimeout(() => {
            x.innerHTML = "10";
            setTimeout(() => {
                x.innerHTML = "9";
                setTimeout(() => {
                    x.innerHTML = "8";
                    setTimeout(() => {
                        x.innerHTML = "7";
                        setTimeout(() => {
                            x.innerHTML = "6";
                            setTimeout(() => {
                                x.innerHTML = "5";
                                setTimeout(() => {
                                    x.innerHTML = "4";
                                    setTimeout(() => {
                                        x.innerHTML = "3";
                                        setTimeout(() => {
                                            x.innerHTML = "2";
                                            setTimeout(() => {
                                                x.innerHTML = "1";
                                                setTimeout(() => {
                                                    x.innerHTML = "Happy Independence Day"
                                                }, 1000)
                                            }, 1000)
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
})
