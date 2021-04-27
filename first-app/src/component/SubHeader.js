import React from 'react';
let SubHeader =()=>{
    return(
        <React.Fragment>
         <div className="Menu-bar"> 
             <div id="name">CompanyName</div>
             <div className="input-group mb-3">
             <div className="input-group-prepend">
                 <span className="search"><input type="text" placeholder="Search..."/>
             <i class="fas fa-search"></i>
             <i class="fas fa-microphone"></i></span></div>
             <div><span id="menu"><i class="fas fa-ellipsis-h"></i></span></div>
         </div>
         </div>
    
        </React.Fragment>
    );
}
export default SubHeader;