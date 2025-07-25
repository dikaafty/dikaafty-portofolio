import { cn } from "../lib/utils";

const CosmicButton = ({ 
  textContent = "View My Projects", href = "#projects", target = "", ref, dataAnimate, hiddenAnimate = false 
}) => {
  return (
    <div 
      className={cn(
        "pt-4 ",
        hiddenAnimate ? "hiddenSlideUpEl" : "opacity-0 animate-fade-in-delay-4"
      )}
      data-animate={dataAnimate} 
      ref={ref}
    >
      <a href={href} target={target} className="cosmic-button">
        {textContent}
        <div className="star-1">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: "geometricPrecision", 
              textRendering: "geometricPrecision", 
              imagRendering: "optimizeQuality", 
              fillRule: "evenodd", 
              clipRule: "evenodd"
            }}
            version="1.1"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                className="fil0"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-2">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: "geometricPrecision", 
              textRendering: "geometricPrecision", 
              imagRendering: "optimizeQuality", 
              fillRule: "evenodd", 
              clipRule: "evenodd"
            }}
            version="1.1"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                className="fil0"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-3">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: "geometricPrecision", 
              textRendering: "geometricPrecision", 
              imagRendering: "optimizeQuality", 
              fillRule: "evenodd", 
              clipRule: "evenodd"
            }}
            version="1.1"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                className="fil0"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-4">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: "geometricPrecision", 
              textRendering: "geometricPrecision", 
              imagRendering: "optimizeQuality", 
              fillRule: "evenodd", 
              clipRule: "evenodd"
            }}
            version="1.1"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                className="fil0"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-5">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: "geometricPrecision", 
              textRendering: "geometricPrecision", 
              imagRendering: "optimizeQuality", 
              fillRule: "evenodd", 
              clipRule: "evenodd"
            }}
            version="1.1"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                className="fil0"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-6">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: "geometricPrecision", 
              textRendering: "geometricPrecision", 
              imagRendering: "optimizeQuality", 
              fillRule: "evenodd", 
              clipRule: "evenodd"
            }}
            version="1.1"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                className="fil0"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  )
}

export default CosmicButton;