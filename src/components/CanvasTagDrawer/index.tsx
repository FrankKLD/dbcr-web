import React, { useRef, useEffect } from "react";

const Canvas = (props: any) => {
  const { draw } = props;
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
      let frameCount = 0;
      let animationFrameId: number;

      const render = () => {
        frameCount++;
        draw(canvasCtxRef.current, frameCount);
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [draw]);

  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
