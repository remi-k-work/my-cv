export default function animationInterval(ms: number, signal: AbortSignal, callback: (time: number) => void) {
  const start = document?.timeline?.currentTime || performance.now();

  function frame(time: number) {
    if (signal.aborted) {
      return;
    }

    callback(time);
    scheduleFrame(time);
  }

  function scheduleFrame(time: number) {
    const elapsed = time - Number(start);
    const roundedElapsed = Math.round(elapsed / ms) * ms;
    const targetNext = Number(start) + roundedElapsed + ms;
    const delay = targetNext - performance.now();
    setTimeout(() => requestAnimationFrame(frame), delay);
  }

  scheduleFrame(Number(start));
}
