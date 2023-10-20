uniform float uTime;

varying vec3 vColor;

void main() {

  gl_FragColor = vec4(vColor.rg,1.,1. - smoothstep(0.,1.5,uTime));
}