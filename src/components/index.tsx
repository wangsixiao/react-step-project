import React,{Component} from 'react'
import NavBar from './navbar'
import StepOne from './stepone'
import StepTwo from './steptwo'
import StepThree from './stepthree'
import StepFour from './stepfour'

import './style.scss'

export interface Istate {
  navStep: {
    [index: string]: boolean,
  },
  formStep: {
    [index: string]: boolean,
  },
  type: {
    [index: string]: string
  },
  formStage: number
}

type keyFlag = 'step1' | 'step2' | 'step3' | 'step4'

export default class App extends Component<{}, Istate> {
  constructor(props:any){
    super(props);
    this.state={
      // 是否存在某流程
      navStep: {
        step1: false,
        step2: false,
        step3: false,
        step4: false,
      },
      type: {
        step1: 'active',
        step2: 'wait',
        step3: 'wait',
        step4: 'wait',
      },
      formStep: {
        step1: false,
        step2: false,
        step3: false,
        step4: false,
      },
      formStage: 1
    }
  }

  componentDidMount() {
    this.interface();
  }

  interface() {
    const {type} = this.state
    const step:{
      [index: string]: boolean,
    } =  {
      step1: false,
      step2: true,
      step3: true,
      step4: true,
    };
    // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type
    try {
      Object.keys(step).forEach(key => {
        // 找到下一个显示的流程，改变头部颜色
        if(step[key]){
          type[key] = 'active'
          throw new Error()
        }
      })
    } catch (e) {}
    this.setState({
      formStep: step,
      navStep: step,
      formStage: step.step1 ? 1 : 2 // formStage控制了第一步还是第二步
    })
  }

  // 下一步
  nextHandle = (name: string) => {
    const {formStep, type} = this.state;
    // 深拷贝formStep，免得修改了navStep的值
    let changeFormStep = Object.assign({}, formStep);
    changeFormStep[name] = false;
    type[name] = 'complete';
    // 跳出foreach循环
    try {
      Object.keys(changeFormStep).forEach(key => {
        // 找到下一个显示的流程，改变头部颜色
        if(changeFormStep[key]){
          type[key] = 'active'
          throw new Error()
        }
      })
    } catch (e) {}
    
    this.setState({
      formStep:changeFormStep,
      type,
      formStage: 2
    })
  }

  // 上一步
  preHandle = (name: string) => {
    const {formStep, type} = this.state;
    // 深拷贝formStep，免得修改了navStep的值
    let changeFormStep = Object.assign({}, formStep);
    changeFormStep[name] = true;
    type[name] = 'active';
    type['step2'] = 'wait';
    this.setState({
      formStep:changeFormStep,
      type,
      formStage: 1
    })
  }

  render(){
    const {
      navStep,
      type,
      formStep: {step1, step2, step3, step4},
      formStage
    } = this.state
    const self = this
    return (
      <div className="container">
        <NavBar
          navStep={navStep}
          type={type}
        />
        {
          // 需要考虑第一步和第二步缓存数据
          step1 || step2 ?
          <div>
            <div className={step1 && formStage === 1 ? '' : 'domHidden'}>
              <StepOne
                nextHandle={() => this.nextHandle('step1')} 
              />
            </div>
            <div className={step2 && formStage === 2 ? '' : 'domHidden'}>
              <StepTwo
                step1={step1}
                nextHandle={() => this.nextHandle('step2')} 
                preHandle={() => this.preHandle('step1')} 
              />
            </div>
          </div>
          :
          step3 ?
          <StepThree
            nextHandle={() => this.nextHandle('step3')} 
          /> :
          step4 && 
          <StepFour
            nextHandle={() => this.nextHandle('step4')} 
          />
        }
      </div>
    )
  }
}