# Three.js Fireworks

This repo contains an example of how to createa firework with a particles system and custom shaders.

It includes Firework class.

[Learn three.js on my You Tube channel](https://www.youtube.com/@gianlucalomarco)

## Installation

Install the dependencies

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Add a firework

```
let clock = new THREE.Clock();

let time = clock.getElapsedTime();

const firework = new Firework(300,3,time);

...

function tic() {

  time = clock.getElapsedTime();

  firework.material.uniforms.uTime.value = time;
}

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
