import React, {Component} from 'react';

class Timer extends Component {
    render(){
        return(
            <div className="timer--box">
                <div className="timer--content">
                    <div className="timer--header">
                        <h2>{this.props.title} </h2>
                    </div>
                    <div className="timer--meta">
                        <p>{this.props.project} </p>
                    </div>
                    <div className="timer--h2">
                        <h2>12:25:13</h2>
                    </div>
                    <div className="actions">
                        <span onClick={() => {this.props.onDelete(this.props.id)}} className="trash">Supprimer</span>
                        <span onClick={this.props.onEditFormOpen} className="edit">Modifier</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default Timer;