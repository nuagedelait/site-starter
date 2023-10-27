export const breakpoints: { [key: string]: number } = {
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "2xl": 1536
}

export const mobileSliderConfig = {
    mode: 'snap',
    slides: { perView: 1.2, origin: 'center', spacing: 12 },
}
export const gallerySliderConfig = {
    mode: 'snap',
    slides: { perView: 1, origin: 'center', spacing: 0 },
}