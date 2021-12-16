<h1>RotatingCube</h1>

<div class="container">
  <div class="rotatingCube_Cube">
    <div class="rotatingCube_FaceOne" />
    <div class="rotatingCube_FaceTwo" />
    <div class="rotatingCube_FaceThree" />
    <div class="rotatingCube_FaceFour" />
    <div class="rotatingCube_FaceFive" />
    <div class="rotatingCube_FaceSix" />
  </div>
</div>

<style>
  .container {
    background: black;
    display: flex;
    padding: 3rem;
  }
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .rotatingCube_Cube {
    --cube-width: 70px;
    position: relative;
    width: var(--cube-width);
    height: var(--cube-width);
    -webkit-animation: rotatingCube_spin 20s linear infinite;
    animation: rotatingCube_spin 20s linear infinite;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  @keyframes rotatingCube_spin {
    0% {
      -webkit-transform: rotateY(0) rotateX(0);
      transform: rotateY(0) rotateX(0);
    }
    100% {
      -webkit-transform: rotateY(-1turn) rotateX(1turn);
      transform: rotateY(-1turn) rotateX(1turn);
    }
  }

  .rotatingCube_Cube div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--primary);
    /* border-radius: 1rem;
    margin: 0.5rem; */
    width: var(--cube-width);
    height: var(--cube-width);
    -webkit-box-shadow: 0 0 1px var(--primary);
    box-shadow: 0 0 1px var(--primary);
  }
  .rotatingCube_FaceOne {
    -webkit-transform: rotateX(90deg) translateZ(calc(var(--cube-width) / 2));
    transform: rotateX(90deg) translateZ(calc(var(--cube-width) / 2));
  }
  .rotatingCube_FaceTwo {
    -webkit-transform: translateZ(calc(var(--cube-width) / 2));
    transform: translateZ(calc(var(--cube-width) / 2));
  }
  .rotatingCube_FaceThree {
    -webkit-transform: rotateY(90deg) translateZ(calc(var(--cube-width) / 2));
    transform: rotateY(90deg) translateZ(calc(var(--cube-width) / 2));
  }
  .rotatingCube_FaceFour {
    -webkit-transform: rotateY(180deg) translateZ(calc(var(--cube-width) / 2));
    transform: rotateY(180deg) translateZ(calc(var(--cube-width) / 2));
  }
  .rotatingCube_FaceFive {
    -webkit-transform: rotateY(-90deg) translateZ(calc(var(--cube-width) / 2));
    transform: rotateY(-90deg) translateZ(calc(var(--cube-width) / 2));
  }
  .rotatingCube_FaceSix {
    -webkit-transform: rotateX(-90deg) translateZ(calc(var(--cube-width) / 2));
    transform: rotateX(-90deg) translateZ(calc(var(--cube-width) / 2));
  }
</style>
