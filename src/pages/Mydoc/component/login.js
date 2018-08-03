import React,{Component} from 'react';
import '../style/login.less'

class Login extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="login-warp">
                <div className="login-form">
                    <input className="phone-input" type="text" placeholder="输入手机号" />
                    <input className="code-input" type="text" placeholder="输入验证码" />
                    <div className="login-btn">登录</div>
                </div>
            </div>
        )
    }
}
export default Login;