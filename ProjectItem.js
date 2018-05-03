import React, { Component } from 'react';

class ProjectItem extends Component {
	deleteProject(id){
		this.props.onDelete(id);
		//console.log("deleted");
	}
  render() {
    return (
      <li className="Project"> 
        <strong>{this.props.project.title}</strong> --> {this.props.project.categroy} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}
export default ProjectItem;