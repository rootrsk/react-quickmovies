import React from 'react';
import DeleteMovie from './DeleteMovie'
import UpdateMovie from './UpdateMovie';
import CreateMovie from './CreateMovei';


class Crud extends React.Component{
    componentDidMount = () =>{
        this.setState({id:this.props.match.params.id})
        console.log(this.props.match.params.operation)
        console.log(this.props.match.params.id)
    }
    render(){
        return(
            <div>
                {this.props.match.params.operation==='delete' && <DeleteMovie id={this.props.match.params.id} />}
                {this.props.match.params.operation==='update' && <UpdateMovie id={this.props.match.params.id} />}
                {this.props.match.params.operation==='create' && <CreateMovie id={this.props.match.params.id} />}
            </div>
        )
    }
}

export default Crud