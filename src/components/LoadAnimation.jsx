import { React, useEffect, useState } from "react";
import { useRive } from "rive-react";

const LoadAnimation = () => {
  let [isLoading, setIsLoading] = useState(true);

  const { rive, RiveComponent } = useRive({
    src: "load.riv",
    autoplay: true,
    animations: "Loading",
  });

  useEffect(() => {
    // Set a timer to load another animation after 5 seconds
    const timer = setTimeout(() => {
      // Load and play the new animation
      rive.load({
        src: "load.riv",
        autoplay: true,
        animations: "Loaded",
      });

      const timer = setTimeout(() => {
        setIsLoading(false);

        document.body.style.overflow = "unset";
      }, 1000);
    }, 1000);

    // Clean up the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, [rive]); // Include rive in the dependency array to ensure the effect runs when rive changes

  let loaderState = isLoading ? "load-animation" : "no-load-animation";

  return (
    <div className={loaderState}>
      <RiveComponent />
    </div>
  );
};

export default LoadAnimation;
