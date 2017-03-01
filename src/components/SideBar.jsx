import React, { Component } from 'react';
import DeptSection from './DeptSection';
import style from '../index.css'
class SideBar extends Component{
    constructor(props){
        super(props);
        this.state={clear:false};
    }
    getDept(){
        return this.props.depts.map((dept)=>{
            return <DeptSection 
                        clear={this.state.clear} 
                        deptName={dept.deptName} 
                        jobNum={dept.jobNum} 
                        key={dept.deptName}
                        >
                    </DeptSection>
        });

    }
    handleClick(){
        this.setState({clear:!this.state.clear});
    }
    render(){
        console.log(this.props);
        return(
            <div className={style.sidebar}>
                <h5>Sidebar</h5>
                <header>招聘职位<button className={style.clearBtn} onClick={()=>this.handleClick()}>清空</button></header>
                {this.getDept()}
            </div>
        );
    }
}

export default SideBar;
