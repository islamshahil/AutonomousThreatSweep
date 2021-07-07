
// // read text from URL location
// function getText(){
//     var request = new XMLHttpRequest();
//     request.open('GET', 'https://shahil-bucket.s3.amazonaws.com/folders.txt', true);
//     request.send(null);
//     request.onreadystatechange = function () {
//         if (request.readyState === 4 && request.status === 200) {
//             var type = request.getResponseHeader('Content-Type');
//             if (type.indexOf("text") !== 1) {
//                 return request.responseText;
//             }
//         }
//     }
// }

// fetch("https://shahil-bucket.s3.amazonaws.com/folders.txt").then((r)=>{r.text().then((d)=>{let CONTENT = d})})
// // document.getElementById("test") = CONTENT;

// // var outer_text = getText();
// //outer_text = d.split('\n');    // you can adjust the manner of parsing the received file (regexp)
// console.log("test")

// // var tableHP = document.getElementById("test");
// // // Create an empty <tr> element and add it to the 1st position of the table:
// // var row = tableHP.insertRow(tableHP.rows.length);
// // // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
// // var cell1 = row.insertCell(0);
// // var cell2 = row.insertCell(1);

// // // Add some text to the new cells:
// // cell1.innerHTML = outer_text[0];
// // cell2.innerHTML = outer_text[1];


var arr = ['AbuseCh_Malware_Bazaar', 'AgentTesla', 'Agrius', 'AKH_RAT_Loader', 'Andariel', 'APT29_ElectionThemedFraudPhishingCampaign', 'APT41_ColunmTK', 'APT_FIN7_Malware', 'Avaddon', 'BackdoorDiplomacy', 'BazaFlix', 'BizzaroTrojan', 'BlackCocaine', 'BlackKingdom', 'BuerLoaderIOCs', 'BuerLoader_STL', 'CarbineLoader_CryptoJacking_Campaign', 'ChaChi', 'CISA_FiveHands', 'Codecov', 'ContiRansomware', 'CredentialHarvester_TNT', 'DarkRadiation', 'DarksideRansomwareNew', 'EpsilonRed', 'FeodoTrackerAbuse', 'FortinetExploits', 'Gelsemium', 'Ghostwriter', 'Gootkit', 'HabitsRAT', 'HadesRansomware', 'IcedID', 'JSWorm', 'KlingonRAT', 'Kubeflow', 'LazarusAPT', 'LemonDuck_ExchangeServers', 'LilSkimmer', 'LodaRat', 'LvRansomware', 'Matanbuchus', 'MoserpassIOCs', 'MoserpassSupplyChain_STL', 'Naikon', 'NecroPython', 'NewFivehands_RansomwareVariant', 'Nobelium', 'NobeliumToolSet', 'NobleBaron', 'PHPSkimmer_Magecart', 'PrometeiBotnet', 'PrometheusRansomware', 'PulseSecureConnectVulnerability', 'PulseSecure_STL', 'Pulse_Secure_VPN_vulnerability', 'PuzzleMaker', 'QBot', 'QuasarRAT', 'Remcos_Quasar_Redline_RATs', 'Saint_Bot', 'SharpPanda', 'Shlayer', 'Siloscape', 'SimpsBotnet', 'SkinnyBoy', 'SlightPulse_STL', 'SolarWindsUpdate', 'Sombrat_FiveHandsRansomware', 'SonicWallZeroDayExploit_STL', 'STL_DarkSidePotentialEP', 'STL_DarkSide_ShadowCopyDeletion', 'STL_EpsilonRedRAT', 'STL_FormBookRAT', 'STL_JBSIncident', 'STL_MooriyaRootkit', 'STL_Nobelium', 'STL_Quasar_RAT', 'StrRAT', 'SUNSHUTTLE', 'SuperNovaCISAUpdate', 'SysrvBotnet', 'TagBarnakle', 'TalosThreatRoundupIOCs_3May', 'TeaBot', 'TeamTNT', 'TORUnixBotnet', 'TransparentTribeAPT', 'TrifectaPhishingCampaign', 'UnearthingHancitorInfrastructure', 'WatchDog', 'XMRig', 'ZebrocyDropperDocs'];

var text = '<ul>';
for (i = 0; i <= arr.length - 1; i++) {
  var li = document.createElement('li');     // create li element.
  let url = "https://github.com/islamshahil/AutonomousThreatSweep/tree/main/";
  var str = arr[i];
  var res = url.concat(str);
  text = text + "<li><a href='"+res+"' target='_blank'>" + str + "</a></li>";
}
text = text +'</ol>';
document.getElementById("container").innerHTML = text;



function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("container");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}