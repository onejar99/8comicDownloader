/**
https://comicbus.live/online/a-2062.html?ch=268-3
https://img4.8comic.com/3/2062/268/003_Yj8.jpg


https://comicbus.live/online/a-2062.html?ch=268-4

https://img4.8comic.com/3/2062/268/004_9YA.jpg



https://comicbus.live/online/a-2062.html?ch=270-1
https://img4.8comic.com/3/2062/270/001_BpT.jpg



https://img4.8comic.com/3/[漫畫編號]/[第幾話]/[頁數，三位數]_[三位hash].jpg

*/
// from: https://comicbus.live/online/a-2062.html?ch=270-1
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

var ch = request('ch'); // 270-1
if (ch.indexOf('#') > 0) ch = ch.split('#')[0];
var p = 1;
if (ch.indexOf('-') > 0) {
    p = parseInt(ch.split('-')[1]); // 1
    ch = ch.split('-')[0]; // 270
}
if (ch == '') ch = 1;
else ch = parseInt(ch);
var pi = ch; // 270
var ni = ch; // 270
var ci = 0;
var ps = 0;

function ge(e) {
    return document.getElementById(e);
}
var chs = 281;
var ti = 2062;
var cs = 'abbORYs4EKhYvvaP7Ep6X9E4y4Pvfp2p8d752XqA68RAanacbTW3b6XFhPqv98UGcKEXQ7f4DabbMte7FsnFvA5D44anadbT4NxHMJp2us377Rv5P6UA42Dg2yRmna4cfCbXE5HDanaebST7362PhU72nXF83SWHSCrJV99p9xftUu8Mh9C5FNanafbSNT5Y8Fy3y8pB897METSQeJFxvcQm28Ba5X4SABY9anagbTW3fQEPeJqb5VGJdGYF944PWqgnNvscMagQjMUB4VanahbUW3fQEPeJqb5VGJdGYF944PWqgnNvscMagQjMUB4VanaicbUUuMV2cG798F3Dg52SFMbNK92r375uK35MdVPA2HanajbTX6xBX3uDh3qK9RrBVBK9sTPubxEeuwDdxN9QPEX2anakbSpaKbByMC5Kt6SEq2s7H6CNfswkwFf5yGup5VQvDqanaldDw7Um5yUDgYgx8N3qqeF8D98f2ktAhYwJatmXY32fanambSyvUpE5A8h274Q5d2gmS4AJce3qvD2FuRx6uYJ5RaananbNmxNjHkBYcKd3SQyw6uY732ds29wY873PmmsNPaEyanaodDxeYmS7A4q3veSR4vxrMpMExwx6s9wC4Ku7uF4kUdanapbQs75mXdYCdS8h83pt3tVv383chmyBbCqGdvmDK6RxanaqbRfrP46p9X223sVBejyk4hKDpgy4tHhX5Srb9T7m9nanarbR4p3tNgS6c6t4MEdcnmCpW4gf4q7V3PkFxyhDT4CganasbQwa5hNxWEcPjbVG6h6sU3STwjt9y9cAqAubxTP7RabnatbQ4t2cFvRY4Qpp93t2dpPdK8dv4x6R8WdFh9kPXwBebnaubQuu4jKyCMvWdaC7hmcs873At3ua8Yy3gPw46TU93taRavbR26KmA3CF9EkvE24ug6DkARynhm3Wq8fNd5jHTwNwaRawbQd6KfQ3D4gB6u8Ynbth5kXVpw6jrNk42AxpkWXbVwaRaxdyjh3bHjKCrWb567epssGyHMtfv2aDtG7Bdcu69932aRaydFgbV67nNKs6gs9MvhuaG8FAf667d9p75Cu5aKBpBqaRazdwn62tTy3He8amNAq46vYv4Uy6gasH6XkVadgGC9AcaRaAbMgyYqSs6VuQr3JTn5vv5bTJ2tgnbRkNxPhju639TxaRaBbXcm553m6Yr5u3PMqagrWbFC4rvkp8t6sQremFFq24aRaCbW7a7bEvBHjNwrPTykvhWbEE4mcmrHhVtTwyaA8gR8aRbZaEchYjN4J85A3g2Msba2HuM458d2aJm7p292eWEtStancaaE4x8eYd2Es96j8Ygjr6T4DNmq25wR89vX38pYY492ancbaFrxUfNrP3tMwjUTqw5h36UTm69uy4fDpXhuxW3c3sanccaF8hRrB2H4tWfvAXy3pn79N2rcvrwT5MmYx9qGVmByancdaExb47QbBT8Thh3Vh83t84D6m79bv5rWf8vu7M776danceaEe58tCtR9sFxkBGjtkrYaUSchujf48K9GwmpY7k6gancfaEwy4wSwY5q9d5MR9nxpUjF2qaqgeVhQe6kk5XSmD6ancgaFwhT5X4H8rF2a7Hb7mf3kUE2jqe2RkXsH3u5NQrF3anchaFb58b7aVH7AdpGH25nqNk3774fdtBfFhRvrxW47DkanciaE2yMtW7EWrEx959mks2F8UWcp8xxQx2r84vb7G43jancjaDgqYxPfHKv7qrF7r6bkYnF2j6e6jE39k5ypySEg7ganckaE5d8b3f57hGfy7CtghcSg7FcffvrPeHrMnjrGVu55anclaGjhAd9nGEqEwa3Pqr98Yq2AffvwqTw7m4mukSDbU3ancmaEqjEdPdX5r66sKM3adjHkFSw64hkHfKb6mqr39cAhancnaDr5TsHk9Sx5x94N7q4gDkXDef6kqCf8fQv3jWFdX3ancoaDxg9v5yER3SpwC83886YuQJndbfpMxNt7cg3BFgH7ancpaCvvF3HnQXdDurAUeewfSk5H8ygtfE5BcP52sB9dMgancqaFe4MwY6V33D5qCJspwqY3KA5pqd32t8xYr5jMF8X8ancraE3rN5Kt7P5FwbAWyjgcSb2Vgqr9c9fRnAv8k3WhFwancsaDgrU4UjRMp795YFytby9d93swabbCmK8Yung8EbQ4anctaDceKpAsE8kMdbCUfdxgSqEJ3xbjrWgXdCrn8JS7MhancuaE9jDu6wBP72jkB47urgCv6Yfvwd7UaYnH5v7T7p7mbmcvaE26GhWxMQtX3wWFjybsDrYWj3mjbXqG6Fqr6M3f5nbmcwaEcnWrVxH2k6k4U7dtsnV234yvbu43n328962E3sNjbmcxaE3nR4HjBWy5y26C5pf39s495mj6xX994Xa8eDCq54bmcyaC6qHxHn89yRphR9ywduBcGSqyksqU6PjTfx83Tn5dbmczaDryWv4xY9jWvfJSv68cB8RCj3vpe2v3aX5mjS74V8bmcAaEwnTb4dM6w6yhTEwbb63j999748aB3HtR6tgP6u9tbmcBaEt6KrMwRMfFr72BhjswKt7Vgfucw3tDqXcrv48478bmcCaEh8FvChU9cFmmJH3gtxStC6vkj5uP46wMteh923NvbmcDaE2gV83k8DxTgyPAv2aqVpEHtg9uy2kKjXavfRKr4pbmcEaEs5S57yCKu2etF4xnvn3jFKeajhd2k3bVwvb9NdT7ancFaFbsS9MtBGqJ82PB6jc3UwJWhyr4y5yVxStc5F9r8pbJcGaEge37Ap6TaBnk2D6f3p4jN8a4r9c52DhYc8mFCf8uancHaEtu6k782TaRunQJcsy6YaMSwjxgySaYcPmhfKMjV3ancIaDk3M6Dq5QnY9bM3tq7jEcJXackb3M6Ba28wpPJuBkbncJaEun4tDeWEuNvp2WpynjS2DQddj2w7w8b6x2aHN4J7bncKaEncB3Ng54sF3cKJayuxRqUH3fwpy8hRxVetgUUtGaancLaEpv3hDn5Uf4e68Nkrhd5pHNxen83Ry22AthhN33CgancMaD8bD7A56Ga9ppQWmads64VTeaj7u7b25Jgj74VwYcancNaF4fY67qDD99dxXE85quC8QVfnea2R6RsHc5pUQdAhbJcOaEwrR8D54KtG5y53jhukVs2D77a7uS9PrBj66DV9MkancPaCmxY26pHNsCe7H8a3nuXr28eb2vw3qE7Y2x949qJkancQaCa66gQkXS6We7HWpr5tY6C7a5sj3Ww8cJq5mGB53vancRaqgvFxQhY2dK72W3xtvxP2HTgumem85JuRgutBYb7mancSaEy6EhRx6GaSgaRDsxq2865K7bj45J95nBy2uFExSqancTaEcsJvUyQUkE565Me3baGnDE7y9q4CtJ3Qu3hFVbF7ancUaEcfJ4Pn8YeGsg7Hqu52AxTEdp8urWpSsH7h3NAbSjancVaEchUdQcGUrSuuVQnu5qA7NEtvwa82qT5Jw2nS73PqancWaEbeJcEpBMxMu89Dyuyh5n3Fedvs9J9X98kpkPQnG4bmcXaAnxJ7UwEA7NjkA3frjkGfDDwyasqMjUfQkabH986eancYax8qE3W2JPxCanSNy5n5BeN9kcuyyNbEkAgjc77aEwancZaDgmUy6n85qV23H5wj6hMgVTsxrrp2a4rXkbjQQhEabmdaaDg76cUp3He2qc9Jmafa9yRSxegkt4mP26wjw2T59ebmdbaEpgBkEdKD3QdrH7tv5hNkXDd6xp5X83qE7jfWE4TjbmdcaA2qAcAfWYr2a6PW7jpeMmGQspgbmGtDaQx2tEG9V2anddarnjEhB6UM3X6eHU3tdkG8YDfbyntCdS5Xu3gRV7WsandeaEf77qPxVWt7d3MPsn8hBk9Qgc5rpH3Hv7q5xU66JnandfaEfhEcKd5RxGf6EM82xwUp5Hpc72c97QbCmgqRPp4qandgaEus9dNs693M56WMkeu7Sc84377k5D44dQaqxWFjU2andhaEt6U4Nx94bG4hY2qp7p6xJKj9rhyFd7d53mmGKxDrandiaBud6x3e9AbC2yNBqhmqBcC5xc5b68cMhNtwaE238dandjawdnJ6F4EPbPyyKJpvth2rW549scbT9YwWgtk9Qn3uandkayhqYuNb7R4R2jP4rnpwPwKSq3274M3P7N3qdFUk5tandlaE3gBcN7NE47jnMTmrnjHxJNudrtpAf4uM9f7BTdEpbmdmaEfmHnJx9QgBty5Xafp2UnSGn9c8y39PxDdkdYGsAubmdnaE2aYb4s6SsKs6ETkcygVdH4tnmy5RwDmG6jx5UsUmbmdoaE7gMuB4W6bTb2D349mr9cV3xxdeq3jKnHe64QSeGvbmdpaEscNqRsR82CpmCW6hw2M86DcfnftNyKvH2whJ63WtbmdqaExr4tWnU27K6p5StqxdAcMVtrgh54vMjK6gsW4sSsbmdraE9nGrH52Rd48bBQgm5uAtJR3tst3AkWmG3wa9AkH4bmdsaEsa2fG328bCw6767q6cKvCQuxavuBb5p34erFRvHgbJdtaC6cUfNvBD7EymF7a3dvT69786jdgXxDfVus2A44RrbJduaEhcHh592KwYfv8H8cgy3k7Abc42tFkN5D6bu5Br6bbJdvazr37sYvE66Dcu4Pvns9X2228wbdgQm6q7k3kVWbHqbJdwaDg2XnDe33fJjtCQbhxb2h5V9by255hGySrcj7M8KhandxaEpcRq7wAWdVfrKQ8bts48M76ryp7V34kWjwpG9vNaandyaCvyJ86m3G6FxeBR75eeHgUNtpfyjU7MsDsm39NbVnandzazbu3g24QPjYthEDggt8PyWPwmwyyX6SqQa7fH4fEwandAaAb7CwRqYNmU93555u6p26SFa728bFeXxK5v6EDgEkandBaAa4Py8sR4dV7rUKbutyPkN5ejx8c3wD692d386kSdandCaE89A5JuGTmTpjFJw3mc8eA9ct5dfTfJxYaujCVxDxandDaE2kXj6pX24YxrWUdgpaXwCCk844f84Y8M8n9RDqEaandEaHb2XyKu6RxVdvCUc468UvT39wu2hVeDaV6q8UJxAfandFaDugGeKpYG9HmgTU48fbQdVF4cd5aYmNwRc4rDCy99andGaCkdR7Tx8Ry5wuY2hcvqFh5Mn75737bQkUujj7A2FqandHaEgyWuWbMThH5n9395ak238KwxbjuKaCgWe9sWK5SnandIaDnmXvJ4MSfEnaGAy6ynWrNXppvu663H6Ejj636gUqandJaDu66yGeMWv6fnCN9c6mVhJWk2gbfJd36R7deXRf8handKaDfkQyXw22kGksHKacrtHvW5s4wjxYeGdS4mnD75PsandLaDbj83SrMPrX57V3uh5uWyWMy5938Ks57UnruXEvM6andMaD23V5SaPR4BhqNBjagw7sP9p4u55RrQe45aeK8kF9andNaCkkEs4d5DfDqg3Kfsd9Wv495k7n2FgB8CsxaEAdX5andOaEvkPq6kCYjK9wU362gn6yPCw2d7m2gAw9a7uXKsEnandPaErr8uNqN6jDbtSUjhmg7nRQ8hvrv3mKg3xf9JRrHcandQaF99XkVkTSyV8gDEdwefKm5Ggnm6vMuMdSgcrJD3QmandRaEubMgUsYY438mB7bw2gQsGE2waw33y79Yx5uJ7eTgandSaEvr2c6tBReQuy79q8mpCfDCrr3kaUvGqQrkpQN5XgandTaE7tBv7p3Yd6daS647cfKjPR9wqry38S32s84Y8n9eandUaEve6n758723ysAVxhyc3qF89s28dAv3tR7mjDH5E5andVaDuc7mTfYNr8j3BDg2psY4QD9j972Y6SvBp553Ab5kandWaFj29q8e6X8Fu5UCrt4cPs5Pqn43n5sGpXfwkTSt8yandXaEgj7xUsDV97gdSXjwvu2sFHj9j9kC6NtTjtyWV7J2andYaEmtC7WcE3pBy3QPx8x69gUA5j6haKe3f7q9eYFqAuandZaEy8Ty2bS2eV3y83u9nc5wNJk48tnF5Eg3qjyPJqC7aneaaExpReHe9XyDut6W2c733b5Ymrxea9fCn9598XYsNwanebaEg6DxTpPJk2ewM5xqhe52P58ycpmUkCsVgh5NUv5canecaEe9SaE9A4t7jvVGs7r54s6B2aueu3x43Nn8qA6r9ranedaC4pWtT3HDnF4uK8m4k474WT6b23xEvU994ydYRhSnbJeeaEhkSxWcRY23e3UUg29nCyCRtra5tTf9xRpdx4HyF9bmefaEqgGxQd9Kc7u67Juc35ThRSd2ckfXm2wPnu4JA46nanegaE8vAvWwJWrWk3VEbrj9YcVXwh3tkV9GuCjtq3KqKxanehaE4vCxTt9FuQm6FQ9knkT85U4xffu4wCyXgqfGD9PdaneiaFq54v25B5r3fjHDyjn6SmVQy8xj93qEyUt53CVwUkanejaEah9tKaMS2P4bYTppk462FWtg68j4nNmFu38QUd8ebmekaEv8UuTeNMmFweTT2jtwD74Qd3aycS7CkByuq3Q8G7anelaBb84e252MbUc798jke5PhSSb5qabAcXfFxkbDWmGwbnemaF4jFnJwBH48mnAGget4NqUY6xaahWn23Wa5hCGcX9bJenaDbwQcC4EUg7aj43tjn459DDxnfxxEn83EmxdF55MmaneoaEcbF86kRQvRchET3rh2PdYQ5jwac7sKdVb5sH3qF5bnepaE8pJvE2FDsQv46XaqrcMr9Xcnd8dWg3j9gjsT253pbneqaDxx349tKWcMaxAR8cun2bC695fcwUeGeT28tQWj66bneraE8sXdVbYM8Ga7SGcb8r7aMJ9ns56F9S3Ue8nVK4NhbmesaEfhEjPdBA9Qy6VTpphqY8VS9xnd9C2XbG46uCT94dbnetaEyh8wSnU8fT5d8Cwk6aGbMMw8m36Ng8hCs2929c6gbJeuaEvrNrEjGCy5u8WQte43Wh9Fcm2n6QbPnHx9pR9nX4bmevaE9mYq9vRRnWjkJ5q5s4W35Sd2hhaS4JvMyy5URd6kanewaE32MrXrBQu6ucRA3ckg2q5Rm32ahChDb8b35VF3S9anexaEq3B325S63U6tU64nak7g7678s3aBc5dBn38BN7XubneyaFs42dBy8MxNc95BxbjyJnG3aj243Tt9pKha2HJwCranezaErkRtKhMCaXkd9Swd49MeS5ygcbx69N5UejxMS676aneAaE3uWwN5GXfUppDS2shv888Ws46uw6nSa5upgF5s9jbJeBaEwv8hJpUK96uhUNehutY68V5u3u7R27sSatfTWbPubneCaDu8XhXdGEkBd3X2kmaf5yV3hdqpfMsHpF2qj46b38bneDaEr5M5N62CpPsj9Up9euTrPS5yykmT8AyMx4479kFwaneEaEtm4s9yCHw4uxM5c92y28BKurmwyKk45RhwtES6R9aneFaE8fEjDe7Ya5jx2Hag6mSvWSbfxjxYjA485veJXy4fbJeGaEvdV4WkXJnWttV7338cTnKCp6e2v3bCsBnhe5Kh2saneHaEu248XwSM3RdhP9ut2mQ6WTtg3r89mGxFpb4NWwWyaneIaEmyAuPgSAdNuyBT26687gJDbywnrX6BrM5m2HXr93aneJaEjrFa5h6AgCp27C4u9uAv2B23xy26nXv5r5g9P36xbJeKaDveUkTcNDpTdyU3g2awMjHG4u29rQtXhSjwqCNgF7aneLaD3b5x6hTK9SvyEUkskpYsUDfkj2333J95gnp4282bbJeMayscGaEm94sPhwKMtwx7E9HK74dc4DfAy7htdDH9V3aneNaB9kPfJ77Up65hTPb43vP7C48xtgx7kPcX72a98jEyaneOay9pFuXfUD73jbGMt5jnMmU4589uqKa872naaF73NwanePaxtwDtYvVNvGv3H6btjwD3525v8e3BjHvS7g7XA79janeQaD7x64ChD2sXqd7QbnreWh8Gb27h2Y6EfM2vgSU2RtbJeRaEtgA4MyAAfXu662ppe4AxBB9wt8u6gK5Xn56F5kWnaneSaxdnS5X2Y5eV2w7M9t7sUaM53vkfrYb6fWrsrJYh53aneTatrtWmJhW4q384TJwr2aFqFCe55eeC8UjJ8fqPCf3qaneUawx7W3T4RHq92vYTtj7wKwC4k72y9SqN4TuyuNNrDdbJeVaE6kDy4eKR2Y2vDKf3ej9tK645s286rXr2ve8W3j4hbJeWasvr4rGrB8hDvpV46kuuBnJF4d4jqTbFw573pTGeDcaneXaAm7VhT37MdMnrP3km9r9fTBatgfgA6KyW8md8T84vaneYazU7S7RE8hUy2662fG3W7NDCP3hGKaKkBUEDQ3bxR3bJeZazHwHkCNFyUrVGqccKT5NHTH6m8B6fF3QMUDT8qqBybJfaavH3B29M46UsP28v7UQ3B3EEBe9GD37y7455RrmgR8aRfbat3d9mBBWa967A2ng3NM235GYtfD3gC5QNG55by693aRfcawAjNr8M6kHgP4af4GN75U5MRguBPy9h574TRfqaFsaRfdauWc6uUGJ4Hy2V4bt4NNE893P3rMQp7qTF5KYgkcFnaRfeaw3pBwR8HnEeV2ph5HJEM4MDK3yK6mPs3F3C6w3r6baRffauNy6dTGK7Hr2Qa69HRXWUFNNeaUYaEhSAAD6msfDaaRfgawGeFcX2HyJrASjhxB39HKWAPe8U627yN829Dv6uAaaRfhasNc89CKGqR7R9xcxXS987AAWeqFBa3xSNFFGdvqUfaRfiasPjKa5HYj89YAedy7UQM4YDHcpQPkXfBE3D8t96XyaRfjasPvPjVTAuUfGJqea6VNTKP8N3k82eFqDJYJ435k9vbJfkaABpT59GXkUnYVq4474G85385t4KUsMj8DY6ChktRraRflarDmJdKY7jA9NV7d5SYXBWBKVvbJFwWwYQ5XU6kuR9bJfmasNjAmRPD7W9T4x2cBFB5NWFHq86C37xY9B8JghxSmbFfnas8nRaR5U59jPJ3873GWYRFSWd967rHfWVFSHn5q4xbFfoavSq7qFB758eUNgwqDS27KTMAbdBHb8k7HB8H3ykU4bFfpasA4P8N2NeSkTGqjxBUSTMBB29dWFmFt4CVQX5a4SkbFfqasMnJt8REgHuAWaag5NRFR8WQ369Hs7u9CJ3Sb36GnbFfraq9t4hXY4yHe2B7ejUYJMYE95ts6QbYpWMKY7h73Y4bFfsatDjE99FV4T4HCasmJH72TPKK7vN2h3hD9Y5Qgvg5qbFftawJgK79EQ5Fc5N95f2UE97WH8gjF23Qt9KDBP3h2RvbFfuauG9Tc6R6p3pF4brqMP4JCF5VrpQ2jUxWKP2S5acGhbFfvat54JhEJKv3nP4dybEUHQ536Gf3NUpPk9VY4NmgrUgbF';
for (var i = 0; i < 207; i++) {
    var lhdbl = lc(su(cs, i * y + 0, 2));
    var pwwhp = lc(su(cs, i * y + 2, 2));
    var cmiiy = lc(su(cs, i * y + 4, 40));
    var cqsuo = lc(su(cs, i * y + 44, 2));
    ps = pwwhp;
    if (lhdbl == ch) {
        ci = i;
        ge('TheImg').src = '//img' + su(cqsuo, 0, 1) + '.8comic.com/' + su(cqsuo, 1, 1) 
            + '/' + ti + '/' + lhdbl + '/' + nn(p) + '_' + su(cmiiy, mm(p), 3) + '.jpg';
        // https://img4.8comic.com/3
        // /[漫畫編號]/[第幾話]/[頁數，三位數]_[三位hash].jpg
        //su(cmiiy, mm(p), 3)
        pi = ci > 0 ? lc(su(cs, ci * y - y + 0, 2)) : ch;
        ni = ci < chs - 1 ? lc(su(cs, ci * y + y + 0, 2)) : ch;
        break;
    }
}
var pt = '[ ' + pi + ' ]';
var nt = '[ ' + ni + ' ]';
spp();

function lc(l) {
    if (l.length != 2) return l;
    var az = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var a = l.substring(0, 1);
    var b = l.substring(1, 2);
    if (a == "Z") return 8000 + az.indexOf(b);
    else return az.indexOf(a) * 52 + az.indexOf(b);
}

function su(a, b, c) {
    var e = (a + '').substring(b, b + c);
    return (e);
}

function nn(n) {
    return n < 10 ? '00' + n : n < 100 ? '0' + n : n;
}

function mm(p) {
    return (parseInt((p - 1) / 10) % 10) + (((p - 1) % 10) * 3)
};


// from: https://comicbus.live/online/a-2062.html?ch=268-3
// from: view-source:https://comicbus.live/online/a-2062.html?ch=268-3

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
var chs = 281; // this code is unique
var ti = 2062;
var cs = 'abbORYs4EKhYvvaP7Ep6X9E4y4Pvfp2p8d752XqA68RAanacbTW3b6XFhPqv98UGcKEXQ7f4DabbMte7FsnFvA5D44anadbT4NxHMJp2us377Rv5P6UA42Dg2yRmna4cfCbXE5HDanaebST7362PhU72nXF83SWHSCrJV99p9xftUu8Mh9C5FNanafbSNT5Y8Fy3y8pB897METSQeJFxvcQm28Ba5X4SABY9anagbTW3fQEPeJqb5VGJdGYF944PWqgnNvscMagQjMUB4VanahbUW3fQEPeJqb5VGJdGYF944PWqgnNvscMagQjMUB4VanaicbUUuMV2cG798F3Dg52SFMbNK92r375uK35MdVPA2HanajbTX6xBX3uDh3qK9RrBVBK9sTPubxEeuwDdxN9QPEX2anakbSpaKbByMC5Kt6SEq2s7H6CNfswkwFf5yGup5VQvDqanaldDw7Um5yUDgYgx8N3qqeF8D98f2ktAhYwJatmXY32fanambSyvUpE5A8h274Q5d2gmS4AJce3qvD2FuRx6uYJ5RaananbNmxNjHkBYcKd3SQyw6uY732ds29wY873PmmsNPaEyanaodDxeYmS7A4q3veSR4vxrMpMExwx6s9wC4Ku7uF4kUdanapbQs75mXdYCdS8h83pt3tVv383chmyBbCqGdvmDK6RxanaqbRfrP46p9X223sVBejyk4hKDpgy4tHhX5Srb9T7m9nanarbR4p3tNgS6c6t4MEdcnmCpW4gf4q7V3PkFxyhDT4CganasbQwa5hNxWEcPjbVG6h6sU3STwjt9y9cAqAubxTP7RabnatbQ4t2cFvRY4Qpp93t2dpPdK8dv4x6R8WdFh9kPXwBebnaubQuu4jKyCMvWdaC7hmcs873At3ua8Yy3gPw46TU93taRavbR26KmA3CF9EkvE24ug6DkARynhm3Wq8fNd5jHTwNwaRawbQd6KfQ3D4gB6u8Ynbth5kXVpw6jrNk42AxpkWXbVwaRaxdyjh3bHjKCrWb567epssGyHMtfv2aDtG7Bdcu69932aRaydFgbV67nNKs6gs9MvhuaG8FAf667d9p75Cu5aKBpBqaRazdwn62tTy3He8amNAq46vYv4Uy6gasH6XkVadgGC9AcaRaAbMgyYqSs6VuQr3JTn5vv5bTJ2tgnbRkNxPhju639TxaRaBbXcm553m6Yr5u3PMqagrWbFC4rvkp8t6sQremFFq24aRaCbW7a7bEvBHjNwrPTykvhWbEE4mcmrHhVtTwyaA8gR8aRbZaEchYjN4J85A3g2Msba2HuM458d2aJm7p292eWEtStancaaE4x8eYd2Es96j8Ygjr6T4DNmq25wR89vX38pYY492ancbaFrxUfNrP3tMwjUTqw5h36UTm69uy4fDpXhuxW3c3sanccaF8hRrB2H4tWfvAXy3pn79N2rcvrwT5MmYx9qGVmByancdaExb47QbBT8Thh3Vh83t84D6m79bv5rWf8vu7M776danceaEe58tCtR9sFxkBGjtkrYaUSchujf48K9GwmpY7k6gancfaEwy4wSwY5q9d5MR9nxpUjF2qaqgeVhQe6kk5XSmD6ancgaFwhT5X4H8rF2a7Hb7mf3kUE2jqe2RkXsH3u5NQrF3anchaFb58b7aVH7AdpGH25nqNk3774fdtBfFhRvrxW47DkanciaE2yMtW7EWrEx959mks2F8UWcp8xxQx2r84vb7G43jancjaDgqYxPfHKv7qrF7r6bkYnF2j6e6jE39k5ypySEg7ganckaE5d8b3f57hGfy7CtghcSg7FcffvrPeHrMnjrGVu55anclaGjhAd9nGEqEwa3Pqr98Yq2AffvwqTw7m4mukSDbU3ancmaEqjEdPdX5r66sKM3adjHkFSw64hkHfKb6mqr39cAhancnaDr5TsHk9Sx5x94N7q4gDkXDef6kqCf8fQv3jWFdX3ancoaDxg9v5yER3SpwC83886YuQJndbfpMxNt7cg3BFgH7ancpaCvvF3HnQXdDurAUeewfSk5H8ygtfE5BcP52sB9dMgancqaFe4MwY6V33D5qCJspwqY3KA5pqd32t8xYr5jMF8X8ancraE3rN5Kt7P5FwbAWyjgcSb2Vgqr9c9fRnAv8k3WhFwancsaDgrU4UjRMp795YFytby9d93swabbCmK8Yung8EbQ4anctaDceKpAsE8kMdbCUfdxgSqEJ3xbjrWgXdCrn8JS7MhancuaE9jDu6wBP72jkB47urgCv6Yfvwd7UaYnH5v7T7p7mbmcvaE26GhWxMQtX3wWFjybsDrYWj3mjbXqG6Fqr6M3f5nbmcwaEcnWrVxH2k6k4U7dtsnV234yvbu43n328962E3sNjbmcxaE3nR4HjBWy5y26C5pf39s495mj6xX994Xa8eDCq54bmcyaC6qHxHn89yRphR9ywduBcGSqyksqU6PjTfx83Tn5dbmczaDryWv4xY9jWvfJSv68cB8RCj3vpe2v3aX5mjS74V8bmcAaEwnTb4dM6w6yhTEwbb63j999748aB3HtR6tgP6u9tbmcBaEt6KrMwRMfFr72BhjswKt7Vgfucw3tDqXcrv48478bmcCaEh8FvChU9cFmmJH3gtxStC6vkj5uP46wMteh923NvbmcDaE2gV83k8DxTgyPAv2aqVpEHtg9uy2kKjXavfRKr4pbmcEaEs5S57yCKu2etF4xnvn3jFKeajhd2k3bVwvb9NdT7ancFaFbsS9MtBGqJ82PB6jc3UwJWhyr4y5yVxStc5F9r8pbJcGaEge37Ap6TaBnk2D6f3p4jN8a4r9c52DhYc8mFCf8uancHaEtu6k782TaRunQJcsy6YaMSwjxgySaYcPmhfKMjV3ancIaDk3M6Dq5QnY9bM3tq7jEcJXackb3M6Ba28wpPJuBkbncJaEun4tDeWEuNvp2WpynjS2DQddj2w7w8b6x2aHN4J7bncKaEncB3Ng54sF3cKJayuxRqUH3fwpy8hRxVetgUUtGaancLaEpv3hDn5Uf4e68Nkrhd5pHNxen83Ry22AthhN33CgancMaD8bD7A56Ga9ppQWmads64VTeaj7u7b25Jgj74VwYcancNaF4fY67qDD99dxXE85quC8QVfnea2R6RsHc5pUQdAhbJcOaEwrR8D54KtG5y53jhukVs2D77a7uS9PrBj66DV9MkancPaCmxY26pHNsCe7H8a3nuXr28eb2vw3qE7Y2x949qJkancQaCa66gQkXS6We7HWpr5tY6C7a5sj3Ww8cJq5mGB53vancRaqgvFxQhY2dK72W3xtvxP2HTgumem85JuRgutBYb7mancSaEy6EhRx6GaSgaRDsxq2865K7bj45J95nBy2uFExSqancTaEcsJvUyQUkE565Me3baGnDE7y9q4CtJ3Qu3hFVbF7ancUaEcfJ4Pn8YeGsg7Hqu52AxTEdp8urWpSsH7h3NAbSjancVaEchUdQcGUrSuuVQnu5qA7NEtvwa82qT5Jw2nS73PqancWaEbeJcEpBMxMu89Dyuyh5n3Fedvs9J9X98kpkPQnG4bmcXaAnxJ7UwEA7NjkA3frjkGfDDwyasqMjUfQkabH986eancYax8qE3W2JPxCanSNy5n5BeN9kcuyyNbEkAgjc77aEwancZaDgmUy6n85qV23H5wj6hMgVTsxrrp2a4rXkbjQQhEabmdaaDg76cUp3He2qc9Jmafa9yRSxegkt4mP26wjw2T59ebmdbaEpgBkEdKD3QdrH7tv5hNkXDd6xp5X83qE7jfWE4TjbmdcaA2qAcAfWYr2a6PW7jpeMmGQspgbmGtDaQx2tEG9V2anddarnjEhB6UM3X6eHU3tdkG8YDfbyntCdS5Xu3gRV7WsandeaEf77qPxVWt7d3MPsn8hBk9Qgc5rpH3Hv7q5xU66JnandfaEfhEcKd5RxGf6EM82xwUp5Hpc72c97QbCmgqRPp4qandgaEus9dNs693M56WMkeu7Sc84377k5D44dQaqxWFjU2andhaEt6U4Nx94bG4hY2qp7p6xJKj9rhyFd7d53mmGKxDrandiaBud6x3e9AbC2yNBqhmqBcC5xc5b68cMhNtwaE238dandjawdnJ6F4EPbPyyKJpvth2rW549scbT9YwWgtk9Qn3uandkayhqYuNb7R4R2jP4rnpwPwKSq3274M3P7N3qdFUk5tandlaE3gBcN7NE47jnMTmrnjHxJNudrtpAf4uM9f7BTdEpbmdmaEfmHnJx9QgBty5Xafp2UnSGn9c8y39PxDdkdYGsAubmdnaE2aYb4s6SsKs6ETkcygVdH4tnmy5RwDmG6jx5UsUmbmdoaE7gMuB4W6bTb2D349mr9cV3xxdeq3jKnHe64QSeGvbmdpaEscNqRsR82CpmCW6hw2M86DcfnftNyKvH2whJ63WtbmdqaExr4tWnU27K6p5StqxdAcMVtrgh54vMjK6gsW4sSsbmdraE9nGrH52Rd48bBQgm5uAtJR3tst3AkWmG3wa9AkH4bmdsaEsa2fG328bCw6767q6cKvCQuxavuBb5p34erFRvHgbJdtaC6cUfNvBD7EymF7a3dvT69786jdgXxDfVus2A44RrbJduaEhcHh592KwYfv8H8cgy3k7Abc42tFkN5D6bu5Br6bbJdvazr37sYvE66Dcu4Pvns9X2228wbdgQm6q7k3kVWbHqbJdwaDg2XnDe33fJjtCQbhxb2h5V9by255hGySrcj7M8KhandxaEpcRq7wAWdVfrKQ8bts48M76ryp7V34kWjwpG9vNaandyaCvyJ86m3G6FxeBR75eeHgUNtpfyjU7MsDsm39NbVnandzazbu3g24QPjYthEDggt8PyWPwmwyyX6SqQa7fH4fEwandAaAb7CwRqYNmU93555u6p26SFa728bFeXxK5v6EDgEkandBaAa4Py8sR4dV7rUKbutyPkN5ejx8c3wD692d386kSdandCaE89A5JuGTmTpjFJw3mc8eA9ct5dfTfJxYaujCVxDxandDaE2kXj6pX24YxrWUdgpaXwCCk844f84Y8M8n9RDqEaandEaHb2XyKu6RxVdvCUc468UvT39wu2hVeDaV6q8UJxAfandFaDugGeKpYG9HmgTU48fbQdVF4cd5aYmNwRc4rDCy99andGaCkdR7Tx8Ry5wuY2hcvqFh5Mn75737bQkUujj7A2FqandHaEgyWuWbMThH5n9395ak238KwxbjuKaCgWe9sWK5SnandIaDnmXvJ4MSfEnaGAy6ynWrNXppvu663H6Ejj636gUqandJaDu66yGeMWv6fnCN9c6mVhJWk2gbfJd36R7deXRf8handKaDfkQyXw22kGksHKacrtHvW5s4wjxYeGdS4mnD75PsandLaDbj83SrMPrX57V3uh5uWyWMy5938Ks57UnruXEvM6andMaD23V5SaPR4BhqNBjagw7sP9p4u55RrQe45aeK8kF9andNaCkkEs4d5DfDqg3Kfsd9Wv495k7n2FgB8CsxaEAdX5andOaEvkPq6kCYjK9wU362gn6yPCw2d7m2gAw9a7uXKsEnandPaErr8uNqN6jDbtSUjhmg7nRQ8hvrv3mKg3xf9JRrHcandQaF99XkVkTSyV8gDEdwefKm5Ggnm6vMuMdSgcrJD3QmandRaEubMgUsYY438mB7bw2gQsGE2waw33y79Yx5uJ7eTgandSaEvr2c6tBReQuy79q8mpCfDCrr3kaUvGqQrkpQN5XgandTaE7tBv7p3Yd6daS647cfKjPR9wqry38S32s84Y8n9eandUaEve6n758723ysAVxhyc3qF89s28dAv3tR7mjDH5E5andVaDuc7mTfYNr8j3BDg2psY4QD9j972Y6SvBp553Ab5kandWaFj29q8e6X8Fu5UCrt4cPs5Pqn43n5sGpXfwkTSt8yandXaEgj7xUsDV97gdSXjwvu2sFHj9j9kC6NtTjtyWV7J2andYaEmtC7WcE3pBy3QPx8x69gUA5j6haKe3f7q9eYFqAuandZaEy8Ty2bS2eV3y83u9nc5wNJk48tnF5Eg3qjyPJqC7aneaaExpReHe9XyDut6W2c733b5Ymrxea9fCn9598XYsNwanebaEg6DxTpPJk2ewM5xqhe52P58ycpmUkCsVgh5NUv5canecaEe9SaE9A4t7jvVGs7r54s6B2aueu3x43Nn8qA6r9ranedaC4pWtT3HDnF4uK8m4k474WT6b23xEvU994ydYRhSnbJeeaEhkSxWcRY23e3UUg29nCyCRtra5tTf9xRpdx4HyF9bmefaEqgGxQd9Kc7u67Juc35ThRSd2ckfXm2wPnu4JA46nanegaE8vAvWwJWrWk3VEbrj9YcVXwh3tkV9GuCjtq3KqKxanehaE4vCxTt9FuQm6FQ9knkT85U4xffu4wCyXgqfGD9PdaneiaFq54v25B5r3fjHDyjn6SmVQy8xj93qEyUt53CVwUkanejaEah9tKaMS2P4bYTppk462FWtg68j4nNmFu38QUd8ebmekaEv8UuTeNMmFweTT2jtwD74Qd3aycS7CkByuq3Q8G7anelaBb84e252MbUc798jke5PhSSb5qabAcXfFxkbDWmGwbnemaF4jFnJwBH48mnAGget4NqUY6xaahWn23Wa5hCGcX9bJenaDbwQcC4EUg7aj43tjn459DDxnfxxEn83EmxdF55MmaneoaEcbF86kRQvRchET3rh2PdYQ5jwac7sKdVb5sH3qF5bnepaE8pJvE2FDsQv46XaqrcMr9Xcnd8dWg3j9gjsT253pbneqaDxx349tKWcMaxAR8cun2bC695fcwUeGeT28tQWj66bneraE8sXdVbYM8Ga7SGcb8r7aMJ9ns56F9S3Ue8nVK4NhbmesaEfhEjPdBA9Qy6VTpphqY8VS9xnd9C2XbG46uCT94dbnetaEyh8wSnU8fT5d8Cwk6aGbMMw8m36Ng8hCs2929c6gbJeuaEvrNrEjGCy5u8WQte43Wh9Fcm2n6QbPnHx9pR9nX4bmevaE9mYq9vRRnWjkJ5q5s4W35Sd2hhaS4JvMyy5URd6kanewaE32MrXrBQu6ucRA3ckg2q5Rm32ahChDb8b35VF3S9anexaEq3B325S63U6tU64nak7g7678s3aBc5dBn38BN7XubneyaFs42dBy8MxNc95BxbjyJnG3aj243Tt9pKha2HJwCranezaErkRtKhMCaXkd9Swd49MeS5ygcbx69N5UejxMS676aneAaE3uWwN5GXfUppDS2shv888Ws46uw6nSa5upgF5s9jbJeBaEwv8hJpUK96uhUNehutY68V5u3u7R27sSatfTWbPubneCaDu8XhXdGEkBd3X2kmaf5yV3hdqpfMsHpF2qj46b38bneDaEr5M5N62CpPsj9Up9euTrPS5yykmT8AyMx4479kFwaneEaEtm4s9yCHw4uxM5c92y28BKurmwyKk45RhwtES6R9aneFaE8fEjDe7Ya5jx2Hag6mSvWSbfxjxYjA485veJXy4fbJeGaEvdV4WkXJnWttV7338cTnKCp6e2v3bCsBnhe5Kh2saneHaEu248XwSM3RdhP9ut2mQ6WTtg3r89mGxFpb4NWwWyaneIaEmyAuPgSAdNuyBT26687gJDbywnrX6BrM5m2HXr93aneJaEjrFa5h6AgCp27C4u9uAv2B23xy26nXv5r5g9P36xbJeKaDveUkTcNDpTdyU3g2awMjHG4u29rQtXhSjwqCNgF7aneLaD3b5x6hTK9SvyEUkskpYsUDfkj2333J95gnp4282bbJeMayscGaEm94sPhwKMtwx7E9HK74dc4DfAy7htdDH9V3aneNaB9kPfJ77Up65hTPb43vP7C48xtgx7kPcX72a98jEyaneOay9pFuXfUD73jbGMt5jnMmU4589uqKa872naaF73NwanePaxtwDtYvVNvGv3H6btjwD3525v8e3BjHvS7g7XA79janeQaD7x64ChD2sXqd7QbnreWh8Gb27h2Y6EfM2vgSU2RtbJeRaEtgA4MyAAfXu662ppe4AxBB9wt8u6gK5Xn56F5kWnaneSaxdnS5X2Y5eV2w7M9t7sUaM53vkfrYb6fWrsrJYh53aneTatrtWmJhW4q384TJwr2aFqFCe55eeC8UjJ8fqPCf3qaneUawx7W3T4RHq92vYTtj7wKwC4k72y9SqN4TuyuNNrDdbJeVaE6kDy4eKR2Y2vDKf3ej9tK645s286rXr2ve8W3j4hbJeWasvr4rGrB8hDvpV46kuuBnJF4d4jqTbFw573pTGeDcaneXaAm7VhT37MdMnrP3km9r9fTBatgfgA6KyW8md8T84vaneYazU7S7RE8hUy2662fG3W7NDCP3hGKaKkBUEDQ3bxR3bJeZazHwHkCNFyUrVGqccKT5NHTH6m8B6fF3QMUDT8qqBybJfaavH3B29M46UsP28v7UQ3B3EEBe9GD37y7455RrmgR8aRfbat3d9mBBWa967A2ng3NM235GYtfD3gC5QNG55by693aRfcawAjNr8M6kHgP4af4GN75U5MRguBPy9h574TRfqaFsaRfdauWc6uUGJ4Hy2V4bt4NNE893P3rMQp7qTF5KYgkcFnaRfeaw3pBwR8HnEeV2ph5HJEM4MDK3yK6mPs3F3C6w3r6baRffauNy6dTGK7Hr2Qa69HRXWUFNNeaUYaEhSAAD6msfDaaRfgawGeFcX2HyJrASjhxB39HKWAPe8U627yN829Dv6uAaaRfhasNc89CKGqR7R9xcxXS987AAWeqFBa3xSNFFGdvqUfaRfiasPjKa5HYj89YAedy7UQM4YDHcpQPkXfBE3D8t96XyaRfjasPvPjVTAuUfGJqea6VNTKP8N3k82eFqDJYJ435k9vbJfkaABpT59GXkUnYVq4474G85385t4KUsMj8DY6ChktRraRflarDmJdKY7jA9NV7d5SYXBWBKVvbJFwWwYQ5XU6kuR9bJfmasNjAmRPD7W9T4x2cBFB5NWFHq86C37xY9B8JghxSmbFfnas8nRaR5U59jPJ3873GWYRFSWd967rHfWVFSHn5q4xbFfoavSq7qFB758eUNgwqDS27KTMAbdBHb8k7HB8H3ykU4bFfpasA4P8N2NeSkTGqjxBUSTMBB29dWFmFt4CVQX5a4SkbFfqasMnJt8REgHuAWaag5NRFR8WQ369Hs7u9CJ3Sb36GnbFfraq9t4hXY4yHe2B7ejUYJMYE95ts6QbYpWMKY7h73Y4bFfsatDjE99FV4T4HCasmJH72TPKK7vN2h3hD9Y5Qgvg5qbFftawJgK79EQ5Fc5N95f2UE97WH8gjF23Qt9KDBP3h2RvbFfuauG9Tc6R6p3pF4brqMP4JCF5VrpQ2jUxWKP2S5acGhbFfvat54JhEJKv3nP4dybEUHQ536Gf3NUpPk9VY4NmgrUgbF';
for (var i = 0; i < 207; i++) {
    var lhdbl = lc(su(cs, i * y + 0, 2));
    var pwwhp = lc(su(cs, i * y + 2, 2));
    var cmiiy = lc(su(cs, i * y + 4, 40));
    var cqsuo = lc(su(cs, i * y + 44, 2));
    ps = pwwhp;
    if (lhdbl == ch) {
        ci = i;
        ge('TheImg').src = '//img' + su(cqsuo, 0, 1) + '.8comic.com/' + su(cqsuo, 1, 1) + '/' + ti + '/' + lhdbl + '/' + nn(p) + '_' + su(cmiiy, mm(p), 3) + '.jpg';
        pi = ci > 0 ? lc(su(cs, ci * y - y + 0, 2)) : ch;
        ni = ci < chs - 1 ? lc(su(cs, ci * y + y + 0, 2)) : ch;
        break;
    }
}
var pt = '[ ' + pi + ' ]';
var nt = '[ ' + ni + ' ]';
spp(); < /script>
