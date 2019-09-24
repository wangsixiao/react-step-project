import React,{Component} from 'react'
import { tsImportEqualsDeclaration } from '@babel/types';

interface ChildProps {
  nextHandle: () => void
}

interface Istate {
  tabFlag: number
}

export default class StepOne extends Component<ChildProps, Istate> {
  constructor(props:any){
    super(props);
    this.state={
      tabFlag: 1
    }
  }

  componentDidMount() {
    console.log("1")
  }

  tabChangeHandle = (e: any) => {
    const target = e.target.innerText;
    this.setState({
      tabFlag: target == 'tab1' ? 1 : 2
    })
  }

  render(){
    const {tabFlag} = this.state
    return (
      <div>
        <ul className="tab" onClick={this.tabChangeHandle}>
          <li key="tab1">tab1</li>
          <li key="tab2">tab2</li>
        </ul>
        {
          tabFlag == 1 &&
          <div>
            <div className="content">
            content1.1
            </div>
            <div className="footer-button">
              <button>取消</button>
              <button onClick={this.props.nextHandle}>下一步1.1</button>
            </div>
          </div>
        }
        {
          tabFlag == 2 &&
          <div>
            <div className="content">
            content1.2
            </div>
            <div className="footer-button">
              <button>取消</button>
              <button onClick={this.props.nextHandle}>下一步1.2</button>
              <button onClick={this.props.nextHandle}>跳过</button>
            </div>
          </div>
        }
      </div>
    )
  }
}