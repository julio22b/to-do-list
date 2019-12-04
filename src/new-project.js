import {createProjectBox} from "./project-dom.js"



function Project(name){
  return {id: Date.now().toString(), name: name, todos: []}
}


export {Project}