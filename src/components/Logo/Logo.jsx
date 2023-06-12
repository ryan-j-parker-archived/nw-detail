import './Logo.css';
import React from 'react';

export default function Logo() {
  return (
    <div className="logo-box">
      <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 288">
        <title id="Northwest Detailing">Northwest Detailing</title>
        <g id="Northwest">
          <text className="cls-1" transform="translate(24.03418 96.93221)">
            <tspan className="cls-6" x="0" y="0">
              NO
            </tspan>
            <tspan className="cls-4" x="110.35254" y="0">
              R
            </tspan>
            <tspan x="165.37695" y="0">
              THWE
            </tspan>
            <tspan className="cls-5" x="416.32422" y="0">
              S
            </tspan>
            <tspan className="cls-7" x="458.50488" y="0">
              T{' '}
            </tspan>
          </text>
        </g>
        <g id="Detailing">
          <text className="cls-2" transform="translate(7.42285 165.73202)">
            <tspan x="0" y="0">
              D
            </tspan>
            <tspan className="cls-3" x="85.68896" y="0">
              e
            </tspan>
            <tspan x="147.83936" y="0">
              ta
            </tspan>
            <tspan className="cls-7" x="266.52686" y="0">
              i
            </tspan>
            <tspan x="309.31641" y="0">
              l
            </tspan>
            <tspan className="cls-7" x="353.20508" y="0">
              in
            </tspan>
            <tspan x="475.96484" y="0">
              g
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  );
}
