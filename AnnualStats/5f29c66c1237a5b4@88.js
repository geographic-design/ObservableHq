// https://observablehq.com/@smartforce/annual-stats@88
function _1(md){return(
md`# Annual Stats`
)}

function _src(){return(
["self", "public"]
)}

function _3(cfs_raw){return(
cfs_raw.filter(f => f.yr == 2019 && f.is_self == 0 && f.is_eug == 1)
)}

function _4(md){return(
md`### Data`
)}

function _fetch_years(){return(
[2018, 2019, 2020]
)}

function _url(){return(
window.location.origin.toUpperCase().includes("SHAREPOINT") ? 
  `https://coeugene.sharepoint.com/sites/SmartForce/Ops/CA/Ad%20Hoc%20Dashboards/annual_stats/` :
  `http://localhost:5000/ad_hoc/annual_stats/`
)}

function _7(md){return(
md`#### CFS Data`
)}

function _cfs_mapper(){return(
d => {
  Object.keys(d).forEach(k => {
    d[k] == "NULL" ? d[k] = null : d[k]
   })
  return d
}
)}

async function* _cfs_raw(fetch_years,url,d3,cfs_mapper)
{
  let data = []
  yield data
  for(let i = 0; i < fetch_years.length; i++) {
    let year = fetch_years[i]
    let file = `cfs_${year}.csv`
    let fetch_url = `${url}${file}`
    
    let ret = await d3.csv(fetch_url, d3.autoType)
        
    ret = ret.map(cfs_mapper)
    
    data = data.concat(ret)
    yield data
    
    

  }
  
}


function _d3(require){return(
require("d3@6")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof src")).define("viewof src", _src);
  main.variable(observer("src")).define("src", ["Generators", "viewof src"], (G, _) => G.input(_));
  main.variable(observer()).define(["cfs_raw"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer("fetch_years")).define("fetch_years", _fetch_years);
  main.variable(observer("url")).define("url", _url);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer("cfs_mapper")).define("cfs_mapper", _cfs_mapper);
  main.variable(observer("cfs_raw")).define("cfs_raw", ["fetch_years","url","d3","cfs_mapper"], _cfs_raw);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}
