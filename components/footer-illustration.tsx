export default function FooterIllustration() {
  return (
    <svg
      className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40"
      width="800"
      height="264"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="400"
        cy="400"
        r="400"
        fill="url(#footerglow_paint0_radial)"
        fillOpacity=".4"
      />
      <defs>
        <radialGradient
          id="footerglow_paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 0 400) scale(315.089)"
        >
          <stop stopColor="#3ABAB4" />
          <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
        </radialGradient>
      </defs>
    </svg>
  );
}
