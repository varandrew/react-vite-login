import { useState, useEffect, useRef } from 'react'
import { useTitle } from 'react-use'
import Input from 'components/Input'
import Button from 'components/Button'
import { userLogin, tfaAuth } from 'services/api/login'

import pcBanner from 'assets/images/pc_banner.png'
import mobileBanner2x from 'assets/images/iPhone_banner@2x.png'
import mobileBanner3x from 'assets/images/iPhone_banner@3x.png'
import pcEmail from 'assets/images/pc_email.png'
import iphoneEmail2x from 'assets/images/iphone_emall@2x.png'
import iphoneEmail3x from 'assets/images/iphone_emall@3x.png'
import pcPassword from 'assets/images/pc_password.png'
import iphonePassword2x from 'assets/images/iphone_password@3x.png'
import iphonePassword3x from 'assets/images/iphone_password@3x.png'
import iphoneAvatar from 'assets/images/iphone_tx.png'
import pcAvatar from 'assets/images/pc_tx.png'

import './index.module.scss'

const Login = () => {
  useTitle('登录')

  const [token, setToken] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [tfa, setTfa] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [tfaValid, setTfaValid] = useState(false)
  const [usernameValid, setUsernameValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)

  const submitLoginForm = async () => {
    if (!usernameValid || !passwordValid) return
    try {
      const {
        status,
        message: msg,
        data
      } = await userLogin({ username, password })
      if (status === 0) {
        setToken(data?.token)
        window.localStorage.setItem('token', data?.token)
        setErrMsg('')
      } else {
        // TODO:Reset test token
        // setToken('test')
        // window.localStorage.setItem('token', 'test')
        setErrMsg('密码错误或邮箱与对应的密码不相符')
        setTimeout(() => setErrMsg(''), 2000)
      }
    } catch (err) {
      console.log('🚀 ~ file: index.tsx ~ line 39 ~ submitLoginForm ~ err', err)
    }
  }

  const submitTFAForm = async () => {
    if (!tfaValid) return

    try {
      const { status, message: msg, data } = await tfaAuth({ tfa })

      if (status === 0) {
        window.location.assign('https://www.lizhi.io')
      } else {
        setErrMsg('两步认证验证码错误')
        setTimeout(() => setErrMsg(''), 2000)
      }
    } catch (err) {
      console.log('🚀 ~ file: index.tsx ~ line 72 ~ submitTFAForm ~ err', err)
    }
  }

  const usernameHandler = (valid: boolean, value: string) => {
    setUsernameValid(valid)
    setUsername(value)
  }

  const passwordHandler = (valid: boolean, value: string) => {
    setPasswordValid(valid)
    setPassword(value)
  }

  const tfaHandler = (valid: boolean, value: string) => {
    setTfaValid(valid)
    setTfa(value)
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start bg-[#F7F7FF] antialiased md:flex-row md:items-center md:justify-center">
      {/* pc banner */}
      <img
        className="hidden h-[640px] w-[560px] md:flex"
        src={pcBanner}
        alt="banner"
      />

      {/* mobile tittle */}
      <p className="mt-[25px] text-[18px] font-[500] tracking-normal text-[#333] md:hidden">
        登录
      </p>

      {/* login form */}
      {!token && (
        <div className="relative mt-[63px] flex h-[400px] w-[345px] flex-col items-center justify-start rounded-[16px] px-[20px] pt-[30px] pb-[18px] shadow-form md:mt-[80px] md:h-[480px] md:w-[400px] md:px-[40px] md:pt-[40px]">
          <p className="h-[33px] w-full text-left text-[24px] font-[500] tracking-normal text-[#333] md:h-[40px] md:text-[28px]">
            DIGITALYCHEE
          </p>

          <Input
            className="mt-[24px] md:mt-[28px]"
            value={username}
            rule={{
              valid: /^[a-zA-z\d]{4,16}$/,
              help: '邮箱格式错误，请重新输入'
            }}
            prefix={
              <img
                className="h-[20px] w-[20px]"
                src={pcEmail}
                srcSet={`${iphoneEmail2x} 2x, ${iphoneEmail3x} 3x`}
              />
            }
            type="text"
            placeholder="请输入邮箱"
            maxLength={16}
            onChange={usernameHandler}
          />
          <Input
            className="mt-[14px] md:mt-[20px]"
            value={password}
            rule={{
              valid: /^[a-zA-z\d.,/#!$%^&*;:{}=\-_`~()]{8,32}$/,
              help: '密码格式错误，请重新输入'
            }}
            prefix={
              <img
                className="h-[20px] w-[20px]"
                src={pcPassword}
                srcSet={`${iphonePassword2x} 2x, ${iphonePassword3x} 3x`}
              />
            }
            type="password"
            maxLength={32}
            placeholder="请输入密码"
            onChange={passwordHandler}
          />
          <Button
            className="mt-[28px] md:mt-[20px]"
            disabled={!usernameValid || !passwordValid}
            onClick={submitLoginForm}
          >
            下一步
          </Button>

          {errMsg && (
            <div className="absolute bottom-[88px] left-1/2 -translate-x-1/2 md:bottom-[168px]">
              <div className="flex h-[32px] w-[228px] items-center justify-center bg-[#FC6161] text-[13px] font-[400] tracking-normal text-white shadow-toast md:hidden">
                {errMsg}
              </div>
              <p className="hidden w-[228px] text-[14px] font-[400] tracking-normal text-[#FC6161] md:flex">
                {errMsg}
              </p>
            </div>
          )}

          <div className="absolute bottom-[54px] box-border h-[1px] w-full bg-[#D0D3D6] bg-clip-content px-[40px] md:bottom-[68px]"></div>

          <p className="absolute bottom-[24px] cursor-pointer text-[14px] font-[400] tracking-normal text-[#3371FF] md:bottom-[36px]">
            其他方式登录
          </p>
        </div>
      )}

      {/* tfa form */}
      {token && (
        <div className="relative mt-[63px] flex h-[430px] w-[345px] flex-col items-center justify-start rounded-[16px] px-[20px] pt-[30px] pb-[18px] shadow-form md:mt-[80px] md:h-[480px] md:w-[400px] md:px-[40px] md:pt-[40px]">
          <p className="h-[33px] w-full text-left text-[24px] font-[500] tracking-normal text-[#333] md:h-[40px] md:text-[28px]">
            DIGITALYCHEE
          </p>

          <img
            className="mt-[40px] h-[84px] w-[84px] md:mt-[32px] md:h-[72px] md:w-[72px]"
            src={pcAvatar}
            srcSet={`${iphoneAvatar} 2x, ${iphoneAvatar} 3x`}
          />
          <Input
            className="mt-[24px] md:mt-[28px]"
            value={tfa}
            rule={{
              valid: /^[\d]{6}$/,
              help: '两步认证验证码格式错误，请重新输入'
            }}
            prefix={
              <img
                className="h-[20px] w-[20px]"
                src={pcPassword}
                srcSet={`${iphonePassword2x} 2x, ${iphonePassword3x} 3x`}
              />
            }
            type="password"
            placeholder="请输入你的两步认证验证码"
            maxLength={6}
            onChange={tfaHandler}
          />
          <Button
            className="mt-[28px] md:mt-[20px]"
            disabled={!tfaValid}
            onClick={submitTFAForm}
          >
            确定
          </Button>

          {errMsg && (
            <div className="absolute bottom-[64px] left-1/2 -translate-x-1/2 md:bottom-[144px]">
              <div className="flex h-[32px] w-[228px] items-center justify-center bg-[#FC6161] text-[13px] font-[400] tracking-normal text-white shadow-toast md:hidden">
                {errMsg}
              </div>
              <div className="hidden w-[228px] text-center text-[14px] font-[400] tracking-normal text-[#FC6161] md:inline-block">
                {errMsg}
              </div>
            </div>
          )}

          <div className="absolute bottom-[54px] box-border h-[1px] w-full bg-[#D0D3D6] bg-clip-content px-[40px] md:bottom-[68px] md:hidden"></div>

          <p className="absolute bottom-[24px] cursor-pointer text-[14px] font-[400] tracking-normal text-[#3371FF] md:bottom-[36px] md:hidden">
            其他方式登录
          </p>
        </div>
      )}

      {/* mobile banner */}
      <img
        className="fixed left-0 bottom-0 w-full md:hidden"
        src={mobileBanner2x}
        srcSet={`${mobileBanner2x} 2x, ${mobileBanner3x} 3x`}
        alt="banner"
      />
    </div>
  )
}

export default Login
