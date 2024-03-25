import { useNProgress } from '@tanem/react-nprogress';
import { PropsWithChildren, useEffect, useState } from 'react';

function Container({
  animationDuration,
  children,
  isFinished,
}: PropsWithChildren<{
  animationDuration: number;
  isFinished: boolean;
}>) {
  return (
    <div
      style={{
        opacity: isFinished ? 0 : 1,
        pointerEvents: 'none',
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      {children}
    </div>
  );
}

function Bar({ animationDuration, progress }: { animationDuration: number; progress: number }) {
  return (
    <div
      style={{
        background: "#1172BA",
        height: 4,
        left: 0,
        marginLeft: `${(-1 + progress) * 100}%`,
        position: 'fixed',
        top: 0,
        transition: `margin-left ${animationDuration}ms linear`,
        width: '100%',
        zIndex: 5000,
      }}
    >
      <div
        style={{
          boxShadow: '0 0 10px #1172BA, 0 0 5px #1172BA',
          display: 'block',
          height: '100%',
          opacity: 1,
          position: 'absolute',
          right: 0,
          transform: 'rotate(3deg) translate(0px, -4px)',
          width: 100,
        }}
      />
    </div>
  );
}

function Progress({ isAnimating }: { isAnimating: boolean }) {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
      {/*
        This example doesn't use a spinner component so the UI stays
        tidy. You're free to render whatever is appropriate for your
        use-case.
        */}
    </Container>
  );
}

export function BRProgress() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => setLoading(false);
  }, []);
  return <Progress isAnimating={loading} />;
}
