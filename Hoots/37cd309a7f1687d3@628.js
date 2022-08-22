// https://observablehq.com/@smartforce/hoots@628
import define1 from "./e93997d5089d7165@2303.js";
import define2 from "./60ea978986bfd25e@1624.js";

function _1(md){return(
md`# 'Hoots`
)}

function _ee(){return(
1
)}

function _hash_year(Generators,year_lst,addEventListener,removeEventListener){return(
Generators.observe(notify => {
  const hashchange = () => {
    let h = window.location.hash;
    return notify(h && year_lst.includes(h.replace("#", "")) ? h.replace("#", "") : year_lst[0]);
  }
  hashchange();
  addEventListener("hashchange", hashchange);
  return () => removeEventListener("hashchange", hashchange);
})
)}

function _cfs_count(nested_data,nested_level2,summary_nester,html)
{
  let raw = nested_data.length
  let fil = nested_level2.length
  let is_fil = raw != fil
  let txt_1 = `Total CFS Count: <b>${nested_data.length}</b>`
  let txt_2 = is_fil ? `<span style="background:#ffffcc">CFS Count w/ <b>${summary_nester} Filter</b> Applied: <b>${fil}</b>  <i>(${((fil / raw) * 100).toFixed(1)}% of Total CFS)</i></span>` : '&nbsp;'
  return html`${txt_1}<br>${txt_2}`
}


function _5(md){return(
md`### #Params`
)}

function _year_lst(){return(
["2019", "2020", "2021"]
)}

function _target_year(select,year_lst,hash_year){return(
select({
  title: "Year",
  options: year_lst.sort(),
  value: hash_year
  
})
)}

function _preset(csv_data,select,target_year)
{
  csv_data
  return select({
    title: "Preset Filters",
    description: "Preset filters to simulate data in other CAHOOTs Reports.",
    options: [
      {label: "All Calls - Not Nested By Parent", value: "all_not"},
      {label: "All Calls - Nested By Parent", value: "all_nest"},
      {label: "EPD Calls w/ EPD Cahoots Activity", value: "epd_cah_not"},
    //  {label: "EPD Calls Cahoots Nature 2019 - Prime w/ Transaction (15700)", value: "b"},
      {label: "Cahoots w/ Possible EPD Backup", value: "bu"},
      {label: `*Cahoots Program Breifing${target_year == 2019 ? " 2019 (18583)" : ""} `, value: "a"},
      {label: `*Cahoots Nature ${target_year == 2019 ? 2019 : ""} - Prime w/o Transaction ${target_year == 2019 ? " (2362)": ""}`, value: "c"},
      {label: `*Cahoots Nature ${target_year == 2019 ? 2019 : ""} - Not Prime w/ Transaction ${target_year == 2019 ? "  (2585)": ""}`, value: "d"}
    ],
    value: "a"
  })
}


function _tgt_rlog_trans(checkbox,master_lst,preset_lu,preset){return(
checkbox({
  title: "CAHOOTS Activity",
 // description: "Please pick your favorite stooge.",
  options: master_lst.rlog,
  value: preset_lu[preset].tgt_rlog_trans,// ["Prime Unit"],// master_lst.rlog,
  //multiple: true

})
)}

function _tgt_rlog_and_or(radio,preset_lu,preset){return(
radio({
  //title: "Stooges",
  description: "CAHOOT Unit transaction types.",
  options: ["AND", "OR", "NOT"],
  value: preset_lu[preset].tgt_rlog_and_or, //"OR"
})
)}

function _tgt_nature(select,master_lst){return(
select({
  title: "Natures",
  //description: "Group by Parent ID to pevent double counting spawned CFS.",
  options: ["All"].concat(master_lst.nature),
  value: "All"
})
)}

function _tgt_closure(select,master_lst){return(
select({
  title: "Closures",
  //description: "Group by Parent ID to pevent double counting spawned CFS.",
  options: ["All"].concat(master_lst.closure),
  value: "All"
})
)}

function _tgt_joint(select){return(
select({
  title: "Response Type",
  //description: "Group by Parent ID to pevent double counting spawned CFS.",
  options: ["ALL", "CAHOOTS ONLY", "JOINT WITH", "WITHOUT"],
  value: "ALL"
})
)}

function* _tgt_response(radio,master_lst,tgt_joint,d3)
{

  yield radio({
    title: "&nbsp;",
    description: "",
    options: master_lst.other_agencies,
    value: "EPD"
  })
  
  {
   if(["JOINT WITH", "WITHOUT"].includes(tgt_joint)) {
    d3.select("#tgt_response")
      .style("display", "block")
   } else {
    d3.select("#tgt_response")
      .style("display", "none")
   }
  }
  
}


function _tgt_nest(select,preset_lu,preset){return(
select({
  title: "Group By",
  //description: "Group by Parent ID to pevent double counting spawned CFS.",
  options: [
    {label: "Incident ID", value: "inci_id"},
    {label: "Parent ID", value: "parent_id"},
  ],
  value: preset_lu[preset].tgt_nest
})
)}

function _tgt_cahoot_agencies(checkbox,master_lst,preset_lu,preset){return(
checkbox({
  title: "CAHOOTS Agency",
  //description: "Please select your favorite colors",
  options: master_lst.cahoots_agencies,
  value: preset_lu[preset].tgt_cahoot_agencies, //["EPD"],
  submit: false
})
)}

function _tgt_epd_bu(checkbox,preset_lu,preset){return(
checkbox({
  title: "Possible EPD Backup",
  //description: "Please select your favorite colors",
  options: ["Yes", "No"],
  value: preset_lu[preset].tgt_epd_bu, //["EPD"],
  submit: false
})
)}

function _tgt_close_exclude(checkbox,master_lst,preset_lu,preset){return(
checkbox({
  title: "Closures to Exclude",
  //description: "Please select your favorite colors",
  options: master_lst.close_exclude,
  value: preset_lu[preset].tgt_close_exclude, //["DUP", "EERR", "TEST"], //master_lst.close_exclude,
  submit: false
})
)}

function _tgt_cities(checkbox,master_lst,preset_lu,preset){return(
checkbox({
  title: "Cities",
  //description: "Please select your favorite colors",
  options: master_lst.cities,
  value: preset_lu[preset].tgt_cities, //["EUG"],
  submit: false
})
)}

function _tgt_cad_agencies(checkbox,master_lst,preset_lu,preset){return(
checkbox({
  title: "Incident Agencies",
  //description: "Please select your favorite colors",
  options: master_lst.cad_agencies,
  value: preset_lu[preset].tgt_cad_agencies,
  submit: false
})
)}

function _tgt_nature_test(radio,preset_lu,preset){return(
radio({
  title: "Test Natues",
  //description: "Please select your favorite colors",
  options: ["Include", "Exclude"],
  value: preset_lu[preset].tgt_nature_test, //"Exclude",
  submit: false
})
)}

function _tgt_cad_call_src(checkbox,preset_lu,preset){return(
checkbox({
  title: "Call Source",
  //description: "Please select your favorite colors",
  options: [
    {label: "Public", value: "PUBLIC"},
    {label: "Report Only", value: "RPTO"},
    {label: "Self", value: "SELF"}
  
  ],
  value: preset_lu[preset].tgt_cad_call_src, //["RPTO", "PUBLIC"],
  submit: false
})
)}

function _23(md){return(
md`### #Mutables`
)}

function _tgt_id(nested_data){return(
nested_data[0]["Parent ID"]
)}

function _25(md){return(
md`### #Incident Table`
)}

function _26(inci_table_page){return(
inci_table_page
)}

function _inci_table_page(table_data,d3)
{
  let val = {
    low: 0, 
    high: 15,
    page: 1,
  }
  let max_row = 15
  let page_cnt = Math.ceil(table_data.length / max_row)
  
  let pages = [...Array(page_cnt).keys() ].map(d => {
    let r = {}
    r.page = d + 1
    r.low = (r.page * max_row) - max_row
    r.high = d3.min([table_data.length, r.page * max_row])
    return r
  })
  
  let div = d3.create("div")
    .attr("class", "table-pager")

    
  
  let pager_span = div.append("span")


  pager_span.append("span")
    .attr("style", "padding-right: 10px")
    .html("Page")
  
  let page_select = pager_span.append("select")
    .on("change", function() {
      let me = d3.select(this)
      val.page = me.node().value
      div.node().value = val.pages = pages.filter(f => f.page == val.page)[0]
      div.node().dispatchEvent(new CustomEvent("input"))
    })
  page_select.selectAll("option")
    .data(pages.map(d => d.page))
    .enter()
    .append("option")
    .attr("value", d => d)
    .html( d => d)
  
  let next_last = pager_span.append("span")

  let last = next_last.append("span")
    .attr("data-type", "last")
    .attr("class", "table-nexter")
    .html("&#8249;")
    .on("click", nexterClicker )
  
  let next = next_last.append("span")
    .attr("data-type", "next")
    .attr("class", "table-nexter")
    .html("&#8250;")
    .on("click", nexterClicker )
  
  

  
  function nexterClicker() {
    let me = d3.select(this)
    let type = me.attr("data-type")
    val.page = type == "next" ? val.page + 1 <= page_cnt ? val.page + 1 : 1 : val.page - 1 >= 1 ? val.page - 1 : page_cnt
   
    page_select.node().value = val.page

    div.node().value = val.pages = pages.filter(f => f.page == val.page)[0]
    div.node().dispatchEvent(new CustomEvent("input"))
  }
  
  div.node().value = val
  return div.node()
}


function _table_pager_style(html){return(
html`<style>
  .table-pager {
    font-family: sans-serif;
    padding: 10px;
    border-bottom: 1px solid #aaaaaa;
  }



  .table-nexter {
    padding-left: 10px;
    font-size: 25px;
    cursor: pointer;
  }
</style>`
)}

function _inci_table(d3,table_data,inci_table_page,$0)
{

let div = d3.create("div")
   // .style("max-height", "600px")
   // .style("overflow", "auto")
  
  let _table_data = table_data.slice(inci_table_page.low, inci_table_page.high)
  
  if(_table_data == null || _table_data.length == 0) { return div.node() }
  
  let table = div.append("table")
  
  let thead = table.append("thead")
    .append("tr")
  
  let th = thead.selectAll("th")
    .data(Object.keys(_table_data[0]))
  
  th.enter()
    .append("th")
    .html(d => d)
  
  let tbody = table.append("tbody")
  
  let tr = tbody.selectAll("tr")
    .data(_table_data)
  
  tr = tr.enter()
    .append("tr")
  
  let td = tr.selectAll("td")
    .data(d => Object.keys(d).map(k => d[k]) )
  
  td = td.enter()
    .append("td")
    .html(d => d)
    .style("cursor", "pointer")
  
  tr.on("click", d => {
               d3.select("#detail-modal")
            .style("display", "block")
    /*
    d3.select("#detail-modal")
        .style("opacity", 0)
        .transition()
        .duration(500)
        .style("opacity", 1)
        .on("end", () => {
           d3.select("#detail-modal")
            .style("display", "block")
        })
      */
    $0.value = d["Parent ID"]
  })
  /*
  
  let bd = div.append("div")
  
 
  
  
  
  
  let span = div.append("span")
  
  let prev = span.append("button")
    .html("Prev")
    .on("click", () => {
      mutable table_page = table_page - 1 < 1  ? table_pages.length :  table_page - 1
    })
  
  
  let pg = span.selectAll(".page")
    .data(table_pages)
  
  pg = pg.enter()
    .append("span")
    .attr("class", "page")
    .style("padding", "5px")
    .html(d => d.page == table_page ? `<b>${d.page}</b>` : d.page)
  
  
  let next = span.append("button")
    .html("Next")
    .on("click", () => {
      mutable table_page = table_page + 1 <= table_pages.length ? table_page + 1 : 1
    })
  
  
  
  
  */

  return div.node()
  
}


function _30(md){return(
md`### #Incidnet Table Data`
)}

function _table_data(nested_level2){return(
nested_level2
)}

function _32(md){return(
md`### #Main Map`
)}

function _heat_options(){return(
{
    radius: 15,
    //nOpacity: .1,
    max: 1,
    //ur: 20,
}
)}

function* _map(d3,L,fc,heatLayer,heat_options)
{
  let container = d3.create("div")
    //.attr("class", "l-map")
    .style("display", "block")
    .style("width", `600px`)
    .style("height", "400px")
    .attr("id", "map-a")
  
  yield container.node();
 
  let map = L.map("map-a", {zoomControl: false});
    
    let esri_gray = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
      maxZoom: 16
    }).addTo(map);
  
  
  let options = {
    radius: 1,
    fillColor: "#ff7800",
    color: "#000",
    weight: 0,
    opacity: 1,
    fillOpacity: 0.3
  };
      
      let pt = L.geoJson(fc, {
        weight: 5,
        color: '#432',
        onEachFeature: function (feature, layer) {
          layer.bindPopup([
            `<b>${feature.properties.inci_id}</b>`,
            feature.properties.nature,
            feature.properties.site_name, 
            //feature.properties.address.street, 
            feature.properties.trail ? feature.properties.trail.type : "None",
            //feature.properties.trail_lst ? `${feature.properties.trail_lst[0].ft}ft from ${feature.properties.trail_lst[0].name}` : ""
         ].join("<br>"));
        },
        
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, options);
    }
      })
      
      let h = fc.features.map(f =>
          f.geometry.coordinates.slice().reverse().concat([0.1])
        );
    

    
     heatLayer(h, heat_options).addTo(map);
      
    // pt.addTo(map) 
  
  map.fitBounds(pt.getBounds())

}


function _35(md){return(
md`### #Details`
)}

function _36(md){return(
md`#### #Detail Nav`
)}

function _detail_nav(detail_data,html,d3)
{
  if(detail_data.length == 0 || detail_data == null) { return html`` }
  let div = d3.create("div")
    .style("font-weight", "bold")
  
  let nav = div.append("div")
     .style("padding", "5px")
  
  nav.append("span")
    //.style("color", "#ffffff")
    .style("font-size", "16px")
    .html([detail_data[0].parent_id, detail_data[0].nature.descript,/* `<span style="font-weight:normal; font-style:italic">${flag_target.resp_lst[0].resp[0].resp_descript}</span>` */] .join("&nbsp;&nbsp;&#8226;&nbsp;&nbsp;"))
  
  div.append("div")
    .style("font-size", "14px")
    .style("padding", "5px")
    .html([
      //tgt_data.site_name ? tgt_data.site_name : tgt_data.__trail,
      detail_data[0].cad_dt.call.toLocaleString().split(",")[0],
      detail_data[0].cad_dt.call.toLocaleString().split(",")[1]
  ].join("&nbsp;&nbsp;&#8226;&nbsp;&nbsp;"))

 nav.append("span")
    .style("color", "#000000")
    .html("X")
    .attr("class", "close")
    .on("click", function() {
      d3.select("#detail-modal")
         .style("display", "none")
    /*
      d3.select("#detail-modal")
        .style("opacity", 1)
        .transition()
        .duration(500)
        .style("opacity", 0)
        .on("end", () => {
           d3.select("#detail-modal")
            .style("display", "none")
        })
        
      */
  })
  
  return div.node()
}


function _38(md){return(
md`#### #Detail Map`
)}

function* _detail_map(d3,L,detail_data,turf)
{
  let container = d3.create("div")
    .style("display", "block")
    .style("width", `400px`)
    .style("height", "400px")
    .attr("id", "map-d")
  
  yield container.node();

  let map = L.map("map-d", {zoomControl: false});
    
    let esri_gray = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
      maxZoom: 16
    }).addTo(map);
  
  
  let options = {
    radius: 5,
    fillColor: "#ff7800",
    color: "#000",
    weight: 0,
    opacity: 1,
    fillOpacity: 0.5
  };
      let tfc = detail_data.map(d => {
        let pt =  turf.point([d.coords.lng, d.coords.lat])
        return pt
      })
      let pt = L.geoJson(tfc, {
        weight: 5,
        color: '#432',
        onEachFeature: function (feature, layer) {
          layer.bindPopup([
            `<b>${feature.properties.inci_id}</b>`,
            feature.properties.nature,
            feature.properties.site_name, 
            //feature.properties.address.street, 
            feature.properties.trail ? feature.properties.trail.type : "None",
            //feature.properties.trail_lst ? `${feature.properties.trail_lst[0].ft}ft from ${feature.properties.trail_lst[0].name}` : ""
         ].join("<br>"));
        },
        
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, options);
    }
      })
      
    
      
    pt.addTo(map) 
  
  map.fitBounds(pt.getBounds())

}


function _40(md){return(
md`#### #Detail Log`
)}

function _detail_log(d3,detail_data,width)
{
  let m = {t: 10, b: 20, l: 50, r: 10}
  let data = d3.nest()
    .key(d => d.unit)
    .entries(detail_data.length  ? detail_data.reduce((a, v) => {a = a.concat(v.units); return a}, []).filter(f => ["Dispatched", "Arrived", "Canceled", "Cleared"].includes(f.trans)).sort((a, b) => a.dt - b.dt)  : [])
    .sort((a, b) => {
      let aa = a.values[0].cahoot ? 0 : a.values[0].agency == "EPD" ? 1 : 99
      let bb = b.values[0].cahoot ? 0 : b.values[0].agency == "EPD" ? 1 : 99
      return aa - bb 
    })
    .map(d => {
      let r = {}
      r.unit = d.key
      r.trans = d.values
      return r
    })
  
  let time_scale = d3.scaleUtc()
    .domain([
      d3.min(detail_data, d => d.log_init.dt ? d.log_init.dt : d.cad_dt.call),
      d3.max(detail_data, d => d.cad_dt.close)
    ])
    .range([0, width - m.l - m.r])

  let fill = {
    "Dispatched": {circ: "red", txt: "white"},
    "Arrived": {circ: "orange", txt: "white"},
    "Cleared": {circ: "green", txt: "white"},
    "Canceled" : {circ: "black", txt: "white"},
  }

  let rh = 40
  
 
  let h = rh * data.length + m.t + m.b;
  let w = width// * .98
  
  let div = d3.create("div")
    .style("max-height", "300px")
    .style("overflow", "auto")
  
  let svg = div.append("svg")
    .attr("height", h)
    .attr("width", w)
    .attr("font-family", "sans-serif")
  
  
  
  let g = svg.append("g")
    .attr("transform", `translate(${m.l}, ${m.t})`)
    .attr("text-anchor", "start")
  
  g.append("rect")
    .attr("width", width - m.l - m.r)
    .attr("height", h - m.t - m.b)
    .attr("fill-opacity", .025)
  
  let tick = g.selectAll(".tick")
    .data(time_scale.ticks())
    
  tick = tick.enter()
    .append("g")
    .attr("class", ".tick")
    .attr("transform", d => `translate(${time_scale(d)}, 0)`)
  
  tick.append("line")
    .attr("x1", 0)
    .attr("x2", 0)
    .attr("y1", 0)
    .attr("y2", h - m.t - m.b)
    .attr("stroke-width", 1)
    .attr("stroke", "black")
    .attr("stroke-opacity", .1)
    
  tick.append("text")
    .attr("y", 10 + h - m.t - m.b)
    .text(d => d.toString().split(" ")[4])
    .attr("text-anchor", "middle")
    .attr("font-size", 10)
  
  let unit = g.selectAll(".unit")
    .data(data)
  
  unit = unit.enter()
    .append("g")
    .attr("class", "unit")
    .attr("transform", (d, i) => `translate(0, ${i * rh})`)
  
 
  
  unit.append("text")
    .text(d => d.unit)
    .attr("text-anchor", "end")
    .attr("dominant-baseline", "central")
    .attr("y", rh / 2)
    .attr("x", -10)
  
  let trans = unit.selectAll(".trans")
    .data(d => d.trans)
  
  trans = trans.enter()
    .append("g")
    .attr("transform", d => `translate(${time_scale(d.dt)}, 0)`)
   
  
  trans.append("circle")
    .attr("r", 7)
    .attr("cy", rh / 2)
    .attr("fill", d => fill[d.trans] ? fill[d.trans].circ : null)
  
  
  trans.append("text")
    .text(d => d.trans == "Canceled" ? "X" : d.trans.substring(0, 1))
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .attr("y", rh / 2)
    .attr("fill", d => fill[d.trans] ? fill[d.trans].txt : null )
    .attr("font-size", 12)
    .attr("font-weight", "bold")
  
  let circ = trans.append("circle")
    .attr("r", 7)
    .attr("cy", rh / 2)
    .attr("fill-opacity", 0)
  
  
  circ.append("title")
    .text(d => 
      Object.keys(d).map(k => `${k}: ${d[k]}`).join("\n")
    )
  
  

  
  return div.node()
}


function _42(md){return(
md`#### #Detail Notes`
)}

function _detail_notes(detail_data,d3)
{
  let data = detail_data.reduce((a, v) => {
    v.note && v.note != "" 
    a = a.concat(v.notes.map(d => {
      let r = {}
      detail_data.length > 1 ? r.inci_id = v.inci_id : null;
      r.userid = d.userid;
      r.time = `${[`0${d.dt.getHours()}`.slice(-2),  `0${d.dt.getMinutes()}`.slice(-2), `0${d.dt.getSeconds()}`.slice(-2)].join(":")}`
      r.note = d.note
      r.dt = d.dt
      return r
    })) 
    return a
  }, []).sort((a, b) => a.dt - b.dt)

  let cnt = d3.create("div")
  
  cnt.append("div")
    .html("Incident Notes:")
  
  let div = cnt.append("div")
    .attr("class", "detail-notes")
    .style("max-height", "300px")
    .style("overflow", "auto")
  
  let table = div.append("table")
    .style("font-size", "12px")
  
  
  let tbody = div.append("table")
  
  let tr = tbody.selectAll("tr")
    .data(data)
  
  tr = tr.enter()
    .append("tr")
  
  let td = tr.selectAll("td")
    .data(d => {
      return Object.keys(d).reduce((a, k) => { k != "dt" ? a.push(d[k]) : null; return a}, [])

      
    })
  
  td.enter()
    .append("td")
    .html(d => d)
  
  
  return cnt.node()
  
  
}


function _44(md){return(
md`#### #Detail Data`
)}

function _detail_data(filtered_data,tgt_id){return(
filtered_data.filter(f => f.parent_id == tgt_id)
)}

function _46(md){return(
md`### #Lookup`
)}

function _master_lst(csv_data){return(
csv_data.reduce((a, v, i, s) => {
  a.nature.includes(v.nature.descript) == false ? a.nature.push(v.nature.descript) : null
  a.closure.includes(v.closure.descript) == false ? a.closure.push(v.closure.descript) : null
  a.cities.includes(v.address.city) == false ? a.cities.push(v.address.city) : null
  a.cad_agencies.includes(v.cad_agency) == false ? a.cad_agencies.push(v.cad_agency) : null
  
  v.units.reduce((aa, vv) => {
    vv.cahoot && aa.cahoots_agencies.includes(vv.agency) == false ? aa.cahoots_agencies.push(vv.agency) : null
    
    vv.cahoot == 0 && aa.other_agencies.includes(vv.agency) == false ? aa.other_agencies.push(vv.agency) : null
    
    vv.trans != "xPrime Unit" && aa.rlog.includes(vv.trans) == false ? aa.rlog.push(vv.trans) : null
    
    return aa
  }, a)
  
  
  
  if(i == s.length - 1) {
    a.closure = a.closure.sort()
    a.nature = a.nature.sort()
    a.cahoots_agencies = a.cahoots_agencies.sort()
    a.other_agencies = a.other_agencies.sort()
  }
  return a
}, {
  cahoots_agencies: [],
  other_agencies: [],
  cad_agencies: [],
  closure: [],
  nature: [],
  rlog: [],
  cities: [],
  close_exclude: ["DUP", "ACC", "TEST", "XUTA", "EERR", "DIS"].sort(),
  nature_exclude: ["%TEST%"].sort(),
  
  
})
)}

function _preset_lu(master_lst){return(
{
   all_not: {
     tgt_rlog_trans:  master_lst.rlog,
     tgt_rlog_and_or: "OR", 
     tgt_cahoot_agencies: master_lst.cahoots_agencies,
     tgt_close_exclude: [],
     tgt_cities: master_lst.cities, 
     tgt_cad_agencies: master_lst.cad_agencies,
     tgt_nature_test: "Include", 
     tgt_cad_call_src: ["SELF", "RPTO", "PUBLIC"],
     tgt_nest: "inci_id",
     tgt_epd_bu: ["Yes", "No"]
   },    
   bu: {
     tgt_rlog_trans:  master_lst.rlog,
     tgt_rlog_and_or: "OR", 
     tgt_cahoot_agencies: master_lst.cahoots_agencies,
     tgt_close_exclude: [],
     tgt_cities: master_lst.cities, 
     tgt_cad_agencies: ["EPD"],
     tgt_nature_test: "Include", 
     tgt_cad_call_src: ["SELF", "RPTO", "PUBLIC"],
     tgt_nest: "inci_id",
     tgt_epd_bu: ["Yes"]
   }, 
   all_nest: {
     tgt_rlog_trans:  master_lst.rlog,
     tgt_rlog_and_or: "OR", 
     tgt_cahoot_agencies: master_lst.cahoots_agencies,
     tgt_close_exclude: [],
     tgt_cities: master_lst.cities, 
     tgt_cad_agencies: master_lst.cad_agencies,
     tgt_nature_test: "Include", 
     tgt_cad_call_src: ["SELF", "RPTO", "PUBLIC"],
     tgt_nest: "parent_id",
     tgt_epd_bu: ["Yes", "No"]
   },  
   epd_cah_not: {
       tgt_rlog_trans:  master_lst.rlog,
       tgt_rlog_and_or: "OR", 
       tgt_cahoot_agencies: ["EPD"],
       tgt_close_exclude: master_lst.close_exclude,
       tgt_cities: master_lst.cities,
       tgt_cad_agencies: ["EPD"],
       tgt_nature_test: "Exclude",
       tgt_cad_call_src: ["SELF", "RPTO", "PUBLIC"],
       tgt_nest: "inci_id",  
       tgt_epd_bu: ["Yes", "No"]
   },
   a: {
     tgt_rlog_trans: ["Dispatched"],
     tgt_rlog_and_or: "AND", 
     tgt_cahoot_agencies: ["EPD"],
     tgt_close_exclude: ["DUP", "EERR", "TEST"],
     tgt_cities: ["EUG"], 
     tgt_cad_agencies: ["EPD"],
     tgt_nature_test: "Exclude", 
     tgt_cad_call_src: ["SELF", "RPTO", "PUBLIC"],
     tgt_nest: "inci_id",
     tgt_epd_bu: ["Yes", "No"]
   },
   b: {
     tgt_rlog_trans: master_lst.rlog,
     tgt_rlog_and_or: "OR", 
     tgt_cahoot_agencies: master_lst.cahoots_agencies,
     tgt_close_exclude: ["DUP", "EERR", "TEST"],
     tgt_cities: ["EUG"], 
     tgt_cad_agencies: ["EPD"],
     tgt_nature_test: "Exclude", 
     tgt_cad_call_src: ["RPTO", "PUBLIC"],
     tgt_nest: "inci_id",
     tgt_epd_bu: ["Yes", "No"]
   },  
   c: {
     tgt_rlog_trans: master_lst.rlog.filter(f => f != "Prime Unit"),
     tgt_rlog_and_or: "NOT", 
     tgt_cahoot_agencies: ["EPD"],
     tgt_close_exclude: ["DUP", "EERR", "TEST"],
     tgt_cities: ["EUG"], 
     tgt_cad_agencies: ["EPD"],
     tgt_nature_test: "Exclude", 
     tgt_cad_call_src: ["RPTO", "PUBLIC"],
     tgt_nest: "inci_id",    
     tgt_epd_bu: ["Yes", "No"]
   },    
   d: {
     tgt_rlog_trans: ["Prime Unit"],
     tgt_rlog_and_or: "NOT", 
     tgt_cahoot_agencies: ["EPD"],
     tgt_close_exclude: ["DUP", "EERR", "TEST"],
     tgt_cities: ["EUG"], 
     tgt_cad_agencies: ["EPD"],
     tgt_nature_test: "Exclude", 
     tgt_cad_call_src: ["RPTO", "PUBLIC"],
     tgt_nest: "inci_id",
     tgt_epd_bu: ["Yes", "No"]
   }, 
}
)}

function _user_lu(){return(
{
  CE: "CLCC", 
  SP: 'SPD',
  Un: "SELF",
  NULL: "OTHR",
}
)}

function _50(md){return(
md`### #Geo Data`
)}

function _fc(turf,nested_level2){return(
turf.featureCollection(nested_level2.reduce((a, d) => {
  
  let pt = turf.point([d.Lng, d.Lat])
  pt.properties = Object.keys(d).reduce((a, v) => {
    !["Lat", "Lng"].includes(v) ? a.push(d[v]) : null
    return a
  }, [])
  d.Lat && d.Lng && d.Lat > 0 && d.Lng < 0 ? a.push(pt) : null
 
  return a
}, []))
)}

function _52(md){return(
md`### #Summmary Table`
)}

function _summary_table_title(html,summary_nester,top_n){return(
html`${summary_nester} - Top ${top_n}`
)}

function _top_n(nested_data,nest_key,number,d3)
{
  let len = nested_data.reduce((a, v) => {!a.includes(v[nest_key]) ? a.push(v[nest_key]) : null;  return a;}, []).length
  return number({
    min: 1, 
    max: len, 
    step: 1, 
    value: d3.min([10, len]),
    //title: "Integers", 
    description: `Top N from one through ${len}`,
    //submit: true
  })
}


function _nest_key(summary_nester){return(
summary_nester
)}

function _summary_nester(select){return(
select({
  //title: "Nest",
  description: "Summary Table Grouping.",
  options: [
    {label: "Nature", value: "Nature"},
    {label: "Closure", value: "Closure"},
    {label: "CAD Call Source", value: "CAD Call Source"},
    {label: "Call Origin", value: "Call Orign"},
    {label: "Location", value: "Location"},
    "Day of Week",
    "Hour",
    {label: "Incident Count", value: "Incident Count"},
  ],
  value: "Nature"
})
)}

function* _summary_table(nested_data,summary_nester,summary_data,top_n,html,d3)
{ 
  let lu = nested_data.reduce((a, v) => {
    let k = v[summary_nester]
    let i = summary_data.map(d => d[summary_nester]).indexOf(k)
    i = i < 0 ? top_n : i
    !a.map(d => d.k).includes(k) ? a.push({k: k, i: i }) : null
    return a
  }, [])
  
  let head = ["Rank"].concat(Object.keys(summary_data[0])).concat([
      `<select id="sum-select"> 
        <option value="include">Include</option>
        <option value="exclude">Exclude</option>
      </select>`
    ]).reduce((md, el, i) => {
      md += `<th id="sum-th-${i}">${el}</th>`
      return md
    }, "")

  let body = summary_data.reduce((a, tr, i) => {
    a += `<tr id="sum-tr-${i}"><td class="sum-td-0 id="sum-td-${i}-0"> ${i+1}</td>`
    a += Object.keys(tr).reduce((md, el, ii) => {
      md += `<td class="sum-td-${ii + 1} id="sum-td-${i}-${ii + 1}" data-cnt="${tr.Count}" data-i="${i}">${tr[el]}</td>`
      return md
    }, "")
    a += `<td>
        <input type="checkbox" class="sum-check" data-i="${i}" checked>
      </td></tr>\n`
    return a
  }, "")
      

  let foot = [
      "", "Total", `0`, ""
    ].reduce((md, el, i) => {
      md += `<th id="sum-tf-${i}">${el}</th>`
      return md
    }, "")
  
  let div = html`
    <div>
      <table id="sum-tab">
        <thead>
          <tr>
            ${head}
          </tr>
        </thead>
          ${body}
        <tbody>
        </tbody>
        <tfoot>
          <tr>${foot}</td>
        </tfoot>

      </table>
    </div>`


  yield div
  
  
  


  let onchange = () => {
    let val = {}
    let select = table.select("#sum-select")
    let t = select.property("value")
    val.type = t
    val.cnt = 0
    val.keys = []
    val.is = []
    
    let checks = table.selectAll(".sum-check")
    
    checks.each(function() {
      let i = +d3.select(this).node().dataset.i
      let r = d3.select(`#sum-tr-${i}`)
      let x = d3.select(this).property("checked")
      let k = t == "include" && x || t != "include" && !x ? 1 : 0
      let key = lu.filter(f => f.i == i)
      val.cnt += k ? summary_data[i].Count : 0
     
      
      r.style("text-decoration", k ? "none" : "line-through")
        .style("opacity", k ? 1 : .25);
      
      k ? val.keys = val.keys.concat(key) : null //.push({i: i, x: x, k: k, key: key}) : null
      k ? val.is.push(i) : null
      
     
    })

    d3.select("#sum-tf-2")
      .html(val.cnt)
    
    d3.selectAll(".sum-td-3")
      .html(function() {
        let per = (+d3.select(this).node().dataset.cnt / val.cnt) * 100
        return !val.is.includes(+d3.select(this).node().dataset.i) ? "" : `${per < 10 ? per.toFixed(2) : per.toFixed(1)}%`
       

      })
                  

    div.value = val

    div.dispatchEvent(new CustomEvent("input"))
  }
  
  
  let table = d3.select("#sum-tab")
  table.selectAll(".sum-check, #sum-select")
    .on("change", onchange);

  onchange()

}


function _level2Filter(summary_table,summary_nester){return(
f => summary_table.keys.map(d => d.k).includes(f[summary_nester])
)}

function _59(md){return(
md`### #Summary Data`
)}

function _summary_data(d3,nest_key,nested_data,top_n,summary_nester)
{
  let data =  d3.nest()
    .key((d, i) => d[nest_key])
    .entries(nested_data)
    .sort((a, b) => b.values.length - a.values.length)
    .reduce((a, v, i, s) => {
        let r = {}
        
        if(i < top_n) {
          r[summary_nester] = v.key
          //r.values = v.values
          r.Count = v.values.length
          r.Percent = `${(v.values.length / nested_data.length * 100).toFixed((v.values.length / nested_data.length * 100) < 10 ? 2 : 1)}%`
          a.push(r)
        } else if( i == top_n ) {
          r[summary_nester] = `Other (${s.length - top_n} Categories)`
          let vals = s.slice(top_n).reduce((a, v) => {
            a = a.concat(v.values)
            return a
          }, [])
          r.Count = vals.length
          r.Percent = `${(vals.length / nested_data.length * 100).toFixed((vals.length / nested_data.length * 100) < 10 ? 2 : 1)}%`
          a.push(r)
          
        }
        return a
    }, [])
  
  return data
  
}


function _61(md){return(
md`### #Nested Data`
)}

function _nested_level2(nested_data,level2Filter){return(
nested_data.filter(level2Filter)
)}

function _nested_data(filtered_data,d3,tgt_nest){return(
filtered_data.length == 0 ? [] : d3.nest()
  .key(d => d[tgt_nest])
  .entries(filtered_data)
  .map(d => {
    let r = {}
    r[`Incident ID`] = d.values.reduce((a, d) =>  {a.includes(d.inci_id) == false ? a.push(d.inci_id) : null; return a; }, []).join(", ")
    r["Parent ID"] = d.values[0].parent_id
    
    r["Day of Week"] = d.values[0].t.wd
    
    r["Hour"] = d.values[0].t.hr
    
    r[`Nature`] = d.values.reduce((a, d) => {a.includes(d.nature.descript) == false ? a.push(d.nature.descript) : null ;return a}, []).join(", ")
    r[`Closure`] = d.values.reduce((a, d) => {a.includes(d.closure.descript) == false ? a.push(d.closure.descript) : null ;return a}, []).join(", ")
    
    r["Location"] = d.values[0].address.site == null ? `${+d.values[0].address.no} ${d.values[0].address.street}` : d.values[0].address.site
    
    r[`CAD Call Source`] = d.values[0].cad_call_src
    
    r[`Call Orign`] = d.values[0].log_init.src.toUpperCase().includes("SPAWN") ? `${d.values[0].log_init.spawn_agency} to ${d.values[0].cad_agency} ${d.values[0].log_init.src.split(" ")[1]}` : d.values[0].log_init.src
    
    r[`CAD Agency`] = d.values.reduce((a, d) =>  {a.includes(d.cad_agency) == false ? a.push(d.cad_agency) : null; return a; }, []).join(", ")
    
    r["CAHOOT Units"] = d.values.reduce((a, d) => { 
      d.units.forEach(u => {
        u.cahoot == 1 && a.includes(`${u.unit} (${u.agency})`) == false ? a.push(`${u.unit} (${u.agency})`) : null
      })
      return a
    }, []).join(", ")
    
    r["CAHOOT Activity"] = d.values.reduce((a, d) => { 
      d.units.forEach(u => {
        u.cahoot == 1 && a.includes(u.trans) == false ? a.push(u.trans) : null
      })
      return a
    }, []).join(", ")
    
    r["Other Units"] = d.values.reduce((a, d) => { 
      d.units.forEach(u => {
        u.cahoot != 1 && u.unit && a.includes(`${u.unit} (${u.agency})`) == false ? a.push(`${u.unit} (${u.agency})`) : null
      })
      return a
    }, []).join(", ")
    
    r["Other Activity"] = d.values.reduce((a, d) => { 
      d.units.forEach(u => {
        u.cahoot == 0 && a.includes(u.trans) == false ? a.push(u.trans) : null
      })
      return a
    }, []).join(", ")
    
    r["Lat"] = d.values[0].coords.lat
    r["Lng"] = d.values[0].coords.lng
    r["Incident Count"] = `${d.values.length} Incidents`
    return r
  })
)}

function _64(md){return(
md`### #Data Filtered`
)}

function _filtered_data(csv_data,tgt_cahoot_agencies,tgt_nature,tgt_closure,tgt_close_exclude,tgt_nature_test,tgt_rlog_trans,tgt_rlog_and_or,tgt_cities,tgt_cad_agencies,tgt_cad_call_src,tgt_joint,tgt_response,tgt_epd_bu){return(
csv_data.filter(f => {
  let flag = 1

  let ca_cnt = f.units.reduce((a, v) => {
     a.includes(v.agency) == false && v.cahoot == 1 && tgt_cahoot_agencies.includes(v.agency) ? a.push(v.agency) : null
     return a
  }, []).length
  
  flag = ca_cnt == 0 ? 0 : flag
  
  flag = tgt_nature != "All" && f.nature.descript != tgt_nature ? 0 : flag
  flag = tgt_closure != "All" && f.closure.descript != tgt_closure ? 0 : flag

  
  flag = tgt_close_exclude.includes(f.closure.code) == false ? flag : 0
  
  flag = tgt_nature_test == "Exclude" && f.nature.descript.toUpperCase().includes("TEST") ? 0 : flag
  

  let trans_lst = f.units.reduce((a, v) => {
    v.cahoot == 1 && tgt_rlog_trans.includes(v.trans) && a.includes(v.trans) == false ? a.push(v.trans) : null
    return a
  }, [])
  
  flag = tgt_rlog_and_or == "OR" && trans_lst.length == 0 ? 0 : flag
  
  flag = tgt_cities.includes(f.address.city) ? flag : 0
  
  flag = tgt_cad_agencies.includes(f.cad_agency) ? flag : 0
  
  flag = tgt_cad_call_src.includes(["RPTO", "SELF"].includes(f.cad_call_src) ? f.cad_call_src : "PUBLIC") ? flag : 0
  
  tgt_rlog_trans.forEach(tran => {
     flag = tgt_rlog_and_or == "AND" && trans_lst.includes(tran) == false ? 0 : flag
     flag = tgt_rlog_and_or == "NOT" && trans_lst.includes(tran) ? 0 : flag
     
  })
  
  if(tgt_joint != "ALL") {
    let a_lst = f.units.reduce((aa, vv) => {
      !aa.includes(vv.agency) && vv.cahoot == 0 && tgt_response.includes(vv.agency) ? aa.push(vv.agency) : null
      return aa
    }, [])
    if(tgt_joint == "JOINT WITH") {
      flag = !a_lst.includes(tgt_response) ? 0 : flag
    } else if (tgt_joint == "WITHOUT") {
      flag = a_lst.includes(tgt_response) ? 0 : flag
    } else if (tgt_joint == "CAHOOTS ONLY") {
      flag = f.units.filter(f => f.cahoot != 1).length > 0 ? 0 : flag 
    }
    
  }
  
  
  ///BU///
  if(tgt_epd_bu.length == 1) {
     let is_bu = tgt_epd_bu[0]
     
     flag = is_bu == "Yes" && !f.bu ? 0 : flag
     flag = is_bu == "No" && f.bu ? 0 : flag
   }
  
  
  if(flag == 1) { return f }
})
)}

function _66(md){return(
md`### #Data Fetch`
)}

function _sp_flag(){return(
window.location.hostname.toUpperCase().indexOf("SHAREPOINT") < 0 ? false : true
)}

function _csv_file_name(target_year){return(
`cahoots_${target_year}.csv`
)}

function _local_url(){return(
`http://localhost:5000/ad_hoc/cahoots/`
)}

function _remote_url(){return(
`https://coeugene.sharepoint.com/sites/SmartForce/Ops/CA/Ad%20Hoc%20Dashboards/cahoots/`
)}

function _fetch_url(sp_flag,local_url,remote_url){return(
!sp_flag ? local_url : remote_url
)}

async function* _csv_raw(d3,fetch_url,csv_file_name)
{
  
  d3.select("#spin").style("display", "block")
  d3.select("#main-div").style("display", "none")
  

  
  let csv = await d3.csv(`${fetch_url}${csv_file_name}`)

  yield csv
}


function* _csv_data(csv_raw,camelCase,user_lu,d3)
{
  
   yield [...csv_raw].map(d => JSON.stringify(d)).map(d => { 
    d = JSON.parse(d)
    d.cad_dt = JSON.parse(d.cad_dt)
    Object.keys(d.cad_dt).forEach(k => d.cad_dt[k] = new Date(d.cad_dt[k]))
    d.log_init = JSON.parse(d.log_init)
    d.log_init.src = camelCase(d.log_init.src)
    d.log_init.dt = new Date(d.log_init.dt)
    d.prime = d.prime == "NULL" ? null : JSON.parse(d.prime)
    if(d.prime != null && d.prime.agency == null) {
      d.prime.agency = "OTHER" 
    }
    
    d.t = JSON.parse(d.t)
    d.t.wd = d.t.wk
    
    d.units = JSON.parse(d.units).map(u => { 
      if(u.dt) { u.dt = new Date(u.dt) }; 
      let key = u.trans == "Prime Unit" ? d.log_init.by : u.userid
      u.by = key ? user_lu[key.slice(0, 2)] : null
      u.by = u.by == null ? user_lu["NULL"] : u.by
      return u; 
    })
    
    d.cad_agency = d.cad_agency == null || d.cad_agency == "" ? "None" : d.cad_agency
    
    d.address = JSON.parse(d.address)
    d.address.street = camelCase(d.address.street)
    d.address.city = d.address.city == null || d.address.city == "" ? "None" : d.address.city
    d.address.site = d.address.site ? camelCase(d.address.site) : null
    
    d.nature = JSON.parse(d.nature)
    d.nature.descript = d.nature.descript == null || d.nature.descript == "" ? "None" : camelCase(d.nature.descript) 
    
    d.closure = JSON.parse(d.closure)
    d.closure.descript = d.closure.descript == null || d.closure.descript == "" ? "None" : camelCase(d.closure.descript)
    
    
    
    d.coords = JSON.parse(d.coords)
    
    d.notes = d.notes == "NULL" || d.notes == null ? [] : JSON.parse(d.notes).map(d => { d.dt = new Date(d.dt); return d})
    
    let src = d.log_init.src.toUpperCase() == "SELF" ? d.units.filter(f => f.unit == d.log_init.additional) : null
    src = src && src.length > 0 ? src[0] : null
    
    d.log_init.src = src ? `${src.agency} ${src.cahoot ? "CAHOOTs" : "Other"} Unit` : d.log_init.src
  
    /// HAS BACKUP ///
    d.bu = null
    let bu = d3.nest()
      .key(d => d.cahoot)
      .entries(d.units.filter(f => ["Arrived", "Dispatched"].includes(f.trans)))
      .map(d => {
        let r = {}
        r.cahoot = +d.key
        r.first_arrive = d.values.filter(f => f.trans == "Arrived").sort((a, b) => a.dt - b.dt)[0]
        r.first_dispatch = d.values.filter(f => f.trans == "Dispatched").sort((a, b) => a.dt - b.dt)[0]
        return r
      })

    if(bu.length > 1) {
      let c = bu.filter(f => f.cahoot)[0].first_arrive
      let e = bu.filter(f => !f.cahoot)[0].first_dispatch
      if(c && e && e.dt >= c.dt) {
        d.bu = {c: c, e: e} 
      }
    }

  
     
    return d
  })
  
  d3.select("#spin").style("display", "none")
  d3.select("#main-div").style("display", "block")
}


function _74(md){return(
md`### #Helpers`
)}

function _camelCase(){return(
function camelCase(str) {
  return str.split(" ").map(v => `${v.slice(0, 1).toUpperCase()}${v.slice(1).toLowerCase()}`).join(" ")
}
)}

function _76(md){return(
md`### # Spin`
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


function _78(md){return(
md`### # Lib`
)}

function _d3(require){return(
require("d3@5")
)}

function _json2csv(require){return(
require("json2csv")
)}

function _turf(require){return(
require("@turf/turf@5")
)}

function _L(require){return(
require('leaflet@1.2.0')
)}

function _l_css(html,resolve){return(
html`<link href='${resolve('leaflet@1.2.0/dist/leaflet.css')}' rel='stylesheet' />`
)}

function _heatLayer(L,require){return(
L, require('leaflet.heat').catch(() =>  L.heatLayer)
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("ee")).define("ee", _ee);
  main.variable(observer("hash_year")).define("hash_year", ["Generators","year_lst","addEventListener","removeEventListener"], _hash_year);
  main.variable(observer("cfs_count")).define("cfs_count", ["nested_data","nested_level2","summary_nester","html"], _cfs_count);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer("year_lst")).define("year_lst", _year_lst);
  main.variable(observer("viewof target_year")).define("viewof target_year", ["select","year_lst","hash_year"], _target_year);
  main.variable(observer("target_year")).define("target_year", ["Generators", "viewof target_year"], (G, _) => G.input(_));
  main.variable(observer("viewof preset")).define("viewof preset", ["csv_data","select","target_year"], _preset);
  main.variable(observer("preset")).define("preset", ["Generators", "viewof preset"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_rlog_trans")).define("viewof tgt_rlog_trans", ["checkbox","master_lst","preset_lu","preset"], _tgt_rlog_trans);
  main.variable(observer("tgt_rlog_trans")).define("tgt_rlog_trans", ["Generators", "viewof tgt_rlog_trans"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_rlog_and_or")).define("viewof tgt_rlog_and_or", ["radio","preset_lu","preset"], _tgt_rlog_and_or);
  main.variable(observer("tgt_rlog_and_or")).define("tgt_rlog_and_or", ["Generators", "viewof tgt_rlog_and_or"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_nature")).define("viewof tgt_nature", ["select","master_lst"], _tgt_nature);
  main.variable(observer("tgt_nature")).define("tgt_nature", ["Generators", "viewof tgt_nature"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_closure")).define("viewof tgt_closure", ["select","master_lst"], _tgt_closure);
  main.variable(observer("tgt_closure")).define("tgt_closure", ["Generators", "viewof tgt_closure"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_joint")).define("viewof tgt_joint", ["select"], _tgt_joint);
  main.variable(observer("tgt_joint")).define("tgt_joint", ["Generators", "viewof tgt_joint"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_response")).define("viewof tgt_response", ["radio","master_lst","tgt_joint","d3"], _tgt_response);
  main.variable(observer("tgt_response")).define("tgt_response", ["Generators", "viewof tgt_response"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_nest")).define("viewof tgt_nest", ["select","preset_lu","preset"], _tgt_nest);
  main.variable(observer("tgt_nest")).define("tgt_nest", ["Generators", "viewof tgt_nest"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_cahoot_agencies")).define("viewof tgt_cahoot_agencies", ["checkbox","master_lst","preset_lu","preset"], _tgt_cahoot_agencies);
  main.variable(observer("tgt_cahoot_agencies")).define("tgt_cahoot_agencies", ["Generators", "viewof tgt_cahoot_agencies"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_epd_bu")).define("viewof tgt_epd_bu", ["checkbox","preset_lu","preset"], _tgt_epd_bu);
  main.variable(observer("tgt_epd_bu")).define("tgt_epd_bu", ["Generators", "viewof tgt_epd_bu"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_close_exclude")).define("viewof tgt_close_exclude", ["checkbox","master_lst","preset_lu","preset"], _tgt_close_exclude);
  main.variable(observer("tgt_close_exclude")).define("tgt_close_exclude", ["Generators", "viewof tgt_close_exclude"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_cities")).define("viewof tgt_cities", ["checkbox","master_lst","preset_lu","preset"], _tgt_cities);
  main.variable(observer("tgt_cities")).define("tgt_cities", ["Generators", "viewof tgt_cities"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_cad_agencies")).define("viewof tgt_cad_agencies", ["checkbox","master_lst","preset_lu","preset"], _tgt_cad_agencies);
  main.variable(observer("tgt_cad_agencies")).define("tgt_cad_agencies", ["Generators", "viewof tgt_cad_agencies"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_nature_test")).define("viewof tgt_nature_test", ["radio","preset_lu","preset"], _tgt_nature_test);
  main.variable(observer("tgt_nature_test")).define("tgt_nature_test", ["Generators", "viewof tgt_nature_test"], (G, _) => G.input(_));
  main.variable(observer("viewof tgt_cad_call_src")).define("viewof tgt_cad_call_src", ["checkbox","preset_lu","preset"], _tgt_cad_call_src);
  main.variable(observer("tgt_cad_call_src")).define("tgt_cad_call_src", ["Generators", "viewof tgt_cad_call_src"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _23);
  main.define("initial tgt_id", ["nested_data"], _tgt_id);
  main.variable(observer("mutable tgt_id")).define("mutable tgt_id", ["Mutable", "initial tgt_id"], (M, _) => new M(_));
  main.variable(observer("tgt_id")).define("tgt_id", ["mutable tgt_id"], _ => _.generator);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer()).define(["inci_table_page"], _26);
  main.variable(observer("viewof inci_table_page")).define("viewof inci_table_page", ["table_data","d3"], _inci_table_page);
  main.variable(observer("inci_table_page")).define("inci_table_page", ["Generators", "viewof inci_table_page"], (G, _) => G.input(_));
  main.variable(observer("table_pager_style")).define("table_pager_style", ["html"], _table_pager_style);
  main.variable(observer("inci_table")).define("inci_table", ["d3","table_data","inci_table_page","mutable tgt_id"], _inci_table);
  main.variable(observer()).define(["md"], _30);
  main.variable(observer("table_data")).define("table_data", ["nested_level2"], _table_data);
  main.variable(observer()).define(["md"], _32);
  main.variable(observer("heat_options")).define("heat_options", _heat_options);
  main.variable(observer("map")).define("map", ["d3","L","fc","heatLayer","heat_options"], _map);
  main.variable(observer()).define(["md"], _35);
  main.variable(observer()).define(["md"], _36);
  main.variable(observer("detail_nav")).define("detail_nav", ["detail_data","html","d3"], _detail_nav);
  main.variable(observer()).define(["md"], _38);
  main.variable(observer("detail_map")).define("detail_map", ["d3","L","detail_data","turf"], _detail_map);
  main.variable(observer()).define(["md"], _40);
  main.variable(observer("detail_log")).define("detail_log", ["d3","detail_data","width"], _detail_log);
  main.variable(observer()).define(["md"], _42);
  main.variable(observer("detail_notes")).define("detail_notes", ["detail_data","d3"], _detail_notes);
  main.variable(observer()).define(["md"], _44);
  main.variable(observer("detail_data")).define("detail_data", ["filtered_data","tgt_id"], _detail_data);
  main.variable(observer()).define(["md"], _46);
  main.variable(observer("master_lst")).define("master_lst", ["csv_data"], _master_lst);
  main.variable(observer("preset_lu")).define("preset_lu", ["master_lst"], _preset_lu);
  main.variable(observer("user_lu")).define("user_lu", _user_lu);
  main.variable(observer()).define(["md"], _50);
  main.variable(observer("fc")).define("fc", ["turf","nested_level2"], _fc);
  main.variable(observer()).define(["md"], _52);
  main.variable(observer("summary_table_title")).define("summary_table_title", ["html","summary_nester","top_n"], _summary_table_title);
  main.variable(observer("viewof top_n")).define("viewof top_n", ["nested_data","nest_key","number","d3"], _top_n);
  main.variable(observer("top_n")).define("top_n", ["Generators", "viewof top_n"], (G, _) => G.input(_));
  main.variable(observer("nest_key")).define("nest_key", ["summary_nester"], _nest_key);
  main.variable(observer("viewof summary_nester")).define("viewof summary_nester", ["select"], _summary_nester);
  main.variable(observer("summary_nester")).define("summary_nester", ["Generators", "viewof summary_nester"], (G, _) => G.input(_));
  main.variable(observer("viewof summary_table")).define("viewof summary_table", ["nested_data","summary_nester","summary_data","top_n","html","d3"], _summary_table);
  main.variable(observer("summary_table")).define("summary_table", ["Generators", "viewof summary_table"], (G, _) => G.input(_));
  main.variable(observer("level2Filter")).define("level2Filter", ["summary_table","summary_nester"], _level2Filter);
  main.variable(observer()).define(["md"], _59);
  main.variable(observer("summary_data")).define("summary_data", ["d3","nest_key","nested_data","top_n","summary_nester"], _summary_data);
  main.variable(observer()).define(["md"], _61);
  main.variable(observer("nested_level2")).define("nested_level2", ["nested_data","level2Filter"], _nested_level2);
  main.variable(observer("nested_data")).define("nested_data", ["filtered_data","d3","tgt_nest"], _nested_data);
  main.variable(observer()).define(["md"], _64);
  main.variable(observer("filtered_data")).define("filtered_data", ["csv_data","tgt_cahoot_agencies","tgt_nature","tgt_closure","tgt_close_exclude","tgt_nature_test","tgt_rlog_trans","tgt_rlog_and_or","tgt_cities","tgt_cad_agencies","tgt_cad_call_src","tgt_joint","tgt_response","tgt_epd_bu"], _filtered_data);
  main.variable(observer()).define(["md"], _66);
  main.variable(observer("sp_flag")).define("sp_flag", _sp_flag);
  main.variable(observer("csv_file_name")).define("csv_file_name", ["target_year"], _csv_file_name);
  main.variable(observer("local_url")).define("local_url", _local_url);
  main.variable(observer("remote_url")).define("remote_url", _remote_url);
  main.variable(observer("fetch_url")).define("fetch_url", ["sp_flag","local_url","remote_url"], _fetch_url);
  main.variable(observer("csv_raw")).define("csv_raw", ["d3","fetch_url","csv_file_name"], _csv_raw);
  main.variable(observer("csv_data")).define("csv_data", ["csv_raw","camelCase","user_lu","d3"], _csv_data);
  main.variable(observer()).define(["md"], _74);
  main.variable(observer("camelCase")).define("camelCase", _camelCase);
  main.variable(observer()).define(["md"], _76);
  main.variable(observer("spin")).define("spin", ["d3","width"], _spin);
  main.variable(observer()).define(["md"], _78);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  const child1 = runtime.module(define1);
  main.import("checkbox", child1);
  main.import("radio", child1);
  main.import("select", child1);
  main.import("slider", child1);
  main.import("number", child1);
  const child2 = runtime.module(define2);
  main.import("table", child2);
  main.variable(observer("json2csv")).define("json2csv", ["require"], _json2csv);
  main.variable(observer("turf")).define("turf", ["require"], _turf);
  main.variable(observer("L")).define("L", ["require"], _L);
  main.variable(observer("l_css")).define("l_css", ["html","resolve"], _l_css);
  main.variable(observer("heatLayer")).define("heatLayer", ["L","require"], _heatLayer);
  return main;
}
