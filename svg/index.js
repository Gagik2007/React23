import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Arrow(props) {
  return (
    <Svg
      width="11px"
      height="20px"
      viewBox="0 0 11 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        transform="translate(-548 -3434) translate(100 3378) translate(442 54)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <Path opacity={0.87} d="M0 0L24 0 24 24 0 24z" />
        <Path
          d="M16.62 2.99a1.25 1.25 0 00-1.77 0L6.54 11.3a.996.996 0 000 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
          fill="#1D1D1D"
        />
      </G>
    </Svg>
  )
}

export default Arrow