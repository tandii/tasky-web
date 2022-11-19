import * as React from "react"

export function Logo() {
  return (
    <svg
      width={260}
      height={169}
      viewBox="0 0 260 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill="url(#pattern0)" d="M0 0H260V169H0z" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_36_212" transform="scale(.00333 .00513)" />
        </pattern>
        <image
          id="image0_36_212"
          width={300}
          height={195}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}