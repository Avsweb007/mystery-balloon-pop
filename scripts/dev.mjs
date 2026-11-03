import http from 'node:http';
import {DatabaseSync} from 'node:sqlite';
import {readFileSync,mkdirSync} from 'node:fs';
mkdirSync('.sites-runtime',{recursive:true});
const db=new DatabaseSync('.sites-runtime/local.sqlite');db.exec('CREATE TABLE IF NOT EXISTS rooms(code TEXT PRIMARY KEY,data TEXT NOT NULL,version INTEGER NOT NULL DEFAULT 0,updated INTEGER NOT NULL)');
export const env={DB:{prepare(sql){
 return {bind(...v){
  return {
   async first(){return db.prepare(sql).get(...v)||null},
   async run(){const r=db.prepare(sql).run(...v);return {meta:{changes:Number(r.changes)}}}
  };
 }};
}}};
if(process.argv[1].endsWith('dev.mjs')){const p=process.argv.indexOf('--port');const port=p>=0?+process.argv[p+1]:4173;http.createServer(async(req,res)=>{try{const {default:worker}=await import('../worker/index.js?v='+Date.now());const body=req.method==='POST'?await new Promise(resolve=>{let s='';req.on('data',d=>s+=d);req.on('end',()=>resolve(s))}):undefined;const response=await worker.fetch(new Request('http://localhost'+req.url,{method:req.method,headers:req.headers,body}),env);res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()))}catch(e){res.writeHead(500);res.end(String(e))}}).listen(port,'0.0.0.0',()=>console.log('Game preview listening on '+port));}
