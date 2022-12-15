function Betolt()
{
    for(let i = 0; i < 1; i++)
    {
        document.getElementById(String(i)).style.left = Math.ceil(Math.random*window.innerWidth)+"px";
        document.getElementById(String(i)).style.top = Math.ceil(Math.random*window.innerHeight)+"px";
    }
}

function Kattint(id)
{
    document.getElementById(id).style.top = Math.ceil(Math.random()*window.innerHeight)+"px";
    document.getElementById(id).style.left = Math.ceil(Math.random()*window.innerWidth)+"px";
}