import * as React from 'react'
import { SVGProps } from 'react'

const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="minus_svg__icon"
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M832 1024H192C85.952 1024 0 937.984 0 832V192A192 192 0 0 1 192 0h640a192 192 0 0 1 192 192v640c0 105.984-85.952 192-192 192zm64-832a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v640c0 35.392 28.608 64 64 64h640c35.392 0 64-28.608 64-64V192zM704 576H320a64 64 0 1 1 0-128h384a64 64 0 1 1 0 128z" />
  </svg>
)

export default SvgMinus
