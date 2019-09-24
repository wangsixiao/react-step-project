import React,{Component} from 'react'
import { tsImportEqualsDeclaration } from '@babel/types';

export interface ChildProps {
  nextHandle: () => void
}
export default class StepFour extends Component<ChildProps, {}> {
  constructor(props:any){
    super(props);
    this.state={}
  }
  
  componentDidMount() {
    console.log("4")
  }

  render(){
    return (
      <div>
        <div className="content">
        content4
        </div>
        <div className="footer-button">
          <button>取消</button>
          <button onClick={this.props.nextHandle}>下一步4</button>
        </div>
      </div>
    )
  }
}