import React, { Component } from "react";


class TimerForm extends Component {
    state = {
        title: this.props.title || "",
        project: this.props.project || "",
    }
    handleTitleChange = e => {
        this.setState({title: e.target.value})
    }
    handleProjectChange = e => {
        this.setState({project: e.target.value})
    }
    handleClick = () =>{
        const {title, project} = this.state;
        if(this.props.id){
            //on veut modifier
            const id = this.props.id;
            this.props.onFormSubmit({id, title, project});
        } else{
            //on veut creer
            this.props.onFormSubmit({title, project});
        }
    }
  render(){
      const submitText = this.props.title ? "modifier" : "Créer";
    return(
      <div className="form">
          <div className="form--content">
              <div className="form--item">
                  <label>Titre</label>
                  <input 
                    type="text"
                    placeholder="le titre"
                    value = {this.state.title}
                    onChange = {this.handleTitleChange}
                  />
             <div className="form--item">
                  <label>Project</label>
                  <input
                    type="text"
                    placeholder="ma Tache"
                    value = {this.state.project}
                    onChange = {this.handleProjectChange}
                  />

              </div>
          </div>
        </div>
        <div className="form--button">
            <button className="btn--submit" onClick={this.handleClick}>
                {submitText}
            </button>
            <button onClick={this.props.onCloseForm} className="btn--cancel">
                Annuler
            </button>
        </div>
     </div>
    )
  }
}

export default TimerForm;