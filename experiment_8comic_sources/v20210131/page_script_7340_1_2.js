// from: view-source:https://comicbus.live/online/a-7340.html?ch=5-4

function request(queryStringName) {
    var returnValue = "";
    var URLString = new String(document.location);
    var serachLocation = -1;
    var queryStringLength = queryStringName.length;
    do {
        serachLocation = URLString.indexOf(queryStringName + "\=");
        if (serachLocation != -1) {
            if ((URLString.charAt(serachLocation - 1) == '?') || (URLString.charAt(serachLocation - 1) == '&')) {
                URLString = URLString.substr(serachLocation);
                break;
            }
            URLString = URLString.substr(serachLocation + queryStringLength + 1);
        }
    } while (serachLocation != -1) if (serachLocation != -1) {
        var seperatorLocation = URLString.indexOf("&");
        if (seperatorLocation == -1) {
            returnValue = URLString.substr(queryStringLength + 1);
        } else {
            returnValue = URLString.substring(queryStringLength + 1, seperatorLocation);
        }
    }
    return returnValue;
}

var ch = request('ch');
if (ch.indexOf('#') > 0) ch = ch.split('#')[0];
var p = 1;
if (ch.indexOf('-') > 0) {
    p = parseInt(ch.split('-')[1]);
    ch = ch.split('-')[0];
}
if (ch == '') ch = 1;
else ch = parseInt(ch);
var pi = ch;
var ni = ch;
var ci = 0;
var ps = 0;

function ge(e) {
    return document.getElementById(e);
}
var chs = 136;
var ti = 7340;
var okwkiq2 = '%';
var my_6o_ = okwkiq2 + '5f';
var b_92ivd = 51;
var ih_84ns3m = 53;

function yeyt__y_6o(i5_5aw17kh) {
    return j0xwk_eyt_(tn28sdh_8.substring(tn28sdh_8.length - 52 - i5_5aw17kh * 6, tn28sdh_8.length - 52 - i5_5aw17kh * 6 + 6));
}
var tn28sdh_8 = 'aJanvu54A7drwU4qpFsvXYwA3Q6E9755RjGqcSyQKhGyaa669395aZaxxeAAQUrqkNTf2RvnVKe7UU75jbXQ6c2njWh7JyJkab669395aPaxfnGUJT72uJ9e34wm92wNH5qXpeFETk2vyBbW588fac669395aRax2cNY2924dXXbnN739PwHKTg6r7DGN4DfkUy6WuQ4ad669395aTaxj2NMRE5psN2f77y2JGfC37x62q6KR22b8KtR9dN9ae669395aFannyGJ252aeF89e58u72h6N3jG3f7K7b5d5TuBC5Geaf669395aIax54J8SJyy2VJnfSfmXRcTQUySkvDYNvRvbQqP5wMuag669395aKax7dXV3W2yeVKebFmn5Bt2FM7Wsw83JrEc5F7WQtG2ah669395aIax2eR9RP9mdGD9yNfkXGaUB65DdpW27pBxdU6YPcA5ai669395aKaxa8T632886SFytRry7Wx9DQvEywF6Y32c8VmH7gGnaj669395aQaxyvRX2Mfx2SDumRn3MW84U3vS2nHKUgQyq7bUKgGvak669395aOaxbsC5YWwmpSS3fTjf2574BDrKbrBFWg63uEkGUbVpal669395aRaxju7A5P7vv96uwYwu7KdWT4dBkfR6EaMapChWX9Xsam669395aMax8c8CFSft5APytP57BDhBJTeU4uBPJrY753hEEy7jan669395aFax2d8YCSh5k3TweM87Y4xCV4tDdrR6Af5h87j7PsPhao669395aLax4jHPSDtmvV7uf9fd2VbXDHkMccDSCj8j5M9U365cap669395aFax626WADvaaFDxpB47GUv9QAx7kb93He656W57C2Reaq669395aHbJ7r6NTYtdtAK7q9j2S7g8DT9WqqDDAuGfqX235qYkar669395aNaxc7FADDs3t9BmeBujT87J6NjMs2RUXs99p2tJ4qUhas669395aTbJ9u7DBSahnWHvvFn6MJtGRXk6q2YX4u7m7T89QmXfat669395aFanv439VW8euUXntX398C72BTfBcfA46vEk5Q4WSfPmau669395aMbJdmWG55qgwN59vQ6yDDkVY3hFwuEGAa66g9vJAaHvav669395aTbJdxJX2Fmyw5CmeJegN4gCXGvAet4RWe92yShQXs3caw669395aRanv4KNVA2ak65q9KegKNuSAMqBkpWPH6S4u99HR4Jbax669395aRanwaXHKVfbxBRrxE9wDBuNF9y27yJFPwTu8Ar9437vay669395aHan485NMY2br6727E2c5W2S9PeJ52PQFjV7sAuSDxF8az669395aQanykJ7M55sbUUnmNfxR53R9H4Nuu8SY5Hfy36EYgRpaA669395aTant24QTMcc7VW964qwVKp78CrBg9YGXmBcaMyVEw34aB669395aSankuUNVHgbdJU8nNbn93fJRD2PmkBECg2awN33Gx5vaC669395aPan89CU6Ss7jTKdyRrbTDaJVCt67jMA5rNj3TuP65N4aD669395aQantkDJF2snvDU75W9a9GdB4YcPg24HAt7ca23P8b2saE669395aSanetEFDJx3qG2y5SkbG2u9V8tW389SFsG2pTsW3f85aF669395aRang2NNSJqenMGrpPe6FN4D4RpWa79W5r8ruS9GF758aG669395aSan2pCDFPst5HE667u6JTw8CX9K9j275dQraMx2G7C3aH669395aRanvjBJUKp5hYKt4VhfJH8GADxUheM33uPshAk3Rf2waI669395aRant8BGEHsddYXn79qu85hS937RbmESAe6vqS2EJgCeaJ669395aTan2qP3AAcb6A3mc7rfJR5JX7a86wKDP8SguN2H4wBhaK669395aSaneaNV98s8dXDd7Dd8V8wDG886vrG3C66rfJbWXcAqaL669395aSan4aU9W9hkjBUcmRh8GFhWDHqD8g2V82A5b6jHXtCraM669395aSan2vQ4BH823DJu3NusEKtUD7n2cvQ6Y49j2Ej549CdaN669395aSan8cNMEQs64RFbbQ64WYjMNGa4f9HRNa28rVuUBtGtaO669395aSanwmJGXUw59H8s3A8d5VmMHJ899t569pNbk86X9dP7aP669395aPanhy5GV5q4n6Fq7Tsu6Kq6GUvQksQV7fBm6AcPNfHvaQ669395aMan7nEXQJ6ptFXa9G42R7nFW94NapEXSa83fHkVBbYcaR669395aSanr3TDMWxus9Kme7k5KNuYCT3WygTCGhFa6FtAYmF4aS669395aSanxr2673uk2VCt9AnxWByJPNhCr69MMp5p6UaXQrEbaT669395aTanxhDAYAdq53KdhF68KWw97QdVetE72aE5sGkVV8SmaU669395aTanbm8EEG8w7V56kPmw9ShXEVxCxp3578Hse2fCYpWbaV669395aTan66KVTXtd2WFdwKr24JpBHB8TyvKGV5M3h4dX4qTcaW669395aUan98KSX39w5U6p45bkK5bX33y63sDJCnE2b9tADy6qaX669395aSbJw7H4QRedu4E8eBmhQDsRTDe79g5SCtK5tApJAr5paY669395aTanmwUCJF3b8H94xUx6JK5WJQb2wxDJEh7hpQc2Qs84aZ669395aTan8uUQG6eykWGr77w7NWrCM6rJevNFFf85uRqKB55dba669395aUangbW2BU42pCXkh4hh4TuMFHh86gNHCmKn3HfPXxCbbb669395aQans4J9GYf8c6Ck4U44QGqKWMbR236M6eKsrC8PS8Y5bc669395aTancx3RW6w5u8EcgCwbAMxBRE2955SGEjUa7Jf4C9Ambd669395aTan55X4XScagCMv934uQEeR2PhTx4RAHnCkjQqDWk28be669395aSanvxN4NMrcuNKy49ynF2gPV29SbxWCBgG3rDg4PxTvbf669395aUanat8HXBdx9VKcqSxrYRtBC967jqVEVvT5cJf68329bg669395aUanpyPRSQbpvWSrmHeuJ9xVMQqUk8QS934ycAx627Snbh669395aUanu4FJQT62q98g88tuKEs98SaBe4N63nG6bXyC8bEhbi669395aTaxt5PW7Dnu2SKch7j695c8CX9Bqd3BTfVh3C8M372pbj669395aPanbyYPJWgjxXRvn62w99nDKE7XsmVR9sNwhBsR3sRfbk669395aPaxbb2YK4gyh37u8Hfj35pD2QkCpu94Xw5fbU6K8hBdbl669395aTandsY2CBntt5Qs936y2C9AJBu34nEQDh8v6EkVYd5jbm669395aSaxahVK9457w5Ns7T5yVUd76DdPrq2M8wHqtKtFHd42bn669395aMaxv932E635jW77j2b9Y6hAJY86xeVUYhWt3N39RmVebo669395aQax3yDE2Ar97WC23X2hNUf4KJc5m6QBXdAnbCxS752sbp669395aOanpeXRWApveT8vsMnuFRyN87tBt8KB5xRkyJm4KeMjbq669395aTaxvyCFYSbssCF4nTtjUMqBVU58w3MCX7Kvr8j2AeJrbr669395aSaxksUW7HaceGErtJ2uS8cW4Y6YbrW4T36ux8hRU6Krbs669395aTax3wWT5MjgyQT2eWc6H5rVDJuYsbAR6qP2nGj9XdKpbt669395aSaxqn4JM8pw9KWpe5h6E75V822BawURUpFg9T7KBg8vbu669395aPang5GPH8dmjNKue3xf7635ERw7suY3RtRr5Gk33kC8bv669395aRaxugSUJCbh72PhpAjwRHjDENgSdxAB6pAtkUaTK4Eebw669395aSanmtG5B8jkhFFq4MyrTGfQ7A8Aph9F8qT8dU38P9H4bx669395aSbJ23DRMTu86ECbk5333GkCQW9XufQJM88ttWvP3qDqby669395aTbJfqDE2YbjgTM32Sc3JD74GBcBhmK36yW9b2cAD5Xgbz669395aSbJej3JNE8ax9HxgEev5BxKJD79ngWEE8E9mEj7Bk9abA669395aPaxy22D3Fb68PRe79c63Gu489xG2yY44t9cvE3PSfTtbB669395aTbJts68SJueyPWsbGtgYYjMGAk5ng3XPuTwb33DA43ubC669395aSax6mWHWPf6tKDckT2uUC3QSG92pwVU3a855C7CU6XfbD669395aPan767WdNw5FQWygxnr7w7AbJFmdVTByCqt394f78cXbE932725aTbJ7CvMu3ekS22k3s75SnHMrN3bj4XQa83dpEy35GhMbF932725aTaxQ6mX4X7gJFWbttq5G46VxG6n54W86N4wt7npK7qMbG932725aSbJTTxJx2xcYF6vm5cvMsQFx457aBDFe5mwvWsrVCqKbH932725aSbJU9dCfH8aVQNca3e3GxB8e3K8dDF26Kss49gcXAeCbI932725aSbJQQuC5KbmHUW82mwkS3CW354swHQSqTgmmTxwS94XbJ932725aUbJ3M2Ha7gwSWKmmd4tE5T6cSEqdGGQx9p9x8qgRX85bK932725aTbJ4WaJeRw8MS546f26SqRB5M25vP7Pe8vdwNtk33vBbL932725aTanBA53jQk924B24st72aTDkSU5sKVJvAe6uU5dBUxTbM932725aQanVU565WppRFEhn8vqJvUYn52e2XV7fVd6vCd7GPeUbN932725aTanEX9R4U37G7KbxxevCjQYkY6qvD6A8QpjjDq7P84VbO932725aTbJHBsVeJub52Xcf8s5K9AP7MShwM86j4n634ysQ64CbP932725aTanRF23h7wdDS6cjxyqS6SDdXVpa5GGr2vesNqaPJjGbQ932725aSbJYX5J4EqpBK7bv3scU9XTa4MjkDWW79erb85qTApXbR932725aQbJ6M6RsSefCGKdxycrH2H69BK7rEQ7kH2ruUkp2JbMbS932725aTbJ67xNwS63EW7e7rhtA4QBfFVhxYWRnAmynVxmYG3QbT932725aUan3Vb3h72rRX74k5r9RkUJfDEf4WWDnAs3j5f2FWm8bU932725aTanBWvGq8qq3952hu8jXeAAwEU3kJB2t4whpP2h86cNbV932725aPbJGD3C947d9J87xr7vXhJ4uBE26VSFuWqyhQk8FNmYbW932725aObJQA6FrP83HE77jnrcUh4J9WRwrJSQvBv67Yqq6J3EbX932725aTbJDJ4FrCxyY9K2cbb8Q5QG6SEmfTMV9V9q25pkJ5t7bY932725aQbJE659wC5qC6E93sdwMyEJgCX659HP4Em55Naw4Hc2bZ932725aRbJJVx6fRhgBFBrksvxG6Q8wSXm3YW2fKh7x656RMqYca932725aTan448M5R4bDRYfmcf936FAaQKdjJVNtAhnn982JB7Acb932725aUanNBxYc782DTHv3sk8VtMSx363fS82sVnduFydB73Kcc932725aTanKNcG7T5hGBG8varsW3PTtX57m8DGh2pfkVxm8Nq7cd932725aTaRNV7E5EuwG83kfwesUyUWh4HavFCV7Ea2tJdgG9u3ce932725aTaRT8jHuPqd4YDukstb4jCS5ECmgERYaVr6uT7e69aCcf932725aTaRGYjXtWm4PCDfahw65xF46X79xQ4DgMrbsAmk48qJcg932725aTaRS5dWsTwsYJR7vkq23uY6hMC6k9XRa6b89WegBBjTch932725aUaRBXbRuBx3ECEdshq56ySKm9Cf5K6SxYwc29aj2UxHci932725aTaR7Fv3bXudWVK9qqprU6G2q56xfBFUyYqkhKun6Fg8cj932725aUaRSU5R9Kkw2PXjtxnk5nSFkABdyR5TkTyhm7pcWB37ck932725aTaRN9jRyQtyTR8qqehwDcVB887sv4J29U792D6h52dScl932725aTbJPVf7bMvuS2Qr2r9mXbUHpFQ7mQE58Y4ytXhkGWyFcm932725aVbJYQmVqE5xX4G49j7yYaHFnNRy62RX4MnfcF6x3P9Bcn932725aVbJHMsCsA3pX4Bt8ehyG3HFaQ9fbB5UaVxraAua6PaDco932725aVaR48bUgTjeMTEb96jqK3PVrCFqwXNR5Cj4yA4eW5tXcp932725aVaR3T26j7yvDA6bjjxp254X74K72D5R7Q98aFjfRBr7cq932725aSbJ779Aa5qjNG32784e6nT8uX5mbTARyUy637deHKeScr932725aPbJ6C55s47vUP5tjc6gNc3QwKN6nXBHyBhdeM2fR9nWcs932725aVaR986NbKbwRVS65evsUsH29YF95F9QsHeyk5tt86cRct932725aVbFTGqVeE75BRXdgcwjD7PSnYDhr68WrTa39XecJA79cu932725aVbFMSg8xNhf753w7j7xU6KVjVVjqR2WfRs8sBw5YSb6cv932725aTbFM6mVrKphFCHnxm5q6qMGf3G9p8GB3TtqpFy44ChYcw932725aSbFTXkAaFx2APDde9ubAg39k4A4m9BQfF33a2mcJKtRcx932725aTbFVEeGkYmwWEGcm428H23Xa737dCDP3A2ht9bqY69Gcy932725aTbFRG6G4QrfJ3Q2mmwdYsPUvSVk744Y7X2xfVgy7Ng8cz932725aTbFCF9SfS4wECJvtnne7m4Um9XprNCMmD4gbGdkNY4KcA932725aTbF8Cf9mA6f862j7x6yGqSQwMFakCPE48nyqF258T65cB932725aTbFW8j7qYjyXFTss6egF9QQcHDkdEWS62975Gu2QBaRcC932725aTbFH5d7dDnc4HBcjqg3E5BB63Br5UCMjJhy2WwmF49GcD932725aTbF8Dt3xA7dT34tu4595k54yGNc263Jg5d6mNp8Q8jQcE932725aTbFH35Ha5hyRFRbuqh8J9N8gF2xr4Q893ja49mcE5x7cF932725aTbFCDfWdFm9MJPusbpgVaEP4VFpeX5H5W9wjTmnDCnBcG932725araxBM9YpN5sB2Cq4pc7YxNQ6WYwdN8KtGx4n7u588kXZb932725asaxCKgYdFavAUEc4wy6HuT244Qx7KQ4eBs2pWw478vNZc932725546865496d67696d67636f6d69632e6a7067opygxneutiqienqjymombiifoklbxoskebpcsvrkvsujaurlcwjs';

function j0xwk_eyt_(i5_5aw17kh) {
    var e17kh417 = '';
    for (var i = 0; i < i5_5aw17kh.length / 2; i++) {
        e17kh417 += '%' + i5_5aw17kh.substring(i * 2, i * 2 + 2);
    }
    return unescape(e17kh417);
};

function qs3m4g5_(i5_5aw17kh, e17kh417, n177u1) {
    if (n177u1 == null) n177u1 = 40;
    var q056i70 = (i5_5aw17kh + '').substring(e17kh417, e17kh417 + n177u1);
    return (q056i70);
}
var be3wy_3 = okwkiq2 + '2f';
var i3uevt332 = okwkiq2 + '38';
var xdl9uy518q = 54;
var m2n766 = okwkiq2 + '2e';
for (var i = 0; i < 139; i++) {
    var ybojxatv06 = lc(qs3m4g5_(tn28sdh_8, i * (ih_84ns3m - 1) + 0, 2));
    var pzi860b = lc(qs3m4g5_(tn28sdh_8, i * (xdl9uy518q - 2) + 2, 2));
    var gtv06u_0p = lc(qs3m4g5_(tn28sdh_8, i * (b_92ivd + 1) + 4));
    var o_4x3sz = lc(qs3m4g5_(tn28sdh_8, i * (b_92ivd + 1) + 44, 2));
    var x_0pn_28f_ = lc(qs3m4g5_(tn28sdh_8, i * (ih_84ns3m - 1) + 46, 6));
    ps = ybojxatv06;
    if (o_4x3sz == ch) {
        ci = i;
        ge(yeyt__y_6o(6) + yeyt__y_6o(5)).src = unescape(be3wy_3 + be3wy_3 + yeyt__y_6o(4) + qs3m4g5_(pzi860b, 0, 1) + m2n766 + i3uevt332 + yeyt__y_6o(3) + yeyt__y_6o(2) + yeyt__y_6o(3) + be3wy_3 + qs3m4g5_(pzi860b, 1, 1) + be3wy_3 + ti + be3wy_3 + o_4x3sz + be3wy_3 + nn(p) + my_6o_ + qs3m4g5_(gtv06u_0p, mm(p), 3) + m2n766 + yeyt__y_6o(1));
        pi = ci > 0 ? lc(qs3m4g5_(tn28sdh_8, ci * (ih_84ns3m - 1) - (b_92ivd + 1) + 44, 2)) : ch;
        ni = ci < chs - 1 ? lc(qs3m4g5_(tn28sdh_8, ci * (b_92ivd + 1) + (xdl9uy518q - 2) + 44, 2)) : ch;
        break;
    }
};
var pt = '[ ' + pi + ' ]';
var nt = '[ ' + ni + ' ]';
spp();