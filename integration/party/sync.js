// Run in the browser pane's page JS on https://www.dndbeyond.com/campaigns/7693664 while Jack is signed in.
// Returns a compact JSON roster for all characters in the campaign (ids discovered from the page).
const ids=[...new Set([...document.querySelectorAll('a[href*="/characters/"]')].map(a=>(a.getAttribute('href').match(/characters\/(\d+)/)||[])[1]).filter(Boolean))];
const tr=await fetch('https://auth-service.dndbeyond.com/v1/cobalt-token',{method:'POST',credentials:'include'});
const token=(await tr.json()).token;
const out=[];
for(const id of ids){
  const r=await fetch(`https://character-service.dndbeyond.com/character/v5/character/${id}`,{headers:{Authorization:'Bearer '+token}});
  const j=await r.json(); if(!j.success){out.push({id,error:j.message});continue;}
  const c=j.data;
  const stat=(i)=>c.overrideStats[i].value??(c.stats[i].value+(c.bonusStats[i].value||0));
  const mods=c.modifiers?Object.values(c.modifiers).flat():[];
  out.push({id,name:c.name,race:c.race?.fullName,bg:c.background?.definition?.name,
    classes:(c.classes||[]).map(cl=>cl.definition.name+' '+cl.level+(cl.subclassDefinition?' / '+cl.subclassDefinition.name:'')),
    level:(c.classes||[]).reduce((a,cl)=>a+cl.level,0),
    hp:{base:c.baseHitPoints,bonus:c.bonusHitPoints,over:c.overrideHitPoints},
    stats:{STR:stat(0),DEX:stat(1),CON:stat(2),INT:stat(3),WIS:stat(4),CHA:stat(5)},
    asi:mods.filter(m=>m.type==='bonus'&&/-score$/.test(m.subType)).map(m=>m.subType+':'+m.value),
    feats:(c.feats||[]).map(f=>f.definition.name),
    features:[...new Set((c.classes||[]).flatMap(cl=>(cl.classFeatures||[]).filter(f=>f.definition.requiredLevel<=cl.level).map(f=>f.definition.name)))],
    spells:[...(c.classSpells||[]).flatMap(cs=>cs.spells.map(s=>s.definition.name+(s.prepared||s.alwaysPrepared?'*':''))),
            ...Object.keys(c.spells||{}).flatMap(k=>(c.spells[k]||[]).map(s=>s.definition.name+'('+k+')'))],
    inventory:(c.inventory||[]).map(i=>i.definition.name+(i.quantity>1?' x'+i.quantity:'')+(i.equipped?' [eq]':'')+(i.definition.magic?' [magic '+i.definition.rarity+(i.isAttuned?' attuned':'')+']':'')),
    currencies:c.currencies,notes:c.notes,traits:c.traits,
    desc:{age:c.age,gender:c.gender,eyes:c.eyes,hair:c.hair,skin:c.skin,height:c.height,weight:c.weight,faith:c.faith}});
}
JSON.stringify(out);
