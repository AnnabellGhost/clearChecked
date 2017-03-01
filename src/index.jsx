import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/SideBar';
const DEPTS=[{deptName:"工程研发部门",jobNum:"106"},{deptName:"产品设计部门",jobNum:"78"}];

/*const My=()=>{
   
        return(<h1>Hello, world!</h1>);

}*/
ReactDOM.render(
        <SideBar depts={DEPTS}/>,
        document.getElementById('sidebar')
      );