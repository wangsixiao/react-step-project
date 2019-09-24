import React,{Component} from 'react'
import { tsImportEqualsDeclaration } from '@babel/types';

export interface IProps {
  navStep: {
    [index: string]: boolean,
  },
  type: {
    [index: string]: string
  },
}
export default class NavBar extends Component<IProps, {}> {
  constructor(props:any){
    super(props);
    this.state={}
  }

  render(){
    const {
      navStep: {
        step1, step2, step3, step4
      },
      type
    } = this.props;
    let navBar = [
      {
        navName: '第一步',
        isShow: step1,
        type: type.step1
      },
      {
        navName: '第二步',
        isShow: step2,
        type: type.step2
      },
      {
        navName: '第三步',
        isShow: step3,
        type: type.step3
      },
      {
        navName: '第四步',
        isShow: step4,
        type: type.step4
      }
    ]
    return (
      <ul>
        {
          navBar.map(item => {
            return (
              item.isShow &&
              <li 
                className={item.type}
                key={item.navName}
              >{item.navName}</li>
            )
          })
        }
      </ul>
    )
  }
}