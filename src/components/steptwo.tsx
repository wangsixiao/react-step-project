import React,{Component} from 'react'
import { tsImportEqualsDeclaration } from '@babel/types';

export interface ChildProps {
  step1: boolean,
  nextHandle: () => void,
  preHandle: () => void
}
export default class StepTwo extends Component<ChildProps, {}> {
  constructor(props:any){
    super(props);
    this.state={}
  }
  componentDidMount() {
    console.log("2")
  }

  render(){
    const {
      step1, preHandle, nextHandle
    } = this.props
    return (
      <div>
        <div className="content">
        content2
        </div>
        <div className="footer-button">
          <button onClick={preHandle}>{step1 ? '上一步2' : '取消'}</button>
          <button onClick={nextHandle}>下一步2</button>
        </div>
      </div>
    )
  }
}