// from: view-source:https://comicbus.live/online/a-7340.html?ch=1-2

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
var chs = 129;
var ti = 7340;
var cs = 'aaVu54A7DRWU4QpfSVXYWA3Q6E9755RJGQCSyQkhGYaJanabxEAAqurqknTF2RVnVkE7Uu75jbXq6c2NjWH7JyJkaZbmacfNGUjt72uj9E34Wm92WnH5QxpeFetk2VyBBW588faPbmad2CNY2924dxXBNN739pWhKtG6r7Dgn4dFkUY6WuQ4aRbmaej2NMre5psn2F77Y2JgFc37X62q6kr22B8KTR9dN9aTbmafnYGJ252aef89E58u72H6N3Jg3f7k7b5D5TUBC5GeaFanag54J8sjyy2vJNFSFmXrCtQuYskvDynvrVbQQP5wMuaIbnah7DXV3w2yevKEBFMn5bT2Fm7wsw83jreC5F7WQtG2aKbnai2ER9rp9mdgD9YNFkXgAuB65ddpW27pbXdU6YPcA5aIbnaja8T632886sFYTRRy7wX9DqVeywF6y32C8VMH7gGnaKbnakyVRX2mfx2sDUMRN3Mw84U3Vs2nHkugqYq7BUKgGvaQbnalbSC5ywwmpsS3FTJf2574BdRkbrBfwg63uEKGUbVpaObnamjU7A5p7vv96UWYWu7kDwT4DbkfR6eamApCHWX9XsaRbnan8C8Cfsft5aPYTP57BdHbJtEu4uBpjry753HEEy7jaMbnao2D8Ycsh5k3TWEM87Y4XcV4TddrR6af5H87J7PsPhaFbnap4JHPsdtmvv7UF9Fd2vBxDhKmccDscj8J5M9U365caLbnaq626WadvaafDXPB47GuV9QaX7kb93he656W57C2ReaFbmar7R6NtytdtaK7Q9J2S7G8Dt9wqqDdaugFqX235qYkaHbJasc7FAdds3t9BMEBUjT87j6nJms2Ruxs99p2TJ4qUhaNbmat9U7DbsahnwHVVFN6MjTgRxK6q2Yx4u7M7T89QmXfaTbJauv439vw8euuXNTX398c72BtFbcfA46veK5Q4WSfPmaFanavdMWG55qgwn59VQ6yDdKvY3HfwuEgaa66g9VJAaHvaMbJawdXJX2fmyw5CMEJEgN4GcXgVaet4rwe92ySHQXs3caTbJaxv4KNva2ak65Q9KEgKnUsAmQbkpWph6s4u99HR4JbaRanaywAXHkvfbxbRRXE9wDbUnF9Y27yJfpwtU8AR9437vaRanaz485Nmy2br6727E2c5w2s9pEj52Pqfjv7sAUSDxF8aHanaAyKJ7m55sbuUNMNFxR53r9h4nuu8sy5hFy36EYgRpaQanaBt24Qtmcc7vW964QwVkP78cRbg9YgxmbCaMYVEw34aTanaCkUUNvhgbdjU8NNBn93FjRd2pmkBecg2AwN33Gx5vaSanaD89CU6ss7jtKDYRRbTdAjVcT67jMa5rnJ3TUP65N4aPanaEtKDJf2snvdU75W9a9gDb4yCpg24hat7Ca23P8b2saQanaFeTEFdjx3qg2Y5SKbG2U9V8Tw389sfsg2pTSW3f85aSanaGg2NNsjqenmGRPPE6Fn4d4rPwa79w5r8RuS9GF758aRanaH2PCDfpst5hE667U6JtW8Cx9k9j275dqRaMX2G7C3aSanaIvJBJukp5hyKT4VHfJh8gAdXuheM33upShAK3Rf2waRanaJt8BGehsddyXN79Qu85Hs937rbmEsae6VqS2EJgCeaRanaK2QP3aacb6a3MC7RfJr5jX7A86wKdp8sGuN2H4wBhaTanaLeANV98s8dxDD7DD8V8WdG886vrG3c66RfJBWXcAqaSanaM4AU9w9hkjbUCMRH8GfHwDhQd8g2v82a5b6JHXtCraSanaN2VQ4bh823dJU3NUsEkTuD7N2cvQ6y49J2EJ549CdaSanaO8CNMeqs64rFBBQ64WyJmNgA4f9Hrna28rVUUBtGtaSanaPwMJGxuw59h8S3A8d5vMmHj899t569pnBk86X9dP7aSanaQhY5Gv5q4n6FQ7TSu6kQ6GuVqksQv7fbM6ACPNfHvaPanaR7NEXqj6ptfXA9G42R7NfW94napExsa83fHKVBbYcaManaSr3TDmwxus9KME7K5KnUyCt3wygTcghfA6FTAYmF4aSanaTxR2673uk2vCT9ANxWbYjPnHcr69mmp5P6UAXQrEbaSanaUxHDAyadq53KDHF68KwW97qDvetE72ae5sGKVV8SmaTanaVbM8Eeg8w7v56KPMw9sHxEvXcxp3578hSe2FCYpWbaTanaW66KVtxtd2wFDWKR24jPbHb8tyvKgv5m3h4DX4qTcaTanaX98KSx39w5u6P45BkK5Bx33Y63sDjcne2b9TADy6qaUanaYw7H4qredu4E8EBMhQdSrTdE79g5sctk5tAPJAr5paSbJaZmWUCjf3b8h94XUX6Jk5wJqB2wxDjeh7HpQC2Qs84aTanba8UUQg6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VxG6Q8WsXm3yW2fkh7x656RmQyaRbJcb448M5r4bdrYFMCF936FaAqKdjjVntahNn982Jb7aaTanccnBXYc782dtHV3SK8VtMsX363fs82svnDuFYDB73kaUancdkNCG7t5hgbG8VARsW3PtTx57m8Dgh2pFkVXM8nQ7aTancenV7E5euwg83KFWEsUyUwH4HavfCv7ea2tJDGG9U3aTaRcft8JHupqd4yDUKSTb4jCs5eCmgeRyavr6uT7E69AcaTaRcggYJXtwm4pcDFAHW65xF46x79xq4dgmrBsAMK48QjaTaRchs5DWstwsyjR7VKQ23uY6HmC6k9Xra6b89WEGBbJtaTaRcibXBRubx3ecEDSHQ56ySkM9Cf5k6sxywC29AJ2uXhaUaRcj7FV3bxudwvK9QQPrU6G2Q56xfbFuyyqKhKUN6fG8aTaRcksU5R9kkw2pXJTXNk5nSfKaBdyr5tktyHm7PCWb37aUaRcln9JRyqtytr8QQEHwDcVb887sv4J29u792D6H52DsaTaRcmpVF7bmvus2QR2R9mXbUhPfQ7mqE58y4YtXHKGwYfaTbJcnyQMVqe5xx4G49J7yYaHfNnRy62Rx4mnFcF6X3p9baVbJcohMSCsa3px4BT8EHyG3HfAq9fbb5uavxRaAUA6pAdaVbJcp48BUgtjemtEB96JqK3PvRcFqwxNr5cj4yA4EW5TxaVaRcq3T26j7yvda6BJJXp254x74K72d5r7q98aFJFRbR7aVaRcr779Aa5qjng32784e6nT8Ux5mbtAryuy637DEHkEsaSbJcs6C55s47vup5TJC6gNc3qWkN6nxBhybhDeM2FR9NwaPbJct986NbkbwrvS65EVsUsH29yF95f9qsheYk5TT86CraVaRcutGQVee75brXDGCWjD7PsNyDhr68wrta39XECJa79aVbFcvmSG8xnhf753W7J7xU6KvJvVjqr2wfrs8sBW5YsB6aVbFcwm6MVrkphfcHNXM5q6qMgF3G9p8Gb3ttQpFY44cHyaTbFcxtXKAafx2apDDE9UbAg39K4A4m9Bqff33a2MCJkTraSbFcyvEEGkymwweGCM428H23xA737dcDp3a2Ht9BQY69gaTbFczrG6G4qrfj3Q2MMWdYsPuVsVk744y7x2XfVGY7nG8aTbFZbbM9Ypn5sb2CQ4PC7YxNq6wYwdn8ktgx4n7U588KxarbnZccKGYdfavauEC4WY6HuT244Qx7kQ4ebs2pWW478Vnasbm';
for (var i = 0; i < 132; i++) {
    var rqlmy = lc(su(cs, i * y + 0, 2));
    var ahsyr = lc(su(cs, i * y + 2, 40));
    var yxpvs = lc(su(cs, i * y + 42, 2));
    var nmchc = lc(su(cs, i * y + 44, 2));
    ps = yxpvs;
    if (rqlmy == ch) {
        ci = i;
        ge('TheImg').src = '//img' + su(nmchc, 0, 1) + '.8comic.com/' + su(nmchc, 1, 1) + '/' + ti + '/' + rqlmy + '/' + nn(p) + '_' + su(ahsyr, mm(p), 3) + '.jpg';
        pi = ci > 0 ? lc(su(cs, ci * y - y + 0, 2)) : ch;
        ni = ci < chs - 1 ? lc(su(cs, ci * y + y + 0, 2)) : ch;
        break;
    }
}
var pt = '[ ' + pi + ' ]';
var nt = '[ ' + ni + ' ]';
spp();