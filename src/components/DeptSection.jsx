import React from 'react';
import JobItem from './JobItem';
import style from '../index.css';
const jobInfo=[
    {deptName:"工程研发部门",jobName:"mac开发工程师",jobNum:"46"},
    {deptName:"产品设计部门",jobName:"JS开发工程师",jobNum:"26"},
    {deptName:"产品设计部门",jobName:"JAVA开发工程师",jobNum:"13"},
    {deptName:"产品设计部门",jobName:"PS开发工程师",jobNum:"16"}
]

class DeptSection extends React.Component{
    constructor(props){
        super(props);
        this.state={status:false};
    }
    componentWillReceiveProps(nextProps){
        if(this.props.clear!==nextProps.clear) this.setState({status:false});
    }
    handleClick(){
        this.setState({status:!this.state.status});
        
    }
    getJobItem(){
        var jobs=jobInfo.filter(job=>job.deptName===this.props.deptName);
        return jobs.map(
            job => <JobItem clear={this.props.clear}  toggleChild={this.state.status} jobName={job.jobName} jobNum={job.jobNum} key={job.jobName}></JobItem>
        );
        //clear实现清除效果
        //toggle实现选择部门则全选子工作
    }
    render(){
        const {deptName,jobNum,status}=this.props;
        return(
            <ul>
                <li className={style.deptRow}>
                    <input 
                        type="checkbox" 
                        checked={this.state.status} 
                        onClick={()=>this.handleClick()}
                    />
                    {deptName}
                    <i className={style.numberIndept}>{jobNum}</i>
                </li>
                {this.getJobItem()}
            </ul>
        );
    }
}

export default DeptSection;