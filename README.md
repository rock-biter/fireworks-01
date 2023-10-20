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

const firework = new Firework(300,3);

...

let clock = new THREE.Clock();

function tic() {

  let dt = clock.getDelta();

  firework.update(dt);
}

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
