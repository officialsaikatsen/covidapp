import React, { useEffect,useState } from 'react';
import './Covid.css';
const Covid=()=>{
    var [data,setData]=useState([]);
    var [select,setSelect]=useState("WB");
    const getData=async()=>{
const get=await fetch("https://data.covid19india.org/v4/min/data.min.json");
const response= await get.json();
setData(response[select].total);
console.log(response);

    }
   const option=(e)=>{
       
setSelect(e.target.value);
   }
useEffect(()=>{
    getData();
},select);
return(<>
<h5>Select a State</h5>
<select id="select" onChange={option} defaultValue="Select State" type="text">
<option>AN</option>
<option>AP</option>
<option>AR</option>
<option>AS</option>
<option>BR</option>
<option>CH</option>
<option>CT</option>
<option>DL</option>
<option>DN</option>
<option>GA</option>
<option>GJ</option>
<option>HP</option>
<option>HR</option>
<option>JH</option>
<option>JA</option>
<option>KA</option>
<option>KL</option>
<option>LA</option>
<option>LD</option>
<option>MH</option>
<option>ML</option>
<option>MN</option>
<option>MP</option>
<option>MZ</option>
<option>NL</option>
<option>OR</option>
<option>PB</option>
<option>PY</option>
<option>RJ</option>
<option>SK</option>
<option>TG</option>
<option>TN</option>
<option>TR</option>
<option>TT</option>
<option>UP</option>
<option>UT</option>
<option>WB</option>
</select>
<center>
<div id='card1'><div className='image'>
    <img src="./covid.png"/>
<h2>Covid Tracker App</h2>

</div>



</div>
    
    <section>
        <div id='card'><div className='image'>
<h2>Select state</h2>
<span id="c">{select}</span>
</div>



</div>

<div id='card'><div className='image'>
<h2>Total Confirmed</h2>
<span id="c">{data.confirmed}</span>
</div>



</div>
<div id='card'><div className='image'>
<h2>Total Decrease</h2>
<span id="c">{data.deceased}</span>
</div>



</div>
<div id='card'><div className='image'>
<h2>Total Recovered</h2>
<span id="c">{data.recovered}</span>
</div>



</div>
<div id='card'><div className='image'>
<h2>Total Tested</h2>
<span id="c">{data.tested}</span>
</div>



</div>
<div id='card'><div className='image'>
<h2>Total Vaccinated One</h2>
<span id="c">{data.vaccinated1}</span>
</div>



</div>
<div id='card'><div className='image'>
<h2>Total Vaccinated Two</h2>
<span id="c">{data.vaccinated2}</span>
</div>



</div>
</section></center>
</>

)



}
export default Covid;
