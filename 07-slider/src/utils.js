import { useEffect } from "react";

export const useSliderIndex = (index, setIndex, people) => {
    return useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    };
    if (index > lastIndex) {
      setIndex(0);
    }
}, [index, people])}


export const useAutoSlider = (index, setIndex) => {
    return useEffect(() => {
        const slider = setInterval(() => setIndex(index + 1), 4000);
        return () => clearInterval(slider);
    }, [index]);
};

