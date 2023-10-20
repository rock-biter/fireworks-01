uniform float uProgress;
uniform float uSize;
uniform float uTime;
uniform float uStartTime;
attribute vec3 color;

varying vec3 vColor;

void main() {

  vColor.rgb = color.rgb;
  float elapsedTime = mix(0.,uTime - uStartTime,step(0.01,uStartTime));
  vec3 progressPos = position * uProgress + 0.5 * vec3(0,-9.8,0) * elapsedTime * elapsedTime;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(progressPos,1.);

  gl_PointSize = 1. * uSize;
}