// Validates codex/things.js: ids, enums, related links, source paths, image files. Run: node codex/validate.js
const fs=require('fs'),path=require('path'),vm=require('vm');
const repo=path.resolve(__dirname, '..');
const ctx={window:{}};vm.createContext(ctx);
vm.runInContext(fs.readFileSync(repo+'/codex/things.js','utf8'),ctx);
const T=ctx.window.THINGS;const errs=[];
const TYPES=['person','place','item','faction','event','monster','spell','document','concept','quest'];
const ids=new Set();
for(const t of T){
  if(!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.id))errs.push('bad id '+t.id);
  if(ids.has(t.id))errs.push('dup id '+t.id);ids.add(t.id);
  for(const k of ['name','summary'])if(typeof t[k]!=='string'||!t[k])errs.push(t.id+' missing '+k);
  if(!Array.isArray(t.aliases))errs.push(t.id+' aliases not array');
  if(!TYPES.includes(t.type))errs.push(t.id+' bad type '+t.type);
  if(!['book','icespire'].includes(t.scope))errs.push(t.id+' bad scope');
  if(!['canon','proposal','deprecated'].includes(t.status))errs.push(t.id+' bad status');
  if(!Array.isArray(t.sources)||!t.sources.length)errs.push(t.id+' no sources');
  for(const s of t.sources||[])if(!fs.existsSync(path.join(repo,s)))errs.push(t.id+' missing source '+s);
  const allowed=['id','name','aliases','type','scope','status','summary','details','table','related','sources','images','links'];
  if(t.images!==undefined){if(!Array.isArray(t.images)||!t.images.length)errs.push(t.id+' images not a non-empty array');for(const im of t.images||[]){if(!im||typeof im.src!=='string'||!im.src){errs.push(t.id+' image without src');continue;}if(!fs.existsSync(path.join(repo,'codex',im.src)))errs.push(t.id+' missing image '+im.src);if(im.caption!==undefined&&typeof im.caption!=='string')errs.push(t.id+' bad caption');for(const k of Object.keys(im))if(!['src','caption'].includes(k))errs.push(t.id+' unknown image key '+k);}}
  for(const k of Object.keys(t))if(!allowed.includes(k))errs.push(t.id+' unknown key '+k);
}
for(const t of T)for(const r of t.related||[]){if(!ids.has(r))errs.push(t.id+' -> unknown related '+r);if(r===t.id)errs.push(t.id+' relates to itself');}
const c={};for(const t of T){c[t.type+'/'+t.scope]=(c[t.type+'/'+t.scope]||0)+1;}
const by=(k)=>T.reduce((a,t)=>(a[t[k]]=(a[t[k]]||0)+1,a),{});
console.log('entries',T.length);console.log(by('type'));console.log(by('scope'));console.log(by('status'));console.log(c);
console.log(errs.length?errs.join('\n'):'ALL CHECKS PASSED');process.exit(errs.length?1:0);
