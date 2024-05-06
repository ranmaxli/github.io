// hitokotojson = await (await fetch('https://v1.hitokoto.cn?select=json')).json()
fetch('https://v1.hitokoto.cn?select=json').then(res=>res.json()).then(res=>{
    hitokotojson = res
    hitokototext = hitokotojson['hitokoto']
    hitokotofrom = hitokotojson['from']
    hitokotostr = "『" + hitokototext + "』" + " —— " + hitokotofrom
    console.log("一言文本: " + hitokotostr)
    asideHitokoto = document.getElementById("asideHitokoto")
    asideHitokoto.innerHTML = hitokotostr
})