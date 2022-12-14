// https://observablehq.com/@tmcw/rdatasets@205
import define1 from "./60ea978986bfd25e@1624.js";

function _1(md){return(
md`# Rdatasets

This notebook builds off of Vincent Arel-Bundock’s [Rdatasets](https://github.com/vincentarelbundock/Rdatasets) project, which collects all the datasets distributed with R. It is intended to be the _luxury Cadillac of dataset tools_. Let’s take a tour.

First, you’ll want to import the datasets:

\`\`\`js
import {datasets} from "@tmcw/rdatasets"
\`\`\`

Then the best way to choose a dataset is by typing this and hitting Tab, thus triggering Observable’s luxury autocompletion.

\`\`\`js
datasets.
\`\`\`

_Here, I’ve left a cell with that content - so just put your cursor after the . and hit Tab:_`
)}

function _3(md){return(
md`So that’ll show you all of the beautiful dataset options. Then, you can choose one by pressing the arrow keys and Enter, or by clicking a choice. From there, you have an object: each dataset has these properties:

- title: It’s the title of the dataset, pretty self-explanatory.
- doc: Inline, fancy, HTML documentation describing where the dataset came from and some other details about the variables within.
- data: The data contained within: the CSV file of this dataset pre-parsed into an array of objects. This is likely what you’ll use if you’re doing any kind of computation with the dataset.
- table: A table, made with my [tables notebook](https://beta.observablehq.com/@tmcw/tables/2), of the dataset.
- raw: the unprocessed row of metadata about the dataset, from the Rdatasets project. Useful if you want the URL to the CSV file, or something like that.

Let’s look at some examples. Here’s the Titanic dataset’s quick information page:
`
)}

function _4(datasets){return(
datasets.TitanicSurvival.doc
)}

function _5(md){return(
md`---

And the table of its data:

---`
)}

function _6(datasets){return(
datasets.TitanicSurvival.table
)}

function _7(md){return(
md`---

And then, finally, the data as an array.

---`
)}

function _8(datasets){return(
datasets.TitanicSurvival.data
)}

function _9(md){return(
md`---

✨ That’s it!

**Footnotes**

Note that all the datasets are lazy-loaded: the .data and .doc properties are getters that return promises. This also means that, if you want to get their values in another cell, you’ll need to use await. Like here:`
)}

async function _10(datasets)
{
  const data = await datasets.Adler.data;
  let sum = 0;
  for (let { rating } of data) {
    sum += +rating;
  }
  return sum / data.length;
}


function _11(md){return(
md`

**Potential future tasks**

Right now this does not do any casting of values from the CSV files. I haven’t found a handy reference for the column types, and CSV is a ‘string only’ data format. CSV does not have the concept of numbers, and CSV parsers that auto-cast to numbers are lying to you. I want this to be convenient (so, probably, parsing those values), but also super robust. Until I figure out how to do both, it’ll be a little inconvenient, in that particular way.`
)}

async function _index(d3,fixcors)
{
  return (await d3.csv(
    "https://vincentarelbundock.github.io/Rdatasets/datasets.csv"
  )).map(row => {
    row.CSV = fixcors(row.CSV);
    row.Doc = fixcors(row.Doc);
    return row;
  });
}


function _datasets(index,d3,table,html)
{
  let datasets = {};
  index.forEach(row => {
    const { Item, CSV, Doc, Title } = row;
    datasets[Item] = {
      title: Title,
      get data() {
        return d3.csv(CSV);
      },
      get table() {
        return d3.csv(CSV).then(data => table(data));
      },
      raw: row,
      get doc() {
        return d3.html(Doc).then(page => {
          return html`<div style='background:#fff; border: 2px solid #000; max-width:640px; width: 100%; padding: 10px 20px; box-sizing: border-box; max-height: 420px; overflow-y: scroll; font-size: 80%;'>${
            page.body.innerHTML
          }</div>`;
        });
      }
    };
  });
  return datasets;
}


function _fixcors(){return(
url => url.replace(/raw\.github/, "raw.githubusercontent")
)}

function _d3(require){return(
require("d3-dsv", "d3-fetch")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["datasets"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["datasets"], _6);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["datasets"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["datasets"], _10);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer("index")).define("index", ["d3","fixcors"], _index);
  main.variable(observer("datasets")).define("datasets", ["index","d3","table","html"], _datasets);
  main.variable(observer("fixcors")).define("fixcors", _fixcors);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  const child1 = runtime.module(define1);
  main.import("table", child1);
  return main;
}
