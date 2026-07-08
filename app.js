const proteins=[
  {name:"Frango grelhado",short:"Frango",icon:"🍗",kcal:165,prot:31,carbs:0,fat:4,cost:"economica",kind:"frango",color:"#e8a35f",shape:"slices"},
  {name:"Frango desfiado",short:"Frango desfiado",icon:"🥘",kcal:158,prot:29,carbs:0,fat:4,cost:"economica",kind:"frango",color:"#dca15f",shape:"shreds"},
  {name:"Almôndegas magras",short:"Almôndegas",icon:"🍖",kcal:210,prot:27,carbs:5,fat:9,cost:"proteica",kind:"carne",color:"#8b4b35",shape:"balls"},
  {name:"Patinho moído",short:"Patinho",icon:"🥩",kcal:220,prot:32,carbs:0,fat:10,cost:"proteica",kind:"carne",color:"#7b3f2f",shape:"crumbles"},
  {name:"Tilápia assada",short:"Tilápia",icon:"🐟",kcal:180,prot:30,carbs:0,fat:6,cost:"leve",kind:"peixe",color:"#f2d49b",shape:"fillet"},
  {name:"Salmão dourado",short:"Salmão",icon:"🍣",kcal:245,prot:28,carbs:0,fat:14,cost:"proteica",kind:"peixe",color:"#e97855",shape:"fillet"},
  {name:"Omelete de forno",short:"Omelete",icon:"🍳",kcal:170,prot:22,carbs:2,fat:8,cost:"economica",kind:"ovo",color:"#f3c94f",shape:"omelet"},
  {name:"Lombo suíno",short:"Lombo",icon:"🍖",kcal:205,prot:30,carbs:0,fat:8,cost:"proteica",kind:"suino",color:"#c78258",shape:"slices"},
  {name:"Carne de panela",short:"Carne",icon:"🥩",kcal:235,prot:29,carbs:2,fat:12,cost:"proteica",kind:"carne",color:"#724332",shape:"cubes"},
  {name:"Tofu crocante",short:"Tofu",icon:"🌱",kcal:145,prot:18,carbs:5,fat:7,cost:"sem-lactose",kind:"vegetal",color:"#e7d7b5",shape:"cubes"},
  {name:"Grão-de-bico",short:"Grão-de-bico",icon:"🫘",kcal:155,prot:15,carbs:24,fat:3,cost:"economica",kind:"vegetal",color:"#cfa751",shape:"beans"},
  {name:"Lentilha temperada",short:"Lentilha",icon:"🥣",kcal:145,prot:16,carbs:22,fat:2,cost:"economica",kind:"vegetal",color:"#9b6b45",shape:"beans"}
];
const bases=[
  {name:"arroz integral",short:"Arroz integral",kcal:125,prot:3,carbs:26,fat:1,item:"Arroz integral",qty:"½ xícara",color:"#e7dcc1",shape:"rice"},
  {name:"purê de batata-doce",short:"Batata-doce",kcal:115,prot:2,carbs:27,fat:0,item:"Batata-doce",qty:"150 g",color:"#f29a3f",shape:"mash"},
  {name:"quinoa soltinha",short:"Quinoa",kcal:120,prot:4,carbs:21,fat:2,item:"Quinoa",qty:"½ xícara",color:"#d8c08a",shape:"grains"},
  {name:"abóbora cremosa",short:"Abóbora",kcal:75,prot:2,carbs:18,fat:0,item:"Abóbora",qty:"180 g",color:"#ec8f2f",shape:"mash"},
  {name:"arroz com cenoura",short:"Arroz com cenoura",kcal:130,prot:3,carbs:28,fat:1,item:"Arroz + cenoura",qty:"½ xícara",color:"#ead39d",shape:"rice"},
  {name:"mandioquinha rústica",short:"Mandioquinha",kcal:110,prot:2,carbs:25,fat:0,item:"Mandioquinha",qty:"150 g",color:"#f2c45d",shape:"chunks"}
];
const veggies=[
  {name:"brócolis no alho",short:"Brócolis",kcal:42,prot:4,carbs:8,fat:0,item:"Brócolis",qty:"1 xícara",color:"#2f9b4a",shape:"trees"},
  {name:"mix de legumes",short:"Mix de legumes",kcal:55,prot:2,carbs:11,fat:1,item:"Abobrinha + pimentão",qty:"1 xícara",color:"#dd5e45",shape:"mix"},
  {name:"vagem e cenoura",short:"Vagem e cenoura",kcal:48,prot:2,carbs:10,fat:0,item:"Vagem + cenoura",qty:"1 xícara",color:"#4ba85d",shape:"sticks"}
];
const recipes=[];let rid=1;
const lactoseFriendly=["Frango grelhado","Frango desfiado","Tilápia assada","Tofu crocante","Grão-de-bico","Lentilha temperada","Omelete de forno"];
const finishes=["ao alho e limão","de ervas finas","grelhado especial","fit da semana","de páprica suave","ao molho caseiro","dourado na frigideira","mediterrâneo","bem temperado","leve de freezer","proteico express","de salsa fresca"];
const categoryNames={"proteica":"Alta proteína","leve":"Leve & fit","economica":"Econômica","sem-lactose":"Sem lactose","low-carb":"Low carb","vegetariana":"Vegetariana","ganho-massa":"Ganho de massa","fitness":"Fitness"};
function esc(s){return String(s).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"}[c]))}
function photoPosition(){return "center"}
function dishShapes(type,color,seed,x,y,w,h){
  let out="";
  if(type==="slices"||type==="fillet")for(let i=0;i<5;i++)out+=`<rect x="${x+18+i*31}" y="${y+20+i%2*6}" width="92" height="30" rx="15" fill="${color}" transform="rotate(${-12+i*3} ${x+70+i*31} ${y+35})"/><path d="M${x+28+i*31} ${y+42+i%2*6}c24 13 50 13 76 0" stroke="#fff3df" stroke-width="5" opacity=".42" fill="none"/>`;
  else if(type==="shreds")for(let i=0;i<18;i++)out+=`<rect x="${x+16+(i%6)*34}" y="${y+20+Math.floor(i/6)*34}" width="56" height="13" rx="7" fill="${color}" transform="rotate(${(seed+i*7)%34-17} ${x+40+(i%6)*34} ${y+25+Math.floor(i/6)*34})"/>`;
  else if(type==="balls")for(let i=0;i<8;i++)out+=`<circle cx="${x+42+(i%4)*54}" cy="${y+42+Math.floor(i/4)*58}" r="25" fill="${color}"/><circle cx="${x+34+(i%4)*54}" cy="${y+33+Math.floor(i/4)*58}" r="5" fill="#ffffff" opacity=".22"/>`;
  else if(type==="crumbles"||type==="beans")for(let i=0;i<34;i++)out+=`<ellipse cx="${x+18+((seed*13+i*31)%210)}" cy="${y+20+((seed*7+i*23)%112)}" rx="${8+(i%4)}" ry="${6+(i%3)}" fill="${color}" opacity="${.78+(i%3)*.07}"/>`;
  else if(type==="cubes"||type==="chunks")for(let i=0;i<12;i++)out+=`<rect x="${x+18+(i%4)*50}" y="${y+18+Math.floor(i/4)*36}" width="39" height="31" rx="8" fill="${color}" transform="rotate(${(seed+i*11)%24-12} ${x+36+(i%4)*50} ${y+32+Math.floor(i/4)*36})"/>`;
  else if(type==="omelet")out+=`<ellipse cx="${x+w/2}" cy="${y+h/2}" rx="${w*.38}" ry="${h*.32}" fill="${color}"/><circle cx="${x+w*.38}" cy="${y+h*.43}" r="18" fill="#fff2bf" opacity=".65"/><path d="M${x+55} ${y+88}c60 18 116 13 168-10" stroke="#d99b27" stroke-width="7" fill="none" opacity=".55"/>`;
  else if(type==="mash")out+=`<path d="M${x+26} ${y+78}c18-58 89-76 148-55 52 19 93 70 61 116-34 49-126 49-184 24-38-16-38-45-25-85Z" fill="${color}"/><path d="M${x+68} ${y+72}c38 22 79 22 124 0M${x+59} ${y+108}c48 18 98 17 145-5" stroke="#fff4ce" stroke-width="8" opacity=".42" fill="none"/>`;
  else if(type==="rice"||type==="grains")for(let i=0;i<46;i++)out+=`<ellipse cx="${x+14+((seed*17+i*19)%220)}" cy="${y+14+((seed*29+i*11)%120)}" rx="7" ry="3.2" fill="${i%5?color:'#fff8e8'}" transform="rotate(${(seed+i*13)%180})"/>`;
  else if(type==="trees")for(let i=0;i<9;i++)out+=`<g transform="translate(${x+36+(i%3)*65} ${y+35+Math.floor(i/3)*43})"><circle cx="0" cy="0" r="18" fill="${color}"/><circle cx="14" cy="-5" r="15" fill="#45b863"/><circle cx="-13" cy="-4" r="14" fill="#2d8f43"/><rect x="-5" y="12" width="10" height="19" rx="5" fill="#6fa35f"/></g>`;
  else if(type==="sticks")for(let i=0;i<14;i++)out+=`<rect x="${x+20+(i%5)*40}" y="${y+20+Math.floor(i/5)*38}" width="95" height="13" rx="7" fill="${i%3===0?'#ef8c35':color}" transform="rotate(${(seed+i*9)%32-16} ${x+55+(i%5)*40} ${y+26+Math.floor(i/5)*38})"/>`;
  else for(let i=0;i<16;i++)out+=`<circle cx="${x+24+((seed*23+i*37)%205)}" cy="${y+20+((seed*19+i*29)%116)}" r="${13+(i%5)}" fill="${i%2?color:'#f28f38'}"/>`;
  return out;
}
function mealPhoto(pi,bi,vi){
  const id=pi*18+bi*3+vi+1;
  return `./assets/recipe-photos/recipe-${String(id).padStart(3,"0")}.jpg`;
}
proteins.forEach((p,pi)=>bases.forEach((b,bi)=>veggies.forEach((v,vi)=>{
  const kcal=p.kcal+b.kcal+v.kcal+((pi+bi+vi)%5)*7;
  const protein=p.prot+b.prot+v.prot;
  const carbs=p.carbs+b.carbs+v.carbs;
  const fat=p.fat+b.fat+v.fat+1+((pi+vi)%3);
  const isVegetarian=["vegetal","ovo"].includes(p.kind);
  const tags=[p.cost,"fitness"];
  if(lactoseFriendly.includes(p.name))tags.push("sem-lactose");
  if(kcal<345||b.name.includes("abóbora"))tags.push("leve");
  if(protein>=32)tags.push("proteica");
  if(carbs<=32||b.name.includes("abóbora"))tags.push("low-carb");
  if(isVegetarian)tags.push("vegetariana");
  if(kcal>=390&&protein>=30)tags.push("ganho-massa");
  const mainTag=isVegetarian?"vegetariana":tags.includes("low-carb")?"low-carb":tags.includes("ganho-massa")?"ganho-massa":p.cost==="economica"&&kcal<370?"economica":tags.includes("leve")?"leve":tags.includes("proteica")?"proteica":"fitness";
  const finish=finishes[(pi*5+bi*2+vi)%finishes.length];
  const name=`${p.short} ${finish} com ${b.short} e ${v.short}`;
  recipes.push({id:rid++,name,subtitle:`${categoryNames[mainTag]} • ${v.name}`,category:categoryNames[mainTag],icon:p.icon,kcal,protein,carbs,fat,time:12+((pi*4+bi*3+vi*5)%8)*2,photo:mealPhoto(pi,bi,vi,p,b,v),photoPos:photoPosition(),tags:[...new Set(tags)],ingredients:[`150 g de ${p.name.toLowerCase()}`,`${b.qty} de ${b.item.toLowerCase()}`,`${v.qty} de ${v.item.toLowerCase()}`,`${fat>11?'½':'1'} c. chá de azeite`,`${finish} e sal na medida`],prep:[`Prepare ${p.name.toLowerCase()} ${finish}.`,`Cozinhe ${b.name} até ficar no ponto ideal para congelar.`,`Finalize ${v.name} rapidamente para manter cor e textura.`,`Monte em pote de 500 ml, esfrie, tampe e congele.`]});
})));const days=["SEG","TER","QUA","QUI","SEX"];
let visible=6,activeFilter="todas",favorites=new Set(JSON.parse(localStorage.getItem("marmitaFavs")||"[]")),plan=JSON.parse(localStorage.getItem("marmitaPlan")||"[]"),currentRecipe=null,currentTab="ingredients";
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function sortForFilter(list){
  if(activeFilter==="leve")return list.sort((a,b)=>a.kcal-b.kcal||b.protein-a.protein);
  if(activeFilter==="proteica")return list.sort((a,b)=>b.protein-a.protein||a.kcal-b.kcal);
  if(activeFilter==="economica")return list.sort((a,b)=>a.kcal-b.kcal||a.time-b.time);
  if(activeFilter==="sem-lactose")return list.sort((a,b)=>a.name.localeCompare(b.name)||a.kcal-b.kcal);
  return list;
}
function filteredRecipes(){const term=$("#searchInput").value.trim().toLowerCase();const list=recipes.filter(r=>(activeFilter==="todas"||r.tags.includes(activeFilter))&&(!term||`${r.name} ${r.subtitle}`.toLowerCase().includes(term)));return sortForFilter([...list])}
function renderRecipes(){
  const list=filteredRecipes();$("#recipeCount").textContent=`${list.length} opções`;
  $("#recipeGrid").innerHTML=list.slice(0,visible).map(r=>`<article class="recipe-card" data-id="${r.id}">
    <div class="card-photo"><img src="${r.photo}" alt="${r.name}" loading="lazy"><button class="fav-btn ${favorites.has(r.id)?"saved":""}" data-fav="${r.id}" aria-label="Salvar receita">${favorites.has(r.id)?"♥":"♡"}</button><span class="card-time">◷ ${r.time} MIN</span></div>
    <div class="card-body"><span class="card-tag">${(r.category||"CONGELA BEM").toUpperCase()}</span><h3>${r.name}</h3><div class="macros"><span><b>${r.kcal}</b> kcal</span><span><b>${r.protein}g</b> prot.</span><span><b>${r.carbs}g</b> carb.</span><span><b>${r.fat}g</b> gord.</span></div></div>
  </article>`).join("")||`<div class="empty-state"><span>🥦</span>Nenhuma receita por aqui.</div>`;
  $("#showMoreBtn").style.display=visible<list.length?"block":"none";
}
function renderPlan(){
  $("#weekList").innerHTML=days.map((d,i)=>{const r=recipes.find(x=>x.id===plan[i]);return `<div class="week-row"><span class="day">${d}</span><div class="week-thumb" style="${r?`background-image:url('${r.photo}');background-position:center;background-size:cover`:""}"></div>${r?`<div><strong>${r.name}</strong><small>${r.kcal} kcal · ${r.protein}g proteína</small></div><button data-remove="${i}">×</button>`:`<strong class="empty-meal">Dia livre</strong><span></span>`}</div>`}).join("");
  $("#planCount").textContent=`${plan.filter(Boolean).length} marmitas`;localStorage.setItem("marmitaPlan",JSON.stringify(plan));
}
function openRecipe(id){currentRecipe=recipes.find(r=>r.id===id);if(!currentRecipe)return;$(".modal-visual").style.backgroundImage=`url('${currentRecipe.photo}')`;$(".modal-visual").style.backgroundPosition="center";$(".modal-visual").style.backgroundSize="cover";$("#modalTitle").textContent=currentRecipe.name;$("#modalTags").innerHTML=currentRecipe.tags.slice(0,2).map(t=>`<span>${t.replace("-"," ")}</span>`).join("");$("#modalMacros").innerHTML=`<div><strong>${currentRecipe.kcal}</strong><small>KCAL</small></div><div><strong>${currentRecipe.protein}g</strong><small>PROTEÍNA</small></div><div><strong>${currentRecipe.time} min</strong><small>PREPARO</small></div>`;currentTab="ingredients";renderTab();$$(".mini-tabs button").forEach((b,i)=>b.classList.toggle("active",i===0));openModal("#recipeModal")}
function renderTab(){let html="";if(currentTab==="ingredients")html=`<ul>${currentRecipe.ingredients.map(x=>`<li>✓ ${x}</li>`).join("")}</ul>`;if(currentTab==="prep")html=`<ol>${currentRecipe.prep.map(x=>`<li>${x}</li>`).join("")}</ol>`;if(currentTab==="freeze")html=`<div class="freeze-note"><b>❄ Freezer: até 90 dias</b><br>Espere esfriar, tampe e etiquete. Para comer, leve direto ao micro-ondas por 5–7 minutos, mexendo na metade.</div>`;$("#modalContent").innerHTML=html}
function openModal(sel){$(sel).classList.add("open");$(sel).setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeModal(sel){$(sel).classList.remove("open");$(sel).setAttribute("aria-hidden","true");document.body.style.overflow=""}
function toast(msg){$("#toast").textContent=msg;$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),1800)}
function generateShopping(){
  const chosen=plan.filter(Boolean).map(id=>recipes.find(r=>r.id===id));if(!chosen.length){$("#shoppingList").innerHTML=`<div class="empty-state"><span>🧺</span>Monte a semana primeiro.</div>`}else{const items={};chosen.forEach(r=>r.ingredients.forEach(x=>{const key=x.replace(/^\d+[\w\s.,½]+ de /,"").replace(/^1 c. chá de /,"").trim();items[key]=(items[key]||0)+1}));$("#shoppingList").innerHTML=Object.entries(items).map(([x,n])=>`<label class="shop-item"><input type="checkbox"><span>${x}${n>1?` · ${n} porções`:""}</span></label>`).join("")}openModal("#shoppingModal")}
$("#filters").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;activeFilter=b.dataset.filter;visible=6;$$(".chip").forEach(x=>x.classList.toggle("active",x===b));renderRecipes()});
$("#searchInput").addEventListener("input",()=>{visible=6;renderRecipes()});
$("#showMoreBtn").addEventListener("click",()=>{visible+=6;renderRecipes()});
$("#recipeGrid").addEventListener("click",e=>{const fav=e.target.closest("[data-fav]");if(fav){e.stopPropagation();const id=+fav.dataset.fav;favorites.has(id)?favorites.delete(id):favorites.add(id);localStorage.setItem("marmitaFavs",JSON.stringify([...favorites]));renderRecipes();return}const card=e.target.closest(".recipe-card");if(card)openRecipe(+card.dataset.id)});
$$("[data-close-modal]").forEach(x=>x.addEventListener("click",()=>closeModal("#recipeModal")));$$("[data-close-shopping]").forEach(x=>x.addEventListener("click",()=>closeModal("#shoppingModal")));
$(".mini-tabs").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;currentTab=b.dataset.tab;$$(".mini-tabs button").forEach(x=>x.classList.toggle("active",x===b));renderTab()});
$("#addToPlanBtn").addEventListener("click",()=>{let i=plan.findIndex(x=>!x);if(i<0)i=0;plan[i]=currentRecipe.id;renderPlan();closeModal("#recipeModal");toast("Marmita adicionada à semana ✓")});
$("#autoPlanBtn").addEventListener("click",()=>{const picks=[0,19,41,73,104].map((n,i)=>recipes[(n+Math.floor(Math.random()*12)+i)%recipes.length].id);plan=picks;renderPlan();toast("Semana montada! ⚡")});
$("#clearPlanBtn").addEventListener("click",()=>{plan=[];renderPlan();toast("Plano limpo")});
$("#weekList").addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(b){plan[+b.dataset.remove]=null;renderPlan()}});
$("#shoppingBtn").addEventListener("click",generateShopping);$("#navListBtn").addEventListener("click",generateShopping);
$("#shoppingList").addEventListener("change",e=>e.target.closest(".shop-item")?.classList.toggle("checked",e.target.checked));
$("#copyListBtn").addEventListener("click",()=>{const text=$$("#shoppingList .shop-item span").map(x=>"☐ "+x.textContent).join("\n");navigator.clipboard?.writeText(text);toast("Lista copiada ✓")});
$("#favoritesBtn").addEventListener("click",()=>{activeFilter="todas";$("#searchInput").value="";const favs=recipes.filter(r=>favorites.has(r.id));$("#recipeGrid").innerHTML=favs.map(r=>`<article class="recipe-card" data-id="${r.id}"><div class="card-photo"><img src="${r.photo}" alt="${r.name}" loading="lazy"><button class="fav-btn saved" data-fav="${r.id}">♥</button><span class="card-time">◷ ${r.time} MIN</span></div><div class="card-body"><span class="card-tag">${(r.category||"SALVA").toUpperCase()}</span><h3>${r.name}</h3><div class="macros"><span><b>${r.kcal}</b> kcal</span><span><b>${r.protein}g</b> prot.</span><span><b>${r.carbs}g</b> carb.</span><span><b>${r.fat}g</b> gord.</span></div></div></article>`).join("")||`<div class="empty-state"><span>♡</span>Salve suas favoritas aqui.</div>`;$("#recipeCount").textContent=`${favs.length} salvas`;$("#showMoreBtn").style.display="none";$("#recipes").scrollIntoView()});
$("#navSavedBtn").addEventListener("click",()=>$("#favoritesBtn").click());
$$("[data-scroll]").forEach(b=>b.addEventListener("click",()=>{$("#"+b.dataset.scroll).scrollIntoView();$$(".bottom-nav button").forEach(x=>x.classList.toggle("active",x===b))}));

renderRecipes();renderPlan();


