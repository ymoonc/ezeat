function letsEat(a) {

    switch(a){
        case 1:
            const breakfast = ["水煮蛋+地瓜","炒麵","蔬菜蛋餅","玉米蛋餅","鮪魚蛋餅",
                                "燒餅油條","肉蛋吐司","起司蛋餅","飯糰","蘿蔔糕加蛋",
                                "巧克力吐司","草莓吐司","花生吐司","鮪魚蛋吐司"];
            const drink = ["豆漿","奶茶","米漿","紅茶","鮮奶茶","薏仁漿","杏仁茶",
                            "抹茶豆漿","巧克力牛奶"]                    
            var len1 = breakfast.length;
            var len2 = drink.length;
            var n1 = Math.floor(Math.random()*len1);
            var n2 = Math.floor(Math.random()*len2);
             document.getElementById("breakfast01").innerHTML = breakfast[n1]+"+"+drink[n2];
             break;

        case 2:
            const lunch = ["蝦仁炒飯","肉絲炒飯","炸醬麵","乾板條","餛飩麵",
                             "牛肉麵","泡麵","陽春麵","水餃","酸辣湯餃",
                             "牛肉湯餃","壽司","水煮餐","雞肉飯","控肉飯","肉燥飯"];
            var len2 = lunch.length;
            var n2 = Math.floor(Math.random()*len2);
            document.getElementById("lunch01").innerHTML = lunch[n2];
            break;
           
        case 3:
            const dinner = ["蝦仁炒飯","肉絲炒飯","鍋燒意麵","烏龍麵","義大利麵",
                            "炸醬麵","麻醬麵","餛飩麵","大滷麵",
                            "牛肉麵","泡麵","陽春麵","水餃","酸辣湯餃","牛肉湯餃","壽司","水煮餐"];
            var len3 = dinner.length;
            var n3 = Math.floor(Math.random()*len3);
            document.getElementById("dinner01").innerHTML = dinner[n3];
            break;
            
        case 4:
            const nightsnack = ["豆漿","米漿","奶茶","玉米蛋餅","鮪魚蛋餅",
            "燒餅油條","肉蛋吐司","起司蛋餅","鹹豆漿","小籠包","薯條","鹽酥雞",
            "炸魷魚","麥當勞","肯德基","披薩","鹽水雞","泡麵","飯糰"];
            var len4 = nightsnack.length;
            var n4 = Math.floor(Math.random()*len4);
            document.getElementById("nightsnack01").innerHTML = nightsnack[n4];   
            break; }
}
