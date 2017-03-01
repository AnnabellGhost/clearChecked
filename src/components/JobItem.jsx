import React from 'react';
import style from '../index.css';
class JobItem extends React.Component{
    constructor(props){
        super(props);
        this.state={status:false};
    }
    componentWillReceiveProps(nextProps){
        if(this.props.clear!==nextProps.clear) this.setState({status:false});
        if(this.props.toggleChild!==nextProps.toggleChild) this.setState({status:nextProps.toggleChild});
    }
    handleClick(){
        this.setState({status:!this.state.status});
    }
    render(){
        const {jobName,jobNum}=this.props;
        return(
            <li className={style.jobRow}>
                <input type="checkbox" checked={this.state.status} onClick={()=>this.handleClick()}/>
                {jobName}
                <i className={style.numberInJob}>{jobNum}</i>
            </li>
        );
    }
}

export default JobItem;