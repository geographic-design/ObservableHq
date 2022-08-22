// https://observablehq.com/@smartforce/csi_v2@2717
import define1 from "./e93997d5089d7165@2303.js";

function _1(md){return(
md`# CSI_v2`
)}

function _3(md){return(
md`### # Params`
)}

function __default(rlog_lu,city_options,cad_src_options){return(
{
  "Annual Report": {
    years: ["2019"],
    city: ["Inside"],
    close_x: ["DUP", "EERR", "TEST"],
    nature_x: ["TEST"],
    cad_src:  ["PUBLIC", "REPORT ONLY"],
    cahoot_prime: "Include",
    rlog: rlog_lu.map(d => d.type),
    rlog_aon: "OR",
  },
  "CSI Metrics": {
    years: ["2017", "2018", "2019"],
    city: ["Inside"],
    close_x: ["DUP", "EERR", "TEST"],
    nature_x: ["TEST"],
    cad_src:  ["PUBLIC", "REPORT ONLY"],
    cahoot_prime: "Exclude",
    rlog: rlog_lu.map(d => d.type),
    rlog_aon: "OR",
  },
  Test: {
    years: ["2017", "2018", "2019"],
    city: city_options,
    close_x: [],
    nature_x: [],
    cad_src:  cad_src_options,
    cahoot_prime: "Include",
    rlog: rlog_lu.map(d => d.type),
    rlog_aon: "OR",
  }
}
)}

function _5(_default,template){return(
_default[template]
)}

function _6(cfs_data){return(
cfs_data.filter(f => [19083510, 19278842].includes(f.inci_id))
)}

function _7(params){return(
params
)}

async function* _fo(Promises)
{
  let i = 0
  while(true) {
    yield i % 2 == 0 ? .25 : .75
    await Promises.delay(500)
    i++
  }
  
}


function _filter_warning(d3,width,is_cad_src_filter,is_cahoot_filter,is_city_filter,is_closure_filter,is_desg_filter,is_nature_filter,is_rlog_filter,params,fo,cfs_data,cfs_filtered)
{

           
  let svg = d3.create("svg")
    .attr("width", width * .90)
    .attr("height", 55)
  
  let m = {
    t: 10, b: 10, l: 10, r: 10 
    
  }
  
  let w = 150
  
  let g = svg.append("g")
    .attr("transform", `translate(${m.l}, ${m.t})`)
    .attr("style", "dominant-baseline: central;")
  
  let filters = {
     cad_src: {value: is_cad_src_filter, title: "CAD Source"},
     cahoot: {value: is_cahoot_filter, title: "Cahoots Prime"},
     city: {value: is_city_filter, title: "City Limits"},
     closure: {value: is_closure_filter, title: "Closure"},
     desg: {value: is_desg_filter, title: "Desg"},
     nature: {value: is_nature_filter, title: "Nature"},
     rlog: {value: is_rlog_filter, title: "Rlog"},
     //year: {value: is_year_filter, title: "Year"},
  }
  
  
  let data = Object.keys(filters).reduce((a, k) => { filters[k] && filters[k].value ? a.push( filters[k] ) : null; return a}, [])
  

  let yr_str = params ? params.years.length == 1 ? params.years : params.years.length == 2 ? params.years.join(", ") : `${params.years[0]}-${params.years.slice(-1)[0]}` : ''
    
  
  g.append("text")
    .attr("font-size", 16)
    .text(`${yr_str} Dataset`)
    
  g.append("rect")
    .attr("y", 20)
    .attr("width", 110)
    .attr("fill-opacity", data.length == 0 ? .5 : fo != .75 ? .75 : .25)
    .attr("height", 20)
    .attr("fill", data.length == 0 ? "green" : "orange")
    .transition()
    .duration(500)
    .attr("fill-opacity", data.length == 0 ? .5 : fo)
    .attr("rx", 3)
    
    
  g.append("text")
    .text(`${data.length ? "" : "No"} Filters Applied`)
    .attr("font-size", 12)
    .attr("x", 55)
    .attr("text-anchor", "middle")
    .attr("y", 10 + 20)
    
    let yr_cnt = cfs_data.filter(f => params && params.years.includes(f.year)).length
    let flt_cnt = cfs_filtered.length

  g.append("text")
    .text( `${flt_cnt} Records in Dataset`)
    .attr("font-size", 12)
    .attr("x", 120)
    .attr("text-anchor", "start")
    .attr("y", 10 + (data.length ? 13 : 20 ))
  
  
  g.append("text")
    .text( data.length ? `(${yr_cnt - flt_cnt} records filtered out)` : '')
    .attr("font-size", 12)
    .attr("font-style", "italic")
    .attr("x", 120)
    .attr("text-anchor", "start")
    .attr("y", 10 + 27)
  

  
  
  
  return svg.node()

  
}


function _params(){return(
null
)}

function _11(submit){return(
submit
)}

function _submit(d3,year_input,city_input,close_exclude,nature_exclude,cad_src_input,cahoot_prime,rlog_input,rlog_aon,desg_input,desg_aon,$0)
{

  let i = 0
  let div = d3.create("div")
  let btn = div.append("input")
    .attr("type", "submit")
    .attr("value", "Submit")
    .on("click", click)
  


  function click() {
    let tbl = d3.select("#summary-table-div")
    if( i > 0 ) { tbl.style("display", "block") }
      
    tbl.style("opacity", i > 0 ? "1" : "0.5")

    
    let params = {
      years: year_input.map(d => +d), 
      city: city_input,
      close_x: close_exclude,
      nature_x: nature_exclude,
      cad_src: cad_src_input,
      cah_prime: cahoot_prime,
      rlog: rlog_input,
      rlog_aon: rlog_aon,
      desg: desg_input,
      desg_aon: desg_aon,
    }
    if(i == 1) { $0.value = params }
    btn.style("display", i == 0 ? "block" : "none")
    div.node().value = i
    div.node().dispatchEvent(new CustomEvent("input"))
    i++
  }
  
  click()
  //btn.style("display", "block")
  
  return div.node()
}


function _template(select,_default){return(
select({
  title: "Template",
  options: Object.keys(_default),
  value: "CSI Metrics",
  placeholder: "Search for filter template . . ."
})
)}

function _is_desg_filter(params,desg_options){return(
params ? params.desg.length != desg_options.length : false
)}

function _desg_options(desg_lu){return(
Object.keys(desg_lu).reduce((a, k) => { !a.includes(desg_lu[k]) ? a.push(desg_lu[k]) : null; return a;}, [])
  .sort()
  .concat(["OTHER", "NO DESIGNATOR"])
)}

function _desg_input(desg_options,desg_aon,checkbox,radio)
{
  
  let obj = {
    title: "Unit Designators",
    //description: "As a child, which vegetables did you refuse to eat?",
    options: desg_options,
    value: 
      desg_aon == "AND" ? [] :
      desg_aon == "NOT" ? ["NO DESIGNATOR"] :
      desg_aon == "ONLY" ? "PATROL" :
      desg_options
    //multiple: true
  }
  
  return desg_aon != "ONLY" ? checkbox(obj) : radio(obj)//return select(obj)
}


function _desg_aon(radio){return(
radio({
  options: ["AND", "OR", "NOT", "ONLY"],
  value: "OR"
})
)}

function _rlog_options(rlog_lu){return(
rlog_lu.map(d => { return {label: d.descrip, value: d.type}})
)}

function _is_rlog_filter(params,rlog_options){return(
params ? params.rlog.length != rlog_options.length : false
)}

function _rlog_input(rlog_options,rlog_aon,_default,template,checkbox,radio)
{
  let obj = {
    title: "Radio/Event Log Entries",
    //description: "Please select your favorite colors",
    options: rlog_options,
    value: 
      rlog_aon == "AND" ? ["D", "A"] :
      rlog_aon == "NOT" ? ["NIL"] :
      _default[template].rlog,
    submit: false
  
  }
  return rlog_aon != "ONLY" ? checkbox(obj) : radio(obj)
  
}


function _rlog_aon(radio){return(
radio({
  options: ["AND", "OR", "NOT", "ONLY"],
  value: "OR"
})
)}

function _is_year_filter(params,year_options){return(
params ? params.years.length != year_options.length : false
)}

function _year_options(dir_lst){return(
dir_lst.reduce((a, v) => { v.type == "cfs" ? a.push(v.year.toString()) : null; return a; }, [])
)}

function _year_input(checkbox,year_options,_default,template){return(
checkbox({
  title: "Years",
  //description: "Please select your favorite colors",
  options: year_options,
  value: _default[template].years,
  submit: false
})
)}

function _is_city_filter(params,city_options){return(
params ? params.city.length != city_options.length : false
)}

function _city_options(){return(
["Inside", "Outside"]
)}

function _city_input(checkbox,city_options,_default,template){return(
checkbox({
  title: 'City Limits',
  //description: 'Please selec["Inside", "Outside"]t your preferred contact method',
  options: city_options,
  value: _default[template].city,
})
)}

function _is_closure_filter(params){return(
params ? params.close_x.length > 0 : false
)}

function _close_exclude(checkbox,_default,template){return(
checkbox({
  title: "Closures to Exclude",
  //description: "Please select your favorite colors",
  options: ["ACC", "DIS", "DUP", "EERR", "TEST", "XUTA"].sort(),
  value: _default[template].close_x,
  submit: false
})
)}

function _is_nature_filter(params){return(
params ?  params.nature_x.length > 0 : false
)}

function _nature_exclude(checkbox,_default,template){return(
checkbox({
  title: "Natures to Exclude",
  //description: "Please select your favorite colors",
  options: ["TEST", "NULL"].sort(),
  value: _default[template].nature_x,
  submit: false
})
)}

function _is_cahoot_filter(params){return(
params ? params.cah_prime == "Exclude" : false
)}

function _cahoot_prime(radio,_default,template){return(
radio({
  title: 'CAHOOTS as Prime Unit',
  options: ['Exclude', 'Include'],
  value: _default[template].cahoot_prime,
})
)}

function _is_cad_src_filter(params,cad_src_options){return(
params ? params.cad_src.length != cad_src_options.length : false
)}

function _cad_src_options(){return(
["SELF", "PUBLIC", "REPORT ONLY"].sort()
)}

function _cad_src_input(checkbox,cad_src_options,_default,template){return(
checkbox({
  title: "CAD Call Source",
  //description: "Please select your favorite colors",
  options: cad_src_options,
  value: _default[template].cad_src,
  submit: false
})
)}

function _38(md){return(
md`### # Summary`
)}

function _39(summary_data){return(
summary_data
)}

function _summary_nest(select){return(
select({
  title: "Group By",
  options: [
    "Nature",
    "Priority",
    "Closure",
    "Initial Call Source",
    "Prime Desig",
    "First Desig",
  ],
  value: "Nature",
  placeholder: "Search for filter template . . ."
})
)}

function _summary_sort(select){return(
select({
  title: "Sort By",
  options: [
    "Count",
    "Time to Dispatch",
    "Time to Arrive",
    "Dispatch Ratio",
    "Arrive Ratio",
    "Unit Count",
    "Officer Count",
    "Officer/Unit Ratio",
    //"Cancel Ratio",
  ],
  value: "Count",
  //placeholder: "Search for filter template . . ."
})
)}

function _summary_sort_order(radio,summary_sort){return(
radio({
  title: "Sort Order",
  options: [
    "ASC", "DESC"
  ],
  value: summary_sort == "Count" || summary_sort.includes("Ratio") || ["Unit Count", "Officer Count"].includes(summary_sort) ? "ASC" : "DESC"
})
)}

function _summary_top_n(slider,d3)
{
  let len = 100//summary_data.length
  return slider({
    min: 1, 
    max: len, 
    step: 1, 
    value: d3.min([10, len]),
    //title: "Integers", 
    description: `Top N from one through ${len}`,
    //submit: true
  })
}


function _44(summary_keys){return(
summary_keys
)}

function* _summary_keys(summary_data,html)
{
  let lst =  [`<option value="ALL">`].concat(summary_data.map(d => `<option value="${d.key}">`).sort()).join("\n      ")
  //return lst
  let ele = html`<form>
  <input list="sum-keys" name="keys" id="sum-keys-lst">
  <datalist id="sum-keys">
    ${lst}
  </datalist>
</form>`
 

  yield ele

}


function _csv_download(summary_sorted,summary_top_n,summary_nest,cfs_filtered,getMinutes,DOM,serialize_csv,html)
{
  let csv_data = summary_sorted.slice(0, summary_top_n).map(d => {
    let r = {};
    r[summary_nest] = d.key;
    r["Count"] = d.values.length;
    r["% of All CFS"] = `${((d.values.length / cfs_filtered.length) * 100).toFixed(1)}%`;
    r[summary_nest == "Priority" ? "Freq Nature" : "Freq Pri"] = summary_nest == "Priority" ? d.natures[0].key : d.priorities[0].key;
    r["Freq Desig"] = d.first_desgs.length ? d.first_desgs[0].key : ''
    r["% Disp'd"] = `${(d.disp_ratio * 100).toFixed(1)}%`;
    r["Avg Rcv to Disp"] =  getMinutes(d.avg_disp);
    r["% Arrv'd"] = `${(d.arrv_ratio * 100).toFixed(1)}%`;
    r[ "Avg Rcv to Arrv" ] =  getMinutes(d.avg_arrv);
    r["Avg # Units"] = d.unit_cnt.toFixed(1);
    r["Avg # Ofrs"] = d.ofc_cnt.toFixed(1);
  
    return r;
  })
  //return csv_data
  return cfs_filtered.length > 0 ? DOM.download(serialize_csv(csv_data), 'csi.csv', "Download CSV") : html`<span></span>`
}


function* _summary_table(d3,summary_nest,summary_sorted,summary_top_n,$0,cfs_filtered,getMinutes,summary_all_other,summary_total,summary_data)
{
  let highlight = "#ffffd8";
  let div = d3.create("div")
  let table = div.append("table")
    .style("cursor", "pointer")
  
  let thead = table.append("thead")
    .append("tr")
  
  let th = thead.selectAll("th")
    .data([
      summary_nest, 
      "Count", 
      "% of All CFS",
      summary_nest == "Priority" ? "Freq Nature" : "Freq Pri", 
      "Freq Desig", 
      "% Disp'd",
      "Avg Rcv to Disp", 
      "% Arrv'd",
      "Avg Rcv to Arrv", 
      "Avg # Units", 
      "Avg # Ofrs"
    ])
  
  th.enter()
    .append("th")
    .html(d => d)
  

  
  let tbody = table.append("tbody")
  let tr = tbody.selectAll("tr")
    .data(summary_sorted.slice(0, summary_top_n))
  
  tr = tr.enter()
    .append("tr")
    .attr("id", (d, i) => `st-${i}`)
    .on("click", d => {
        $0.value = true
        d3.select("#detail-modal")
          .style("display", "block")
        div.node().value = d
        div.node().dispatchEvent(new CustomEvent("input"))
    })
    .on("mouseover", mouseover)
    .on("mouseout", mouseout)
  
  let td = tr.selectAll("td")
    .data(d => [
      d.key, 
      d.values.length,
      `${((d.values.length / cfs_filtered.length) * 100).toFixed(1)}%`,
      summary_nest == "Priority" ? d.natures[0].key : d.priorities[0].key,
      d.first_desgs.length ? d.first_desgs[0].key : '',
      `${(d.disp_ratio * 100).toFixed(1)}%`,
      getMinutes(d.avg_disp),
      `${(d.arrv_ratio * 100).toFixed(1)}%`,
      getMinutes(d.avg_arrv),
      d.unit_cnt.toFixed(1),
      d.ofc_cnt.toFixed(1),
    ])
  
  td.enter()
    .append("td")
    .html(d => d)
  
  let all = tbody.append("tr")
    .on("click", d => {
        $0.value = true
        d3.select("#detail-modal")
          .style("display", "block")
        div.node().value = summary_all_other
        div.node().dispatchEvent(new CustomEvent("input"))
    })
    .on("mouseover", function(d) {
      d3.select(this)
        .style("background", highlight)
      $0.value = true
      div.node().value = summary_all_other
      div.node().dispatchEvent(new CustomEvent("input"))
   })
   .on("mouseout", mouseout)
  
  
  all.selectAll("td")
    .data(() => {
      let d = summary_all_other
      return [
      d.key, 
      d.values.length,
      `${((d.values.length / cfs_filtered.length) * 100).toFixed(1)}%`,
      summary_nest == "Priority" && d.natures.length > 0 ? d.natures[0].key : d.priorities.length > 0 ? d.priorities[0].key : null,
      d.first_desgs.length ? d.first_desgs[0].key : '',
      `${(d.disp_ratio * 100).toFixed(1)}%`,
      getMinutes(d.avg_disp),
      `${(d.arrv_ratio * 100).toFixed(1)}%`,
      getMinutes(d.avg_arrv),
      d.unit_cnt ? d.unit_cnt.toFixed(1) : null,
      d.ofc_cnt ? d.ofc_cnt.toFixed(1) : null,
    ]})
    .enter()
    .append("td")
    .html(d => d)
  
  
  let tfoot = table.append("tfoot")
    .append("tr")
    .on("click", d => {
        $0.value = true
        d3.select("#detail-modal")
          .style("display", "block")
        div.node().value = summary_total
        div.node().dispatchEvent(new CustomEvent("input"))
    })
    .on("mouseover", function(d) {
      d3.select(this)
        .style("background", highlight)
      $0.value = true
      div.node().value = summary_total
      div.node().dispatchEvent(new CustomEvent("input"))
   })
   .on("mouseout", mouseout)
  
  tfoot.selectAll("th")
     .data(() => {
      let d = summary_total
      return [
      d.key, 
      d.values.length,
      `${((d.values.length / cfs_filtered.length) * 100).toFixed(1)}%`,
      summary_nest == "Priority" && d.natures.length > 0 ? d.natures[0].key : d.priorities.length > 0 ? d.priorities[0].key : null,
      d.first_desgs.length ? d.first_desgs[0].key : '',
      `${(d.disp_ratio * 100).toFixed(1)}%`,
      getMinutes(d.avg_disp),
      `${(d.arrv_ratio * 100).toFixed(1)}%`,
      getMinutes(d.avg_arrv),
      d.unit_cnt ? d.unit_cnt.toFixed(1) : null,
      d.ofc_cnt ? d.ofc_cnt.toFixed(1) : null,
    ]})
    .enter()
    .append("th")
    .html(d => d)
  
  function mouseout() {
      d3.select(this)
        .style("background", "#ffffff")
      $0.value = false 
  }
  
  function mouseover(d) {
    d3.select(this)
      .style("background", highlight)
    $0.value = true
    div.node().value = d
    div.node().dispatchEvent(new CustomEvent("input"))
  }
  
  yield div.node()
  
  div.node().value = summary_data[0]
}


function _summary_open(){return(
false
)}

function _summary_all_other(summary_data,summary_sorted,summary_top_n,summary_mapper){return(
[summary_data.filter(f => !summary_sorted.slice(0, summary_top_n).map(d => d.key).includes(f.key)).reduce((a, v, i) => {a.values = a.values.concat(v.values); a.key = `ALL OTHER (${i+1} Cats)`; return a},{key: "", values: []})]
.map(summary_mapper)[0]
)}

function _summary_total(cfs_filtered,summary_mapper){return(
[{key: "TOTAL", values: cfs_filtered}].map(summary_mapper)[0]
)}

function _summary_data(d3,summary_nest,cfs_filtered,summary_mapper){return(
d3.nest()
  .key(d => {
    switch(summary_nest) {
      case "Nature": return d.nature_descript; break;
      case "Priority": return `Priority ${d.pri}`; break;
      case "Closure": return d.close_descript; break;
      case "Initial Call Source": 
        return d.init_src && ["SPAWN", "PUBLIC"].includes(d.init_src.type) ? `${d.init_src.type} ${d.init_src.src}`.trim() : d.init_src ? d.init_src.type : "OTHER"; break;
      case "First Desig": return d.first_desg; break;
      case "Prime Desig": return d.prime_desg; break;
      
    }
  })
  .entries(cfs_filtered)
  .map(summary_mapper)
)}

function _summary_mapper(d3){return(
d => {
    d.avg_disp = d3.mean(d.values, d => d.first_disp ? d.first_disp.delta : null)
    d.avg_arrv = d3.mean(d.values, d => d.first_arrv ? d.first_arrv.delta : null)
    
    d.disp_ratio = d.values.filter(f => f.first_disp).length / d.values.length
    d.arrv_ratio = d.values.filter(f => f.first_arrv).length / d.values.length

    d.unit_cnt = d3.mean(d.values.map(d => d.units ? Object.keys(d.units).length : 0))
    d.ofc_cnt = d3.mean(d.values.map(d => d.units ? Object.keys(d.units).reduce((a, v) => a += d.units[v].length, 0) : 0))
    d.ofc_unit_ratio = d3.max([0, d.ofc_cnt / d.unit_cnt])
    
    d.first_desgs = d3.nest()
      .key(d => d.first_desg)
      .entries(d.values.filter(f => f.first_desg))
      .sort((a, b) => b.values.length - a.values.length)
  
    d.prime_desgs = d3.nest()
      .key(d => d.prime_desg)
      .entries(d.values.filter(f => f.prime_desg))
      .sort((a, b) => b.values.length - a.values.length)
    
    d.dispd = d3.nest()
      .key(d => d.first_disp ? "Disp'd" : "Not Disp'd")
      .entries(d.values)
  
    d.natures = d3.nest()
      .key(d => d.nature_descript)
      .entries(d.values)
      .sort((a, b) => b.values.length - a.values.length)
    d.priorities = d3.nest()
      .key(d => d.pri)
      .entries(d.values)
      .sort((a, b) => b.values.length - a.values.length)
    d.closures = d3.nest()
      .key(d => d.close_descript)
      .entries(d.values)
      .sort((a, b) => b.values.length - a.values.length)
    return d
  }
)}

function _summary_sorted(summary_data,summary_sort_order,summary_sort){return(
summary_data.sort((a, b) => b.values.length - a.values.length)
    .sort((a, b) => {
    if(summary_sort_order == "DESC") {
      let t = a;
      a = b
      b = t
    }
    switch(summary_sort) {
      case "Count": return b.values.length - a.values.length; break;
      case "Time to Dispatch": return b.avg_disp - a.avg_disp; break;
      case "Time to Arrive": return b.avg_arrv - a.avg_arrv; break;
      case "Dispatch Ratio": return b.disp_ratio - a.disp_ratio; break;
      case "Arrive Ratio": return b.arrv_ratio - a.arrv_ratio; break;
      case "Unit Count": return b.unit_cnt - a.unit_cnt; break;
      case "Officer Count": return b.ofc_cnt - a.ofc_cnt; break;
      case "Officer/Unit Ratio": return b.ofc_cnt - a.ofc_cnt; break;
      //case "Cancel Ratio": return b.canc_ratio - a.canc_ratio; break;
    }
  })
)}

function _56(md){return(
md` ### # Details`
)}

function _detail_nav(summary_table,html,d3,summary_nest,$0)
{
  if(summary_table.values.length == 0 || summary_table == null) { return html`` }
  let div = d3.create("div")
    .style("font-weight", "bold")
  
  let nav = div.append("div")
     .style("padding", "5px")
  
  nav.append("span")
    //.style("color", "#ffffff")
    .style("font-size", "16px")
    .html(`${summary_nest} ${summary_table.key} <i>(${summary_table.values.length} CFS)</>`)
  


 nav.append("span")
    .style("color", "#000000")
    .html("X")
    .attr("class", "close")
    .on("click", function() {
      $0.value = false
      d3.select("#detail-modal")
         .style("display", "none")
  })
  
  return div.node()
}


function _detail_nest(select,summary_table,summary_nest){return(
select({
  title: "Group By",
  options: [
    {label: "Nature", value: "natures"},
    {label: "Priority", value: "priorities"},
    {label: "Closure", value: "closures"},
    //detail_nest"Initial Call Source" : 
    //detail_nest == "Prime Desig",
    {label: "First Desig", value: "first_desgs"},
    {label: "Dispd", value: "dispd"},
  ].filter(f => {
    if(summary_table.key == "TOTAL") { return f }
    if(summary_table.key.includes("ALL OTHER")) { return f }
    if(f.label != summary_nest) { return f }
  }),
  value: "Nature",
  placeholder: "Search for filter template . . ."
})
)}

function _detail_sql_download(summary_table,DOM)
{
  let ids = summary_table.values.map(d => `    '${d.inci_id}'`).join(",\n")
  let sql = `
  SELECT i.inci_id, i.nature, i.agency
  FROM CADReporting.dbo.inmain i 
  WHERE inci_id in (
  ${ids}
  )`
  return DOM.download(new Blob([sql], {type: "text/plain"}), `${summary_table.key}.sql`, `${summary_table.key} SQL`)
  
}


function _detail_chart(summary_table,detail_nest,d3)
{
  let data = summary_table[detail_nest] 
  let w = 700

  let top_n = window.location.host == "smartforce.static.observableusercontent.com" ?  10 : data.length 
  
  let bh = 30
  let h = bh * top_n
  
  let svg = d3.create("svg")
    .attr("height", h)
    .attr("width", w)
    .style("font-family", "sans-serif")
    .style("font-size", 12)
  
  
  let scale = d3.scaleLinear()
    .domain([0, data[0].values.length])
    .range([0, w - 300])
    
  
  let g = svg.append("g")
  
  let bg = g.selectAll(".bg")
    .data(data.slice(0, top_n))
  
  bg = bg.enter()
    .append("g")
    .attr("transform", (d, i) => `translate(200, ${i * bh})`)
  
  bg.append("rect")
    .attr("width", d => scale(d.values.length))
    .attr("height", bh - 10)
    .attr("fill", "#aaaaaa")
  
  bg.append("text")
    .text(d => d.key.slice(0, 25))
    .attr("text-anchor", "end")
    .attr("dominant-baseline", "central")
    .attr("y", (bh - 10) / 2)
    .attr("x", -10)
  
  bg.append("text")
    .text(d => `${d.values.length} (${((d.values.length / summary_table.values.length) * 100).toFixed(1)}%)`)
    .attr("text-anchor", "start")
    .attr("dominant-baseline", "central")
    .attr("y", (bh - 10) / 2)
    .attr("x", d => scale(d.values.length) + 10)
  
  svg.node().value = data
  return svg.node()
}


function _61(summary_nest){return(
summary_nest
)}

function _62(md){return(
md`### # Detail Call List`
)}

function _detail_table(detail_chart,summary_nest,d3)
{
  let data = detail_chart.reduce((a, v) => {
    a = a.concat(v.values.map(d => {
      let r = {}
      r["Incident ID"] = d.inci_id
      summary_nest != "Nature" ?  r["Nature"] = d.nature_descript : null
      summary_nest != "Priority" ? r["Priority"] = d.pri : null
      summary_nest != "Closure" ? r["Closure"] = d.close_descript : null
      r["Init DT"] = d._start.toLocaleString()
      r["Desgs"] = d.desgs ? d.desgs.join(",") : ""
      r["Activity"] = d.trans ? Object.keys(d.trans) : ""
      return r
    }))
    return a
  }, []).sort((a, b) => a.inci_id - b.inci_id)
  
  
  
  
  let div = d3.create("div")
  let table = div.append("table")
  

  
  
  let thead = table.append("thead")
    .append("tr")
  
  let th = thead.selectAll("th")
    .data(Object.keys(data[0]))
  
  th = th.enter()
    .append("th")
    .html(d => d)
  
  
  
  
  
  
  let tbody = table.append("tbody")
  
  let tr = tbody.selectAll("tr")
    .data(data.slice(0, window.location.host == "smartforce.static.observableusercontent.com" ?  10 : 50000))
  
  tr = tr.enter()
    .append("tr")
  
  let td = tr.selectAll("td")
    .data(d => Object.keys(d).map(k => d[k]))
  
  td.enter()
    .append("td")
    .html(d => d )
  
  return div.node()
  
  
}


function _64(md){return(
md`### # Year - Area`
)}

function _area_chart(summary_table,html,d3,cfs_filtered,summary_open,width)
{
  if (!summary_table) {
    return html`<span></span>` 
  }
  
  let all = d3.nest()
    .key(d => `${d._start.getFullYear()}-${`0${d._start.getMonth() + 1}`.slice(-2)}-01`)
    .rollup(d => d.length)
    .entries(cfs_filtered)
    .map(d => { return {date: new Date(d.key), year: +d.key.slice(0, 4), value: d.value}})
    
  
  let filt = d3.nest()
    .key(d => `${d._start.getFullYear()}-${`0${d._start.getMonth() + 1}`.slice(-2)}-01`)
    .rollup(d => d.length)
    .entries(summary_open ? summary_table && summary_table.values : cfs_filtered)
    .map(d => { return {date: new Date(d.key), year: +d.key.slice(0, 4), value: d.value}})
    .sort((a, b) => a.date - b.date)
  
  let yearly = d3.nest()
    .key(d => d.year)
    .entries(summary_open ? summary_table.values : cfs_filtered)
    .reduce((a, d, i, s) => {
      let r = {}
      r.date = new Date(`${d.key}-07-01`)
      r.values = d.values
      r.diff = i > 0 && s[i -1].values.length > 0 ? r.old = (d.values.length - s[i -1].values.length) / s[i -1].values.length : null
      a.push(r)
      return a
    }, [])
  
 

  
    
  let w = width * .9
  let h = 200
  let m = {t: 10, b: 50, l: 30, r: 10}
  
  let r = h / 4
  
  let x_scale = d3.scaleTime()
    .domain(d3.extent(all, d => d.date))
    .range([m.l, w - m.r])
  
  let y_scale = d3.scaleLinear()
    .domain([0, d3.max(filt, d => d.value)]).nice()
    .range([h - m.b, m.t])
  
  let r_scale = d3.scaleLinear()
    .domain([0, d3.max(yearly, d => d.values.length)])
    .range([0, r])
  
  let x_axis = g => g
    .attr("transform", `translate(${m.l},${h - m.b})`)
    .call(d3.axisBottom(x_scale).ticks(w / 80).tickSizeOuter(0))
  
  let curve = d3.curveLinear
  
  let area = d3.area()
    .curve(curve)
    .x(d => x_scale(d.date))
    .y0(y_scale(0))
    .y1(d => y_scale(d.value))
  
  let svg = d3.create("svg")
    .attr("width", w)
    .attr("height", h)
  
  let title = svg.append("g")
    .attr("transform", `translate(${m.l}, ${5})`)
    .style("dominant-baseline", "hanging")
    .style("text-anchor", "start")
   
  title.append("text")
    .text(summary_open ? summary_table && summary_table.key : "TOTAL")
  
  
  let g = svg.append("g")
    .attr("transform", `translate(${m.l}, ${0})`)



  g.append("path")
      .datum(filt)
      .attr("fill", "#eeeeee")
      .attr("stroke", "#bbbbbb")
      .attr("d", area);
 
  let y = g.selectAll(".y")
    .data(yearly)
  
  y = y.enter()
    .append("g")
    .attr("class", "y")
    .attr("transform", d => `translate(0, ${y_scale.range()[0] - 20 - r_scale(d.values.length) })`)
  
  y.append("circle")
    .attr("r", d => r_scale(d.values.length))
    .attr("fill", "#dddddd")
    .attr("fill-opacity", .5)
    .attr("cx", d => x_scale(d.date))
  
  y.append("circle")
    .attr("r", d => r_scale(d.values.length) * .8)
    .attr("fill", "#ffffff")
    .attr("fill-opacity", .5)
    .attr("cx", d => x_scale(d.date))
  
  
  let txt = y.selectAll("text")
    .data( d => [
      {txt: d.date.getFullYear(), x: x_scale(d.date), s: 14},
      {txt: d.diff ? `${d.diff > 0 ? "+" : "" }${(d.diff * 100).toFixed(1)}% from ${d.date.getFullYear() -1}` : '--', x: x_scale(d.date), s: 12}, 
      {txt: `${d.values.length} CFS`, x: x_scale(d.date), s: 14}, 
    ])
  
  txt.enter()
    .append("text")
    .attr("x", d => d.x)
    .attr("y", (d, i) => -25 + (i * 25))
    .style("dominant-baseline", "central")
    .style("text-anchor", "middle")
    .style("font-size", d => d.s)
    .text(d => d.txt)
  
  /*
  
  y.append("text")
    .attr("y", - 10)
    .attr("x", d => x_scale(d.date))
    .style("dominant-baseline", "central")
    .style("text-anchor", "middle")
    .text(d => d.values.length)
  
  y.append("text")
    .attr("y", + 10)
    .attr("x", d => x_scale(d.date))
    .style("dominant-baseline", "central")
    .style("text-anchor", "middle")
    .style("font-size", 13)
    .text(d => d.diff ? `${(d.diff * 100).toFixed(1)}%` : '--')
  
   y.append("text")
    .attr("y", - 25)
    .attr("x", d => x_scale(d.date))
    .style("dominant-baseline", "central")
    .style("text-anchor", "middle")
    .style("font-size", 13)
    .text(d => d.date.getFullYear())
  */
  g.selectAll(".l2")
    .data(yearly.filter((d, i) => i != 0))
    .enter()
    .append("line")
    .attr("class", "l2")
    .attr("x1", (d, i) => x_scale(yearly[i].date)) 
    .attr("x2", (d, i) => x_scale(yearly[i + 1].date)) 
    .attr("y1", (d, i) => y_scale.range()[0] - 20 - (r_scale(yearly[i].values.length) * 2) )
    .attr("y2", (d, i) => y_scale.range()[0] - 20 - (r_scale(yearly[i + 1].values.length) * 2) )
    .attr("stroke-width", 2)
    .attr("stroke", "#aaaaaa")
    .attr("stroke-opacity", .5)
    .attr("stroke-dasharray", "4")
  
  


  
  
    
  svg.append("g")
    .call(x_axis);
    
  
  
  
  return svg.node()
}


function _66(md){return(
md`### # Filter`
)}

function _cfs_filtered(cfs_data,cfs_filter){return(
cfs_data.filter(cfs_filter)
)}

function _cfs_filter(params){return(
f => {
  if(params) { 
    let flag = 0

    flag += !params.years.includes(f.year)
    
    flag += params.city == "Inside" && f.city != "EUG"
    flag += params.city == "Outside" && f.city == "EUG"
    
    flag += params.close_x.includes(f.close_code)
    
    flag += params.nature_x.includes("NULL") && !f.nature_code
    flag += params.nature_x.includes("TEST") && f.nature_descript && f.nature_descript.includes("TEST")
    
    flag += params.cah_prime.includes("Exclude") && f.prime_desg && f.prime_desg == "CAHOOTS"
    
    let cad_src = f.cad_src == "SELF" ? "SELF" : 
      f.cad_src == "RPTO" ? "REPORT ONLY" : "PUBLIC"
    flag += !params.cad_src.includes(cad_src) 
    
    /**** RLOG ****/
    let trans = f.trans ? Object.keys(f.trans) : ["NIL"]
    let t_flags = trans.reduce((a, v, i, s) => {
      a.OR = params.rlog.includes(v) ? 0 : a.OR
      a.NOT = params.rlog.includes(v) ? 1 : a.NOT
      a.AND += params.rlog.includes(v)
      if(i + 1 == s.length) {  
          a.AND = a.AND == params.rlog.length ? 0 : 1
          a.ONLY = v == params.rlog && s.length == 1 ? 0 : 1
      }
      return a
    }, {AND: 0, OR: 1, NOT: 0, ONLY: 0})

    flag += t_flags[params.rlog_aon]
        
    
    /**** DESG ****/
    let desgs = f.desgs ? f.desgs : ["NO DESIGNATOR"]
    
    let d_flags = desgs.reduce((a, v, i, s) => {
      a.OR = params.desg.includes(v) ? 0 : a.OR
      a.NOT = params.desg.includes(v) ? 1 : a.NOT
      a.AND += params.desg.includes(v)
      if(i + 1 == s.length) {  
          a.AND = a.AND == params.desg.length ? 0 : 1
          a.ONLY = v == params.desg && s.length == 1 ? 0 : 1
      } 
      return a
    }, {AND: 0, OR: 1, NOT: 0, ONLY: 0})

    flag += d_flags[params.desg_aon]
    


    if(flag == 0) { return f }
  } 
  
  
  

}
)}

async function _nat2agcy(fetchFile)
{
  let data = await fetchFile("nat2agcy.csv")
  return data.reduce((a, v) => {
    a[v.nature_id] = v
    return a
  }, {})
}


function _70(md){return(
md`### # Rlog`
)}

async function _rlog_lu(fetchFile)
{
  let data = await fetchFile("rlog.csv")
  
  return data.map(d => {
   //d.units = d.units ? d.units.split(",") : []

    return d
  }).concat([{descrip: "No Log Entries", type: "NIL"}])
}


function _72(md){return(
md`### # Desg`
)}

function _getDesig(desg_lu){return(
function getDesig(u) {
  let key = u.slice(0, 1) >= '0' && u.slice(0, 1) <= '9' ? u.slice(1, 2) : u.slice(0, 3)
  let desg = desg_lu[key]
  return desg ? desg : `OTHER (${u})`
}
)}

function _desg_lu(){return(
{

  "CAH":  "CAHOOTS",
  "AWO": "AWO",
  "A": "PATROL", 
  "B": "PATROL", 
  "C": "AWO",
  "CMD": "PATROL (CMD)",
  "D": "AIRPORT",
  "E": "PATROL", 
  "F": "BIKE",
  "G": "MCI",
  "H": "PARK",
  "J": "CAHOOTS",
  "K": "K-9 UNIT",
  "L": "EVIDENCE",
  "M": "TSU",
  "P": "SRO",
  "R": "CSO", //CRIME PREVENTION UNIT",
  "S": "SPD",
  "T": "DUII",
  "U": "PATROL (RECRUIT)",
  "V": "SCU",
  "W": "CSO",
  "X": "PATROL (SGT)",
  "Y": "DETECTIVE",
  "Z": "PATROL (DETACHED)"
}
)}

function _75(md){return(
md`### # Fetch`
)}

function _remote_url(){return(
`https://coeugene.sharepoint.com/sites/SmartForce/Ops/CA/Ad%20Hoc%20Dashboards/csi`
)}

function _sp_flag(){return(
window.location.hostname.toUpperCase().indexOf("SHAREPOINT") < 0 ? false : true
)}

function _local_url(){return(
`http://localhost:5000/csi`
)}

function _fetchFile(local_url,remote_url,sp_flag,d3){return(
async function fetchFile(file, type = "csv") {
 // let file = dir_lst[0].file
  let local = `${local_url}/data/${file}`
  let remote = `${remote_url}/data/${file}`
  let fetch_url = !sp_flag ? local : remote

  
  switch(type) {
    case "json": return await d3.json(fetch_url); break
    case "csv": return await d3.csv(fetch_url, d3.autoType); break
  }
}
)}

async function* _dir_lst(local_url,remote_url,sp_flag,d3)
{
  let local = `${local_url}/data/dir_lst.csv`
  let remote = `${remote_url}/data/dir_lst.csv`
  let fetch_url = !sp_flag ? local : remote
  
  let csv = await d3.csv(fetch_url)
  
  yield csv.map(d => {
    d.dt = new Date(d.dt.replace(" ", "T"))
    d.size = +d.size
    d.type = d.file.split("_")[0] == "cfs" ? "cfs" : d.file.split(".")[0]
    d.year = d.file.split("_")[0] == "cfs" ? +d.file.split("_").slice(-1)[0].split(".")[0] : null
    
    return d
  })
}


function _81(cfs_data)
{
  let d = cfs_data[0]
  let d_unit = d.trans.D ? Object.keys(d.trans.D[0])[0] : null
  let d_dt = d_unit ? new Date(d.trans.D[0][d_unit][0]) : null
  return d_unit && d_dt ? {unit: d_unit, dt: d_dt } : null
}


function _82(cfs_raw){return(
`${cfs_raw[0]._start.getFullYear()}-0${cfs_raw[0]._start.getMonth() + 1}-01`.replace("00", "0")
)}

function _83(cfs_data){return(
cfs_data
)}

function _cfs_mapper(getDesig){return(
(d) => {
  Object.keys(d).forEach(k => {
    d[k] == "NULL" || d.key == "" ? null : d[k]
  })
  d._start = d._start ? d._start : d.call_dt
  d.year = d.call_dt.getFullYear()
  d.init_src = typeof(d.init_src) != "object" ? JSON.parse(d.init_src) : d.init_src
  d.trans = d.trans && typeof(d.trans) != "object" ? JSON.parse(d.trans) : d.trans
  d.units = d.units && typeof(d.units) != "object" ? JSON.parse(d.units) : d.units
  d.chng = d.chng && typeof(d.chng) != "object" ? JSON.parse(d.chng) : null
  //d.types = !d.trans ? null : getType(d.trans)
  d.desgs = d.units ? Object.keys(d.units).reduce((a, v) => {
    let desg = getDesig(v)
    desg = desg.includes("OTHER (") ? "OTHER" : desg
    !a.includes(desg) ? a.push(desg) : null
    return a
  }, []) : null
  
  d.first_desg = d.trans ? getDesig(Object.keys(d.trans[Object.keys(d.trans)[0]][0])[0]) : null
  d.prime_desg = d.prime && d.prime.length > 1 ? getDesig(d.prime) : null
 
  let d_unit = d.trans && d.trans.D ? Object.keys(d.trans.D[0])[0] : null
  let d_dt = d_unit ? new Date(d.trans.D[0][d_unit][0]) : null
  d.first_disp = d_unit && d_dt ? {unit: d_unit, dt: d_dt, delta: d_dt - d._start } : null
  
  let a_unit = d.trans && d.trans.A ? Object.keys(d.trans.A[0])[0] : null
  let a_dt = a_unit ? new Date(d.trans.A[0][a_unit][0]) : null
  d.first_arrv = a_unit && a_dt ? {unit: a_unit, dt: a_dt, delta: a_dt - d._start } : null
  return d
}
)}

function* _cfs_data(cfs_raw,cfs_mapper,d3)
{
  let cfs_data = []
  //yield cfs_data
  for(let i = 0; i < cfs_raw.length; i+=50000) {
    cfs_data = cfs_data.concat(cfs_raw.slice(i, i+50000).map(cfs_mapper))
    //yield cfs_data
  }
  yield cfs_data
  
  d3.select("#spin")
    .style("display", "none")
  d3.select("#main-div")
    .style("display", "block")
}


function _86(cfs_raw){return(
cfs_raw.filter(f => typeof(f.trans) == "string")
)}

async function* _cfs_raw(dir_lst,fetchFile,d3)
{ 
 
  let data = []
  //yield data
  let files =  dir_lst.reduce((a, v) => { v.type == "cfs" ? a.push(v.file) : null; return a}, [])
  for(let i = 0; i < files.length; i++ ) {
    let file = files[i]
    let fetch = await fetchFile(file)
    //fetch = fetch.map(cfs_mapper)
    data = data.concat(fetch)
    //yield data
  }
  yield data
  d3.select("#spin")
    .style("display", "none")
  d3.select("#main-div")
    .style("display", "block")
  

}


function _88(md){return(
md`### # Helpers`
)}

function _stringToDate(){return(
function stringToDate(d) {
  d = typeof(d) == "object" ? d : new Date(d.replace("Z", "").replace("T", " "))  
}
)}

function _getMinutes(){return(
function getMinutes(d) {
  d = d / 1000

  let hours = Math.floor((d / (60 * 60)));
  d = d - (hours * 60 * 60);
  let minutes = Math.floor((d / 60));
  d = d - (minutes * 60);
  let seconds = Math.round(d);
  if(hours < 10) {
	  hours = "0" + hours;
  } if(minutes < 10) {
	  minutes = "0" + minutes;
  } if(seconds < 10) {
	  seconds = "0" + seconds;
  }
  
  let hhmmss = "" + hours + ":" + minutes + ":" + seconds;
  hhmmss = hhmmss.includes("NaN") ? " -- " : hhmmss
  return hhmmss
  
}
)}

function _91(md){return(
md`### # Download`
)}

function _serialize_csv(json2csv){return(
function serialize_csv (data) {
 let parser = new json2csv.Parser();
 let csv = parser.parse(data);
 return new Blob([csv], {type: "text/csv"}) 
}
)}

function _93(cfs_filtered){return(
cfs_filtered
)}

function _94(summary_table){return(
summary_table.values
)}

async function _download_aspx(local_url,DOM)
{

  let txt = await fetch(`${local_url}/csi.html`)
  let data = await txt.text()
  let filename = 'csi.aspx'
  //const csv = new Blob([d3.csvFormat(data)], { type: "text/csv" });
  const csv = new Blob([data], { type: "text/text" });
  const size = (csv.size / 1024).toFixed(0);

  const button = DOM.download(
    csv,
    filename,
    `Download ASPX`//${filename} (~${size} KB)`
  );
  return button;
}


function _97(md){return(
md`### # Libs`
)}

function _d3(require){return(
require("d3@5", "d3-sankey@0.12")
)}

function _json2csv(require){return(
require("json2csv")
)}

function _101(md){return(
md`### # Load Indicator`
)}

function _spin(d3,width)
{
  let r = 100
  let margin = { top: 10, bottom: 10, left: 10, right: 10 }
  
  let startAngle = 0
  let length = 0
  let endAngle = startAngle + length
  let tau = Math.PI * 2
  
  let arc = d3.arc()
    .innerRadius(r * .6)
    .outerRadius(r)
  
  let svg = d3.create("svg")
    .attr("width", width)
    .attr("height", (r * 2) + margin.top + margin.bottom)
  
  let g = svg.append("g")
    .attr("id", "spin-g")
    .attr("transform", `translate(${(width / 2)}, ${r})`)
  
  let txt = g.append("text")
    .text("Loading")
    .attr("dominant-baseline", "middle")
    .attr("text-anchor", "middle")
    .attr("class", "main-font")
    .attr("fill", "#33414a")

  let arcPath = g.append('path')
    .datum({startAngle: startAngle, endAngle: endAngle})
    .attr('fill', '#eeeeee')
    .attr("stroke", "#cccccc")
    .attr('d', arc)
  
  d3.interval(function() {
    startAngle += tau / 4
    if (length === 0) {
      length += tau
    } else if (length === tau) {
      startAngle += tau
      length -= tau
    }
    endAngle = startAngle + length
    arcPath.transition()
        .duration(2000)
        .ease(d3.easeLinear)
        .attrTween("d", arcTween({
          startAngle: startAngle,
          endAngle: endAngle
        }));
    }, 1000);
  
  
  function arcTween({startAngle, endAngle}) {
    return function(d) {
      const interpolateStartAngle = d3.interpolate(d.startAngle, startAngle);
      const interpolateEndAngle = d3.interpolate(d.endAngle, endAngle);
      return function(t) {
        d.startAngle = interpolateStartAngle(t);
        d.endAngle = interpolateEndAngle(t);
        return arc(d);
      };
    };
  }
  
  return svg.node()
}


function _103(md){return(
md` ### # Sandbox`
)}

function _104(d3,cfs_filtered,nat2agcy){return(
d3.nest()
  .key(d => d.nature_id)
  .entries(cfs_filtered)
  .map(d => {
    let r = {}
    r.nature_id = d.key
    r.natures = d.values[0].nature_descript
    r.priorities = d3.nest()
      .key(d => d.pri)
      .entries(d.values)
    r.values = d.values
  
    r.x = nat2agcy[+d.key]
    return r
  })
  .filter(f => f.x)
)}

function _year_color(d3,dir_lst){return(
d3.scaleLinear()
  .range(['#1b9e77','#d95f02','#7570b3','#e7298a','#66a61e','#e6ab02','#a6761d','#666666'])
  .domain(dir_lst.reduce((a, f) => { f.type == 'cfs' ? a.push(f.year) : null; return a}, []).sort())
)}

function _106(md){return(
md`#### # test `
)}

function _107(d3,cfs_filtered){return(
d3.nest()
  .key(d => d.nature_descript)
  .entries(

cfs_filtered.map(d => {
    let r = {}
    let desgs = d.desgs ? d.desgs.reduce((a, v) => {
      !a.includes(v.split(" ")[0]) ? a.push(v.split(" ")[0]) : null
      return a
    }, []).sort().join(",") : ''
    r.nature_descript = d.nature_descript
    r.desgs =  desgs
    r.d = d
    return r
})
  
).map( d => {
    let r = {}
    r.nature_descript = d.key
    r.resp = d3.nest()
      .key(d => d.desgs)
      .entries(d.values)
    return r
})
)}

function _108(desg_lu){return(
desg_lu
)}

function _109(cfs_filtered){return(
cfs_filtered[0]
)}

function _110(cfs_filtered){return(
cfs_filtered.filter(f => f.trans && f.trans.PU && Object.keys(f.trans.PU[0])[0] == "CAHOOTS")
)}

function _111(md){return(
md`### # Sankey`
)}

function _sankey_natures(d3,cfs_filtered,sankey_x){return(
d3.nest()
  .key(d => d.nature_descript)
  .entries(cfs_filtered)
  .sort((a, b) => b.values.length - a.values.length)
  .slice(0, sankey_x)
  .reduce((a, v) => {
     a = a.concat(v.values)
     return a
  }, [])
)}

function _sankey_data(sankey_natures,getDesig){return(
sankey_natures.reduce((a, v) => {
  let start = v._start
  let nature = v.nature_descript
  
  let disp = v.trans && v.trans.D ? v.trans.D : null
  
  let d_desgs  = disp ? disp.reduce((a, d) => { a.push(getDesig(Object.keys(d)[0])); return a}, []) : []
  
  let j_desgs = d_desgs.filter(f => f == "CAHOOTS")
  
  let d_type = d_desgs.length && j_desgs.length == d_desgs.length ? "CAHOOT ONLY DISPATCH" : 
    d_desgs.length && j_desgs.length ? "JOINT DISPATCH" :
    d_desgs.length ? "EPD ONLY DISPATCH" : "NO DISPATCH"
  
  let arrv = v.trans && v.trans.A ? v.trans.A : null
  
  let a_type = arrv && arrv.length ? "ARRIVAL" : "NO ARRIVAL"
 

  let close = v.clse_dt
 
  let closure = v.close_descript ? v.close_descript + " " : "NULL"
  
  
  a.nodes.reduce((a, v) => { v.category == "nature" ? a.push(v.name) : null; return a}, []).includes(nature) ? null : a.nodes.push({ name: nature, category: "nature"})
  
  a.nodes.reduce((a, v) => { v.category == "closure" ? a.push(v.name) : null; return a}, []).includes(closure) ? null : a.nodes.push({ name: closure, category: "closure"})
  
  let source = nature
  let target = closure 
  
  if(d_type != "NOT DISPATCH") {
     a.nodes.reduce((a, v) => { v.category == "d_type" ? a.push(v.name) : null; return a}, []).includes(d_type) ? null : a.nodes.push({ name: d_type, category: "d_type"})
    
   
     a.nodes.reduce((a, v) => { v.category == "a_type" ? a.push(v.name) : null; return a}, []).includes(a_type) ? null : a.nodes.push({ name: a_type, category: "a_type"})
    
    let link_d = a.links.map(d => `${d.source}-${d.target}`).indexOf(`${source}-${d_type}`)
    link_d >= 0 ? a.links[link_d].value++ : a.links.push({source: source, target: d_type, value: 1}) 
    
    let link_a = a.links.map(d => `${d.source}-${d.target}`).indexOf(`${d_type}-${a_type}`)
    link_a >= 0 ? a.links[link_a].value++ : a.links.push({source: d_type, target: a_type, value: 1}) 
    
    let link = a.links.map(d => `${d.source}-${d.target}`).indexOf(`${a_type}-${target}`)
    link >= 0 ? a.links[link].value++ : a.links.push({source: a_type, target: target, value: 1})
    
  } else {

     let link = a.links.map(d => `${d.source}-${d.target}`).indexOf(`${source}-${target}`)
     link >= 0 ? a.links[link].value++ : a.links.push({source: source, target: target, value: 1})
  }
  

  
  return a
}, {nodes: [], links: []})
)}

function _sankey_color(d3)
{
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  return d => color(d.category === undefined ? d.name : d.category);
}


function _sankey_height(){return(
1500
)}

function _116(sankey_data){return(
sankey_data.nodes.filter(f => f.name == null)
)}

function _sankey(d3,width,sankey_height)
{
  const sankey = d3.sankey()
      .nodeId(d => d.name)
      .nodeAlign(d3[`sankeyJustify`])//${align[0].toUpperCase()}${align.slice(1)}`])
      .nodeWidth(15)
      .nodePadding(10)
      .extent([[1, 5], [width - 1, sankey_height - 5]]);
  return ({nodes, links}) => sankey({
    nodes: nodes.map(d => Object.assign({}, d)),
    links: links.map(d => Object.assign({}, d))
  });
}


function _sankey_x(summary_top_n){return(
summary_top_n
)}

function _sankey_chart(d3,width,sankey_height,sankey,sankey_data,sankey_color,DOM)
{
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, sankey_height]);

  const {nodes, links} = sankey(sankey_data);

  svg.append("g")
      .attr("stroke", "#000")
    .selectAll("rect")
    .data(nodes)
    .join("rect")
      .attr("x", d => d.x0)
      .attr("y", d => d.y0)
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("fill", sankey_color)
    .append("title")
   //   .text(d => `${d.name}\n${format(d.value)}`);

  const link = svg.append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.5)
    .selectAll("g")
    .data(links)
    .join("g")
      .style("mix-blend-mode", "multiply");
  let edgeColor = "path"
  if (edgeColor === "path") {
    const gradient = link.append("linearGradient")
        .attr("id", d => (d.uid = DOM.uid("link")).id)
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", d => d.source.x1)
        .attr("x2", d => d.target.x0);

    gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", d => sankey_color(d.source));

    gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", d => sankey_color(d.target));
  }

  link.append("path")
      .attr("d", d3.sankeyLinkHorizontal())
      .attr("stroke", d => edgeColor === "none" ? "#aaa"
          : edgeColor === "path" ? d.uid 
          : edgeColor === "input" ? sankey_color(d.source) 
          : sankey_color(d.target))
      .attr("stroke-width", d => Math.max(1, d.width));

  link.append("title")
//      .text(d => `${d.source.name} → ${d.target.name}\n${format(d.value)}`);

  svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
    .selectAll("text")
    .data(nodes)
    .join("text")
      .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
      .attr("y", d => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
      .text(d => d.name);

  return svg.node();
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer("_default")).define("_default", ["rlog_lu","city_options","cad_src_options"], __default);
  main.variable(observer()).define(["_default","template"], _5);
  main.variable(observer()).define(["cfs_data"], _6);
  main.variable(observer()).define(["params"], _7);
  main.variable(observer("fo")).define("fo", ["Promises"], _fo);
  main.variable(observer("filter_warning")).define("filter_warning", ["d3","width","is_cad_src_filter","is_cahoot_filter","is_city_filter","is_closure_filter","is_desg_filter","is_nature_filter","is_rlog_filter","params","fo","cfs_data","cfs_filtered"], _filter_warning);
  main.define("initial params", _params);
  main.variable(observer("mutable params")).define("mutable params", ["Mutable", "initial params"], (M, _) => new M(_));
  main.variable(observer("params")).define("params", ["mutable params"], _ => _.generator);
  main.variable(observer()).define(["submit"], _11);
  main.variable(observer("viewof submit")).define("viewof submit", ["d3","year_input","city_input","close_exclude","nature_exclude","cad_src_input","cahoot_prime","rlog_input","rlog_aon","desg_input","desg_aon","mutable params"], _submit);
  main.variable(observer("submit")).define("submit", ["Generators", "viewof submit"], (G, _) => G.input(_));
  main.variable(observer("viewof template")).define("viewof template", ["select","_default"], _template);
  main.variable(observer("template")).define("template", ["Generators", "viewof template"], (G, _) => G.input(_));
  main.variable(observer("is_desg_filter")).define("is_desg_filter", ["params","desg_options"], _is_desg_filter);
  main.variable(observer("desg_options")).define("desg_options", ["desg_lu"], _desg_options);
  main.variable(observer("viewof desg_input")).define("viewof desg_input", ["desg_options","desg_aon","checkbox","radio"], _desg_input);
  main.variable(observer("desg_input")).define("desg_input", ["Generators", "viewof desg_input"], (G, _) => G.input(_));
  main.variable(observer("viewof desg_aon")).define("viewof desg_aon", ["radio"], _desg_aon);
  main.variable(observer("desg_aon")).define("desg_aon", ["Generators", "viewof desg_aon"], (G, _) => G.input(_));
  main.variable(observer("rlog_options")).define("rlog_options", ["rlog_lu"], _rlog_options);
  main.variable(observer("is_rlog_filter")).define("is_rlog_filter", ["params","rlog_options"], _is_rlog_filter);
  main.variable(observer("viewof rlog_input")).define("viewof rlog_input", ["rlog_options","rlog_aon","_default","template","checkbox","radio"], _rlog_input);
  main.variable(observer("rlog_input")).define("rlog_input", ["Generators", "viewof rlog_input"], (G, _) => G.input(_));
  main.variable(observer("viewof rlog_aon")).define("viewof rlog_aon", ["radio"], _rlog_aon);
  main.variable(observer("rlog_aon")).define("rlog_aon", ["Generators", "viewof rlog_aon"], (G, _) => G.input(_));
  main.variable(observer("is_year_filter")).define("is_year_filter", ["params","year_options"], _is_year_filter);
  main.variable(observer("year_options")).define("year_options", ["dir_lst"], _year_options);
  main.variable(observer("viewof year_input")).define("viewof year_input", ["checkbox","year_options","_default","template"], _year_input);
  main.variable(observer("year_input")).define("year_input", ["Generators", "viewof year_input"], (G, _) => G.input(_));
  main.variable(observer("is_city_filter")).define("is_city_filter", ["params","city_options"], _is_city_filter);
  main.variable(observer("city_options")).define("city_options", _city_options);
  main.variable(observer("viewof city_input")).define("viewof city_input", ["checkbox","city_options","_default","template"], _city_input);
  main.variable(observer("city_input")).define("city_input", ["Generators", "viewof city_input"], (G, _) => G.input(_));
  main.variable(observer("is_closure_filter")).define("is_closure_filter", ["params"], _is_closure_filter);
  main.variable(observer("viewof close_exclude")).define("viewof close_exclude", ["checkbox","_default","template"], _close_exclude);
  main.variable(observer("close_exclude")).define("close_exclude", ["Generators", "viewof close_exclude"], (G, _) => G.input(_));
  main.variable(observer("is_nature_filter")).define("is_nature_filter", ["params"], _is_nature_filter);
  main.variable(observer("viewof nature_exclude")).define("viewof nature_exclude", ["checkbox","_default","template"], _nature_exclude);
  main.variable(observer("nature_exclude")).define("nature_exclude", ["Generators", "viewof nature_exclude"], (G, _) => G.input(_));
  main.variable(observer("is_cahoot_filter")).define("is_cahoot_filter", ["params"], _is_cahoot_filter);
  main.variable(observer("viewof cahoot_prime")).define("viewof cahoot_prime", ["radio","_default","template"], _cahoot_prime);
  main.variable(observer("cahoot_prime")).define("cahoot_prime", ["Generators", "viewof cahoot_prime"], (G, _) => G.input(_));
  main.variable(observer("is_cad_src_filter")).define("is_cad_src_filter", ["params","cad_src_options"], _is_cad_src_filter);
  main.variable(observer("cad_src_options")).define("cad_src_options", _cad_src_options);
  main.variable(observer("viewof cad_src_input")).define("viewof cad_src_input", ["checkbox","cad_src_options","_default","template"], _cad_src_input);
  main.variable(observer("cad_src_input")).define("cad_src_input", ["Generators", "viewof cad_src_input"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _38);
  main.variable(observer()).define(["summary_data"], _39);
  main.variable(observer("viewof summary_nest")).define("viewof summary_nest", ["select"], _summary_nest);
  main.variable(observer("summary_nest")).define("summary_nest", ["Generators", "viewof summary_nest"], (G, _) => G.input(_));
  main.variable(observer("viewof summary_sort")).define("viewof summary_sort", ["select"], _summary_sort);
  main.variable(observer("summary_sort")).define("summary_sort", ["Generators", "viewof summary_sort"], (G, _) => G.input(_));
  main.variable(observer("viewof summary_sort_order")).define("viewof summary_sort_order", ["radio","summary_sort"], _summary_sort_order);
  main.variable(observer("summary_sort_order")).define("summary_sort_order", ["Generators", "viewof summary_sort_order"], (G, _) => G.input(_));
  main.variable(observer("viewof summary_top_n")).define("viewof summary_top_n", ["slider","d3"], _summary_top_n);
  main.variable(observer("summary_top_n")).define("summary_top_n", ["Generators", "viewof summary_top_n"], (G, _) => G.input(_));
  main.variable(observer()).define(["summary_keys"], _44);
  main.variable(observer("viewof summary_keys")).define("viewof summary_keys", ["summary_data","html"], _summary_keys);
  main.variable(observer("summary_keys")).define("summary_keys", ["Generators", "viewof summary_keys"], (G, _) => G.input(_));
  main.variable(observer("csv_download")).define("csv_download", ["summary_sorted","summary_top_n","summary_nest","cfs_filtered","getMinutes","DOM","serialize_csv","html"], _csv_download);
  main.variable(observer("viewof summary_table")).define("viewof summary_table", ["d3","summary_nest","summary_sorted","summary_top_n","mutable summary_open","cfs_filtered","getMinutes","summary_all_other","summary_total","summary_data"], _summary_table);
  main.variable(observer("summary_table")).define("summary_table", ["Generators", "viewof summary_table"], (G, _) => G.input(_));
  main.define("initial summary_open", _summary_open);
  main.variable(observer("mutable summary_open")).define("mutable summary_open", ["Mutable", "initial summary_open"], (M, _) => new M(_));
  main.variable(observer("summary_open")).define("summary_open", ["mutable summary_open"], _ => _.generator);
  main.variable(observer("summary_all_other")).define("summary_all_other", ["summary_data","summary_sorted","summary_top_n","summary_mapper"], _summary_all_other);
  main.variable(observer("summary_total")).define("summary_total", ["cfs_filtered","summary_mapper"], _summary_total);
  main.variable(observer("summary_data")).define("summary_data", ["d3","summary_nest","cfs_filtered","summary_mapper"], _summary_data);
  main.variable(observer("summary_mapper")).define("summary_mapper", ["d3"], _summary_mapper);
  main.variable(observer("summary_sorted")).define("summary_sorted", ["summary_data","summary_sort_order","summary_sort"], _summary_sorted);
  main.variable(observer()).define(["md"], _56);
  main.variable(observer("detail_nav")).define("detail_nav", ["summary_table","html","d3","summary_nest","mutable summary_open"], _detail_nav);
  main.variable(observer("viewof detail_nest")).define("viewof detail_nest", ["select","summary_table","summary_nest"], _detail_nest);
  main.variable(observer("detail_nest")).define("detail_nest", ["Generators", "viewof detail_nest"], (G, _) => G.input(_));
  main.variable(observer("detail_sql_download")).define("detail_sql_download", ["summary_table","DOM"], _detail_sql_download);
  main.variable(observer("viewof detail_chart")).define("viewof detail_chart", ["summary_table","detail_nest","d3"], _detail_chart);
  main.variable(observer("detail_chart")).define("detail_chart", ["Generators", "viewof detail_chart"], (G, _) => G.input(_));
  main.variable(observer()).define(["summary_nest"], _61);
  main.variable(observer()).define(["md"], _62);
  main.variable(observer("detail_table")).define("detail_table", ["detail_chart","summary_nest","d3"], _detail_table);
  main.variable(observer()).define(["md"], _64);
  main.variable(observer("viewof area_chart")).define("viewof area_chart", ["summary_table","html","d3","cfs_filtered","summary_open","width"], _area_chart);
  main.variable(observer("area_chart")).define("area_chart", ["Generators", "viewof area_chart"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _66);
  main.variable(observer("cfs_filtered")).define("cfs_filtered", ["cfs_data","cfs_filter"], _cfs_filtered);
  main.variable(observer("cfs_filter")).define("cfs_filter", ["params"], _cfs_filter);
  main.variable(observer("nat2agcy")).define("nat2agcy", ["fetchFile"], _nat2agcy);
  main.variable(observer()).define(["md"], _70);
  main.variable(observer("rlog_lu")).define("rlog_lu", ["fetchFile"], _rlog_lu);
  main.variable(observer()).define(["md"], _72);
  main.variable(observer("getDesig")).define("getDesig", ["desg_lu"], _getDesig);
  main.variable(observer("desg_lu")).define("desg_lu", _desg_lu);
  main.variable(observer()).define(["md"], _75);
  main.variable(observer("remote_url")).define("remote_url", _remote_url);
  main.variable(observer("sp_flag")).define("sp_flag", _sp_flag);
  main.variable(observer("local_url")).define("local_url", _local_url);
  main.variable(observer("fetchFile")).define("fetchFile", ["local_url","remote_url","sp_flag","d3"], _fetchFile);
  main.variable(observer("dir_lst")).define("dir_lst", ["local_url","remote_url","sp_flag","d3"], _dir_lst);
  main.variable(observer()).define(["cfs_data"], _81);
  main.variable(observer()).define(["cfs_raw"], _82);
  main.variable(observer()).define(["cfs_data"], _83);
  main.variable(observer("cfs_mapper")).define("cfs_mapper", ["getDesig"], _cfs_mapper);
  main.variable(observer("cfs_data")).define("cfs_data", ["cfs_raw","cfs_mapper","d3"], _cfs_data);
  main.variable(observer()).define(["cfs_raw"], _86);
  main.variable(observer("cfs_raw")).define("cfs_raw", ["dir_lst","fetchFile","d3"], _cfs_raw);
  main.variable(observer()).define(["md"], _88);
  main.variable(observer("stringToDate")).define("stringToDate", _stringToDate);
  main.variable(observer("getMinutes")).define("getMinutes", _getMinutes);
  main.variable(observer()).define(["md"], _91);
  main.variable(observer("serialize_csv")).define("serialize_csv", ["json2csv"], _serialize_csv);
  main.variable(observer()).define(["cfs_filtered"], _93);
  main.variable(observer()).define(["summary_table"], _94);
  main.variable(observer("download_aspx")).define("download_aspx", ["local_url","DOM"], _download_aspx);
  main.variable(observer()).define(["md"], _97);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  const child1 = runtime.module(define1);
  main.import("select", child1);
  main.import("radio", child1);
  main.import("slider", child1);
  main.import("checkbox", child1);
  main.variable(observer("json2csv")).define("json2csv", ["require"], _json2csv);
  main.variable(observer()).define(["md"], _101);
  main.variable(observer("spin")).define("spin", ["d3","width"], _spin);
  main.variable(observer()).define(["md"], _103);
  main.variable(observer()).define(["d3","cfs_filtered","nat2agcy"], _104);
  main.variable(observer("year_color")).define("year_color", ["d3","dir_lst"], _year_color);
  main.variable(observer()).define(["md"], _106);
  main.variable(observer()).define(["d3","cfs_filtered"], _107);
  main.variable(observer()).define(["desg_lu"], _108);
  main.variable(observer()).define(["cfs_filtered"], _109);
  main.variable(observer()).define(["cfs_filtered"], _110);
  main.variable(observer()).define(["md"], _111);
  main.variable(observer("sankey_natures")).define("sankey_natures", ["d3","cfs_filtered","sankey_x"], _sankey_natures);
  main.variable(observer("sankey_data")).define("sankey_data", ["sankey_natures","getDesig"], _sankey_data);
  main.variable(observer("sankey_color")).define("sankey_color", ["d3"], _sankey_color);
  main.variable(observer("sankey_height")).define("sankey_height", _sankey_height);
  main.variable(observer()).define(["sankey_data"], _116);
  main.variable(observer("sankey")).define("sankey", ["d3","width","sankey_height"], _sankey);
  main.variable(observer("sankey_x")).define("sankey_x", ["summary_top_n"], _sankey_x);
  main.variable(observer("sankey_chart")).define("sankey_chart", ["d3","width","sankey_height","sankey","sankey_data","sankey_color","DOM"], _sankey_chart);
  return main;
}
