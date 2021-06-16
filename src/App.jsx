import React from 'react';
import Cards from './Cards';
import './index.css';
import Sdata from './Sdata';


function App(){
    return(
<>
    <h1 className="heading_style">List of Netflix Series</h1>
     {Sdata.map((val)=> {
        return(
            <Cards
            imgscr={val.imgscr}
            title={val.title}
            sname={val.sname}
            link= {val.links}

            />
              )
    })};

 
</>
 )
};
export default App;