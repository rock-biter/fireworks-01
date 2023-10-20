uniform float uTime;
uniform float uStartTime;

varying vec3 vColor;

void main() {

  float elapsedTime = mix(0.,uTime - uStartTime,step(0.01,uStartTime));

  gl_FragColor = vec4(vColor.rg,1.,1. - smoothstep(0.,1.5,elapsedTime));
}