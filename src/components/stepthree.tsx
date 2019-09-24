import React,{Component} from 'react'
import { tsImportEqualsDeclaration } from '@babel/types';

export interface ChildProps {
  nextHandle: () => void
}
export default class StepThree extends Component<ChildProps, {}> {
  constructor(props:any){
    super(props);
    this.state={}
  }

  componentDidMount() {
    console.log("3")
  }

  render(){
    return (
      <div>
        <div className="content">
        content3
        </div>
        <div className="footer-button">
          <button>取消</button>
          <button onClick={this.props.nextHandle}>下一步3</button>
        </div>
      </div>
    )
  }
}