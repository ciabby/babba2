ciao=true;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function aperta()
{
    document.getElementById("leanimazioni").style.display="inline";
    document.getElementById("apertura1").style.width="100px";
    document.getElementById("apertura1").style.left="-1.5%";
    document.getElementById("apertura1").style.top="-11%";
    document.getElementById("apertura1").style.transform="rotate(-45deg)";
    document.getElementById("apertura2").style.width="100px";
    document.getElementById("apertura2").style.left="91.5%";
    document.getElementById("apertura2").style.top="-11%";
    document.getElementById("apertura2").style.transform="rotate(-315deg)";
    document.getElementById("apertura3").style.top="-20%";
    document.getElementById("apertura3").style.left="7%";
    document.getElementById("apertura3").style.width="860px";
    document.getElementById("hitboxapertura").style.height="0%";
    await sleep(1500);
    document.getElementById("leanimazioni").style.display="none";
    document.getElementById("chill").style.display="inline";
    document.getElementById("scarica").style.display="inline";
}
function mezzospoiler()
{
    document.getElementById("apertura1").style.width="100px";
    document.getElementById("apertura1").style.left="-1.5%";
    document.getElementById("apertura1").style.top="7%";
    document.getElementById("apertura1").style.transform="rotate(45deg)";
    document.getElementById("apertura2").style.width="100px";
    document.getElementById("apertura2").style.left="91.5%";
    document.getElementById("apertura2").style.top="7%";
    document.getElementById("apertura2").style.transform="rotate(315deg)";
    document.getElementById("apertura3").style.width="860.5px";
    document.getElementById("apertura3").style.left="7%";
    document.getElementById("apertura3").style.top="15.8%";
    document.getElementById("hitboxapertura").style.height="40%";
    document.getElementById("chill").style.display="none";
    document.getElementById("scarica").style.display="none";
}
function chiusa()
{
    document.getElementById("apertura1").style.width="200px";
    document.getElementById("apertura1").style.left="-3.1%";
    document.getElementById("apertura1").style.top="15.5%";
    document.getElementById("apertura1").style.transform="rotate(45deg)";
    document.getElementById("apertura2").style.width="200px";
    document.getElementById("apertura2").style.left="83%";
    document.getElementById("apertura2").style.top="15.5%";
    document.getElementById("apertura2").style.transform="rotate(315deg)";
    document.getElementById("apertura3").style.width="718px";
    document.getElementById("apertura3").style.left="14%";
    document.getElementById("apertura3").style.top="33.5%";
    document.getElementById("hitboxapertura").style.height="40%";
    document.getElementById("chill").style.display="none";
    document.getElementById("scarica").style.display="none";
}
async function colorepulsante() {
    // This is an infinite loop that will change the background color
    ciao=true;
    while (ciao) {
        document.getElementById("scarica").style.background = "radial-gradient(ellipse, #669bbc, #219ebc, #003049)";
        await sleep(1000);

        document.getElementById("scarica").style.background = "radial-gradient(circle, #003049, #219ebc, #669bbc)";
        await sleep(1000);

        document.getElementById("scarica").style.background = "radial-gradient(ellipse, #669bbc, #0077b6, #219ebc)";
        await sleep(1000);
        document.getElementById("scarica").style.background="radial-gradient(ellipse, #003049,#219ebc,#669bbc)";
    }
}
function stopcolorepulsante()
{
    ciao=false;
    document.getElementById("scarica").style.background="radial-gradient(ellipse, #003049,#219ebc,#669bbc)";
}