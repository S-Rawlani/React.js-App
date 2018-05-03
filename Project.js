import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Project extends Component {
  deleteProject(id){
  	this.props.onDelete(id);
  }
  render() {
  	let projectItem;
  	if(this.props.projects){
  		projectItem= this.props.projects.map(project => {

  			return (
  				<ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
  			);
  		});
  	}
    return (
      <div className="Project"> 
        My Project
        <h3> Latest Projects</h3>
        {projectItem}
      </div>
    );
  }
}
export default Project;
